import { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom"

import { shootFireworks } from "../../lib/Confetti";

import { Button } from "../../components/Button";

import Trophy from "../../assets/images/trophy.png";
import { api } from "../../lib/Api";

const Welcome = () => {
    const [validUrl, setValidUrl] = useState(false);
    const runningOnce = useRef(true)
    

    const param = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        if(runningOnce.current) {
            runningOnce.current = false;
            return
        }
        const verifyEmailUrl = async () => {
            try {
                const url = (`/auth/${param.id}/verify/${param.token}`);
                await api.get(url);
                setValidUrl(true);
                shootFireworks();
            } catch (error) {
                setValidUrl(false);
            }
        }
        verifyEmailUrl();
    }, [param]);
    return ( 
        <>
            {validUrl ? (
                <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-50 px-4">
                    <div className="flex flex-col items-center p-10 bg-white max-w-[510px] rounded-2xl">
                        <img className="mb-6" src={Trophy} alt="Confirmar e-mail" />
                        <h3 className="font-extrabold text-3xl text-gray-900">Seja bem-vindo(a)</h3>
                        <p className="mt-4 mb-10 text-center text-gray-600">Você já deu seu primeiro passo rumo à transformação financeira e nós te guiaremos nessa jornada.</p>
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
}
 
export default Welcome;