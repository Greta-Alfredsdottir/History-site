import { useEffect, useState } from "react";
import type { HistoryData } from "../types/historytypes";
import { Sign } from "../komponenter/sign/sign";

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
    <>
      <Sign
        title="Since"
        description="What happened on this day - Here you can enter a specific year to get all the events that happened on this day, since that year."
        showSearch={true}
        onSearch={(query) => console.log(query)}
      />
      <div>
        {data?.data?.Events.map((item) => (
          <div>
            <p>{item.year}</p>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </>
  );
}
