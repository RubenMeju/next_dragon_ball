export const getCharacters = () => {
  return fetch('http://127.0.0.1:8000/api/character/')
    .then((res) => res.json())
    .catch((err) => {
      throw new Error('Algo ha salido mal', err)
    })
}
