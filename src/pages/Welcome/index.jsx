import { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { shootFireworks } from "../../lib/Confetti";
import { Button } from "../../components/Button";
import Trophy from "../../assets/images/trophy.png";
import { api } from "../../lib/Api";
import { Spinner } from "../../components/Spinner";

const Welcome = () => {
    const [validUrl, setValidUrl] = useState(null); // Mudança para null para indicar o estado de carregamento
    const { id, token } = useParams();
    const navigate = useNavigate();
    const runningOnce = useRef(true);

    useEffect(() => {
        if (runningOnce.current) {
            runningOnce.current = false;
            return;
        }

        const verifyEmailUrl = async () => {
            try {
                const url = `/auth/${id}/verify/${token}`;
                await api.get(url);
                setValidUrl(true);
                shootFireworks();
            } catch (error) {
                setValidUrl(false);
            }
        };

        verifyEmailUrl();
    }, [id, token]);

    return (
        <>
            {validUrl === null ? ( // Adicionado um estado para indicar o carregamento
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
                <p>404 Not Found</p>
            )}
        </>
    );
};

export default Welcome;
