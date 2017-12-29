const axios = require('axios');

class Register {
    constructor () {
        this.axios = axios;
    }

    insertNewUser () {
        this.axios.post('')
            .then((response) => {

            })
            .catch((error) => console.log(error));
    }
}

module.exports = { Register };
