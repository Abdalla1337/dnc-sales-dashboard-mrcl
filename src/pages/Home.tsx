import { CardComponent, Header } from '@/components'
import { Container } from '@mui/material'

function Home() {
  return (
    <>
      <Header />
      <Container>
        <CardComponent className="success">CARD</CardComponent>
      </Container>
    </>
  )
}

export default Home
