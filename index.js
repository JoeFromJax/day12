  // Initialize the ethers provider
  const ethers = require('ethers');
  const provider = new ethers.providers.Web3Provider(window.ethereum);

document.addEventListener('DOMContentLoaded', function() {

  // Get the button element
  const button = document.getElementById('my-button');



  // Add an event listener to the button
  button.addEventListener('click', async function() {
    // Request the user's Ethereum accounts
    const accounts = await provider.send("eth_requestAccounts", []);
    const address = accounts[0];

    // Display the address on the page
    document.getElementById('ethereum-address').innerHTML = `Your Ethereum address is: ${address}`;

    // Get the user's balance and display it on the page
    const balance = await provider.getBalance(address);
    document.getElementById('eth-balance').innerHTML = `Your Ethereum balance is: ${balance.toString()} wei`;
  });

  const blockButton = document.getElementById('block-button');

  blockButton.addEventListener('click', async function() {
  const blockNumber = await provider.getBlockNumber();
  // When the button is clicked, get the current block number using the provider
  // Display the block number on the page
    document.getElementById("block-number").innerHTML = `Current block number: ${blockNumber}`;
  });

  
  const gasButton = document.getElementById('gas-button');
  gasButton.addEventListener('click', async function() {
  // Get the current gas price
  const gasPrice = await provider.getGasPrice();

  // Convert the gas price to gwei
  const gasPriceInGwei = ethers.utils.formatUnits(gasPrice, 'gwei');

  // Display the gas price on the page
  document.getElementById('gas-price').innerHTML = `Current gas price: ${gasPriceInGwei} gwei`;
  });

  
  const chainButton = document.getElementById('chain-button');
  chainButton.addEventListener('click', async function() {
    // Display the chain ID on the page
    const network = await provider.getNetwork();
    const chainId = network.chainId;
    document.getElementById('chain-id').innerHTML = `Chain ID: ${chainId}`;
  });
});