import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/button";

export function ImportantLink (){
    return (
        <div className="space-y-6">
                        <h2 className="font-semibold text-xl">Links Importantes</h2>
                        <div className="space-y-5">

                            <div className="flex items-center justify-between gap-4">
                                <div className="space-y-1.5 flex-1">
                                    <span className="block font-medium text-zinc-100">Reserva AirBnb</span>
                                    <a href="$" className="block text-xs text-zinc-400 truncate hover:text-zinc-200">https://www.AirBnb.com.br/rooms/1231234444654651212313212313213213211</a>
                                </div>
                                <Link2 className="text-zinc-400 size-5" />
                            </div>

                            <div className="flex items-center justify-between gap-4">
                                <div className="space-y-1.5 flex-1">
                                    <span className="block font-medium text-zinc-100">Reserva AirBnb</span>
                                    <a href="$" className="block text-xs text-zinc-400 truncate hover:text-zinc-200">https://www.AirBnb.com.br/rooms/1231234444654651212313212313213213211</a>
                                </div>
                                <Link2 className="text-zinc-400 size-5" />
                            </div>
                        </div>                       

                        <Button variant="primary" size='full'>
                        <Plus className="size-5" />
                        Cadastrar novo Link
                        </Button>
                    </div>
    )
}