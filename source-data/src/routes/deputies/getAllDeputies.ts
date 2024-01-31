import axios from "axios"
import { GET_ALL_DEPUTIES_URL } from "./constants.js"

export const getAllDeputies = () => {
    axios.get(GET_ALL_DEPUTIES_URL).then((response) => console.log({response}));
}