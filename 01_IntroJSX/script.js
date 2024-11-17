// here i also created a component which is car colection
function Cars() {
  const cars = [
    {
      CarName: "BMW",
      CarImage: "image.png",
      CarPrice: 50000,
    },
    {
      CarName: "AUDI",
      CarImage: "image.png",
      CarPrice: 50000,
    },
    {
      CarName: "FARARI",
      CarImage: "image.png",
      CarPrice: 50000,
    },
  ];
  return (
    <>
      <h1 className="heading">Car Details</h1>
      <table className="tab">
        <thead>
          <tr>
            <th>Car Image</th>
            <th>Car Name</th>
            <th>Car Price</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car, index) => (
            <tr key={index}>
              <td>
                <img src={car.CarImage} alt="" style={{ width: "100px" }} />
              </td>
              <td>{car.CarName}</td>
              <td>{car.CarPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

// here i created a compnont and also a table which is showing using object and accessing the object
function Student() {
  const Students = [
    { name: "Amit", age: 18, id: 1 },
    { name: "Sumit", age: 22, id: 2 },
    { name: "Rahul", age: 29, id: 3 },
    { name: "Anish", age: 28, id: 4 },
  ];

  return (
    <>
      <h1 className="heading">Student Details</h1>
      <table className="tab">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Id</th>
          </tr>
        </thead>
        <tbody>
          {Students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

// here is showing component based on condition
function App() {
  let isShown = false;
  if (isShown) {
    return <Student />;
  } else {
    return <Cars />;
  }
}

// here is using turnary Operator
function Apps() {
  let isUser = true;
  return (
    <>
      <h1>Hello {isUser ? "Alexa" : "User"}!</h1>
    </>
  );
}

// Here i using And Operator
function AndOpt() {
  let isUserName = true;
  let userName = "Sumit";
  return (
    <>
      <h1>Hello {isUserName ? userName : "User"}!</h1>
      {isUserName && (
        <p>
          Hi, Welcome to the <span>SelfCodrr.com !</span>
        </p>
      )}
    </>
  );
}

// heere is created a component abd showing surname using or operator
function OrOpt() {
  let isUserName = true;
  let userName = "Sumit";
  let LastName = "Sharma ";
  return (
    <>
      <h1>Hello {isUserName ? LastName || userName : "User"}!</h1>
      {isUserName && (
        <p>
          Hi, Welcome to the <span>SelfCodrr.com !</span>
        </p>
      )}
    </>
  );
}

ReactDOM.createRoot(document.querySelector("#root")).render(<OrOpt />);
