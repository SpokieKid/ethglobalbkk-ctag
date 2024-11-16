import { http, createPublicClient, getAddress } from 'viem'
import { abi } from './abi'
import { addresses, chains } from './constants'

export async function getCommunities(user: string) {
  const communities = await Promise.all(
    Object.values(chains).map(async (chain) => {
      const client = createPublicClient({
        chain,
        transport: http(chain.rpcUrls.default.http[0]),
      })
      const address = addresses[chain.id]
      if (!address) {
        return []
      }
      try {
        const totalSupply = await client.readContract({
          address,
          abi,
          functionName: 'totalSupply',
        })
        const tokens = await client.multicall({
          contracts: Array.from({ length: Number(totalSupply) }).map(
            (_, index) =>
              ({
                address,
                abi,
                functionName: 'tokenByIndex',
                args: [index],
              }) as const,
          ),
          allowFailure: false,
        })
        const names = await client.multicall({
          contracts: tokens.map(
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
        const members = await client.multicall({
          contracts: names.map(
            (name) =>
              ({
                address,
                abi,
                functionName: 'list',
                args: [name],
              }) as const,
          ),
          allowFailure: false,
        })
        const declares = await client.readContract({
          address,
          abi,
          functionName: 'getDeclares',
          args: [user],
        })
        return tokens.map((tokenId, index) => ({
          chainId: chain.id,
          tokenId,
          // biome-ignore lint/style/noNonNullAssertion: <explanation>
          name: names[index]!,
          members: members[index] ?? [],
          relationship:
            (members[index]?.find((member) => getAddress(member) === getAddress(user)) ? 1 : 0) +
            (declares.includes(tokenId) ? 2 : 0),
        }))
      } catch (err) {
        console.error(err)
        return []
      }
    }),
  )
  return communities.flat()
}
