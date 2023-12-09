import {ApiService} from "./api";
import {UserDto} from "../dtos/user.dto";
import {UserModel} from "../models/user.model";

export default class AuthService {
    async login(data: UserDto): Promise<UserModel> {
        try {
            const endpoint = "/auth/signin";
            const response = await ApiService.post(endpoint, data);
            return {
                accessToken: response.access_token,
                refreshToken: response.refresh_token,

            };
        } catch (error) {
            throw error;
        }
    }
}