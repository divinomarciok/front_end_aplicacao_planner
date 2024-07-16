import { CheckCircle, CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";

interface Participant{
    id: string
    name: string
    email: string
    is_confirmed: boolean

}


export function Guests (){    
    const { tripId } = useParams()

    const [participants, setParticipants] = useState<Participant[] >([])



    useEffect(() => {
        api.get(`/trips/${tripId}/participants`).then(response => setParticipants(response.data.participants))
    }, [tripId])



    return(
        <div className="space-y-6">
        <h2 className="font-semibold text-xl">Convidados</h2>
        <div className="space-y-5">

        {participants.map( (participant, index) => {

            return (
                <div key={participant.id} className="flex items-center justify-between gap-4">
                <div className="space-y-1.5 flex-1">
                    <span className="block font-medium text-zinc-100">{participant.name ?? `Convidado ${index}`}</span>
                    <span className="block text-sm text-zinc-400 truncate" >
                       {participant.email}
                    </span>
                </div>
                {participant.is_confirmed?(
                    <CheckCircle className="text-green-400 size-5"/>
                ):(
                    <CircleDashed className="text-zinc-400 size-5" />
                )}
                
            </div>
            )
        })}


     

       
        </div>
        <button className="flex items-center w-full justify-center bg-zinc-800 text-zinc-200 rounded-lg px-5 h-11 font-medium gap-2 hover:bg-zinc-700" >
           
        </button>

        <Button variant="secondary" size="full"> 
        <UserCog className="size-5" />
         Gerenciar Convidados
        </Button>
    </div>
    )
}