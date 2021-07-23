import { useMyLoveContext } from "./index";

export default function App2() {
  const { name, setName } = useMyLoveContext();

  return (
    <div className="App">
      <h1>Hello App2</h1>
      <p>{name}</p>
      <button onClick={() => setName("rose")}>change to rose</button>
    </div>
  );
}
