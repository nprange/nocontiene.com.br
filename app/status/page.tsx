async function fetchStatus() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/v1/status`);
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
