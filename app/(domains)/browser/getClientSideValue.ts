export function getClientSideValue<T>(getter: () => T, defaultValue: T) {
  if (typeof window === "undefined") {
    return defaultValue;
  }

  return getter();
}
