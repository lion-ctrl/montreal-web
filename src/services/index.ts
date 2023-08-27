/* eslint-disable no-param-reassign */
import axios from 'axios';

const HOST = process.env.NEXT_PUBLIC_HOST;
const PATH = process.env.NEXT_PUBLIC_API_PATH;

export const baseURL = `${HOST ?? ''}${PATH ?? ''}`;

const defaultOptions = {
  baseURL,
};

const http = axios.create(defaultOptions);

export default http;
