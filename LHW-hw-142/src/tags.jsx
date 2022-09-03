// MODULE
import { Fragment } from "react";

// SRC/tag
import Tag from "./tag/tag";

// Tags function'i
const Tags = ({ separator, tags = [] }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {tags.map(({ label, ...props }, index) => (
        <Fragment key={index}>
          <Tag {...props}>{label}</Tag>
          {tags.length - 1 !== index && separator}
        </Fragment>
      ))}
    </div>
  );
};

export default Tags;
