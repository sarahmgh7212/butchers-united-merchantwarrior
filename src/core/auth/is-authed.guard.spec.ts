import { IsAuthedGuard } from './is-authed.guard';

describe('IsAuthedGuard', () => {
  it('should be defined', () => {
    expect(new IsAuthedGuard()).toBeDefined();
  });
});
