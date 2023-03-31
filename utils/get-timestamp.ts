/**
 * `getTimestamp` function creates a new Date object, which represents the
 * current date and time, and calls its toISOString() method to return a string
 * representation of the date and time in ISO 8601 format.
*/
export function getTimestamp(): string {
  return new Date().toISOString();
}
