//Import the React and ReactDom libraries
import React from "react";
import ReactDom from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

// create react component
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="sam"
          timeAgo="Today at 4:34PM"
          userComment="Nice movie"
          userImage={faker.image.people()}
        />
      </ApprovalCard>
      <CommentDetail
        author="chris"
        timeAgo="Today at 5:00PM"
        userComment="worst movie ever"
        userImage={faker.image.sports()}
      />
      <CommentDetail
        author="tony"
        timeAgo="Today at 9:34PM"
        userComment="Not going to watch it again"
        userImage={faker.image.avatar()}
      />
    </div>
  );
};
// Take the react component and show it on the screen
ReactDom.render(<App />, document.querySelector("#root"));
