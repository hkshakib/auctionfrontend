import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const responseData = await response.json();
          setData(responseData);
        } else {
          console.log("Error fetching data");
        }
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    })();
  }, [url]);

  return { data };
};

export default useFetch;
