import Hex from "./Hex";

function HexGrid({ rows, cols }) {
  const hexes = [];
  const width = (cols / 2) * 30;
  const height = 17.32 * rows + 8.66;
  for (var j = 1; j <= rows; j++) {
    for (var i = 1; i <= cols; i++) {
      hexes.push([i, j]);
    }
  }
  console.log(hexes);
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
        {hexes.map((hex, index) => (
          <Hex key={index} hex={hex} />
        ))}
        {/* <hex ng-repeat="hex in ::hexGrid.hexes" hexNum="hex"></hex> */}
      </svg>
      <Hex />
    </>
  );
}
export default HexGrid;
