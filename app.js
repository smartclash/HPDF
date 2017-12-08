const _ = require('lodash');
const hbs = require('hbs');
const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

let app = express();

app.set('view engine', 'hbs');

app.use((request, response, next) => {
    console.log('New connection from', request.ip, 'requesting', request.url,
        'via', request.method, 'method');
    if (request.url === '/robots.txt') return response.render('oops');

    next();
});
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (request, response) => {
    response.send('Hello World - Karan (xXAlphaManXx)');
});
app.get('/authors', (request, response) => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((users) => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((posts) => {
            var output = "<ul>";

            for (var i = 1; i <= _.size(users); i++) {
                var postsByUser = _.size(_.filter(posts.data, { userId: i }));
                output += '<li>' + users.data[i].name + ' has published '
                    + postsByUser + ' posts </li>';
            }

            output += "</ul>";

            response.send(output);
        });
    }).catch((error) => {
        response.status(500).render('error');
    });
});
app.get('/setcookie', (request, response) => {
    response.cookie('name', 'Karan Sanjeev Nair');
    response.cookie('age', 15);

    response.send('I\'ve set cookies. Now you can visit /getcookie');
});
app.get('/getcookie', (request, response) => response.render('cookie', {
    name: request.cookies['name'],
    age: request.cookies['age']
}));
app.get('/html', (request, response) => response.render('hello'));
app.get('/input', (request, response) => response.render('input'));

app.post('/input', (request, response) => {
    console.log('Parsed data from POST request', request.body.dummy);
    response.send('We got the data and printed it in the console too.'
        + ' But in case, this was what you sent [' + request.body.dummy + ']');
});

app.listen(8080, () => console.log('Listening for connections on port 8080'));
