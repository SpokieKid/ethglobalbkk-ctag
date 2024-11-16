import { Text } from 'degen'
import type { Address } from 'viem'
import { mainnet } from 'viem/chains'
import { useEnsName } from 'wagmi'

export default function AddressWithENS(props: { address: Address }) {
  const { data: ens, error } = useEnsName({ chainId: mainnet.id, address: props.address })
  console.log(ens, error)

  return (
    <div className='flex items-center justify-between w-full border-t px-4 py-2'>
      <Text>{props.address}</Text>
      <div className='flex-1 w-0' />
      <Text>{ens}</Text>
    </div>
  )
}
