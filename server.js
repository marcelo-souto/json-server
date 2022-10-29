import jsonServer from 'json-server'
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // <== Will be created later
const customrouters = jsonServer.customrouters('routes.json')
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3200; // <== You can change the port

server.use(customrouters)
server.use(middlewares);
server.use(router);

server.listen(port);
