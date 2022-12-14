export async function jsonFetch<T>(
  url: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(url, options);

  if (!response.ok) {
    console.error(response);
    throw new Error(response.statusText);
  }

  const json = await response.json();
  return json as T;
}
