import { useEffect, useState } from "react";

export function Since() {
  const [data, setData] = useState<any>();

  const url = "http://history.muffinlabs.com/date";

  useEffect(() => {
    async function doFetchOnMount() {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    }
    doFetchOnMount();
  }, []);
  return <h1>Since</h1>;
}
