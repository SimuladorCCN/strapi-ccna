module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('PGHOST', 'containers-us-west-18.railway.app'),
      port: env.int('PGPORT', 7628),
      database: env('PGDATABASE', 'railway'),
      user: env('PGUSER', 'postgres'),
      password: env('PGPASSWORD', 'tJsY59UlQVUrsjCirdYy'),
      ssl: env.bool(true),
    },
  },
});
