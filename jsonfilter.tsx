import { useMemo, useState } from "react";

function JSONFilter(props:any) {
    const {currencies}=props;
    const [search, setSearch] = useState("");
  const filteredCurrencies = useMemo(() => {
    return Object.values(currencies).filter((curr:any="") => {
      return curr.toLowerCase().includes(search.toLowerCase());
    });
  }, [search, currencies]);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      {filteredCurrencies.map((curr:any) => {
        return <p style={{ textAlign: "left" }}>{curr}</p>;
      })}
    </div>
  );
}
export default JSONFilter;