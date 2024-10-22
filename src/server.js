const startApolloServer = require('./app');  

async function runServer() {
  const app = await startApolloServer();

  const port = process.env.PORT || 4000;

  app.listen({ port }, () => {
    console.log(`🚀 Server ready at http://localhost:${port}${app.graphqlPath}`);
  });
}

runServer().catch(err => {
  console.error('Error starting server:', err);
});
