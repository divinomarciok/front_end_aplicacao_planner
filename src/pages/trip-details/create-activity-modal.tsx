import { Calendar, Plus, Tag, X } from "lucide-react"
import { Button } from "../../components/button"
import { FormEvent } from "react"
import { useParams } from "react-router-dom"
import { api } from "../../lib/axios"

interface CreateActiviyModalProps {
    closeCreateActivityModal: () => void
}

export function CreateActiviyModal({
    closeCreateActivityModal
}: CreateActiviyModalProps) {

    const { tripId } = useParams()

    

    async function creatActivity(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const data = new FormData(event.currentTarget)

        const title = data.get('title')?.toString()
        const occurs_at = data.get('occurs_at')?.toString()

        console.log(title, occurs_at)


        api.post(`/trips/${tripId}/activities`, {
            title,
            occurs_at
        })

        window.document.location.reload()
    }

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <h2 className="font-lg font-semibold">Cadastrar Atividade</h2>
                        <button>
                            <X className="size-5 text-zinc-400" onClick={closeCreateActivityModal} />
                        </button>
                    </div>

                    <p className="text-sm text-zinc-400">
                        Todos convidados podem visualizar as Atividades.
                    </p>
                </div>

                <form onSubmit={creatActivity} className="space-y-3">

                    <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                        <Tag className="text-zinc-400 size-5" />
                        <input
                            name="title"
                            placeholder="Qual a atividade?"
                            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="h-14 flex-1 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                            <Calendar className="text-zinc-400 size-5" />
                            <input
                                type="datetime-local"
                                name="occurs_at"
                                placeholder="Data e horário atividade"
                                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                            />
                        </div>
                    </div>

                    <Button variant="primary" size="full">
                        Salvar Atividade
                        <Plus className="size-5" />
                    </Button>
                </form>
            </div>
        </div>
    )

}