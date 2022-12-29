import { useState } from "react";

function App() {
  const [inputs, setInputs] = useState({
    fullname: "",
    email: "",
    maritialState: "",
    genre: "",
  });

  const handleInputs = (event) => {
    const { name, value } = event.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log('form sent...');
  };

  const calculateFormProgress = () => {
    let progress = 0;

    if (inputs.fullname) {
      if (inputs.fullname.split(" ")[1]) {
        progress += 25;
      }
    }

    if (inputs.email) {
      let regEx =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (regEx.test(inputs.email)) {
        progress += 25;
      }
    }

    if (inputs.maritialState) {
      progress += 25;
    }

    if (inputs.genre) {
      progress += 25;
    }

    console.log(progress);

    return progress;
  };

  let progressValue = calculateFormProgress();

  return (
    <div className="bg-gray-200	 w-screen h-screen flex justify-center items-center">
      <div className="w-[30%] bg-white px-[40px] py-[40px] rounded drop-shadow-md">
        <div className="w-full h-[10px] border-[1px] rounded mb-7">
          <div
            style={{
              width: `${progressValue}%`,
              height: "100%",
              backgroundColor: "#38b000",
              transition: "400ms ease",
            }}
          />
        </div>
        <div className="flex flex-col mb-7">
          <label>Nome</label>
          <input
            value={inputs.fullname}
            type="text"
            name="fullname"
            onChange={handleInputs}
            className="border-[1px] rounded py-[3px]"
          />
        </div>
        <div className="flex flex-col  mb-7">
          <label>Email</label>
          <input
            value={inputs.email}
            onChange={handleInputs}
            name="email"
            className="border-[1px] rounded py-[3px]"
          />
        </div>
        <div className="flex flex-col mb-7">
          <label>Estado civil</label>
          <select
            value={inputs.maritialState}
            onChange={handleInputs}
            name="maritialState"
          >
            <option value="">--selecionar--</option>
            <option value="casado">Casado</option>
            <option value="viuvo">Viuvo</option>
            <option value="divorciado">Divorciado</option>
          </select>
        </div>
        <div className="mb-7">
          <label>Sexo</label>
          <div>
            <input
              onChange={handleInputs}
              className="mr-2"
              name="genre"
              type="radio"
              value="homem"
            />
            <label>Homem</label>
          </div>
          <div>
            <input
              onChange={handleInputs}
              className="mr-2"
              name="genre"
              type="radio"
              value="mulher"
            />
            <label>Mulher</label>
          </div>
        </div>
        <button
          onClick={handleSubmit}
          disabled={progressValue === 100 ? false : true}
          className={`${
            progressValue === 100 ? "bg-blue-500" : "bg-blue-300"
          } text-white px-[10px] py-[5px] rounded w-full`}
        >
          Enviar
        </button>
      </div>
    </div>
  );
}

export default App;
