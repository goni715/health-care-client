"use server"

const loginUser = async (data: ILoginUser) => {
    const res = await fetch(`${process.env.BACKEND_API_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        cache: 'no-store'
    })
    const result = await res.json();
    return result;
};

export default loginUser;