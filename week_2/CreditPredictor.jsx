import { useState } from "react";

function CreditPredictor() {
  const [score, setScore] = useState(680);
  const [utilization, setUtilization] = useState(60);

  const predictedScore = Math.min(
    900,
    Math.round(score + (100 - utilization) * 0.6)
  );

  return (
    <div className="predictor-card">
      <h2>📈 Credit Score Predictor</h2>

      <input
        type="number"
        placeholder="Current Credit Score"
        value={score}
        onChange={(e) => setScore(Number(e.target.value))}
      />

      <input
        type="number"
        placeholder="Credit Utilization %"
        value={utilization}
        onChange={(e) => setUtilization(Number(e.target.value))}
      />

      <h3>Predicted Score: {predictedScore}</h3>

      <p>
        Potential Improvement: +{predictedScore - score}
      </p>
    </div>
  );
}

export default CreditPredictor;