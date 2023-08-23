import getCurrentUser from '../actions/getCurrentUser'
import getReservations from '../actions/getReservations'
import EmptyState from '../components/EmptyState'
import ReservationsClient from './ReservationsClient'

const ReservationsPage = async () => {
  const currentUser = await getCurrentUser()

  if (!currentUser)
    return (
      <EmptyState
        title='Unathorized'
        subtitle='You must be logged in to view this page'
      />
    )

  const reservations = await getReservations({
    authorId: currentUser.id,
  })

  if (reservations.length === 0)
    return (
      <EmptyState
        title='No Reservations'
        subtitle='You have no reservations on your properties yet'
      />
    )

  return (
    <ReservationsClient reservations={reservations} currentUser={currentUser} />
  )
}
export default ReservationsPage
