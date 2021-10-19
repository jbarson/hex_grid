function Hex() {
  return (
    <g ng-attr-transform="translate({{ ::hexGrid.translation(hex) }} )">
      <polygon
        points="10.0,0 5.0,-8.66 -5.0,-8.66 -10.0,0 -5.0,8.66 5.0,8.66"
        fill="transparent"
        stroke="gray"
        stroke-width="1"
      ></polygon>
      <text font-size="5" y="-3" text-anchor="middle" cursor="default">
        {/* {{ ::hexGrid.hexNumber(hex) }} */}
        0000
      </text>
    </g>
  );
}

export default Hex;
