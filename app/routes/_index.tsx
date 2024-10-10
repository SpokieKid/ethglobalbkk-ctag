import { ConnectKitButton } from 'connectkit'
import { useState } from 'react'
import { useWriteContract } from 'wagmi'
import { abi } from '~/utils/abi'

export default function () {
  const { writeContract } = useWriteContract()
  const [name, setName] = useState('')

  return (
    <div className='flex flex-col items-center p-8'>
      <ConnectKitButton showBalance showAvatar />
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button
        type='button'
        onClick={() => {
          writeContract({
            address: '0xC9E65C23181121A688658B5c95276dE2E3325Ba0',
            abi,
            functionName: 'mint',
            args: [name],
          })
        }}
      >
        mint
      </button>
    </div>
  )
}
