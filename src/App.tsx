import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { HttpMethod } from "./types/httpMethod";
import axios from "axios";
import { AlertMe } from "./components/alert";
import { redirect, useNavigate } from "react-router-dom";

function App() {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // setRandom(Math.random());
  const bodyRequest = {
    email: email,
    password: password,
  };

  const navigate = useNavigate();

  useEffect(() => {
    alert(`trigger useEffect ${JSON.stringify(bodyRequest)}`);

    const createUser = async () => {
      try {
        const res = await fetch("http://localhost:3001/users/", {
          method: HttpMethod.Post,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bodyRequest),
        });

        alert(`status ${JSON.stringify(res, null, 3)}`);
        if (res.status === 201) {
          setUsername(email);
          setPassword(password);

          navigate("/login", { state: bodyRequest });
        } else {
          alert("error");
          return;
        }

        alert(`after response ${email} || ${password}`);
      } catch (error) {
        alert(`error creating user ${error}`);
      }
    };
    createUser();
  }, [submitted]);

  async function handleSubmitEvent() {
    alert(JSON.stringify(bodyRequest));
    setSubmitted(true);
    try {
      // const axiosClient = axios.create();
      // const createUserRes = await axiosClient.post(
      //   "http://localhost:3001/users/",
      //   { email: email, password: password }
      // );
      // alert(`test ${JSON.stringify(createUserRes)}`);
    } catch (error) {
      alert(`error gihapon ${error}`);
    }
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <label>
          Username:
          <input
            value={email}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </label>
        <hr />
        <label>
          Password:
          <input
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </label>
        <hr />

        <button onClick={handleSubmitEvent}>Submit</button>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
