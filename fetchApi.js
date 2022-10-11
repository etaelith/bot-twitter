const fetchApi = () => {
  return fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((ans) => ans.content)
    .then((data) => {
      return data;
    })
    .catch((err) => console.error(err));
};

module.exports = fetchApi;
