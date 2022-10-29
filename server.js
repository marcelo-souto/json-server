import jsonServer from 'json-server';
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // <== Will be created later
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3200; // <== You can change the port

server.use(middlewares);
server.use(
  jsonServer.rewriter({
    '/:resource/list': '/:resource',
    '/:resource/get/:id': '/:resource/:id',
    '/:resource/create': '/:resource',
    '/:resource/update/:id': '/:resource/:id',
    '/:resource/delete/:id': '/:resource/:id',
  }),
);
server.use(router);

server.listen(port);
