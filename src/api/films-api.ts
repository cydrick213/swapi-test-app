import {axiosInstance} from "../util/axios-base";

export async function fetchMovies() {
    const response = await axiosInstance.get(`/films/`, {})

    return response.data
}