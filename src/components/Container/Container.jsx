import React from "react";

function Container({ children }) {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  )
}

export default Container;
