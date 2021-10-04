import { ControlErrorPipe } from '../shared/control-error.pipe';

describe('ControlErrorPipe', () => {
  it('create an instance', () => {
    const pipe = new ControlErrorPipe();
    expect(pipe).toBeTruthy();
  });
});
