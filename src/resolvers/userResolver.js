const db = require('../config/db');

const resolvers = {
    Query: {
      hello: () => {
        return 'Hello world!';
      },
      getUsers: async () => {
        try {
          const users = await db.any('SELECT * FROM "jungleGigs".users');
          console.log('Fetched users:', users);
          return users;
        } catch (err) {
          console.error('Failed to fetch users:', err);
          throw new Error('Failed to fetch users');
        }
      },
    },
  };
  
module.exports = resolvers;
