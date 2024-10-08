import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */
  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Get companies (filtered by name if present). */
  static async getCompanies(name) {
    let res = await this.request(`companies`, { name });
    return res.companies
  }

    /** Get all jobs. */
    static async getAllJobs() {
      let res = await this.request(`jobs`);
      return res.jobs
    }

    /** Login user and return token */
    static async login(user) {
      let res = await this.request('auth/token', user, 'post');
      return res.token
    }

    /** register user and return token */
    static async signup(user) {
      let res = await this.request('auth/register', user, 'post');
      return res.token
    }

    /** get current user details */
    static async getUser(username) {
      let res = await this.request(`users/${username}`);
      return res.user
    }    

    /** update user profile */
    static async update(username, data) {
      let res = await this.request(`users/${username}`, data, 'patch');
      return res.user
    }

    /** apply for job */
    static async applyForJob(username, jobID) {
      await this.request(`users/${username}/jobs/${jobID}`, {}, 'post');
    }
}

// token ("joeshmoe" / "password")
JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvZXNobW9lIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTcyMTkzMjIxM30.6hCT5CzXhR-q6bLi0OIb8MQCR9rn1pUDMybmFX8q9u4";

export default JoblyApi;