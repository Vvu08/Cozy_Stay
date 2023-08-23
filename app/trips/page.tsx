import getCurrentUser from '../actions/getCurrentUser'
import getReservations from '../actions/getReservations'
import EmptyState from '../components/EmptyState'
import TripsClient from './TripsClient'

const TripsPage = async () => {
  const currentUser = await getCurrentUser()
  if (!currentUser)
    return (
      <EmptyState
        title='Unathorized'
        subtitle='You must be logged in to view this page'
      />
    )

  const reservations = await getReservations({
    userId: currentUser.id,
  })
  if (reservations.length === 0)
    return (
      <EmptyState
        title='No Trips'
        subtitle='Head back to the homepage to book your next trip'
      />
    )

  return <TripsClient reservations={reservations} currentUser={currentUser} />
}

export default TripsPage
