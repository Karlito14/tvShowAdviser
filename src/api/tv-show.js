import axios from "axios";
import { API_KEY, BASE_URL } from "../config";

export class TVShowAPI {
   static async fetchPopulars() {
      const response = await axios.get(`${BASE_URL}/tv/popular/?api_key=${API_KEY}`); 
      return response.data.results;
   }

   static async fetchRecommendations(tvShowId) {
      const response = await axios.get(`${BASE_URL}/tv/${tvShowId}/recommendations?api_key=${API_KEY}`); 
      return response.data.results;
   }

   static async fetchByTitle(title) {
      const response = await axios.get(`${BASE_URL}/search/tv?api_key=${API_KEY}&query=${title}`); 
      return response.data.results;
   }
}