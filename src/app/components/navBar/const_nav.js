export const pages = [
  { name: 'Inicio', href: '/', is_active: true },
  { name: 'Personajes', href: '/characters' },
  { name: 'Peliculas', href: '/peliculas' },
  { name: 'Serie', href: '/serie' }
]

export const variants = {
  open: {
    opacity: 1,
    x: 0
    // borderRadius: ['50%', '50%', '50%', '10%', '0%']
  },
  closed: {
    opacity: 0,
    x: '-100%'
  }
}
