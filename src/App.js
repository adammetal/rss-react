import { useState } from "react";
import News from "./News";
import NewsContainer from "./NewsContainer";

function App() {
  const [source, setSource] = useState("https://dev.to/feed/");
  const [saved, setSaved] = useState([]);

  const handleChange = (e) => {
    setSource(e.target.value);
  }

  const handleSave = (item) => {
    setSaved([...saved, item]);
  }

  return (
    <div>
      <input type="text" value={source} onChange={handleChange} />
      <NewsContainer url={source} onSave={handleSave} />
      <h1>Saved news</h1>
      <News news={saved} />
    </div>
  );
}

export default App;
