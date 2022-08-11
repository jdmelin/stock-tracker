const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const accountRouter = require('./routes/account');
const indexRouter = require('./routes');
const stockRouter = require('./routes/stocks');
const userRouter = require('./routes/users');
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const app = express();
const es6Renderer = require('express-es6-template-engine');
require('dotenv').config();

app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');

app.use(cookieParser());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
      maxAge: 2592000,
    },
  })
);
app.use(express.static('public'));
app.use(express.json());
app.use(accountRouter);
app.use(indexRouter);
app.use(stockRouter);
app.use(userRouter);

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
