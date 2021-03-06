import Profile from 'templates/Profile'
import CardsList, { CardsListProps } from 'components/CardsList'

import cardsMock from 'components/PaymentOptions/mock'
import protectedRoutes from 'utils/protected-routes'
import { GetServerSidePropsContext } from 'next'

export default function Cards({ cards }: CardsListProps) {
  return (
    <Profile>
      <CardsList cards={cards} />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  return {
    props: {
      session,
      cards: cardsMock
    }
  }
}
