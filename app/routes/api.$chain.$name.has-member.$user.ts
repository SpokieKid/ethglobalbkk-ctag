import type { LoaderFunctionArgs } from '@remix-run/server-runtime'
import invariant from 'tiny-invariant'
import { http, createPublicClient, isAddress } from 'viem'
import { abi } from '~/utils/abi'
import { addresses, chains } from '~/utils/constants'

export const loader = async ({ params }: LoaderFunctionArgs) => {
  invariant(params.chain && params.name && params.user && isAddress(params.user))
  const address = addresses[Number.parseInt(params.chain)]
  invariant(address)
  const chain = chains[Number.parseInt(params.chain)]
  invariant(chain)

  const client = createPublicClient({
    chain,
    transport: http(chain.rpcUrls.default.http[0]),
  })

  const users = await client.readContract({
    address,
    abi,
    functionName: 'list',
    args: [params.name],
  })
  return users.includes(params.user)
}
