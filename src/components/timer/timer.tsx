import React, { FC, useState, useRef } from "react";

import "./timer.scss";

const Timer: FC = () => {
  const [count, setCount] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);

  // function handle() {
  //   setCount(inputRef.current.value);
  //   return;
  // }

  return (
    <div className="timer">
      <h1>Timer</h1>
      <input type="text" ref={inputRef} />
      <button onClick={() => setCount(count + 1)}>+</button>
      <span>{inputRef.current?.value}</span>
      <button onClick={() => setCount(count - 1)}>-</button>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo aut iste
        quam nesciunt autem, quae voluptas ipsa praesentium nemo reiciendis
        ipsum eveniet laborum perferendis? Error quos porro, sed perspiciatis
        illo nostrum quod pariatur nobis doloremque atque recusandae quasi enim!
        Aspernatur non, excepturi incidunt exercitationem repudiandae
        accusantium, omnis assumenda molestias consequatur eligendi
        necessitatibus sapiente ipsam cumque eaque sunt illo cupiditate! Fuga,
        asperiores animi. Explicabo rem asperiores amet fugit similique
        voluptates maxime, repellat molestias blanditiis, odit incidunt ad!
        Expedita quo quae earum ad, laudantium enim hic excepturi sapiente? Vero
        et iusto magni laboriosam explicabo reiciendis doloremque aliquid dicta
        voluptatibus, alias quae eos!
      </p>
    </div>
  );
};

export default Timer;
