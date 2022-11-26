import { useRef, useState, useMemo } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const inputValue = useRef("");

  const filteredItems = useMemo(
    () =>
      items.filter((item) => item.toLowerCase().includes(search.toLowerCase())),
    [items, search]
  );

  function onSubmit(e) {
    e.preventDefault();
    const val = inputValue.current.value;
    if (val === "") {
      return;
    }
    setItems((prev) => {
      return [...prev, val];
    });
    inputValue.current.value = "";
  }

  return (
    <div className="App">
      <label>Search :</label>
      <input
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        type="search"
      />
      <br />
      <br />

      <form onSubmit={onSubmit}>
        <input ref={inputValue} type="text" />
        <button type="submit">Add</button>
      </form>
      <h3>Items : </h3>
      {filteredItems.map((item) => (
        <div>{item}</div>
      ))}
    </div>
  );
}

export default App;
