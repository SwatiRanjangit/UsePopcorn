import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import "./index.css";
// import StarRating from "./StarRating";
import App from "./App";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <div>
//       <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
//       <p>This movie was rated {movieRating} Star</p>
//     </div>
//   );
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    /> */}
    {/* <StarRating maxRating={10} />
    <StarRating /> */}
    {/* <StarRating color="red" size={24} className="test" defaultRating={3} />
    <Test /> */}
  </React.StrictMode>
);
