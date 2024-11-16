import { useLocation } from '@remix-run/react'
import { ConnectKitButton } from 'connectkit'
import { Button } from 'degen'

export default function Navigation() {
  const location = useLocation()

  return (
    <nav className='px-8 pt-8 w-full flex items-center'>
      <Button
        as='a'
        href='/'
        size='small'
        variant={location.pathname === '/' ? 'secondary' : 'transparent'}
      >
        Home
      </Button>
      <Button
        as='a'
        href='/dashboard'
        size='small'
        variant={location.pathname.startsWith('/dashboard') ? 'secondary' : 'transparent'}
      >
        Dashboard
      </Button>
      <div className='w-0 flex-1' />
      <ConnectKitButton showBalance showAvatar />
    </nav>
  )
}
