const swaggerAutogen = require("swagger-autogen"); //required"swagger-autogen";

const doc = {
  info: {
    title: "My API",
    description: "Description",
  },
  host: "localhost:3000",
};

const outputFile = "./swagger-output.json";
const routes = ["src/routers/index.ts", "src/routers/index.ts"];


swaggerAutogen()(outputFile, routes, doc);
