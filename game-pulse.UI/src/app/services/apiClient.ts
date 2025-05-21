const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function apiClient<T>(
    endpoint: string,
    method: string = 'GET',
    body?: any
): Promise<T> {
    try {
        const response = await fetch(`${API_URL}/${endpoint}`, {
            method,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            ...(body ? { body: JSON.stringify(body) } : {}),
        });

        if (!response.ok) {
            throw new Error(`HTTP Error! Status:  ${response.status}`);
        }

        return await response.json() as T;
    } catch (error) {
        console.error('API call failed: ', error);
        throw error;
    }
}
