// const URLbase = 'https://meju.eu.pythonanywhere.com/api/movies/'
const URLbase = 'http://127.0.0.1:8000/api/movies/'

export const getMovies = () => {
  return fetch(URLbase)
    .then((res) => res.json())
    .catch((err) => {
      throw new Error('Algo ha salido mal', err)
    })
}
