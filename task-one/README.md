# Task one

This task involves me to get some details from an external API and print them. And some othe miscellaneous tasks. Below, I've discussed about the endpoints. You can use that as a documentation.

### Installation

1. First, you are required to run Yarn or NPM inside this project which can be achieved by doing this

- **Yarn**
```bash
$ yarn
```

- ...or for folks using **NPM**
```bash
$ npm install
```

2. Now, you can simply start the application by running this command

```bash
$ node .
```

### Endpoints

Each endpoint serves different uses. In the `app.js` each `METHOD` is grouped together.

| Endpoint      | `METHOD` | Description                                                                                             |
|---------------|----------|---------------------------------------------------------------------------------------------------------|
| `/`           | `GET`    | Returns the index page of the site                                                                      |
| `/authors`    | `GET`    | Fetches list of authors and posts from an API and prints a list of authors and the count of their posts |
| `/setcookie`  | `GET`    | The server sets two cookies (name, age) which contains the name and age of the author (me :P )          |
| `/getcookies` | `GET`    | Responds with the content took from the cookie saved previously by `/setcookie` endpoint                |
| `/robots.txt` | `GET`    | Responds with a 403 status code and returns an rendered error page                                      |
| `/html`       | `GET`    | Responds with old age HTML page that works even in Windows NT 3.5                                       |
| `/input`      | `GET`    | Responds with a HTML form that sends user entered data to `POST /input`                                 |
| `/input`      | `POST`   | Displays the data sent from `GET /input` to the browser as response and in the `Console` also           |