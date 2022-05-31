import axios from "axios";

const CREATE_FIELD_URL = "http://www.mocky.io/v2/566061f21200008e3aabd919";

const apiClient = {
  createField: async function(fieldObj) {
    try {
      const response = await axios.post(CREATE_FIELD_URL, fieldObj);
      return response;
    } catch (err) {
      console.log(err);
      return "";
    }
  }
}

export default apiClient;