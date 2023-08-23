import getCurrentUser from '../actions/getCurrentUser'
import getFavorites from '../actions/getFavorites'
import EmptyState from '../components/EmptyState'
import FavoritesClient from './FavoritesClient'

const FavoritesPage = async () => {
  const favorites = await getFavorites()
  const currentUser = await getCurrentUser()

  if (favorites.length === 0)
    return (
      <EmptyState
        title='No favorites yet'
        subtitle='Save your favorite trips and they will appear here'
      />
    )

  return <FavoritesClient favorites={favorites} currentUser={currentUser} />
}

export default FavoritesPage
