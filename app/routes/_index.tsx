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
              address: '0xC9E65C23181121A688658B5c95276dE2E3325Ba0',
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
