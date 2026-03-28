import axios from "axios";

export default class ContactService {

    async contact(request) {
        const response = await axios.post("https://www.form-to-email.com/api/s/PByYdfC9-Yu4", request);
        return response.data;
    }

}