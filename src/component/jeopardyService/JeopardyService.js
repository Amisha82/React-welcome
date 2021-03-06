//import the axios HTTP client to communicate with the API
import axios from "axios";
class JeopardyService {
  constructor(url = "https://jservice.io/api/random", client = axios.create()) {
    this.url = url;
    this.client = client;
  }
  getQuestion() {
    return this.client.get(this.url);
  }
  get3Questions() {
    let url = this.url + "?count=3";
    return this.client.get(url);
  }
}
export default JeopardyService;
