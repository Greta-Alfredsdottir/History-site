import { useEffect, useState } from "react";
import type { Birth, HistoryData } from "../types/historytypes";
import { Sign } from "../komponenter/sign/sign";

export function Since() {
  const [data, setData] = useState<Array<Birth>>();
  const [input, setInput] = useState<string>();

  function checkYear(item: Birth) {
    return item.year >= input!;
  }
  const handleSearch = (q: string) => {
    setInput(q);
  };

  const url = "https://history.muffinlabs.com/date";

  useEffect(() => {
    async function doFetchOnMount() {
      const res = await fetch(url);
      const data = await res.json();
      const yearEvent = data.data.Events;
      const results = yearEvent.filter(checkYear);
      setData(results);
      console.log(results);
    }
    doFetchOnMount();
  }, [input]);
  return (
    <>
      <Sign
        title="Since"
        description="What happened on this day - Here you can enter a specific year to get all the events that happened on this day, since that year."
        showSearch={true}
        onSearch={(query) => handleSearch(query)}
      />
      <div>
        {data?.map((item) => (
          <div>
            <p>{item.year}</p>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </>
  );
}
