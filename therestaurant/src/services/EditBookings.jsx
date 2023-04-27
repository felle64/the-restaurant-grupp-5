import Web3 from "web3";
import { CONTRACT_ADDRESS, ABI_ADDRESS } from "../config";

const EditBooking = async (bookingId, numberOfGuests, name, date, time) => {
  const web3 = new Web3(window.ethereum);
  const accounts = await web3.eth.getAccounts();
  const contractInstance = new web3.eth.Contract(ABI_ADDRESS, CONTRACT_ADDRESS);
  const account = accounts[0];
  const contract = contractInstance;

  if (!contract) {
    console.error("Contract not initialized");
    return;
  }

  try {
    const bookingIdNum = parseInt(bookingId, 10);
    const numberOfGuestsNum = parseInt(numberOfGuests, 10);

    await contract.methods
      .editBooking(bookingIdNum, numberOfGuestsNum, name, date, time)
      .send({ from: account });
  } catch (error) {
    console.error("Error editing booking:", error);
  }
};

export default EditBooking;
