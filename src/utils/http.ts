export async function request<T>(
  url: string,
): Promise<{ error?: string | null; response?: T }> {
  const response = await fetch(url);

  if (!response.ok) {
    return { error: response.body?.toString() };
  }

  // Assuming all response types are strictly json, otherwise check for content type
  const parsedResponse = await response.json();

  return { response: parsedResponse as T };
}
