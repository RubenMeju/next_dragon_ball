import NavBar from './components/navBar/NavBar.jsx'
import './globals.css'
import './layout.css'

export const metadata = {
  title: 'Dragon Ball API',
  description: 'API de Dragon Ball para practicar con React'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  )
}
