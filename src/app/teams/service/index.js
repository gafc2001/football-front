export const getAllTeams = async (proxy) => {
    const token = localStorage.getItem("token");
    const result = await proxy.$axios.get('/api/v1/teams',{
        headers: {
            Authorization: token,
        },
    });
    if(result.status === 200){
        return result.data.data;
    }

    return false;
}

export const getTeamById = async(proxy,teamId) => {
    const token = localStorage.getItem("token");
    const result = await proxy.$axios.get('/api/v1/teams/' + teamId,{
        headers: {
            Authorization: token,
        },
    });
    if(result.status === 200){
        return result.data.data;
    }

    return false;
}