export function getBackgroundColor(disabled: boolean, backgroundColorDisabled?: string): string {
  return disabled ? backgroundColorDisabled || "#ccc" : "#fff";
}
