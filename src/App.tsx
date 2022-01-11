import "./styles.css";
import { ComplexCard } from "./ComplexCard";
import { useState, useEffect } from "react";
import { Fallback } from "./Fallback";

export default function App() {
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 3000);
  }, [isLoading]);

  return (
    <Fallback isLoading={isLoading}>
      <ComplexCard isLoading={isLoading} />
    </Fallback>
  );
}
