import * as React from 'react'

export const useAnimal = () => {
  return React.useContext(AnimalContext)
}

export const AnimalProvider = ({ children }) => {
const [animal, setAnimal] = React.useState()

const updateAnimal = (value) => {
  setAnimal(value)
}

  return (
    <AnimalContext.Provider
    value={{
      animal,
      updateAnimal
    }}>
      {children}
    </AnimalContext.Provider>
  )
}


export const AnimalContext = React.createContext({
  animal: () => null,
  updateAnimal: () => null,
})
