import axios from "axios";
const url = process.env.NEXT_PUBLIC_CONTACT_URL;

const api = {
  async contact(body) {
    const response = await axios({
      method: "POST",
      url,
      data: body,
    });

    return response;
  },
};

export default api;
