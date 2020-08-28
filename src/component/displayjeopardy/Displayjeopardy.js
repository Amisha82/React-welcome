import React from "react";

function Display(props) {
  const category = props.data.category.title;

  const question = props.data.question;

  const answer = props.ans;

  const pointvalue = props.data.value;

  const score = props.score;

  return (
    <div className="Display">
      <h2>Category :{category}</h2>

      <h2>Question :{question}</h2>
      <h2>
        Answer:
        <input
          type="text"
          name="ans"
          value={answer}
          onChange={props.handleChange}
        />
      </h2>
      <button onClick={props.handleSubmit}>Submit</button>

      <h2>Point Value :{pointvalue}</h2>
      <h2>Score :{score}</h2>
    </div>
  );
}
export default Display;
