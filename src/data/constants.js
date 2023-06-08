const productionDb = "https://odinbook-api-production-9b7b.up.railway.app";
const devDb = "http://localhost:3000";

const database = productionDb || devDb;

export { database };
