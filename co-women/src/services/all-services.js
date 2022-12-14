import axios from "axios";

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
}
