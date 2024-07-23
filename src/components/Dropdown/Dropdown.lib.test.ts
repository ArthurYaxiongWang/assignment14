import { getBackgroundColor } from './Dropdown.lib';

describe('getBackgroundColor', () => {
  it('returns default disabled color if no backgroundColorDisabled is provided', () => {
    expect(getBackgroundColor(true)).toBe('#ccc');
  });

  it('returns provided disabled background color', () => {
    expect(getBackgroundColor(true, '#ff0000')).toBe('#ff0000');
  });

  it('returns white color when not disabled', () => {
    expect(getBackgroundColor(false)).toBe('#fff');
  });
});
