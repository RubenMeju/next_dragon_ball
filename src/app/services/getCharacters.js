// const URLbase = 'https://meju.eu.pythonanywhere.com/api/character/'
const URLbase = 'http://127.0.0.1:8000/api/character/'

export const getCharacters = () => {
  return fetch(URLbase)
    .then((res) => res.json())
    .catch((err) => {
      throw new Error('Algo ha salido mal', err)
    })
}
