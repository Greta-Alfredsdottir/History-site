import { useEffect, useState } from "react";
import type { HistoryData } from "../types/historytypes";
import { Sign } from "../komponenter/sign/sign";

export function ByDate() {
  const [data, setData] = useState<HistoryData>();
  const [input, setInput] = useState<string>();
  const handleSearch = (q: string) => {
    setInput(q);
  };

  const url = "https://history.muffinlabs.com/date/" + input;

  useEffect(() => {
    async function doFetchOnMount() {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
      console.log(data);
    }
    doFetchOnMount();
  }, [input]);

  return (
    <>
      <Sign
        title="On"
        description="What happened on this day - Here you can enter a specific date to only get events that happened on this date"
        showSearch={true}
        onSearch={(query) => handleSearch(query)}
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
