async function getData() {
  const res = process.env.TEST_SECRET;
  return res;
}

export default async function Home() {
  let clientData = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>{clientData}</div>
    </main>
  );
}
