"use client";

import { useEffect, useState } from "react";

function MyForm() {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, []);

  return (
    <div>
      <h1>Data : {allData.length}</h1>
      {allData.map((singleData) => (
        <p key={singleData.id}>
          {singleData.name} - {singleData.phone}
        </p>
      ))}
    </div>
  );
}

export default MyForm;
