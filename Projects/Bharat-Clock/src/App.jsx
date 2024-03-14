import './App.css'
import ClockHeading from './componants/ClockHeading'
import ClockSlogan from './componants/ClockSlogan'
import CurrentTime from './componants/CurrentTime'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
    <center>
      <ClockHeading />
      <ClockSlogan />
      <CurrentTime />
    </center>
  )
}

export default App
