import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Scrubs from "./Scrubs";

function MermaidSelector() {
  const [selected, setSelected] = useState("None");
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get("document")) setSelected(searchParams.get("document"));
  }, [searchParams]);

  const handleChange = (e) => {
    setSelected(e.target.value);
    setSearchParams({ document: e.target.value });
  };

  return (
    <div>
      <select value={selected} onChange={(e) => handleChange(e)}>
        <option>Scrubs</option>
      </select>
      {selected === "Example" ? <Scrubs /> : ""}
    </div>
  );
}

export default MermaidSelector;
