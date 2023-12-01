import { Event } from './event';

describe('Event', () => {
  it('should create an instance', () => {
    expect(new Event('','','', '',-1,-1 , '')).toBeTruthy();
  });
});
