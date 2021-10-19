import HexGrid from "./components/HexGrid";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <HexGrid rows={40} cols={40} />
    </div>
  );
}
