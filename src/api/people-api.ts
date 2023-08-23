import {axiosInstance} from "../util/axios-base";

export async function fetchCharacters() {
    const response = await axiosInstance.get(`/people/`, {})

    return response.data
}