import React from "react";

const Col = ({ isOver, children }) => {
    const className = isOver ? " highlight-region" : "";
   // This component basically tells if item is above this column
    return (
        <div className={`col${className}`}>
            {children}
        </div>
    );
};

export default Col;