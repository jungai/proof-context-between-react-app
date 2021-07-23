import { useAnimal } from "../context/animal"

const App1 = () => {
  const {getAnimal, updateAnimal} = useAnimal()

  return (
  <>
    <h1>App 1</h1><br />
    <label htmlFor="animal">Animal: </label>
    <input type="text" id="animal" name="animal" defaultValue={getAnimal} onChange={(e) => updateAnimal(e.target.value)}  />
    <br /><br />
    <p>From context: {getAnimal}</p>
  </>
  )
}

export default App1