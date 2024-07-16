import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import { InviteGuestsModal } from "./invite-guests-modal"
import { ConfirmTripModal } from "./confirm-trip-modal"
import { DestinationAndDateStep } from "./steps/destination-and-date-step"
import { InviteGuestsStep } from "./steps/invite-guests-step"
import { DateRange } from "react-day-picker"
import { api } from "../../lib/axios"
//import axios from "axios"

export function CreateTripPage() {

  const navigate = useNavigate()

  const [isGuestInputOpen, setIsGuestsInputOpen] = useState(false)
  const [isGuestsModalOpen, setIsGuestModalOpen] = useState(false)
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false)

  const [destination, setDestination] = useState('')
  const [ownerName, setOwnerName] = useState('')
  const [ownerEmail, setOwnerEmail] = useState('')
  const [eventStartAndEndDates, setEvenStartAndEndDates ] = useState<DateRange | undefined>()


  const [emailsToInvite, setEmailsToInvite] = useState([''
  ])


  function openGuestsInput() {
    setIsGuestsInputOpen(true)
  }

  function closeGuestsInput() {
    setIsGuestsInputOpen(false)
  }

  function openGuestModal() {
    setIsGuestModalOpen(true)
  }

  function closeGuestsModal() {
    setIsGuestModalOpen(false)
  }

  function openConfirmTripModal() {
    setIsConfirmTripModalOpen(true)
  }

  function closeConfirmTripModal() {
    setIsConfirmTripModalOpen(false)
  }

  /*async function createTrip(event: FormEvent<HTMLFormElement>) {

    event.preventDefault()
    console.log(destination)
    console.log(ownerName)
    console.log(ownerEmail)
    console.log(eventStartAndEndDates)

    if(!destination){
      return
    }
    if(!eventStartAndEndDates?.from || !eventStartAndEndDates?.to){
      return
    }
    if(emailsToInvite.length == 0){
      return
    }
    if(!ownerName || !ownerName){
      return
    }

    const options = {
      method: 'POST',
      url: 'http://localhost:3333/trips',
      headers: {'Content-Type': 'application/json'},
      data: {
        destination,
        starts_at: eventStartAndEndDates?.from,
        ends_at: eventStartAndEndDates?.to,
        emails_to_invite: emailsToInvite,
        owner_name: ownerName,
        owner_email: ownerEmail
  
      }
    };
    
    try {
      const { data } = await axios.request(options);
      console.log(data);
    } catch (error) {
      console.error(error);
    }

   /*const response = await api.post('/trips',{
     /* destination,
      starts_at:eventStartAndEndDates?.from,
      ends_at:eventStartAndEndDates?.to,
      emails_to_invite: emailsToInvite,
      owner_name: ownerName,
      owner_email: <ownerEmail></ownerEmail>
      destination,
      starts_at: eventStartAndEndDates?.from,
      ends_at: eventStartAndEndDates?.to,
      emails_to_invite: emailsToInvite,
      owner_name: ownerName,
      owner_email: ownerEmail
    })
    //const {tripId} = response.data
    //navigate(`/trips/${tripId}`)
  }*/


  async function createTrip(event: FormEvent<HTMLFormElement>) {

    event.preventDefault()
    console.log(destination)
    console.log(ownerName)
    console.log(ownerEmail)
    console.log(eventStartAndEndDates)

    if(!destination){
      return
    }
    if(!eventStartAndEndDates?.from || !eventStartAndEndDates?.to){
      return
    }
    if(emailsToInvite.length == 0){
      return
    }
    if(!ownerName || !ownerName){
      return
    }

    const response = await api.post('/trips',{
       destination,
       starts_at:eventStartAndEndDates?.from,
       ends_at:eventStartAndEndDates?.to,
       emails_to_invite: emailsToInvite,
       owner_name: ownerName,
       owner_email: ownerEmail,

       
    
    })
    const {tripId} = response.data
    navigate(`/trips/${tripId}`)
    //console.log(tripId)
  }


  
  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString()

    if (!email) {
      return
    }

    if (emailsToInvite.includes(email)) {
      return
    }

    setEmailsToInvite([
      ...emailsToInvite,
      email
    ])

  }

  function removeEmailFromInvites(emailToRemove: string) {

    const newEmaiList = emailsToInvite.filter(email => email !== emailToRemove)
    setEmailsToInvite(newEmaiList)
  }

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-center">

      <div className="max-w-3xl w-full px-6 text-center space-y-10" >

        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="plann.er" />
          <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
        </div>

        <div className="space-y-4">

          <DestinationAndDateStep
            isGuestInputOpen={isGuestInputOpen}
            closeGuestsInput={closeGuestsInput}
            openGuestsInput={openGuestsInput}
            setDestination ={setDestination}
            setEvenStartAndEndDates ={setEvenStartAndEndDates}
            eventStartAndEndDates= {eventStartAndEndDates}
          />

          {isGuestInputOpen && (
            <InviteGuestsStep

              emailsToInvite={emailsToInvite}
              openConfirmTripModal={openConfirmTripModal}
              openGuestModal={openGuestModal}
            />
          )}

        </div>
        <p className="text-sm text-zinc-500">Ao planejar sua viagem pela plann.er você automaticamente concorda<br></br>
          com nossos <a href="#" className="text-zinc-300 underline">termos de uso</a> e <a href="#" className="text-zinc-300 underline">políticas de privacidade.</a></p>
      </div>

      {isGuestsModalOpen && (
        <InviteGuestsModal
          emailsToInvite={emailsToInvite}
          addNewEmailToInvite={addNewEmailToInvite}
          closeGuestsModal={closeGuestsModal}
          removeEmailFromInvites={removeEmailFromInvites}

        />
      )}

      {isConfirmTripModalOpen && (
        <ConfirmTripModal
          closeConfirmTripModal={closeConfirmTripModal}
          createTrip={createTrip}
          setOwnerName={setOwnerName}
          setOwnerEmail={setOwnerEmail}
        />
      )}


    </div>


  )
}


