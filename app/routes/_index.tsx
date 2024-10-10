import { ConnectKitButton } from 'connectkit'
import { Button, Input } from 'degen'
import { useState } from 'react'
import { useWriteContract } from 'wagmi'
import { abi } from '~/utils/abi'

export default function () {
  const { writeContract, isPending } = useWriteContract()
  const [name, setName] = useState('')

  return (
    <div className='flex flex-col items-center p-8'>
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
          variant='secondary'
          loading={isPending}
          onClick={() => {
            writeContract({
              address: '0x1a3a9A054bC10639Ee86b3300CB00Db808738C2a',
              abi,
              functionName: 'mint',
              args: [name],
            })
          }}
        >
          Mint
        </Button>
      </div>
    </div>
  )
}
