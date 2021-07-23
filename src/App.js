import { Link, Route, Switch } from "react-router-dom"
import App1 from "./component/app1"
import App2 from "./component/app2"
import { AnimalProvider } from "./context/animal"

function App() {
  return (
    <Route>
      <div>
        <Link to="/app1">
          App1
        </Link> &nbsp;
        <Link to="/app2">
          App2
        </Link>
      </div>
      <Switch>
        <AnimalProvider>
          <Route path="/app1">
            <App1 />
          </Route>
          <Route path="/app2">
            <App2 />
          </Route>
        </AnimalProvider>
      </Switch>
  </Route>
  )
}

export default App
