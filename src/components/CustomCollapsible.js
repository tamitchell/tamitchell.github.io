import React, { useState } from "react";
import { Collapse, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

const CustomCollapsible = props => {
  const { content, title, id } = props;
  const [collapse, setCollapse] = useState(false);
  const [status, setStatus] = useState("Closed");
  const toggle = () => setCollapse(!collapse);
  const onEntering = () => setStatus("Opening...");

  const onEntered = () => setStatus("Opened");

  const onExiting = () => setStatus("Closing...");

  const onExited = () => setStatus("Closed");

  console.log(status);
  return (
    <div className="subtle-collapsible">
      <Button
        color="primary"
        id={"toggler" + id}
        className={status}
        style={{ marginBottom: "1rem" }}
        onClick={toggle}
      >
        <h4>{title}</h4>{" "}
        <FontAwesomeIcon className="collapsible-icon" icon={faCaretRight} />
      </Button>
      <Collapse
        isOpen={collapse}
        onEntering={onEntering}
        onEntered={onEntered}
        onExiting={onExiting}
        onExited={onExited}
      >
        <ul>
          {content.map((skill, i) => {
            return <li key={i}>{skill}</li>;
          })}
        </ul>
      </Collapse>
    </div>
  );
};

export default CustomCollapsible;
