import { useMyLoveContext } from "./index";

export default function App() {
  const { name, setName } = useMyLoveContext();

  return (
    <div className="App">
      <h1>Hello App1</h1>
      <p>{name}</p>
      <button onClick={() => setName("yoona")}>change to yoona</button>
    </div>
  );
}
