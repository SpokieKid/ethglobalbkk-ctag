import { ConnectKitButton } from 'connectkit'
import { Button, Input, Text } from 'degen'
import { useState } from 'react'
import { useAccount, useReadContract, useReadContracts, useWriteContract } from 'wagmi'
import { abi, address } from '~/utils/abi'

export default function () {
  const account = useAccount()
  const { writeContract, isPending } = useWriteContract()
  const [name, setName] = useState('')
  const { data: balanceOf } = useReadContract({
    address,
    abi,
    functionName: 'balanceOf',
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    args: [account.address!],
    query: { enabled: !!account.address },
  })
  const { data: tokens } = useReadContracts({
    contracts: Array.from({ length: Number(balanceOf) }).map(
      (_, index) =>
        ({
          address,
          abi,
          functionName: 'tokenOfOwnerByIndex',
          // biome-ignore lint/style/noNonNullAssertion: <explanation>
          args: [account.address!, index],
        }) as const,
    ),
    allowFailure: false,
    query: { enabled: !!account.address && !!balanceOf && balanceOf > 0n },
  })
  const { data: names } = useReadContracts({
    contracts: tokens?.map(
      (token) =>
        ({
          address,
          abi,
          functionName: 'names',
          args: [token],
        }) as const,
    ),
    allowFailure: false,
  })

  return (
    <div className='flex flex-col items-center p-8 gap-8'>
      <ConnectKitButton showBalance showAvatar />
      <div className='flex w-full items-end gap-4'>
        <Input
          label='Ctag name'
          prefix='#'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button
          type='button'
          size='medium'
          loading={isPending}
          onClick={() => {
            writeContract({
              address,
              abi,
              functionName: 'mint',
              args: [name],
            })
          }}
        >
          Mint
        </Button>
      </div>
      <div className='w-full'>
        {names?.map((name) => (
          <div key={name} className='flex items-center justify-between w-full border-t px-4 py-2'>
            <Text>#{name}</Text>
            <Button as='a' href={`/${name}`} variant='tertiary' size='small'>
              Manage
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
