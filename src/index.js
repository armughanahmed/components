import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";
const App = () => {
  return (
    <div class="ui comments">
      <CommentDetail
        author={faker.name.findName()}
        time={faker.date.weekday()}
        star={faker.random.number()}
        text={faker.lorem.text()}
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author={faker.name.findName()}
        time={faker.date.weekday()}
        star={faker.random.number()}
        text={faker.lorem.text()}
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author={faker.name.findName()}
        time={faker.date.weekday()}
        star={faker.random.number()}
        text={faker.lorem.text()}
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author={faker.name.findName()}
        time={faker.date.weekday()}
        star={faker.random.number()}
        text={faker.lorem.text()}
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author={faker.name.findName()}
        time={faker.date.weekday()}
        star={faker.random.number()}
        text={faker.lorem.text()}
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
