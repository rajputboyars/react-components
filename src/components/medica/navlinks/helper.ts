export const generateId = (label: string) => label.replace(/\s+/g, "-");

export const stringToBoolean = (value: string | number) => {
  return typeof value === 'string' ? value === 'true' : !!value;
}