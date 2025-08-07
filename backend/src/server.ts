import Fastify from "fastify";
import { routes } from "./routes";
import cors from '@fastify/cors';

const app = Fastify({ logger: true });

// Tratando erro
app.setErrorHandler((error, request, reply) => {
  reply.code(400).send({ message: error.message });
});

const start = async () => {

  await app.register(cors, {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'DELETE'],
  });

  await app.register(routes);

  try {
    await app.listen({ port: 3333 });
  } catch (error) {
    process.exit(1);
  }
};

start();
