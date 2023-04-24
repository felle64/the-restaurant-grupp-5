import Web3 from "web3"
import { CONTRACT_ADDRESS, ABI_ADDRESS } from "../config";
import { useEffect, useState } from "react";
import EditBooking from "./EditBookings";

export const AdminView = () => {

    const [account, setAccount] = useState("");
    const [contract, setContract] = useState(null);
    const [bookings, setBookings] = useState([]);
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
              const booking = await contract.methods.bookings(bookingId).call();
              bookingsArray.push(booking);
            }
      

            setBookings(bookingsArray);
          };

    useEffect(() => {
        handleConnectWallet();
        fetchBookings();
        
    }, []);


    

  
        
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
          <li key={index}>
            <p>Booking ID: {booking.id}</p>
            <p>Number of Guests: {booking.numberOfGuests}</p>
            <p>Name: {booking.name}</p>
            <p>Date: {booking.date}</p>
            <p>Time: {booking.time}</p>
            <p>Restaurant ID: {booking.restaurantId}</p>
            <button onClick={() => EditBooking(
                booking.id,
                booking.numberOfGuests,
                booking.name,
                booking.date,
                booking.time

            )}>Edit</button>
          </li>
        ))}
      </ul>
            </div>
        </div>
)
}