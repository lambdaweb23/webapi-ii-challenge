const express = require('express');
const postsRouter = require('./posts/postsRouter.js');

const server = express();
server.use(express.json());

server.use('/api/posts', postsRouter);

server.listen(6000, () => console.log('server listening on port 6000'));