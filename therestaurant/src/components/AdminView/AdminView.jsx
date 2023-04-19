import Web3 from "web3"
import { CONTRACT_ADDRESS, ABI_ADDRESS } from "../../config";
import { useEffect, useState } from "react";

export const AdminView = () => {

    const [account, setAccount] = useState("");
    const [contract, setContract] = useState(null);
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

 


return (
    <div>
        <h1>Welcome to AdminView</h1>
        <button onClick={handleConnectWallet}>Connect your wallet.</button>

        <div>
        <button onClick={handleCreateRestaurant}>Create your restaurant.</button>
        </div>

    </div>
)
}