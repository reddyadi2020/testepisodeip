const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const WeatherAPI = require('./datasources/track-api');

async function startApolloServer(typeDefs, resolvers) {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
      return {
        weatherAPI: new WeatherAPI(),
      };
    },
    context: async ({ req }) => { 
  try{
  	console.log('IP:',req.ip);
  	console.log('IP1:',req.socket.remoteAddress);
  	console.log('x-forwarded:',req.headers['x-forwarded-for']);
  } catch (e) {
      // Error connecting to auth service
      return {};
    }
  	},
  });

  const { url, port } = await server.listen({port: process.env.PORT || 4000});
  console.log(`
      🚀  Server is running
      🔉  Listening on port ${port}
      📭  Query at ${url}
    `);
}

startApolloServer(typeDefs, resolvers);
