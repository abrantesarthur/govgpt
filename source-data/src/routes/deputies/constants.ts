import { DADOS_ABERTOS_BASE_URL } from "../constants.js";

/** The base path for retrieving "deputies" data */
export const DEPUTIES_BASE_PATH = "/deputados";

/** The URL for getting all deputies */
export const GET_ALL_DEPUTIES_URL = `${DADOS_ABERTOS_BASE_URL}${DEPUTIES_BASE_PATH}`