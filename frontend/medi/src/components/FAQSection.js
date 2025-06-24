// components/FAQSection.js
import React from "react";

const FAQSection = () => {
  return (
    <section>
      <h2>Frequently asked questions for Paracetamol</h2>
      <ul>
        <li><strong>Q:</strong> What if I vomit after taking Paracetamol?<br/><strong>A:</strong> If it’s within 30 mins, retake. Otherwise, skip.</li>
        <li><strong>Q:</strong> When will I feel better?<br/><strong>A:</strong> Usually within 30 mins to 1 hour.</li>
        <li><strong>Q:</strong> How often can I take it?<br/><strong>A:</strong> Every 4–6 hours, not more than 3 times/day.</li>
        <li><strong>Q:</strong> Can it be used in babies?<br/><strong>A:</strong> Yes, when prescribed by a doctor.</li>
        <li><strong>Q:</strong> Is Paracetamol an antibiotic?<br/><strong>A:</strong> No, it’s a pain and fever reducer.</li>
      </ul>
    </section>
  );
};

export default FAQSection;
