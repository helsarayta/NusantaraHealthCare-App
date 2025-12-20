import axios from "axios";

let BASE_URL = "https://www.emsifa.com/api-wilayah-indonesia/api/";
let SUFFIX_JSON = ".json";

class Api {
    static getProvinsi = () => {
        return axios.get(BASE_URL+"provinces.json");
    }

    static getKabKota = (provinceId) => {
        return axios.get(BASE_URL+"regencies/"+provinceId+SUFFIX_JSON)
    }
}

export default Api;