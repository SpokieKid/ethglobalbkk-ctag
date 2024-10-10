import { useLoaderData } from '@remix-run/react'
import type { LoaderFunctionArgs } from '@remix-run/server-runtime'
import { ConnectKitButton } from 'connectkit'
import { Button, Input, Text } from 'degen'
import { useState } from 'react'
import invariant from 'tiny-invariant'
import { useReadContract, useWriteContract } from 'wagmi'
import { abi, address } from '~/utils/abi'

export const loader = ({ params }: LoaderFunctionArgs) => {
  invariant(params.name)
  return { name: params.name }
}

export default function () {
  const { name } = useLoaderData<typeof loader>()
  const [user, setUser] = useState('')
  const { writeContract, isPending } = useWriteContract()
  const { data: users } = useReadContract({
    address,
    abi,
    functionName: 'list',
    args: [name],
  })

  return (
    <div className='flex flex-col items-center p-8 gap-8'>
      <ConnectKitButton showBalance showAvatar />
      <div className='flex w-full items-end gap-4'>
        <Input label='Add user' value={user} onChange={(e) => setUser(e.target.value)} />
        <Button
          type='button'
          size='medium'
          loading={isPending}
          onClick={() => {
            writeContract({
              address,
              abi,
              functionName: 'add',
              args: [name, user],
            })
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
  )
}
