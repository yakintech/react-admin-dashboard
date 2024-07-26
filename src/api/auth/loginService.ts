import axios from "axios"


export const LoginService = async (email: string, password: string) => {

    email = email.trim().toLocaleLowerCase()

    let response;

    await axios.post("http://localhost:8080/login", { email, password })
        .then(res => {

            response = res.data

        })

    return response

}