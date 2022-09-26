import React from "react";
import Scripts from "./src/components/scripts";

// Pass all props (hence the ...props) to the layout component so it has access to things like pageContext or location
const wrapPageElement = ({ element, props }) => {
  return (
    <>
      <Scripts />
      {element}
    </>
  );
};

export default wrapPageElement;
