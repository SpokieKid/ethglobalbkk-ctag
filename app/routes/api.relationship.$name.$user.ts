import type { LoaderFunctionArgs } from '@remix-run/server-runtime'
import invariant from 'tiny-invariant'
import { getCommunities } from '~/utils/api'

export const loader = async ({ params }: LoaderFunctionArgs) => {
  invariant(params.name && params.user)

  const communities = await getCommunities(params.user)
  return communities.find(({ name }) => name === params.name)?.relationship ?? 0
}
