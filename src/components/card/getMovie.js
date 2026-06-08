import { api } from "../utils/axios";
import { useState } from "react";

export const getMovie = async (movieId) => {
  try {
    // console.log(movieId);
    const response = await api.get(
      `http://localhost:8000/techedu/v1/admin/v/get/video/${movieId}`,
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("some error occured during fetching movie details", error);
    throw error;
  }
};

// "6a20d01248734dd2d344463e"
