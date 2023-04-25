import Web3 from "web3"
import { CONTRACT_ADDRESS, ABI_ADDRESS } from "../config";
import { useEffect, useState } from "react";
import EditBooking from "./EditBookings";

export const AdminView = () => {

    const [account, setAccount] = useState("");
    const [contract, setContract] = useState(null);
    const [bookings, setBookings] = useState([]);
    const [bookingIds, setBookingIds] = useState(null)

    const [newNumberOfGuest, setNewNumberOfGuest] = useState(1)
    const [newName, setNewName] = useState("")
    const [newDate, setNewDate] = useState("1")
    const [newTime, setNewTime] = useState(1)

    const border = "1px solid black";

    async function handleConnectWallet () {
        if (window.ethereum) {
          window.web3 = new Web3(window.ethereum);
          await window.ethereum.enable();
          const accounts = await window.web3.eth.getAccounts();
          const contractInstance = new window.web3.eth.Contract(ABI_ADDRESS, CONTRACT_ADDRESS);
          setAccount(accounts[0]);
          setContract(contractInstance);
        }
      }

    async function handleCreateRestaurant() {
        const name = "My restaurant";
        await contract.methods.
        createRestaurant(name)
        .send({from: account})
        .once("receipt", async (receipt) => {
            console.log(receipt);
        })
    }


    async function fetchBookings() {

            const contract = new window.web3.eth.Contract(ABI_ADDRESS, CONTRACT_ADDRESS);
      

            const restaurantId = 1; 
            const bookingIds = await contract.methods.getBookings(restaurantId).call();
      

            const bookingsArray = [];
            for (let i = 0; i < bookingIds.length; i++) {
              const bookingId = bookingIds[i];
              //console.log(bookingId);
              const booking = await contract.methods.bookings(bookingId).call();
              //console.log(booking);
              bookingsArray.push(booking);
              
            }
            setBookingIds(bookingIds)
            setBookings(bookingsArray);
          };

    useEffect(() => {
        handleConnectWallet();
        fetchBookings();
        
    }, []);

    async function handleEdit (e) {
      e.preventDefault();
      const bookingId = e.target.value;
      //const bookingId = bookingIds[index];
    
      console.log(bookingId);
      EditBooking(
        bookingId,
        newNumberOfGuest,
        newName,
        newDate,
        newTime
      );
    }
    
    

  
        
    return (
        <div>
            <h1>Welcome to AdminView</h1>
            <button onClick={handleConnectWallet}>Connect your wallet.</button>
            <div>
                <button onClick={handleCreateRestaurant}>Create your restaurant.</button>
            </div>
            <div>
            <ul>
        {bookings.map((booking, index) => (
          <li key={index} >
            <p>Booking ID: {booking.id} </p>
            <p>Number of Guests: {booking.numberOfGuests}</p>
            <p>Name: {booking.name}</p>
            <p>Date: {booking.date}</p>
            <p>Time: {booking.time}</p>
            <p>Restaurant ID: {booking.restaurantId}</p>

            

            <input type="number" placeholder="Number of guests" onChange={(e) => setNewNumberOfGuest(e.target.value)} />
            <input type="text" placeholder="Name" onChange={(e) => setNewName(e.target.value)} />
            <input type="date" placeholder="Date" onChange={(e) => setNewDate(e.target.value)} />
                    <select
                        onChange={(e) => setNewTime(e.target.value)}
                        name="time"
                        id="time"
                    >
                        <option 
                            value="">
                            Välj tid
                        </option>
                        <option 
                            value={12}>
                            12:00
                        </option>
                        <option
                            value={20}>
                            20:00
                        </option>

                    </select>
                    <button 
                      onClick={(e) => handleEdit(e, booking.id)} 
                      value={booking.id}
                    >
                    Edit
                    </button>

          </li>
        ))}
      </ul>
            </div>
        </div>
)
}