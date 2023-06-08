export default {
  development: {
    client: "pg",
    connection: {
      host: process.env.DB_HOST || "127.0.0.1",
      port: process.env.DB_PORT || 5432,
      database: process.env.DB_NAME || "csschecker",
      user: process.env.DB_USERNAME || "user",
      password: process.env.DB_PASSWORD || "user",
    },
    migrations: {
      extension: "ts",
      directory: "./migrations",
      tablename: "csseffect",
    },
    seed: {
      extension: "ts",
      directory: "./seeds",
      tablename: "csseffect",
    },
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      extension: "ts",
      directory: "./migrations",
      tablename: "cssEffect",
    },
    seed: {
      extension: "ts",
      directory: "./seeds",
      tablename: "cssEffect",
    },
  },
};
