function Hex({hex}) {
  // console.log(translation(hex),hexNumber(hex))
  const translation = (item) => {
    if(!item) return
    const string = `translate(${item[0] * 15 - 5}px, ${item[0] % 2 ? item[1] * 17.32 - 8.66 : item[1] * 17.32}px)`;
    return {transform: string}
  }
/**
 *
 * @param {Array} item
 * @returns the properly formatted hex number
 */
  const hexNumber = (item) => {
    if(!item) return
    const pad = function(num) {
      return num.toString().length === 1 ? '0' + num : num;
    };
    return pad(item[0]).toString() + pad(item[1]).toString();
  }
  return (

    <g style={translation(hex)} onClick={() => console.log(hexNumber(hex))}>
      <polygon
        points="10.0,0 5.0,-8.66 -5.0,-8.66 -10.0,0 -5.0,8.66 5.0,8.66"
        fill="transparent"
        stroke="gray"
        strokeWidth="1"
      ></polygon>
      <text fontSize="5" y="-3" textAnchor="middle" cursor="default" >
        {hexNumber(hex)}
      </text>
    </g>

  );
}

export default Hex;


