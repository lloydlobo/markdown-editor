export function localStoreSaveItem(key: string, value: any) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function localStoreGetItem(key: string) {
  const val: string | null = localStorage.getItem(key);

  if (val !== null) {
    return JSON.parse(val);
  }
  return null;
}

export function localStoreRemoveItem(key: string) {
  localStorage.removeItem(key);
}

export function localStoreClear() {
  localStorage.clear;
}

