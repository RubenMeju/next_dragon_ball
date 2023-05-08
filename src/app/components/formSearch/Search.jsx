'use client'
export default function Search({ characters }) {
  console.log(characters)
  const handleSearch = (e) => {
    e.preventDefault()
    const form = new FormData(e.target)
    const name = form.get('name')
    const search = characters.filter((character) =>
      character.name.toLowerCase().includes(name.toLowerCase())
    )
    console.log(search)
  }

  return (
    <form className="form" onSubmit={handleSearch}>
      <input type="text" placeholder="Buscar" />
      <button type="submit">Buscar</button>
    </form>
  )
}
