//"use server"

import { FieldValues } from "react-hook-form";


const loginUser = async (data: FieldValues) => {
    const res = await fetch(`http://localhost:5000/api/v1/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        //cache: 'no-store'
        credentials: "include"
    })
    const result = await res.json();
    return result;
};

export default loginUser;