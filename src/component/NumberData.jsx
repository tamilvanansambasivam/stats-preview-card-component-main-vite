import React from "react";

export default function NumberData({ number, about }) {
  return (
    <div className="flex flex-col">
      <h2 className="text-xl sm:text-2xl font-inter font-bold  text-White">
        {number}
      </h2>
      <p className="text-headingWhite uppercase sm:text-xs font-lexicadeca">
        {about}
      </p>
    </div>
  );
}
