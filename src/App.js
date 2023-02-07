import "./App.css";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import AllReviews from "./Components/AllReviews";
import { OneReview } from "./Components/OneReview";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<AllReviews />} />
        <Route path="/reviews/:review_id" element={<OneReview />}></Route>
      </Routes>
    </div>
  );
}

export default App;
