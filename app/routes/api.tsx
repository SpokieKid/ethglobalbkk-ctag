import { useLoaderData } from '@remix-run/react'
import type { LoaderFunctionArgs } from '@remix-run/server-runtime'

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = request.url
  return { url }
}

export default function API() {
  const { url } = useLoaderData<typeof loader>()

  return (
    <div className='p-8'>
      <pre>
        <code>
          curl{' '}
          <a target='_blank' href={`${url}/xxxx/has-member/yyyy`} rel='noreferrer'>
            {url}/xxxx/has-member/yyyy
          </a>
        </code>
      </pre>
    </div>
  )
}
