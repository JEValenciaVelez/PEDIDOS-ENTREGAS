const app = require('./app');
const { conn } = require('./db');
const PORT = process.env.PORT || 3001;


// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  app.listen(PORT, '0.0.0.0', () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});