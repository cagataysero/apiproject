import React, { useEffect, useState } from "react";

const Featured = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://imdb-api.com/en/API/Top250Movies/k_14e9e57g")
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((error) => console.error(error));
    };
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex mt-10">
      <img
        src="https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_UX128_CR0,12,128,176_AL_.jpg"
        alt="img"
      />
      <h3>Movie name</h3>
      <p>Watchlist</p>
    </div>
  );
};

export default Featured;
