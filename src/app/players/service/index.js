export const getAllPlayers = async(proxy) => {
    const token = localStorage.getItem("token");
    const result = await proxy.$axios.get('/api/v1/players',{
        headers: {
            Authorization: token,
        },
    });
    if(result.status === 200){
        return result.data.data;
    }

    return false;
}