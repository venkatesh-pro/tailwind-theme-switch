import React, { useState } from "react";

const index = () => {
  const [theme, setTheme] = useState("purple");
  return (
    <>
      <div
        className={`h-[100vh] ${
          theme == "dark"
            ? "theme-dark"
            : theme == "purple"
            ? "theme-purple"
            : "theme-pink"
        } text-skin-base bg-skin-fill`}
      >
        index
      </div>
    </>
  );
};

export default index;
