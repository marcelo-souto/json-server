import jsonServer from 'json-server'
const server = jsonServer.create();
const routes = jsonServer.routes('routes.json')
const router = jsonServer.router('db.json'); // <== Will be created later
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3200; // <== You can change the port

server.use(routes)
server.use(middlewares);
server.use(router);

server.listen(port);