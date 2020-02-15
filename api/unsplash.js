import axios from "axios";

export default axios.create({
    baseURL:"https://api.unsplash.com",
    headers: {
        Authorization:
          'Client-ID f43fa91adc0489675a2b93c48997f61b8c91c2c78ffa3c470ebe535874978601'
      }
})