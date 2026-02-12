import { useEffect, useState } from "react";
import type { HistoryData } from "../types/historytypes";

export function ByDate() {
  const [data, setData] = useState<HistoryData>();

  const url = "https://history.muffinlabs.com/date/2/14";

  useEffect(() => {
    async function doFetchOnMount() {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
      console.log(data);
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
