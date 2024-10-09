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
import './tailwind.css'

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

export default function App() {
  return <Outlet />
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
