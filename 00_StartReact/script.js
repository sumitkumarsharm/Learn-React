// const JavascriptHeading = document.createElement("div");
// JavascriptHeading.classList.add("javascript_head");
// JavascriptHeading.innerText = "Hello javascript Element";

// console.log("Javascript heading :", JavascriptHeading);
// console.log("ReactHeading :", h1);

// const reactHeading = React.createElement("h1", {
//   className: "reactElement",
//   id: "heading",
//   children: "Hello React Element",
// });

const h1 = (
  <div>
    <h2>sumit sharma</h2>
    <p>this is a para tag</p>
  </div>
);

// how to cretae components
function App() {
  return (
    <>
      <h1>React Project</h1>
      <p>Skills useto make this project</p>
      <ol>
        <li>HTML</li>
        <li>Javascript</li>
        <li>CSS</li>
      </ol>
    </>
  );
}
ReactDOM.createRoot(document.querySelector("#root")).render(<App />);
