import getCurrentUser from '../actions/getCurrentUser'
import getListings from '../actions/getListings'
import EmptyState from '../components/EmptyState'
import PropertiesClient from './PropertiesClient'

const PropertiesPage = async () => {
  const currentUser = await getCurrentUser()
  if (!currentUser)
    return (
      <EmptyState
        title='Unathorized'
        subtitle='You must be logged in to view this page'
      />
    )

  const listings = await getListings({
    userId: currentUser.id,
  })
  if (listings.length === 0)
    return (
      <EmptyState
        title='No Properties'
        subtitle='Head back to the homepage to book your next trip'
      />
    )

  return <PropertiesClient listings={listings} currentUser={currentUser} />
}

export default PropertiesPage
