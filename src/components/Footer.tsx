const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="text-center my-4">
      <p>© {currentYear} Damián Fanaro. Todos los derechos reservados.</p>
      <p>
        Desarrollado con{' '}
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          Vite
        </a>{' '}
        y{' '}
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          React
        </a>
        .
      </p>
    </footer>
  )
}

export default Footer
