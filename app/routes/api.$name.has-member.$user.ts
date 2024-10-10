import type { LoaderFunctionArgs } from '@remix-run/server-runtime'
import invariant from 'tiny-invariant'
import { http, createPublicClient } from 'viem'
import { holesky } from 'viem/chains'
import { abi, address } from '~/utils/abi'

const client = createPublicClient({
  chain: holesky,
  transport: http('https://rpc.ankr.com/eth_holesky'),
})

export const loader = async ({ params }: LoaderFunctionArgs) => {
  invariant(params.name && params.user)

  const users = await client.readContract({
    address,
    abi,
    functionName: 'list',
    args: [params.name],
  })
  return users.includes(params.user)
}
