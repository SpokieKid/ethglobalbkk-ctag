import { ConnectKitButton } from 'connectkit'
import { Button } from 'degen'

export default function Navigation() {
  return (
    <nav className='px-8 pt-8 w-full flex items-center justify-between'>
      <Button as='a' href='/' size='small' variant='secondary'>
        Home
      </Button>
      <ConnectKitButton showBalance showAvatar />
    </nav>
  )
}
