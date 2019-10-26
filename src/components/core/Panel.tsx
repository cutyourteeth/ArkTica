import React from "react";

interface IProps {
  content: React.ReactElement | string;
  date: Date | string;
}
const Panel = (props: IProps) => {
    
  return (
    <div>
      <div>fake content</div>
      <div>
        <span> fake subtitle</span>
        <span> fake date</span>
      </div>
    </div>
  );
};

export default Panel;
