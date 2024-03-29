import React from "react";

function WidgetText(props) {
  return (
    <div className="widgetWrap">
      <div className="widgetTitle">{props.title}</div>
      <div className="widgetValue">
        <div className="Value">{props.value}</div>
        <div className="description">{props.description}</div>
      </div>
    </div>
  );
}
export default WidgetText;
