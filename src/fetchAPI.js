const fetchData = (path) => {
  return fetch(`http://localhost:3001/api/v1/${path}`)
  .then(response => response.json())
  .catch(err => console.log(err))
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
  }).catch(err => console.log(err))
}

export {fetchData, postData}
