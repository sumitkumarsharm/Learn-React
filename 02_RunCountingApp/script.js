let score = 0;
let wicket = 0;
let BallwiseRes = [];

// // referance handling
// function AddOne() {
//   BallwiseRes.push()
//   score = score + 1;
//   Root.render(<App />);
//   console.log(score);
// }

// function AddTwo() {
//   score = score + 2;
//   // here i reRander the element
//   Root.render(<App />);
//   console.log(score);
// }

// event handling
function AddScore(num) {
  if (wicket < 10) {
    BallwiseRes.push(num);
    score = score + num;
    // here i reRander the element
    Root.render(<App />);
    console.log(BallwiseRes);
  } else {
    alert("Your Target is", score);
  }
}

function Addwicket() {
  if (wicket < 10) {
    BallwiseRes.push('W');
    wicket = wicket + 1;
    // here i reRander the element
    Root.render(<App />);
    console.log(BallwiseRes);
    
  } else {
    alert("You have already lose 10 wickets");
  }
}

const ScoreButtons = () => (
  <div className="Run-Veeket">
    <button
      onClick={() => {
        AddScore(1);
      }}
    >
      1
    </button>
    <button
      onClick={() => {
        AddScore(2);
      }}
    >
      2
    </button>

    {/*this is callled event handling and this is alos inline function */}
    <button
      onClick={() => {
        AddScore(3);
      }}
    >
      3
    </button>
    <button
      onClick={() => {
        AddScore(4);
      }}
    >
      4
    </button>
    <button
      onClick={() => {
        AddScore(5);
      }}
    >
      5
    </button>
    <button
      onClick={() => {
        AddScore(6);
      }}
    >
      6
    </button>
    <button onClick={Addwicket}>Wicket</button>
  </div>
);

// creating Element
const App = () => {
  return (
    <div>
      <h1>Score Keeper</h1>
      <h2>
        Score : {score}/{wicket}
      </h2>
      <ScoreButtons />
    </div>
  );
};

const Root = ReactDOM.createRoot(document.getElementById("Root"));
Root.render(<App />);
