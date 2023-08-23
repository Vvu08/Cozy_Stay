import { Nunito } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import SignUpModal from './components/modals/SignUpModal'
import ToasterProvider from './providers/ToasterProvider'
import SignInModal from './components/modals/SignInModal'
import getCurrentUser from './actions/getCurrentUser'
import RentModal from './components/modals/RentModal'
import './globals.css'
import SearchModal from './components/modals/SearchModal'

const font = Nunito({
  subsets: ['latin'],
})

export const metadata = {
  title: 'Cozy Stay',
  description:
    "Cozy Stay is a premier online platform that connects travelers with a wide range of comfortable and inviting apartments for their perfect stay. Whether you're planning a weekend getaway, a family vacation, or a business trip, Cozy Stay offers a seamless booking experience, ensuring that you find the ideal home away from home. With an extensive selection of carefully curated apartments in popular destinations worldwide, Cozy Stay aims to provide travelers with a cozy and personalized stay experience that surpasses expectations.",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser()

  return (
    <html lang='en'>
      <body className={font.className}>
        <ToasterProvider />
        <SearchModal />
        <RentModal />
        <SignInModal />
        <SignUpModal />
        <Navbar currentUser={currentUser} />
        <div className='pb-20 pt-25'>{children}</div>
      </body>
    </html>
  )
}
