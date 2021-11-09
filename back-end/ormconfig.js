module.exports = {
  type: "mysql",
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  entities: ["src/models/*.ts"],
  synchronize: false,
  migrations: ["src/database/migrations/*ts"],
  cli: {
    migrationsDir: "src/database/migrations",
    entitiesDir: "src/models",
  },
};
