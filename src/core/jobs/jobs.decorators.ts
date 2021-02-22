import { SetMetadata } from '@nestjs/common';
import { JOB_NAME } from './jobs.constants';

export const JobHandler = (jobName: string) => {
  return SetMetadata(JOB_NAME, jobName);
};
