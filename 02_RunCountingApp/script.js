let score = 0;
let wicket = 0;

// referance handling
function AddOne() {
  score = score + 1;
  Root.render(<App />);
  console.log(score);
}

function AddTwo() {
  score = score + 2;
  // here i reRander the element
  Root.render(<App />);
  console.log(score);
}

// event handling
function AddScore(num) {
  if (wicket < 10) {
    score = score + num;
    // here i reRander the element
    Root.render(<App />);
  } else {
    alert("Your Target is", score);
  }
}

function Addwicket() {
  if (wicket < 10) {
    wicket = wicket + 1;
    // here i reRander the element
    Root.render(<App />);
  }else{
    alert("You have already lose 10 wickets");
  }
}

// creating Element
const App = () => {
  return (
    <div>
      <h1>Score Keeper</h1>
      <h2>
        Score : {score}/{wicket}
      </h2>
      <div className="Run-Veeket">
        {/* this two function is referance to the function  */}
        {/* <button onClick={AddOne}>1</button> */}
        {/* <button onClick={AddTwo}>2</button> */}

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
    </div>
  );
};

const Root = ReactDOM.createRoot(document.getElementById("Root"));
Root.render(<App />);
