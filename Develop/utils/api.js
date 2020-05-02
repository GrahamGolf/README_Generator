const axios = require("axios");

const api = { 
  getUser(username) {
    const token = process.env.GITHUB_TOKEN
    return axios({
      method: "get",
      url: `https://api.github.com/users/${username}`,
      headers: {
      authorization: `token ${token}`  
    }})
    .then(response => {
      return response
    })
  }
};

module.exports = api;

