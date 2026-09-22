import { api } from "../utils/axios";
import { useState } from "react";
import { BASE_URI, MIDDLE_URI } from "../Constanst";

export const getMovie = async (movieId) => {
    try {
        // console.log(movieId);
        const response = await api.get(
            // TODO :: improve api link
            `${BASE_URI}${MIDDLE_URI}admin/v/get/video/${movieId}`,
            {
                withCredentials: true,
            },
        );
        // console.log(response.data);
        return response.data;
    } catch (error) {
        console.log("some error occured during fetching movie details", error);
        throw error;
    }
};

// "6a20d01248734dd2d344463e"
