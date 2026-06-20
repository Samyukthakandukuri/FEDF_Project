 import DashboardCards from "./components/DashboardCards";
import FinancialHealth from "./components/FinancialHealth";
import CreditPredictor from "./components/CreditPredictor";
import LoanEligibility from "./components/LoanEligibility";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>💳 Credit & CIBIL Score Tracker</h1>

      <DashboardCards />
      <FinancialHealth />
      <CreditPredictor />
      <LoanEligibility />
    </div>
  );
}

export default App;