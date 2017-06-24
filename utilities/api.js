var api = {
  getRovers() {
    var url = 'https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=DEMO_KEY';
    return fetch(url).then((response) => response.json());
  }
};

exports default api;
