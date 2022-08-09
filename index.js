const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const indexRouter = require('./routes');
const userRouter = require('./routes/users');
const stockRouter = require('./routes/stocks');
const express = require('express');
const app = express();
const es6Renderer = require('express-es6-template-engine');

app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');

app.use(express.static('public'));
app.use(express.json());
app.use(indexRouter);
app.use(userRouter);
app.use(stockRouter);

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
