import express from 'express';
import fs from 'fs';
import path from 'path';
import sassMiddleware from 'node-sass-middleware';

import config from './config';
import apiRouter from './api';


const server = express();

server.use(sassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public'),
}));

// template engine 
server.set('view engine', 'ejs');

server.get('/', (req, res) => {
    // res.send('Hello Express');
    res.render('index', {
        content: "Hello <em>EJS</em>"
    });
})

// Use router as middle ware
server.use('/api', apiRouter);

// middle ware for static file.  CAN NOT be use before routers
server.use(express.static('public'));

server.listen(config.port, config.host, () => {
    console.info('Express listening on port', config.port);
});