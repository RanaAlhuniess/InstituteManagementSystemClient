import axios from "axios";
import { BASE_URL, token } from ".";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`,
  },
});

export const ApiService = {
    get: async (url: string, params?: object) => {
      try {
        const response = await axiosInstance.get(url, { ...params });
        return response.data;
      } catch (error) {
        throw error;
      }
    },
    post: async (url: string, data?: object) => {
      try {
        const response = await axiosInstance.post(url, data);
        return response.data;
      } catch (error) {
        throw error;
      }
    },
    put: async (url: string, data?: object) => {
      try {
        const response = await axiosInstance.put(url, data);
        return response.data;
      } catch (error) {
        throw error;
      }
    },
    patch: async (url: string, data?: object) => {
      try {
        const response = await axiosInstance.patch(url, data);
        return response.data;
      } catch (error) {
        throw error;
      }
    },
    delete: async (url: string) => {
      try {
        const response = await axiosInstance.delete(url);
        return response.data;
      } catch (error) {
        throw error;
      }
    },
  };
  