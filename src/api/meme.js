import axiosClient from "./axiosClient";
 const getMemes = async () => {
    const url = '/get_memes';
    const res = await axiosClient.get(url);
    
    return res;
}
export default getMemes;