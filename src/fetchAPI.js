const fetchData = (path) {
  return fetch(path)
  .then(response => response.json())
  .catch(err => console.log(err))
}

export {fetchData}
