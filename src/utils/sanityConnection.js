import React, { useEffect, useState } from "react";

const SanityConnection = (type) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const GetData = async () => {
      const query = encodeURIComponent(`*[ _type == "${type}" ]`);
      const url = `https://${process.env.sanityId}.api.sanity.io/v1/data/query/production?query=${query}`;

      const result = await fetch(url).then((res) => res.json());
      setData(
        result.result.sort((a, b) => parseFloat(a.order) - parseFloat(b.order))
      );
    };
    if (type !== undefined) {
      GetData();
    }
  }, [type]);

  if (data) return data;
};

export default SanityConnection;
