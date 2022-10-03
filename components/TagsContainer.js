import React from "react";
import { Tag } from "./OpenbyteUI/index";

const TagsContainer = ({ tags }) => {
  return (
    <div className="flex justify-center gap-6 flex-wrap">
      {tags.map((tag) => (
        <Tag key={tag} text={tag} variant="blue" />
      ))}
    </div>
  );
};

export default TagsContainer;
