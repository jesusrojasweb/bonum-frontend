import CoachItem from '../components/Coach/CoachItem'
import Spinner from '../components/Spinner/Spinner'
import useGetCoaches from '../hooks/useGetCoaches'

function Coaches() {
  const { coaches, isLoading } = useGetCoaches()

  return (
    <section className="max-w-6xl mx-auto">
      {isLoading && (
        <div className="min-h-screen grid place-content-center">
          <Spinner />
        </div>
      )}

      {coaches.map(coach => (
        <CoachItem
          key={coach.id}
          id={coach.id}
          name={coach.name}
          imageURL={coach.imageURL}
          linkdinURL={coach.linkedinURL}
        />
      ))}
    </section>
  )
}

export default Coaches
