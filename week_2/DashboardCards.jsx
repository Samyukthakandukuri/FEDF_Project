 function DashboardCards() {
  const cards = [
    { title: "Credit Score", value: "742" },
    { title: "CIBIL Rating", value: "Excellent" },
    { title: "Loan Readiness", value: "92%" },
    { title: "Risk Level", value: "Low" }
  ];

  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <h3>{card.title}</h3>
          <h2>{card.value}</h2>
        </div>
      ))}
    </div>
  );
}

export default DashboardCards;