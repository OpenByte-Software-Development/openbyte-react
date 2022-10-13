import axios from "axios";
const api = {
  async contact(body) {
    const response = await axios({
      method: "POST",
      url: "/contact",
      data: body,
    });

    return response;
  },
};

export default api;
