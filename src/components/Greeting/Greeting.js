import React from "react";

function Greeting(props) {
  return (
    <section className="greeting">
      <div className="greeting__container">
        <h1 className="greeting__title">{props.greeting}</h1>
      </div>
    </section>
  );
}

export default Greeting;
