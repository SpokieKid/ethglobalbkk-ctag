import { useLoaderData } from '@remix-run/react'
import type { LoaderFunctionArgs } from '@remix-run/server-runtime'
import { Card, Text } from 'degen'

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = request.url
  return { url }
}

export default function API() {
  const { url } = useLoaderData<typeof loader>()

  return (
    <div className='p-8'>
      <Card hover shadow padding='24px'>
        <Text font='mono'>
          curl{' '}
          <a
            target='_blank'
            href={`${url}/chain-id/xxxx/has-member/yyyy`}
            rel='noreferrer'
            className='underline'
          >
            {url}/chain-id/xxxx/has-member/yyyy
          </a>
        </Text>
      </Card>
    </div>
  )
}
