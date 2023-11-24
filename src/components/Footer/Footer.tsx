import React from "react";

export default function Footer() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        height: "30px",
      }}
    >
      Got questions? Take a look at our FAQs, talk to us on Twitter @company or
      send an email to team@company.com
    </div>
  );
}
