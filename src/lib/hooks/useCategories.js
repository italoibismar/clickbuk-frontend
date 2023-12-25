import { useQuery } from 'react-query'
import { categoriesService } from '../services/categoriesService'


export function useCategories(id) {
  const { data, isFetching } = useQuery({
    queryKey: ['categories'],
    queryFn: () => categoriesService.getAll(id),
    staleTime: Infinity,
  })

  return { 
    categories: data ?? [], 
    isLoading: isFetching
  }
}