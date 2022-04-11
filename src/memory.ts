const KEY = 'packages';

export function saveTracked(packageIds: string[]) {
  const encoded = JSON.stringify(packageIds);
  localStorage.setItem(KEY, encoded);
}

export function loadTracked(): string[] {
  const encoded = localStorage.getItem(KEY) || '[]';
  return JSON.parse(encoded);
}