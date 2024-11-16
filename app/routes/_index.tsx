import { Button, Input, Text } from 'degen'
import { useState } from 'react'
import { useAccount, useChainId, useReadContract, useReadContracts, useWriteContract } from 'wagmi'
import Footer from '~/components/footer'
import { abi, addresses, chains } from '~/utils/abi'

export default function () {
  const account = useAccount()
  const chainId = useChainId()
  const [name, setName] = useState('')
  const { writeContract, isPending } = useWriteContract({
    mutation: {
      onSuccess() {
        setName('')
      },
    },
  })
  // biome-ignore lint/style/noNonNullAssertion: <explanation>
  const address = addresses[chainId]!
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
  const blockExplorer = chains[chainId]?.blockExplorers?.default.url

  return (
    <>
      {account.address ? (
        <div className='flex flex-col items-center p-8 gap-8'>
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
            {names?.map((name, index) => (
              <div key={name} className='flex items-center w-full border-t px-4 py-2 gap-2'>
                <Text>#{name}</Text>
                <div className='w-0 flex-1' />
                {tokens?.[index] ? (
                  <Button
                    as='a'
                    target='_blank'
                    rel='noreferrer'
                    href={
                      blockExplorer?.includes('etherscan')
                        ? `${blockExplorer}/nft/${address}/${tokens[index]}`
                        : `${blockExplorer}/token/${address}/instance/${tokens[index]}`
                    }
                    variant='transparent'
                    size='extraSmall'
                  >
                    View on Explorer
                  </Button>
                ) : null}
                <Button as='a' href={`/name/${name}`} variant='tertiary' size='extraSmall'>
                  Manage
                </Button>
              </div>
            ))}
          </div>
        </div>
      ) : null}
      <Footer chainId={chainId} />
    </>
  )
}
