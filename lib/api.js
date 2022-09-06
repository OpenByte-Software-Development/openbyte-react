import axios from "axios";

export const api = {};
const url = process.env.NEXT_PUBLIC_CONTACT_URL;

api.contact = {
  async cta({ email, firstname }) {
    const data = {
      email,
      first_name: firstname,
    };

    const response = await axios({
      method: "POST",
      url,
      data,
      headers: {
        "content-type": "application/json",
      },
    });

    if (response.status !== 201) return false;

    return true;
  },
  async contactForm({
    conditionsAgree,
    companySize,
    budget,
    firstName,
    lastName,
    email,
    phoneNumber,
    country,
    linkedin,
    description,
  }) {
    const data = {
      email,
      first_name: firstName,
      last_name: lastName,
      message: description,
      phone: phoneNumber,
      // linked_in: linkedin,
      // country,
      // budget: budget,
      // company_size: companySize,
      // conditions_agree: true,
    };

    const response = axios({
      method: "POST",
      url,
      data,
      headers: {
        "content-type": "application/json",
      },
    });

    if (response.status !== 201) return false;

    return true;
  },
};
