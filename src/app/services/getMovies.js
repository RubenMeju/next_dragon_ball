export const getMovies = () => {
  return fetch('http://127.0.0.1:8000/api/movies/')
    .then((res) => res.json())
    .catch((err) => {
      throw new Error('Algo ha salido mal', err)
    })
}
