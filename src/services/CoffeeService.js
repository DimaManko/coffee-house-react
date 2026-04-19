class CoffeeService {
  _apiBase = "http://localhost:3000/";
  getResource = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  };

  getAllCoffees = async () => {
    return await this.getResource(`${this._apiBase}coffee`);
  };
}

export default CoffeeService;
