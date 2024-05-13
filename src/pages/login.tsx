import { useLocation } from "react-router-dom";

export function LoginPage() {
  const location = useLocation();

  return (
    <div className="App">
      <h1>You are logged in as {location.state.password}</h1>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <label>
          Username:
          <input value={location.state.email} />
        </label>
        <hr />
        <label>
          Password:
          <input type="password" value={location.state.password} />
        </label>
        <hr />

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
