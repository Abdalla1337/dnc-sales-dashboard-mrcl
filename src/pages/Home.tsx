import { AvatarsList, CardComponent, CustomTable, Header } from '@/components'
import { Container } from '@mui/material'
import { currencyConverter } from '@/utils'

function Home() {
  const mockListData = [
    {
      avatar: 'dnc-avatar.svg',
      name: 'Nome Sobrenome',
      subtitle: currencyConverter(5434.01),
    },
    {
      avatar: 'dnc-avatar.svg',
      name: 'Nome Sobrenome',
      subtitle: currencyConverter(3412.54),
    },
    {
      avatar: 'dnc-avatar.svg',
      name: 'Nome Sobrenome',
      subtitle: currencyConverter(2976.67),
    },
  ]

  const mockTableData = {
    headers: ['Name', 'Email', 'Actions'],
    rows: [
      [
        <span>Nome 1</span>,
        <span>nome1@gmail.com</span>,
        <button>ACTION</button>,
      ],
      [
        <span>Nome 2</span>,
        <span>nome2@gmail.com</span>,
        <button>ACTION</button>,
      ],
      [
        <span>Nome 3</span>,
        <span>nome3@gmail.com</span>,
        <button>ACTION</button>,
      ],
    ],
  }
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <CardComponent>CARD</CardComponent>
        <CardComponent>
          <AvatarsList listData={mockListData}></AvatarsList>
        </CardComponent>
        <CardComponent>
          <CustomTable
            headers={mockTableData.headers}
            rows={mockTableData.rows}
          />
        </CardComponent>
      </Container>
    </>
  )
}

export default Home
