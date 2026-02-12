import { useEffect, useState } from "react";
import type { HistoryData } from "../types/historytypes";

export function Since() {
  const [data, setData] = useState<HistoryData>();

  const url = "https://history.muffinlabs.com/date";

  useEffect(() => {
    async function doFetchOnMount() {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    }
    doFetchOnMount();
  }, []);
  return (
    <div>
      {data?.data?.Events.map((item) => (
        <div>
          <p>{item.year}</p>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}
