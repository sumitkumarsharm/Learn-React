let score = 0;
let wicket = 0;
let BallwiseRes = [];
let hit = 0;
const inputRef = React.createRef();

function AddScore(num) {
  hit = num;

  Root.render(<App />);
}

function Addwicket() {
  hit = "W";
  Root.render(<App />);
}

const ScoreButtons = () => (
  <div className="Run-Veeket">
    <button
      onClick={() => {
        AddScore(0);
      }}
    >
      0
    </button>
    <button
      onClick={() => {
        AddScore(1);
      }}
    >
      1
    </button>

    {/*this is callled event handling and this is alos inline function */}
    <button
      onClick={() => {
        AddScore(2);
      }}
    >
      2
    </button>
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
        AddScore(6);
      }}
    >
      6
    </button>
    <button className="wicket" onClick={Addwicket}>
      Wicket
    </button>
  </div>
);
// crerting ball wise run function
const Result = () => (
  <div>
    {BallwiseRes.map((res, index) => (
      <>
        {index % 6 === 0 ? <br /> : null}
        <span key={index}>{res === 0 ? <strong>.</strong> : res}</span>
      </>
    ))}
  </div>  
);
// in form how to we do preventDefult()
function hendleSubmit(event) {
  event.preventDefault();
  if (hit == "W") {
    wicket += 1;
  } else {
    score += hit;
  }
  BallwiseRes.unshift(
    // <span>{hit}{","}{inputRef.current.value}</span>
    <span>{`${hit} , ${inputRef.current.value}`}</span>
  );
  hit = 0;
  inputRef.current.value = "";
  Root.render(<App />);
  console.log(inputRef.current.value);
}

// creating form
const Form = () => (
  <form onSubmit={hendleSubmit}>
    <input value={hit} />
    <input ref={inputRef} placeholder="Add a comment" />
    <button>Submit</button>
  </form>
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
      <br />
      <br />
      <Form />
      <hr />
      {BallwiseRes.map((res, index) => (
        <p key={index}>{res}</p>
      ))}
    </div>
  );
};

const Root = ReactDOM.createRoot(document.getElementById("Root"));
Root.render(<App />);
