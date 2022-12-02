import axios from 'axios'

export const getDataAPI = async (url: string) => {
    const res = await axios.get(`http://localhost:5000/api/${url}`, {
        
    })
    return res;
}

export const postDataAPI = async (url: string, post: any) => {
    const res = await axios.post(`http://localhost:5000/api/${url}`, post, {
        
    })
    return res;
}

export const putDataAPI = async (url: string, post: any) => {
    const res = await axios.put(`http://localhost:5000/api/${url}`, post, {
        
    })
    return res;
}

export const patchDataAPI = async (url: string, post: any) => {
    const res = await axios.patch(`http://localhost:5000/api/${url}`, post, {
        
    })
    return res;
}

export const deleteDataAPI = async (url: string) => {
    const res = await axios.delete(`/http://localhost:5000api/${url}`, {
        
    })
    return res;
}