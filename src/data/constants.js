const productionDb = "https://odinbook-api-production-9b7b.up.railway.app";
const devDb = "http://localhost:3000";

const database = productionDb || devDb;
const demoUserId = "6481e85bff4d9ca798a5268a";

export { database, demoUserId };
