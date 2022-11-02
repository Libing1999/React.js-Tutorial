import "./app.css";
function App() {
  const newData = "Stylee";
  const myStyle = {
    color: "red",
    backgroundColor: "pink",
  };
  const myStyle2 = {
    color: "red",
    backgroundColor: "yellow",
  };
  return (
    <div>
      <h1 style={{ color: "red" }}>Inline {newData}</h1>
      <p style={{ color: "blue" }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam nemo
        <br />
        dolor veniam minus asperiores saepe laboriosam quia, sint est? Obcaecati
        <br />
        illum dolore vero perspiciatis doloremque maiores amet nesciunt aperiam,
        <br />
        nulla sunt repellendus officiis reprehenderit quisquam fuga quas,
        <br />
        voluptatibus ut commodi libero sequi recusandae corrupti ipsa iste
        <br />
        debitis veritatis? Iste, magnam.
      </p>
      <h1 style={myStyle}>Internal Style</h1>

      <p style={myStyle2}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam nemo
        <br />
        dolor veniam minus asperiores saepe laboriosam quia, sint est? Obcaecati
        <br />
        illum dolore vero perspiciatis doloremque maiores amet nesciunt aperiam,
        <br />
        nulla sunt repellendus officiis reprehenderit quisquam fuga quas,
        <br />
        voluptatibus ut commodi libero sequi recusandae corrupti ipsa iste
        <br />
        debitis veritatis? Iste, magnam.
      </p>
      <h1 className="external">External Style</h1>
      <p className="para">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam nemo
        <br />
        dolor veniam minus asperiores saepe laboriosam quia, sint est? Obcaecati
        <br />
        illum dolore vero perspiciatis doloremque maiores amet nesciunt aperiam,
        <br />
        nulla sunt repellendus officiis reprehenderit quisquam fuga quas,
        <br />
        voluptatibus ut commodi libero sequi recusandae corrupti ipsa iste
        <br />
        debitis veritatis? Iste, magnam.
      </p>
    </div>
  );
}

export default App;
