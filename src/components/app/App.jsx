import { Component } from "react"
import Header from "../app-header/app-header";
import Footer from "../app-footer/app-footer.jsx";
import Promo from "../../pages/main-page/promo/promo.jsx";
import About from "../../pages/main-page/about/about.jsx";
import OurBest from "../../pages/main-page/our-best/our-best.jsx";
import data from '../../data.js'

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
        <OurBest data={data}/>
        <Footer/>
      </div>
    )
  }
}

export default App
