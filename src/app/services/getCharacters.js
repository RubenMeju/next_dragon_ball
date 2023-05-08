// const URLbase = 'https://meju.eu.pythonanywhere.com/api/character/'
// const URLbase = 'http://127.0.0.1:8000/api/character/'
const URLbase = 'http://127.0.0.1:8000/api/character/?search='

export const getCharacters = (paramSearch) => {
  return fetch(URLbase + paramSearch)
    .then((res) => res.json())
    .catch((err) => {
      throw new Error('Algo ha salido mal', err)
    })
}
