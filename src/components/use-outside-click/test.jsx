import React, { useRef, useState } from "react";
import useOutsideClick from ".";

function UseOnClickOutsideTest() {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  useOutsideClick(ref, () => setShowContent(false));

  return (
    <div>
      {showContent ? (
        <div ref={ref}>
          <h1>This is a random content</h1>
          <p>Click outside to close this</p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
}

export default UseOnClickOutsideTest;
