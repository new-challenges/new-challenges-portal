import axios from "axios";
import { BASE_URL } from "../../utils/constant/link";
import { IUser } from "./user.model";

export async function getListUserService() {
    try {
        const response = await axios.get(`${BASE_URL}/api/v1/user`);
        console.log(response);
    } catch (error) {
        throw new Error;
    }
}

export async function createUserService(user: IUser) {
    try {
        const response = await axios.post(`${BASE_URL}/api/v1/user`, user);
        console.log(response);
    } catch (error) {
        throw new Error;
    }
}

export async function updateUserService(user: IUser) {
    try {
        const response = await axios.put(`${BASE_URL}/api/v1/user`, user);
        console.log(response);
    } catch (error) {
        throw new Error;
    }
}

export async function getUserDetailService(id: string) {
    try {
        const response = await axios.put(`${BASE_URL}/api/v1/user/paging`, id);
        console.log(response);
    } catch (error) {
        throw new Error;
    }
}

export async function updateStatusUserService(user: IUser) {
    try {
        const response = await axios.put(`${BASE_URL}/api/v1/user/update-status`, user);
        console.log(response);
    } catch (error) {
        throw new Error;
    }
}