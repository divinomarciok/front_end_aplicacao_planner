import { ArrowRight, Calendar, MapPin, Settings2, X } from "lucide-react";
import { Button } from "../../../components/button";
import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import {format } from 'date-fns'
import "react-day-picker/dist/style.css";

interface DestinationAndDateStepProps {
  isGuestInputOpen: boolean
  closeGuestsInput: () => void
  openGuestsInput: () => void
  setDestination: (destination: string) => void
  setEvenStartAndEndDates: (date: DateRange | undefined)=> void
  eventStartAndEndDates: DateRange | undefined
}

export function DestinationAndDateStep({
  isGuestInputOpen,
  closeGuestsInput,
  openGuestsInput,
  setDestination,
  setEvenStartAndEndDates,
  eventStartAndEndDates
  
}: DestinationAndDateStepProps) {

  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)
  //const [eventStartAndEndDates, setEvenStartAndEndDates ] = useState<DateRange | undefined>()

  function openDatePicker() {
    return setIsDatePickerOpen(true)
  }

  function closeDatePicker(){
    return setIsDatePickerOpen(false)

  }

  const displayedDate = eventStartAndEndDates && eventStartAndEndDates.from && eventStartAndEndDates.to
   ? format(eventStartAndEndDates.from,"d' de 'LLL").concat('  até ') .concat (format(eventStartAndEndDates.to,"d' de 'LLL"))
   : null
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">

      <div className="flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400" />
        <input 
        type="text"
         disabled={isGuestInputOpen}
          placeholder="Para onde você vai?" 
          className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" 
          onChange={event => setDestination(event.target.value)}/>
      </div>

      <button onClick={openDatePicker} disabled={isGuestInputOpen} className="flex items-center gap-2 text-left w-[240px]">
        <Calendar className="size-5 text-zinc-400" />
        <span className=" text-lg placeholder-zinc-400 w-40 flex-1" >
          {displayedDate || 'Quando ? '}
        </span>
      </button>

      {isDatePickerOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
        <div className="rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h2 className="font-lg font-semibold">Selecione a data</h2>
              <button type="button" onClick={closeDatePicker}>
              <X className="size-5 text-zinc-400"  />
            </button>
          </div>             
          </div> 
          <DayPicker mode="range" selected={eventStartAndEndDates} onSelect={setEvenStartAndEndDates} />
        </div>
      </div>
      )}
 
      
      <div className="w-px h-6 bg-zinc-800" />
      {isGuestInputOpen ? (

        <Button onClick={closeGuestsInput} variant="secondary">
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>

      ) : (
        <Button onClick={openGuestsInput} variant="primary">
          Continuar
          <ArrowRight className="size-5" />
        </Button>

      )}


    </div>
  )
}