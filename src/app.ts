import { ApolloServer } from 'apollo-server';
import { schema } from './schema';
import { createContext } from './context';

const apollo = new ApolloServer({
  cors: { origin: ['https://studio.apollographql.com'], credentials: true },
  schema,
  context: createContext,
  introspection: true,
});

apollo.listen(4000).then(({url}) => {
  console.log(`🚀 GraphQL service ready at ${url}`);
});
