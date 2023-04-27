import Web3 from "web3";
import { CONTRACT_ADDRESS, ABI_ADDRESS } from "../config";
import { useState } from "react";

const RemoveBookings = async (e) =>{
    console.log(e);

    const web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.getAccounts();
    const contractInstance = new web3.eth.Contract(ABI_ADDRESS, CONTRACT_ADDRESS);
    const account = accounts[0];
    const contract = contractInstance;
    console.log(contract);
    console.log(account);

    if (!contract) {
        console.error("Contract not initialized");
        return;
    }

    try {

    await contract.methods
        .removeBooking(e)
        .send({ from: account });

    console.log("Booking removed successfully");
    } catch (error) {
    console.error("Error removing booking:", error);
    }


}

export default RemoveBookings;