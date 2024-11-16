import { useLoaderData } from '@remix-run/react'
import type { LoaderFunctionArgs } from '@remix-run/server-runtime'
import { Button, Text, Textarea } from 'degen'
import { useState } from 'react'
import invariant from 'tiny-invariant'
import { useAccount, useChainId, useReadContract, useWriteContract } from 'wagmi'
import { abi } from '~/utils/abi'
import { addresses } from '~/utils/constants'

export const loader = ({ params }: LoaderFunctionArgs) => {
  invariant(params.name)
  return { name: params.name }
}

export default function () {
  const account = useAccount()
  const chainId = useChainId()
  const { name } = useLoaderData<typeof loader>()
  const [user, setUser] = useState('')
  const { writeContract, isPending } = useWriteContract({
    mutation: {
      onSuccess() {
        setUser('')
      },
    },
  })
  const address = addresses[chainId]
  const { data: users } = useReadContract({
    address,
    abi,
    functionName: 'list',
    args: [name],
  })

  return account?.address ? (
    <div className='flex flex-col items-center p-8 gap-8'>
      <div className='flex flex-col w-full gap-4'>
        <Textarea label='Add members' value={user} onChange={(e) => setUser(e.target.value)} />
        <Button
          type='button'
          size='medium'
          loading={isPending}
          onClick={() => {
            if (address) {
              writeContract({
                address,
                abi,
                functionName: 'add',
                args: [name, user.split('\n').filter(Boolean)],
              })
            }
          }}
        >
          Add
        </Button>
      </div>
      <div className='w-full'>
        {users?.map((user) => (
          <div key={user} className='flex items-center justify-between w-full border-t px-4 py-2'>
            <Text>{user}</Text>
          </div>
        ))}
      </div>
    </div>
  ) : null
}
