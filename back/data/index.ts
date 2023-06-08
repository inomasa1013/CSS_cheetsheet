import knexConfig from "./knexfile";
const environment = process.env.DATABASE_URL ? "production" : "development";

export default knexConfig[environment]; //knex()
