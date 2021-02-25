import { BadRequestException, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import {
  BaseOneArgs,
  CreateArgs,
  DeleteArgs,
  DeleteManyArgs,
  FindFirstArgs,
  FindManyArgs,
  FindUniqueArgs,
  ModelService,
  UpdateArgs,
  UpdateManyArgs,
} from './types';

export interface FindFilterQuery {
  /**
   * Select specific fields to fetch from the Course
   **/
  select?: string;

  /**
   * Choose, which related nodes to fetch as well.
   **/
  include?: string;
  /**
   * Filter, which Courses to fetch.
   **/
  where?: string;
  /**
   * Determine the order of the Courses to fetch.
   **/
  orderBy?: string;
  /**
   * Sets the position for listing Courses.
   **/
  cursor?: string;
  /**
   * The number of Courses to fetch. If negative number, it will take Courses before the `cursor`.
   **/
  take?: string;
  /**
   * Skip the first `n` Courses.
   **/
  skip?: string;
  distinct?: string | string[];
}

export class ResourceController<
  M,
  CDTO,
  UDTO,
  CS extends ModelService, //<M, FM, FF, FO, C, U, UM, D, DM>,
  FM extends FindManyArgs = FindManyArgs,
  FF extends FindFirstArgs = FindFirstArgs,
  FO extends FindUniqueArgs = FindUniqueArgs,
  C extends CreateArgs = CreateArgs,
  U extends UpdateArgs = UpdateArgs,
  UM extends UpdateManyArgs = UpdateManyArgs,
  D extends DeleteArgs = DeleteArgs,
  DM extends DeleteManyArgs = DeleteManyArgs
> {
  protected _resourceService: CS;

  constructor(rs: CS) {
    this._resourceService = rs;
  }

  create(createDto: CDTO): Promise<M> {
    const args: CreateArgs = {
      data: createDto,
    };
    return this._resourceService.create(args as C);
  }

  async findMany(query: FindFilterQuery): Promise<M[]> {
    try {
      const filter: FindManyArgs = {
        select: query.select ? JSON.parse(query.select) : undefined,
        include: query.include ? JSON.parse(query.include) : undefined,
        where: query.where ? JSON.parse(query.where) : undefined,
        orderBy: query.orderBy ? JSON.parse(query.orderBy) : undefined,
        cursor: query.cursor ? JSON.parse(query.cursor) : undefined,
        take: query.take ? parseInt(query.take) : undefined,
        skip: query.skip ? parseInt(query.skip) : undefined,
        distinct:
          query.distinct && query.distinct.length ? query.distinct : undefined,
      };

      const ret = await this._resourceService.findMany(filter as FM);
      return ret;
    } catch (err) {
      if (
        err instanceof Prisma.PrismaClientValidationError ||
        err instanceof SyntaxError
      ) {
        throw new BadRequestException({
          statusCode: 400,
          messgae: 'Invalid filter object',
          error: 'Bad Request',
          details: err.message,
        });
      }

      throw err;
    }
  }

  async findUnique(id: string): Promise<M> {
    const args: BaseOneArgs = {
      where: {
        id,
      },
    };
    const resource = await this._resourceService.findUnique(args as FO);

    if (!resource) {
      throw new NotFoundException();
    }

    return resource;
  }

  async update(id: string, updateDto: UDTO): Promise<M> {
    const args: UpdateArgs = {
      where: {
        id,
      },
      data: updateDto,
    };

    try {
      const resource = await this._resourceService.update(args as U);

      return resource;
    } catch (err) {
      if (
        err.message === 'Not Found' ||
        err.meta?.details?.includes('update not found')
      ) {
        throw new NotFoundException();
      }

      throw err;
    }
  }

  async delete(id: string): Promise<M> {
    try {
      const resource = await this._resourceService.delete(({
        where: { id },
      } as DeleteArgs) as D);

      return resource;
    } catch (err) {
      if (
        err.message === 'Not Found' ||
        err.meta?.details?.includes('delete does not exist')
      ) {
        throw new NotFoundException();
      }

      throw err;
    }
  }
}
