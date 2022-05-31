import React, { useRef, useState } from "react";

interface IProps {
  name?: string;
  label?: string;
  description?: string;
  onQue: (name: string) => any;
}
interface BountNode {
  age: number | string;
}

const Hello: React.FC<IProps> = ({ name, label, description, onQue }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    console.log(event.target.value);

  const handleChangex = (event: React.FormEvent<HTMLDivElement>): string =>
    "event.target.value";

  const [cound, setCount] = useState<number | string>(93);
  //   setCount("123");

  const [bound, setBound] = useState<BountNode>({ age: "33" });
  //   //   const [bound, setBound] = useState<{ age: number | string }>({ age: "33" });
  //   setBound({ age: 12 });

  const [sound, setSount] = useState<string[] | number[]>([]); //bu daha güzel
  const [sou, setSou] = useState<Array<string>>([]); // bu boklu
  //   setSou(["array"]);
  //   setSount(["array"]);

  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <div>
      <h1>{name}</h1>
      <p>{onQue("asdas")}</p>
      <input type='text' onChange={handleChange} />
      <div onChange={handleChangex}>this is a div</div>

      <input type='text' name='' id='' ref={inputRef} />
      <div ref={divRef}></div>
      <button ref={buttonRef}>But</button>
    </div>
  );
};

export default Hello;
