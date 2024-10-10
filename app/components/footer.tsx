import { Button } from 'degen'
import { address } from '~/utils/abi'

export default function Footer() {
  return (
    <>
      <div className='h-40' />
      <footer className='fixed bottom-0 flex p-8'>
        <Button as='a' href='/api' variant='transparent' size='extraSmall'>
          API
        </Button>
        <Button
          as='a'
          href={`https://holesky.etherscan.io/address/${address}`}
          target='_blank'
          rel='noreferrer'
          variant='transparent'
          size='extraSmall'
        >
          Etherscan
        </Button>
        <Button
          as='a'
          href='https://cloud.google.com/application/web3/faucet/ethereum/holesky'
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
