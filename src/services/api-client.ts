import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "580642c1765b40bc95e2190b920086a6",
  },
});
