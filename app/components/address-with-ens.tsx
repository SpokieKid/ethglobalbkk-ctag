import { Text } from 'degen'
import { isAddress } from 'viem'
import { mainnet } from 'viem/chains'
import { useEnsName } from 'wagmi'

export default function AddressWithENS(props: { user: string }) {
  const { data: ens, error } = useEnsName({
    chainId: mainnet.id,
    address: isAddress(props.user) ? props.user : undefined,
  })
  console.log(ens, error)

  return (
    <div className='flex items-center justify-between w-full border-t px-4 py-2'>
      <Text>{props.user}</Text>
      <div className='flex-1 w-0' />
      <Text>{ens}</Text>
    </div>
  )
}
