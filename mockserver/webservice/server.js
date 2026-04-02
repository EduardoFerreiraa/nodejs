import { createServer } from 'node:http';

const hostname = 'localhsot';
const port = 3001;

const server = createServer((req, res) => {
  res.end('Aplicação Web servida pelo módulo HTTP nativo do node.js');
});

server.listen(port, hostname, () => {
  console.log(`Servidor em execução: http://${hostname}:${port}/`);
});