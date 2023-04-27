import Web3 from "web3";
import { CONTRACT_ADDRESS, ABI_ADDRESS } from "../config";


export async function GetAllBookings(restaurantId) {
    console.log("Hämtar alla bokningar för restaurang:", restaurantId);
    const web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.getAccounts();
    const contractInstance = new web3.eth.Contract(
        ABI_ADDRESS,
        CONTRACT_ADDRESS
    );
    const account = accounts[0];
    const contract = contractInstance;

    const bookingIds = await contract.methods.getBookings(restaurantId).call();
    const bookings = [];

    for (let i = 0; i < bookingIds.length; i++) {
        const booking = await contract.methods.bookings(bookingIds[i]).call();
        bookings.push(booking);
    }
    console.log("Hämtade bokningar:", bookings);
    return bookings;
}