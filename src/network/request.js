import axios from "axios";
import Cookies from "js-cookie";

const request = async (httpConfig) => {
    const token = Cookies.get("token");

    try {
        const response = await axios({
            url: httpConfig.url,
            method: httpConfig.method,
            ...(httpConfig.data && { data: httpConfig.data }),
            ...(token && {
                headers: {
                    Authorization: `Bearer: ${token}`, // Corrected format
                },
            }),
            ...(httpConfig.params && { params: httpConfig.params }),
        })
        console.log(response)
        return { success: true, data: response.data };
    } catch (error) {
        console.log(error)
        return { success: false, data: error.response.data.message ? error.response.data.message : error.message ?? "Something went wrong!!!" };
    }
}

export default request