export async function AdminAuthLoader() {
    try {   
        const res = await fetch('http://localhost:3000/api/v1/user/getuser', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include'
        });

        if (res.ok) {
            const data = await res.json();
            return data.user;
        } else { 
            const response = await fetch('http://localhost:3000/api/v1/user/refresh-token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include'
            });

            if (response.ok) {
               return AdminAuthLoader(); 
            } else {
                console.error('Failed to refresh token');
                return null;
            }
        }
    } catch (err) {
        console.error('An error occurred:', err);
        return null;
    }
}
