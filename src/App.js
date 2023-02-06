import "./App.css";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import AllReviews from "./AllReviews";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<AllReviews />} />
      </Routes>
    </div>
  );
}

export default App;
