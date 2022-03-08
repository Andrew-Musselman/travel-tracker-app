let errMessage = document.querySelector('#error-message')

const fetchData = (path) => {
  return fetch(`http://localhost:3001/api/v1/${path}`)
  .then(response => response.json())
  .catch(err => handleError(err))
}

const postData = (path, content) => {
  return fetch(`http://localhost:3001/api/v1/${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(content)
  }).then(response => {
    if (!response.ok) {
      throw new Error('Error requesting trip, please try again')
    } else {
      return response
    }
  }).catch(err => handleError(err))
}

const handleError = (err) => {
  errMessage.innerText = err.message
}

export {fetchData, postData}
