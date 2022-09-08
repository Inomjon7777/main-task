import "./random.scss";

export const handleClick = () => {
  document.body.style.backgroundColor = randomColor;
};

let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

let colorMassiv: string[] = [];

colorMassiv.push(randomColor);

console.log("Color massiv => ", colorMassiv);

// let funksiya = () => {
//   for (let i = 0; i < randomColor; i++) {
//     colorMassiv.push(randomColor);
//   }
// };

export const RandomColor = () => {
  return (
    <div className="random">
      <h1>Random Hex</h1>
      <div className="color-boxes">
        {colorMassiv.map((color) => (
          <div
            className="box"
            style={{ backgroundColor: `${color} ` }}
            onClick={handleClick}
          >
            {color}
          </div>
        ))}
      </div>
    </div>
  );
};
