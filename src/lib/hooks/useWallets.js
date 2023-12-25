import { useQuery } from 'react-query'
import { walletsService } from '../services/walletsService'


export function useWallets(id) {
  const { data, isFetching } = useQuery({
    queryKey: ['wallets'],
    queryFn: () => walletsService.getAll(id),
    staleTime: Infinity,
  })

  return { 
    accounts: data ?? [], 
    isLoading: isFetching
  }
}
