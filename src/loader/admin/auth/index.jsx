export async function AdminAuthLoader() {
    try{   
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
        }

        return null;
    }catch(err) {
        console.log(err)
        return null
    }
    
} 