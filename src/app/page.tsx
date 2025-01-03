import React from "react";
import "./styles.css";

export default function Home() {
  const treeItemStyle = (
    i: number
  ): React.CSSProperties & { "--i": string } => ({
    "--i": `${i}`,
  });

  return (
    <>
      <figure>
        <div className="star"></div>
        <div className="trunk"></div>
        <div className="tree">
          <div style={treeItemStyle(1)}></div>
          <div style={treeItemStyle(2)}></div>
          <div style={treeItemStyle(3)}></div>
          <div style={treeItemStyle(4)}></div>
        </div>
        <div className="lights"></div>
      </figure>
      <div className="text-2xl">Happy New Year 2025! 😊</div>
      <div className="text-2xl">Wishing you and your loved ones are happy, healthy and all goes well.</div>
    </>
  );
}
