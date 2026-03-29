import { Component } from "react"
import Header from "../app-header/app-header";
import Promo from "../promo/promo";
import About from "../about/about";
import OurBest from "../our-best/our-best";

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
        <OurBest/>
      </div>
    )
  }
}

export default App
