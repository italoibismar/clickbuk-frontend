import { useQuery } from 'react-query'
import { transactionsService } from '../services/transactionsService'


export function useTransactions(id) {
  const { data, isFetching } = useQuery({
    queryKey: ['transactions'],
    queryFn: () => transactionsService.getAll(id),
    staleTime: Infinity,
    keepPreviousData: true
  },
  {
    enabled: Boolean(id),
    keepPreviousData: true,
});

  return { 
    transactions: data ?? [], 
    isLoading: isFetching
  }
}