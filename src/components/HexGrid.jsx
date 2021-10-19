import Hex from "./Hex";

function HexGrid({ rows, cols }) {
  const hexes = [];
  const width = (cols / 2) * 30;
  const height = 17.32 * rows + 8.66;
  for (let j = 1; j <= rows; j++) {
    for (let i = 1; i <= cols; i++) {
      hexes.push([i, j]);
    }
  }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
        {hexes.map((hex, index) => (
          <Hex key={index} hex={hex} />
        ))}
      </svg>
    </>
  );
}
export default HexGrid;
