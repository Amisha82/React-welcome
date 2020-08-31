import React from "react";

function Display(props) {
  const category = props.data1.category.title;

  const questions = props.data1.question;

  const answer = props.ans;

  const pointvalue = props.data1.value;

  const score = props.score;
  const question3 = props.question;
  console.log(question3);
  console.log(answer);

  return (
    <div className="Display">
      <h2>Category :{category}</h2>
      <h2>Question3 :{question3}</h2>

      <h2>Question :{questions}</h2>
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
