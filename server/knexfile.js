// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgres://ersiklaszlo:laszlo123@localhost/mylife'
  },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }
};
