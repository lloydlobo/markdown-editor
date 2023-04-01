/**
 * Saves an item with the given key and value to local storage.
 * @param key The key of the item to be saved.
 * @param value The value of the item to be saved.
 */
export function localStoreSaveItem(key: string, value: any): void {
  localStorage.setItem(key, JSON.stringify(value));
}

/**
 * Gets the item with the given key from local storage.
 * @param key The key of the item to retrieve.
 * @returns The value of the item with the given key, or null if it doesn't exist.
 */
export function localStoreGetItem(key: string): any {
  const val: string | null = localStorage.getItem(key);

  if (val !== null) {
    return JSON.parse(val);
  }
  return null;
}

/**
 * Removes the item with the given key from local storage.
 * @param key The key of the item to be removed.
 */
export function localStoreRemoveItem(key: string): void {
  localStorage.removeItem(key);
}

/**
 * Clears all items from local storage.
 */
export function localStoreClear(): void {
  localStorage.clear();
}
