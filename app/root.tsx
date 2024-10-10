import type { MetaFunction } from '@remix-run/cloudflare'
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from '@remix-run/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ConnectKitProvider, getDefaultConfig } from 'connectkit'
import type { Chain } from 'viem'
import { WagmiProvider, createConfig } from 'wagmi'
import './tailwind.css'
import { holesky } from 'viem/chains'

export const meta: MetaFunction = () => {
  return [{ title: 'Ctag Demo' }]
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='text-[0.625rem] sm:text-xs md:text-sm lg:text-base'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <Scripts />
        <ScrollRestoration />
      </body>
    </html>
  )
}

const config = createConfig(
  getDefaultConfig({
    appName: 'Ctag Demo',
    walletConnectProjectId: '',
    chains: [holesky],
    ssr: true,
    syncConnectedChain: true,
  }),
)

const queryClient = new QueryClient()

export default function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider>
          <Outlet />
        </ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export function ErrorBoundary() {
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    return (
      <>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </>
    )
  }

  return (
    <>
      <h1>Error!</h1>
      <p>{(error instanceof Error ? error.message : null) ?? 'Unknown error'}</p>
    </>
  )
}
