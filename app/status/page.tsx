async function fetchStatus() {
  const response = await fetch(`${process.env.API_URL}/api/v1/status`);
  const responseBody = await response.json();
  return responseBody;
}

export default function Status() {
  return (
    <>
      <h1>Status</h1>
    </>
  );
}
