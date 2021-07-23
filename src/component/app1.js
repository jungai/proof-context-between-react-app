import { useAnimal } from "../context/animal"

const App1 = () => {
  const {animal, updateAnimal} = useAnimal()

  return (
  <>
    <h1>App 1</h1><br />
    <label htmlFor="animal">Animal: </label>
    <input type="text" id="animal" name="animal" defaultValue={animal} onChange={(e) => updateAnimal(e.target.value)}  />
    <br /><br />
    <p>From context: {animal}</p>
  </>
  )
}

export default App1