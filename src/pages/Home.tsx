import { Link } from 'react-router-dom'

function Home() {
  return (
    <section>
      Home <Link to="/register">Register</Link>
    </section>
  )
}

export default Home
