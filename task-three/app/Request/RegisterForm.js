const axios = require('axios');
const validator = require('validator');

class RegisterForm {
    checkForm (data) {
        return new Promise((resolve, reject) => {
            let errors = [];
            let isPasswordConfirmTruthy = validator.equals(data.password, data.password_confirm);

            isPasswordConfirmTruthy ? '' : errors.push("The password didn't match")
            validator.isEmail(data.email) || errors.push("That was not an email address");
            validator.isAlphanumeric(data.username) || errors.push("The usename was not AlphaNumeric");
            (data.password.length > 6) ? true : errors.push("The password was less that 6 characters");
            (data.username.length > 6 && data.username.length < 21) ? '' : errors.push("The username should be between 6-20 characters");

            (errors.length > 0) ? resolve('Everything is okay') : reject(errors);
        });
    }

    registerUser (data) {
        return new Promise((resolve, reject) => {
            axios.post({
                
            }).then(res => {

            }).catch(error => {

            });
        });
    }
}

module.exports = { RegisterForm };
