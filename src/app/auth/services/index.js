export const signInService = async (proxy,email,password) => {
    const result = await proxy.$axios.post('/api/v1/auth/signin',{
        email,
        password,
    });
    if(result.status === 200){

        const {token, type} = result.data.auth;
        localStorage.setItem('token',`${type} ${token}`);
        return true;
    }

    return false;

}

export const tokenIsValid = async() => {
    const token = localStorage.getItem('token');
    return !!token;
}