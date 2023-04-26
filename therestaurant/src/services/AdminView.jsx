import Web3 from "web3"
import { CONTRACT_ADDRESS, ABI_ADDRESS } from "../config";
import { useEffect, useState } from "react";
import EditBooking from "./EditBookings";
import RemoveBookings from "./RemoveBookings";
import './AdminView.css';

export const AdminView = () => {

    const [account, setAccount] = useState("");
    const [contract, setContract] = useState(null);
    const [restaurantExists, setRestaurantExists] = useState(false);
    const [bookings, setBookings] = useState([]);
    const [bookingIds, setBookingIds] = useState(null)
    const [filterDate, setFilterDate] = useState(""); //låg ett "s" i useState?
    const [filterTime, setFilterTime] = useState('');
    const [newNumberOfGuest, setNewNumberOfGuest] = useState(1)
    const [newName, setNewName] = useState("")
    const [newDate, setNewDate] = useState("1")
    const [newTime, setNewTime] = useState(1)
    
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
        const name = "East Harmony";
        await contract.methods.
        createRestaurant(name)
        .send({from: account})
        .once("receipt", async (receipt) => {
            console.log(receipt);
        })
    }

    /* async function checkRestaurantExists() {
      const restaurantName = "East Harmony";
      const restaurantCount = await contract.methods.restaurantCount().call();
      console.log(restaurantCount);
      
      for (let i = 1; i <= restaurantCount; i++) {
        const restaurant = await contract.methods.restaurants(i).call();
        console.log(restaurant);
        if (restaurant.name === restaurantName) {
          setRestaurantExists(true);
          break;
        }
      }
    } */
    

    async function fetchBookings() {
      const contract = new window.web3.eth.Contract(ABI_ADDRESS, CONTRACT_ADDRESS);
      const restaurantId = 1; 
      const bookingIds = await contract.methods.getBookings(restaurantId).call();
      const bookingsArray = []; // Move this line here
      for (let i = 0; i < bookingIds.length; i++) {
        const bookingId = bookingIds[i];
        const booking = await contract.methods.bookings(bookingId).call();
        bookingsArray.push(booking);  
        setBookingIds(bookingIds);
        setBookings(bookingsArray);
        console.log(bookingsArray);
      }
      setBookings([...bookings, ...bookingsArray]);
    };

    useEffect(() => {
      handleConnectWallet();
      fetchBookings();
      /* checkRestaurantExists(); */
    }, []);
    
    async function handleEdit(bookingId) {
      console.log(bookingId);
      await EditBooking(
        bookingId,
        newNumberOfGuest,
        newName,
        newDate,
        newTime
      );
      
    }

    async function handleRemove(bookingId) {
      console.log(bookingId);
      await RemoveBookings(bookingId);
      
    }
    
    function filterBookings(bookings, filterDate, filterTime) {
      if (!filterDate && !filterTime) {
        console.log(bookings);
        return bookings;
      }
    
      return bookings.filter((booking) => {
        if ((filterDate && filterDate !== booking.date) || (filterTime && filterTime !== booking.time)) {
          return false;
        }
        return true;
      });
    }
    
    const bookingsToShow = filterBookings(bookings, filterDate, filterTime);
    console.log(bookingsToShow);
    
    return (
      <div className="admin-view">
        <h1>Admin View</h1>
       {/*  {!restaurantExists && <button onClick={handleCreateRestaurant}>Create Restaurant</button>} */}



        <input
          type="date"
          name="date"
          id="date-filter"
          className="admin-view__filter-input"
          onChange={(e) => setFilterDate(e.target.value)}
        />

        <label htmlFor="time-filter">Filter by time:</label>
        <select name="time-filter" id="time-filter" onChange={(e) => setFilterTime(e.target.value)}>
          <option value="">All times</option>
          <option value="12">12:00</option>
          <option value="20">20:00</option>
        </select>

        <div className="admin-view__bookings">
          {bookingsToShow.map((booking, index) => (
            <div key={index} className="admin-view__booking">
              <div className="admin-view__booking-details">
                <p className="admin-view__booking-id">Booking ID: {booking.id}</p>
                <p className="admin-view__booking-guests">Number of Guests: {booking.numberOfGuests}</p>
                <p className="admin-view__booking-name">Name: {booking.name}</p>
                <p className="admin-view__booking-date">Date: {booking.date}</p>
                <p className="admin-view__booking-time">Time: {booking.time}:00</p>
                <p className="admin-view__booking-restaurant-id">Restaurant ID: {booking.restaurantId}</p>
              </div>
              <div className="admin-view__booking-edit">
                <input type="number" placeholder="Number of guests" className="admin-view__edit-input" onChange={(e) => setNewNumberOfGuest(e.target.value)} />
                <input type="text" placeholder="Name" className="admin-view__edit-input" onChange={(e) => setNewName(e.target.value)} />
                <input type="date" placeholder="Date" className="admin-view__edit-input" onChange={(e) => setNewDate(e.target.value)} />
                <select
                  onChange={(e) => setNewTime(e.target.value)}
                  name="time"
                  id="time"
                  className="admin-view__edit-select"
                >
                  <option value="">Choose time</option>
                  <option value="12">12:00</option>
                  <option value="20">20:00</option>
                </select>
                <button
                  onClick={() => handleEdit(booking.id)}
                  value={booking.id}
                  className="admin-view__edit-button"
                >
                  Edit
                </button>
              </div>
              <div className="admin-view__booking-remove">
                <button onClick={() => handleRemove(booking.id)}
                value={booking.id}
                className="admin-view__remove-button">Remove</button>
                </div>
            </div>
          ))}
        </div>
      </div>
    );
  }