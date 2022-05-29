import "./styles.css";
import { Fallback } from "./Fallback";
import { useState, useEffect } from "react";
import { ComplexCard } from "./examples/ComplexCard";
import { ComplexList } from "./examples/ComplexList";
import { initialState, mockData } from "./examples/state";

export default function App() {
  const [data, setData] = useState(initialState);

  useEffect(() => {
    setTimeout(() => {
      setData(mockData);
    }, 3000);
  }, [data]);

  return (
    <>
      <h3 style={{ display: "flex", justifyContent: "center" }}>
        Two complex components pulled straight from MUI examples
      </h3>
      <Fallback isLoading={data.isLoading} fallbackOnStaticContent={false}>
        <div style={{ display: "flex", justifyContent: "center", gap: 20 }}>
          <ComplexCard data={data.card} />
          <ComplexList data={data.listItem} />
        </div>
      </Fallback>
    </>
  );
}
