import axios from "axios";
const BASE_URL = 'https://api.github.com/users/';
const BASE_SEARCH_URL  ='https://api.github.com/search/users?q=';

export const getUsers = async(username)=>{
    try {
        const response = await axios.get(`${BASE_URL}${username}`);
        return response.data
    } catch (error) {
        console.error("Error to fetch data: ",error);
        throw error;
    }
};
export const getUserRepos = async(username)=>{
    try {
        const response = await axios.get(`${BASE_URL}${username}/repos`);
        return response.data
    } catch (error) {
        console.error("Error to fetch data: ",error);
        throw error;
    }
}
export const getSearchUsers= async(text) =>{
    try {
        const response = await axios.get(`${BASE_SEARCH_URL}${text}`);
        return response.data.items;
    } catch (error) {
        console.error("Error to fetch data: ",error);
        throw error;
    }
}