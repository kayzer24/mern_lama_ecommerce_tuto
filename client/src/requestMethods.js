import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNmFiOTgxNTY3MGIzYTBiZjBkOWM2OSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNDM5ODA2MiwiZXhwIjoxNjM0NjU3MjYyfQ.MCrZwBBE7yrtHD2DdQJe9JxLlejN9660btqFHFnLAGw"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const useRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`}
});
