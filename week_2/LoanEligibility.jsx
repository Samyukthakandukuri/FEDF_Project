import { useState } from "react";

function LoanEligibility() {
  const [income, setIncome] = useState("");
  const [score, setScore] = useState("");

  let result = "Enter Details";

  if (income >= 50000 && score >= 700) {
    result = "✅ High Approval Chance";
  } else if (income >= 30000 && score >= 650) {
    result = "🟡 Moderate Approval Chance";
  } else if (income !== "" && score !== "") {
    result = "❌ Low Approval Chance";
  }

  return (
    <div className="loan-card">
      <h2>🏦 Loan Eligibility Predictor</h2>

      <input
        type="number"
        placeholder="Monthly Income"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
      />

      <input
        type="number"
        placeholder="Credit Score"
        value={score}
        onChange={(e) => setScore(e.target.value)}
      />

      <h3>{result}</h3>
    </div>
  );
}

export default LoanEligibility;