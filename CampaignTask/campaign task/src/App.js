import "./App.css";
import Table from "./components/table";
import ReviewHeader from "./components/ReviewHeader";
import SummaryCard from "./components/ReviewSummaryCard";
function App() {
  return (
    <div className="App">
      <ReviewHeader />
      <SummaryCard />
      <Table />
    </div>
  );
}

export default App;
