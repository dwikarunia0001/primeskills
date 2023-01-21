import { baseApi } from "@/plugins/axios";

const api = '/Houses';

const list = () => baseApi.get(`${api}`);
// const list = () => baseApi.get('/Houses');

export { list };