import { useEffect, useState } from "react";

export function ByDate() {
  const [data, setData] = useState<any>();

  const url = "http://history.muffinlabs.com/date/2/14";

  useEffect(() => {
    async function doFetchOnMount() {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    }
    doFetchOnMount();
  }, []);
  return <h1>By Date</h1>;
}
