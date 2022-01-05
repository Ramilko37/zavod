import React from "react";
import QuoteFrame from "assets/icons/quote-frame";

const Quote = () => {
  return (
    <div className="quote-wrapper pl-24">
      <p className="quote-text">
        Защита людей, ежедневно работающих в опасных условиях - наша
        приоритетная задача.
      </p>
      <QuoteFrame />
    </div>
  );
};

export default Quote;