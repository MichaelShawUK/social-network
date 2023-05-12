const productionDb = "";
const devDb = "http://localhost:3000";

const database = productionDb || devDb;

export { database };
