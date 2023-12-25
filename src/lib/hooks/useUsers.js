import { useQuery } from "react-query";
import { usersService } from "../services/usersService";

export function useUsers(id) {
    const { data, isFetching, isError } = useQuery({
      queryKey: ['users'],
      queryFn: () => usersService.show(id),
      staleTime: Infinity,
    })
  
    return { 
      user: data ?? [], 
      isLoading: isFetching,
      isError
    }
  }
  