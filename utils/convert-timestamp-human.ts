/** 
 * `convertTimestamp` function takes in a timestamp as a string, and creates a 
 * new `Date` object from it. It then extracts the month, day, and year from the 
 * `Date` object, and formats them as a string in the desired format. 
 *
 * Note: `padStart()` method is used to ensure that the, month and day have 
 * leading zeros when necessary.
 */
export function convertTimestamp(timestamp: string): string {
  const date = new Date(timestamp);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const year = date.getFullYear().toString();
  return `${month}/${day}/${year}`;
}

