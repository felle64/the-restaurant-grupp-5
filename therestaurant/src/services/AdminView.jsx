import Web3 from "web3"
import { CONTRACT_ADDRESS, ABI_ADDRESS } from "../config";
import { useEffect, useState } from "react";

export const AdminView = () => {

    const [account, setAccount] = useState("");
    const [contract, setContract] = useState(null);
    const [booking, setBooking] = useState([]);
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

    async function handleGetBooking(e){
        e.preventDefault();
        for (let i = 1; i <= booking.id; i++){
        const booking = await contract.methods.getBookings().call();
        //console.log(booking);
        setBooking(booking);
        }
        
        for (let i = 1; i <= booking.id; i++){
            const booking = await contract.methods.bookings(i).call();
            console.log(booking);
            setBooking(booking);
        }
    }

    useEffect(() => {
        handleConnectWallet();
    }, []);


    
        
    return (
        <div>
            <h1>Welcome to AdminView</h1>
            <button onClick={handleConnectWallet}>Connect your wallet.</button>
            <div>
                <button onClick={handleCreateRestaurant}>Create your restaurant.</button>
            </div>
            <div>
                <button onClick={handleGetBooking}>Get your bookings.</button>
            </div>
        </div>
)
}