import * as React from 'react'

export const useAnimal = () => {
  return React.useContext(AnimalContext)
}

export const AnimalProvider = ({ children }) => {
const [animal, setAnimal] = React.useState()

const getAnimal = React.useMemo(() => {
  return animal
}, [animal])

const updateAnimal = (value) => {
  setAnimal(value)
}

  return (
    <AnimalContext.Provider
    value={{
      getAnimal,
      updateAnimal
    }}>
      {children}
    </AnimalContext.Provider>
  )
}


export const AnimalContext = React.createContext({
  getAnimal: () => null,
  updateAnimal: () => null,
})
