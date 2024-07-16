import { CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";

export function Guests (){
    return(
        <div className="space-y-6">
        <h2 className="font-semibold text-xl">Convidados</h2>
        <div className="space-y-5">

            <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5 flex-1">
                    <span className="block font-medium text-zinc-100">Cleonice Rosa Mendonça</span>
                    <span className="block text-sm text-zinc-400 truncate" >
                        cleonice@campeao.com.br
                    </span>
                </div>
                <CircleDashed className="text-zinc-400 size-5" />
            </div>

            <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5 flex-1">
                    <span className="block font-medium text-zinc-100">Cleuza Rosas</span>
                    <span className="block text-sm text-zinc-400 truncate ">
                        cleuza@gmail.com
                    </span>
                </div>
                <CircleDashed className="text-zinc-400 size-5" />
            </div>
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