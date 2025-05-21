const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getCourts() {
    try {
        const response = await fetch(`${API_URL}/Courts/getCourts`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching sports:', error);
        throw error;
    }
}