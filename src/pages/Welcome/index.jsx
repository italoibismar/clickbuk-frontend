import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { shootFireworks } from "../../lib/Confetti";
import { Button } from "../../components/Button";
import Trophy from "../../assets/images/trophy.png";
import { api } from "../../lib/Api";
import { Spinner } from "../../components/Spinner";

const Welcome = () => {
    const [loading, setLoading] = useState(true);
    const [validUrl, setValidUrl] = useState(null);
    const { id, token } = useParams();
    const navigate = useNavigate();

    const verifyEmailUrl = async () => {
        try {
            const url = `/auth/${id}/verify/${token}`;
            await api.get(url);
            setValidUrl(true);
            shootFireworks();
        } catch (error) {
            setValidUrl(false);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        verifyEmailUrl();
    }, []); // Deixamos o array de dependências vazio para garantir que a chamada ocorra uma vez na montagem

    return (
        <>
            {loading ? (
                <div className="bg-white z-50 fixed top-0 left-0 w-full h-full grid place-items-center">
                    <Spinner className="dark:text-white/[10%]" />
                </div>
            ) : validUrl ? (
                <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-50 px-4">
                    <div className="flex flex-col items-center p-10 bg-white max-w-[510px] rounded-2xl">
                        <img className="mb-6" src={Trophy} alt="Confirmar e-mail" />
                        <h3 className="font-extrabold text-3xl text-gray-900">Seja bem-vindo(a)</h3>
                        <p className="mt-4 mb-10 text-center text-gray-600">
                            Você já deu seu primeiro passo rumo à transformação financeira e nós te guiaremos nessa jornada.
                        </p>
                        <div className="flex flex-col gap-10 w-full">
                            <Button handleClick={() => navigate("/acesso")} text="Fazer login">
                                Fazer login
                            </Button>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Token ou ID inválido</p>
            )}
        </>
    );
};

export default Welcome;


