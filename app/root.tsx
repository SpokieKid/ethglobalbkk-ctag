import type { MetaFunction } from '@remix-run/cloudflare'
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ConnectKitProvider, getDefaultConfig } from 'connectkit'
import { ThemeProvider } from 'degen'
import { holesky } from 'viem/chains'
import { WagmiProvider, createConfig } from 'wagmi'
import Footer from './components/footer'
import Navigation from './components/navigation'
import 'degen/dist/style.css'
import './tailwind.css'

export const meta: MetaFunction = () => {
  return [{ title: 'Ctag Demo' }]
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
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
        <ConnectKitProvider mode='light'>
          <ThemeProvider forcedMode='light'>
            <Navigation />
            <Outlet />
            <Footer />
          </ThemeProvider>
        </ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
