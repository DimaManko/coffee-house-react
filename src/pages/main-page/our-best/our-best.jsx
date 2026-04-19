import "./our-best.scss";
import CoffeeCard from "../../../components/coffee-card/Coffee-card";
import { Component } from "react";
import CoffeeService from "../../../services/CoffeeService";

import Spinner from "../../../components/spinner/spinner";
import ErrorMessage from "../../../errorMessage/ErrorMessage";

class OurBest extends Component {
  state = {
    data: [],
    loading: true,
    error: false,
  };

  coffeeService = new CoffeeService();

  componentDidMount() {
    this.getDataCoffee();
  }

  getDataCoffee = () => {
    this.coffeeService
      .getAllCoffees()
      .then(this.onDataCoffeeLoaded)
      .catch(this.onError);
  };

  onDataCoffeeLoaded = (coffeeList) => {
    this.setState(() => ({
      data: coffeeList,
      loading: false,
      error: false,
    }));
  };

  onCoffeeLoading = () => {
    this.setState({
      loading: true,
      error: false,
    });
  };

  onError = () => {
    this.setState({ loading: false, error: true });
  };

  render() {
    const { data, loading, error } = this.state;
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error) ? <View data={data} /> : null;
    return (
      <section className="ourBest">
        <h2 className="ourBest__subtitle">Our best</h2>
        {errorMessage}
        {spinner}
        {content}
      </section>
    );
  }
}

const View = ({ data }) => {
  return (
    <ul>
      {data
        .filter((item) => item.bestseller)
        .map((item) => {
          return (
            <li key={item.id}>
              <CoffeeCard {...item} />
            </li>
          );
        })}
    </ul>
  );
};

export default OurBest;
