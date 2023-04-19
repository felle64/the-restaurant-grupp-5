import Web3 from "web3"
import { CONTRACT_ADDRESS, ABI_ADDRESS } from "../../config";
import { useEffect, useState } from "react";
import { CreateBooking } from "../Booking/CreateBooking";
import { Booking } from "../../modules/Booking";

export const AdminView = () => {

    const [account, setAccount] = useState("");
    const [contract, setContract] = useState(null);
    const [booking, setBooking] = useState(new Booking(1, "1", "1" , "1", 1));
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

    async function handleCreateBooking() {


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
        });
    }


 


return (
    <div>
        <h1>Welcome to AdminView</h1>
        <button onClick={handleConnectWallet}>Connect your wallet.</button>

        <div>
        <button onClick={handleCreateRestaurant}>Create your restaurant.</button>
        </div>

        <div>
        <button onClick={handleCreateBooking}>Create your booking.</button>

        </div>

    </div>
)
}