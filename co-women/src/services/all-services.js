import axios from "axios";
import decodeToken from "../utils/decode";

const USER_TOKEN = localStorage.getItem("token");

export class allServices {
  static async getAllAds() {
    let data = "";
    await axios
      .get(`https://cowomenbe.onrender.com/ads/?token=${USER_TOKEN}`)
      .then((response) => {
        data = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    return data;
  }

  static async getLoggedUserData() {
    const userId = decodeToken(USER_TOKEN).id;
    let data = "";
    await axios
      .get(
        `https://cowomenbe.onrender.com/users/${userId}/?token=${USER_TOKEN}`
      )
      .then((response) => {
        data = response.data.user;
        localStorage.setItem("name", data.name);
        localStorage.setItem("lastname", data.lastname);
        localStorage.setItem("cpfcnpj", data.cpfcnpj);
        localStorage.setItem("email", data.email);
      })
      .catch((error) => {
        console.log("Error getting user data")
        console.log(error);
      });
    return data;
  }

  static async getUserDataById(userId) {
    let data = "";
    await axios
      .get(
        `https://cowomenbe.onrender.com/users/${userId}/?token=${USER_TOKEN}`
      )
      .then((response) => {
        data = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    return data;
  }
}
