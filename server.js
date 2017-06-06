import express from 'express';
import fs from 'fs';


import config from './config';
import apiRouter from './api';


const server = express();

// middle ware for static file
server.use(express.static('public'));

// Use router as middle ware
server.use('/api', apiRouter);

server.get('/', (req, res) => {
    res.send('Hello Express');
})

server.listen(config.port, config.host, () => {
  console.info('Express listening on port', config.port);
});
