import { useEffect, useState } from "react";
import type { HistoryData } from "../types/historytypes";
import { Sign } from "../komponenter/sign/sign";

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
    <>
      <Sign
        title="On"
        description="Find en historie"
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
