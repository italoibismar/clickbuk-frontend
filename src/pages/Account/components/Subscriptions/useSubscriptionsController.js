import { useQuery } from "react-query";
import { api } from "../../../../lib/Api";
import { useUsers } from "../../../../lib/hooks/useUsers";



export function useSubscriptionsController() {
    const { id } = JSON.parse(localStorage.getItem("user"));

    const { user, isLoading } = useUsers(id);

    // Pegar o link do checkout
    const fetchCheckoutLink = async () => {
        try {
            const response = await api.get(`/subscription/${id}`);

            return response.data
        } catch (error) {
            console.log("Erro ao obter o link do checkout")
        }
    }

    const { data:linkDoCheckout } = useQuery("assinar", fetchCheckoutLink);

    const redirectToCheckout = () => {
        window.location.href = linkDoCheckout;
    }
    // Pegar o link do billing portal
    const { data:linkDoPortal } = useQuery('linkDoPortal', async () => {
        const response = await api.get(`/billing-portal/${id}`);
        return response.data;
    }); 

    const redirectToPortal = () => {
        window.location.href = linkDoPortal;
    }
    // Identificar se o usuário tem alguma assinatura ativa
    const hasSubscription = user?.subscription?.find(assinatura => assinatura?.subscription_status === "active");

    function formatarTimestamp(timestamp) {    
        // Criar um objeto Date a partir do timestamp
        const dataObj = new Date(timestamp);
    
        // Mapear os meses em português
        const meses = [
            'Jan', 'Fev', 'Mar', 'Abr',
            'Mai', 'Jun', 'Jul', 'Ago',
            'Set', 'Out', 'Nov', 'Dez'
        ];
    
        // Obter o dia e o mês
        const dia = dataObj.getDate();
        const mes = meses[dataObj.getMonth()];
    
        // Formatar a data no estilo desejado
        const dataFormatada = `${dia} de ${mes}, ${dataObj.getFullYear()}`;
    
        return dataFormatada;
    }

    return {
        redirectToCheckout,
        redirectToPortal,
        hasSubscription,
        formatarTimestamp,
        isLoading
    }
}