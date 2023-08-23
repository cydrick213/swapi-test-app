import {axiosInstance} from "../util/axios-base";

export async function fetchPlanets() {
    const response = await axiosInstance.get(`/planets/`, {})

    return response.data
}