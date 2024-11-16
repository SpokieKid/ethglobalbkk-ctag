import { Button, Text } from 'degen'
import { useAccount, useWriteContract } from 'wagmi'
import useCommunities from '~/hooks/use-communities'
import { abi } from '~/utils/abi'
import { addresses, chains } from '~/utils/constants'

export default function () {
  const account = useAccount()
  const { data: communities } = useCommunities(account.address)
  const { writeContract, isPending } = useWriteContract()

  return (
    <div className='p-8'>
      {communities?.map((community) => (
        <div
          key={`${community.chainId},${community.tokenId}`}
          className='flex items-center w-full border-t px-4 py-2'
        >
          <Text>
            {community.name}
            <br />
            <Text size='label'>on {chains[community.chainId]?.name}</Text>
          </Text>
          <div className='w-0 flex-1' />
          {
            [
              <Button
                key={0}
                size='extraSmall'
                loading={isPending}
                onClick={() => {
                  writeContract({
                    chainId: community.chainId,
                    // biome-ignore lint/style/noNonNullAssertion: <explanation>
                    address: addresses[community.chainId]!,
                    abi,
                    functionName: 'declare',
                    args: [community.name],
                  })
                }}
              >
                Join
              </Button>,
              <Button
                key={1}
                size='extraSmall'
                loading={isPending}
                onClick={() => {
                  writeContract({
                    chainId: community.chainId,
                    // biome-ignore lint/style/noNonNullAssertion: <explanation>
                    address: addresses[community.chainId]!,
                    abi,
                    functionName: 'declare',
                    args: [community.name],
                  })
                }}
              >
                Accept
              </Button>,
              <Button key={2} size='extraSmall' disabled>
                Waiting
              </Button>,
              <Button key={3} size='extraSmall' disabled>
                Joined
              </Button>,
            ][community.relationship]
          }
        </div>
      ))}
    </div>
  )
}
