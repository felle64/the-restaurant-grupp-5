import Web3 from "web3"
import { CONTRACT_ADDRESS, ABI_ADDRESS } from "../config";

export async function HandleCreateBooking(evt) {
    console.log(evt);
    const web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.getAccounts();
    const contractInstance = new web3.eth.Contract(ABI_ADDRESS, CONTRACT_ADDRESS);
    const account = accounts[0];
    const contract = contractInstance;
    const booking = evt;
    console.log(booking);
    console.log(contract);
    console.log(account);

    await contract.methods
    .createBooking(
        booking.numberOfGuests,
        booking.name,
        booking.date,
        booking.time,
        booking.restaurantId
    )
    .send({ from: account })
    .once("receipt", async (receipt) => {
        console.log(receipt);
    }
    );
}