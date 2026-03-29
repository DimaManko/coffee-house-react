import { Component } from "react"
import Header from "../app-header/app-header";
import Promo from "../promo/promo";
import About from "../about/about";

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
        <About/>
      </div>
    )
  }
}

export default App
