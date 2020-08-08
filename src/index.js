import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import Approve from "./Approve";
const App = () => {
  return (
    <div class="ui comments">
      <Approve>
        <CommentDetail
          author={faker.name.findName()}
          time={faker.date.weekday()}
          star={faker.random.number()}
          text={faker.lorem.text()}
          avatar={faker.image.avatar()}
        />
      </Approve>
      <Approve>
        <CommentDetail
          author={faker.name.findName()}
          time={faker.date.weekday()}
          star={faker.random.number()}
          text={faker.lorem.text()}
          avatar={faker.image.avatar()}
        />
      </Approve>
      <Approve>
        <CommentDetail
          author={faker.name.findName()}
          time={faker.date.weekday()}
          star={faker.random.number()}
          text={faker.lorem.text()}
          avatar={faker.image.avatar()}
        />
      </Approve>
      <Approve>
        <CommentDetail
          author={faker.name.findName()}
          time={faker.date.weekday()}
          star={faker.random.number()}
          text={faker.lorem.text()}
          avatar={faker.image.avatar()}
        />
      </Approve>
      <Approve>
        <CommentDetail
          author={faker.name.findName()}
          time={faker.date.weekday()}
          star={faker.random.number()}
          text={faker.lorem.text()}
          avatar={faker.image.avatar()}
        />
      </Approve>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
