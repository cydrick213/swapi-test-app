import {axiosInstance} from "../util/axios-base";

export async function fetchStarShips() {
    const response = await axiosInstance.get(`/starships/`, {})

    return response.data
}