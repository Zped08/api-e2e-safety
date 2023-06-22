//import { createServer } from "node:http";
const http = require('node:http');

import { createYoga } from "graphql-yoga";
import { schema } from "./schema";
//algo
const yoga = createYoga({ schema });

const server = http.createServer(yoga);

server.listen(4000, () => {
  console.log(`🚀 GraphQL Server ready at http://localhost:4000/graphql`);
});
