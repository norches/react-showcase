import React from "react";
import "./Preview.css";
import { PreviewDataProps } from "../../interfaces";
import msg from "../../messages/ru/ru.json";

const Preview = (props: PreviewDataProps) => {
  const { name, age, children } = props.data;
  return (
    <div className="form">
      <div className="parent-title h4">{msg.personal_data}</div>
      <div className="parent-block">
        <div className="parent-text heavy-text">
          {name && age && (
            <>
              {name}, {age} {msg.years_old}
            </>
          )}
        </div>
      </div>
      <div className="children-list">
        <div className="children-list-header">
          <div className="children-list-title h4">{msg.kids}</div>
        </div>
        {children?.map(
          (child, i) =>
            child.name &&
            child.age && (
              <div
                className="child-block heavy-text"
                key={`preview-child-${i}`}
              >
                <div>
                  {child.name}, {child.age} {msg.years_old}
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Preview;
