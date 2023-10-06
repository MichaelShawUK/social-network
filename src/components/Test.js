function Test() {
  async function connectToDb() {
    console.log("connecting to db");
    const response = await fetch(
      "https://odinbook-api-production-9b7b.up.railway.app/test"
    );
    const data = await response.json();
    console.log(data);
  }

  connectToDb();

  return (
    <div>
      <p>TESTING</p>
    </div>
  );
}

export default Test;
