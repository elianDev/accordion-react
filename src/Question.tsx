import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface Question {
  title: string;
  info: string;
}

const Question = ({ title, info }: Question) => {
  const [active, setActive] = React.useState(false);

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setActive(!active)}>
          {active ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {active ? <p>{info}</p> : ""}
    </article>
  );
};

export default Question;
