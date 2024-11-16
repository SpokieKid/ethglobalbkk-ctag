import { Button } from 'degen'
import { addresses, explorers } from '~/utils/constants'

export default function Footer(props: { chainId: number }) {
  return (
    <>
      <div className='h-40' />
      <footer className='fixed bottom-0 flex p-8'>
        <Button as='a' href='/api' variant='transparent' size='extraSmall'>
          API
        </Button>
        <Button
          as='a'
          href={`${explorers[props.chainId]}/address/${addresses[props.chainId]}`}
          target='_blank'
          rel='noreferrer'
          variant='transparent'
          size='extraSmall'
        >
          Explorer
        </Button>
        <Button
          as='a'
          href='https://ethglobal.com/faucet'
          target='_blank'
          rel='noreferrer'
          variant='transparent'
          size='extraSmall'
        >
          Faucet
        </Button>
      </footer>
    </>
  )
}
