const { RegisterForm } = require('./../../Request/RegisterForm');

const getLogin = (req, res) => {
    res.send('Hello from login /auth/login');
};

const getLogout = (req, res) => {
    res.send('Hello from logout /auth/logout');
};

const getRegister = (req, res) => {
    res.send('Hello rom register /auth/register');
};

const postLogin = (req, res) => {
    res.send({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    });
};

const postRegister = (req, res) => {
    let registerForm = new RegisterForm();
    registerForm.checkForm(req.body).then(response => {
        registerForm.registerUser().then(registerResponse => {
            
        }).catch(error => {

        });
    }).catch(error => res.status(401).send({
        "type": "error",
        error
    }));
};

module.exports = { getLogin, getLogout, getRegister, postLogin, postRegister };