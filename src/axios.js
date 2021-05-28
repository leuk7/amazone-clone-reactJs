import axios from "axios";

const instance = axios.create({
  baseURL: "https://e-clone-interview-default-rtdb.firebaseio.com/",
});

export default instance;
