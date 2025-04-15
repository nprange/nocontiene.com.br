'use client';

import useSWR from 'swr';

async function fetchAPI(key: string) {
  const response = await fetch(key);
  const responseBody = await response.json();

  return responseBody;
}

export default function Status() {
  return (
    <>
      <h1>Status</h1>
      <UpdatedAt />
      <DatabaseStatus />
    </>
  );
}

function UpdatedAt() {
  const { isLoading, data } = useSWR('/api/v1/status', fetchAPI, {
    refreshInterval: 2000,
  });

  let updatedAtText = 'Loading...';

  if (!isLoading && data) {
    const updatedAt = new Date(data.updated_at);
    updatedAtText = updatedAt.toLocaleString('pt-BR');
  }

  return <div>Last update: {updatedAtText}</div>;
}

function DatabaseStatus() {
  const { isLoading, data } = useSWR('/api/v1/status', fetchAPI, {
    refreshInterval: 2000,
  });

  let databaseStatusInformation: React.ReactNode = 'Loading...';

  if (!isLoading && data) {
    databaseStatusInformation = (
      <>
        <div>Version: {data.dependencies.database.version}</div>
        <div>
          Open connections: {data.dependencies.database.opened_connections}
        </div>
        <div>Max connections: {data.dependencies.database.max_connections}</div>
      </>
    );
  }

  return (
    <>
      <h2>Database</h2>
      <div>{databaseStatusInformation}</div>
    </>
  );
}
