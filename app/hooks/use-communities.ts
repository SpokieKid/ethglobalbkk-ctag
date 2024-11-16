import { useQuery } from '@tanstack/react-query'
import { getCommunities } from '~/utils/api'

export default function useCommunities(user?: string) {
  return useQuery({
    queryKey: ['communities', user],
    async queryFn() {
      return user ? getCommunities(user) : []
    },
    enabled: !!user,
  })
}
