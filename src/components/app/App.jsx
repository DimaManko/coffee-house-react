import { Component } from "react"
import Header from "../app-header/app-header";
import Promo from "../promo/promo";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'main'
    }
  }
  render() {
    return (
      <div>
        <Header/>
        <Promo/>
      </div>
    )
  }
}

export default App
