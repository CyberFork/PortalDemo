// portal对象
const conflux = window.conflux;
// sdk
const cfx = window.confluxJS;
const web3js = new Web3();
const ABI = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "tokenOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "tokenOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "minter",
        "type": "address"
      }
    ],
    "name": "ApprovalMinter",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "Owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "Inviter",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "LNS",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "Inviter_Bonus",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "NowPerLNS_Profits1e18",
        "type": "uint256"
      }
    ],
    "name": "NewLNS",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "_to",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "TrustSender",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "BeenTrusted",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "TrustValue",
        "type": "uint256"
      }
    ],
    "name": "PureTrustEvent",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "Sender",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "Channel",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "Title",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "Content",
        "type": "string"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "Receiver",
        "type": "address"
      }
    ],
    "name": "SocialMessage",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "minter",
        "type": "address"
      }
    ],
    "name": "TransferMinter",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "TrustSender",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "BeenTrusted",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "TrustType",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "TrustValue",
        "type": "uint256"
      }
    ],
    "name": "TrustEvent",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "LLL",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      }
    ],
    "name": "LoopNameSystem_Resolution",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_account",
        "type": "address"
      }
    ],
    "name": "LoopNameSystem_Reverse",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "accLNS_Profits1e18",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "acceptOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_tokenOwner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_minter",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "remaining",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_useMinterToken",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "internalType": "bool",
        "name": "success",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_tokenOwner",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "balance",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "baseFee",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "claim",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "devOperationFunds",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_account",
        "type": "address"
      }
    ],
    "name": "getAccountInfoOf",
    "outputs": [
      {
        "internalType": "string",
        "name": "userLNS_LNS",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "beenTrustCount",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "inviter",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "realizedLNS_Profits1e18",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "lastUpdatePoint",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getOperationFunds",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_receiver",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_sender",
        "type": "address"
      }
    ],
    "name": "getProportionReceiverTrustedSender",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_trustSender",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_beenTrust",
        "type": "address"
      }
    ],
    "name": "getPureTrust",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "trustV",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_receiver",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_sender",
        "type": "address"
      }
    ],
    "name": "getRatioReceiver1e18TokenForSender",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_a",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_b",
        "type": "address"
      }
    ],
    "name": "getTrustStatesForAB",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "aTb_portion",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "aTb_ratio",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "bTa_portion",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "bTa_ratio",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_startFrom",
        "type": "address"
      },
      {
        "internalType": "address[]",
        "name": "_loop",
        "type": "address[]"
      },
      {
        "internalType": "address",
        "name": "_useMinterToken",
        "type": "address"
      }
    ],
    "name": "loopAvailableAmount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "input",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "output",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "_loop",
        "type": "address[]"
      },
      {
        "internalType": "uint256",
        "name": "_amountInput",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_expectOutput",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_useMinterToken",
        "type": "address"
      }
    ],
    "name": "loopTransfer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_minter",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_tokenOwner",
        "type": "address"
      }
    ],
    "name": "minterBalanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "balance",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_tokenOwner",
        "type": "address"
      }
    ],
    "name": "netBalanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "newOwner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "pureBeenTrustCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_LNS",
        "type": "string"
      }
    ],
    "name": "registerFee",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_LNS",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "_LnsOwner",
        "type": "address"
      }
    ],
    "name": "registerLNS",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_channel",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_title",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_content",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "_sendTo",
        "type": "address"
      }
    ],
    "name": "sendSocialMessage",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_LLL",
        "type": "uint256"
      }
    ],
    "name": "setLLL",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_toTrust",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_trustV",
        "type": "uint256"
      }
    ],
    "name": "setPureTrust",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_amountFor1e18Token",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_sender",
        "type": "address"
      }
    ],
    "name": "setRatioMy1e18TokenForSender",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_msgNumber",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_title",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_content",
        "type": "string"
      }
    ],
    "name": "setThinMsg",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalLNS",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "success",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "tokenAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transferAnyERC20Token",
    "outputs": [
      {
        "internalType": "bool",
        "name": "success",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_minter",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "internalType": "bool",
        "name": "success",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_LNSer",
        "type": "address"
      }
    ],
    "name": "unClaimBonusOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
];

// 合约地址
const adLoopssMe = "0x868957d1dfdcdc5ebd44b891c3fa5d6b0405e475";
let contract = undefined;

/*
 *@Author: yozora
 *@Description: 连接ConfluxPortal
 *@Date: 2021-07-04 18:54:57
 */
async function connectConfluxPortal() {
  if (typeof window.conflux === "undefined") {
    console.error("不支持Conflux");
  }
  const network = conflux.networkVersion;
  await conflux.send("cfx_requestAccounts");
  const account = conflux.selectedAddress;
  document.getElementById("network").innerText = "current network: " + network;
  document.getElementById("account").innerText = "current account: " + account;
}

/*
 *@Author: yozora
 *@Description: 初始化合约
 *@Date: 2021-07-04 19:07:40
 */
async function initContract() {
  if (conflux.selectedAddress === null) {
    connectConfluxPortal();
  } else {
    contract = cfx.Contract({
      abi: ABI,
      address: adLoopssMe
    });
    document.getElementById("contractAddress").innerText = "contract address: " + contract.address;
    document.querySelector("#use").removeAttribute('hidden');
    document.querySelector("#send").removeAttribute('hidden');
  }
}

/*
 *@Author: yozora
 *@Description: 合约方法 (获取状态)
 *@Date: 2021-07-04 21:52:01
 */
async function getAccountInfo() {
  if (conflux.selectedAddress === null) {
    connectConfluxPortal();
  } else {
    // view
    const accountInfo = await contract.getAccountInfoOf(conflux.selectedAddress).call();
    document.getElementById("getAccountInfoOf").innerText = JSON.stringify(accountInfo, null, "\t")
  }
}

/*
 *@Author: yozora
 *@Description: 合约方法 (发起交易)
 *@Date: 2021-07-04 21:52:17
 */
async function sendTransaction() {
  if (conflux.selectedAddress === null) {
    connectConfluxPortal();
  } else {
    // no view / payable 
    // 交易CFX
    // const executedReceipt = await cfx.sendTransaction({ from: "cfxtest:aak4rvy1mepxev8w5xtxd1ftvcbx8bbvu2cwhwd5m5", 
    // to: "cfxtest:aar989b7fjrd0j7vkgj5uva15kkt0sk64jvvm3w90e",
    // value: web3js.utils.toWei("1") , data: datas }).executed();
    // 交易合约代币 transfer(to,value)
    // nonce = 4 , gas Price = 1, nonce = 4 , gas Price = 10
    const hash = await contract.transfer("cfxtest:aar989b7fjrd0j7vkgj5uva15kkt0sk64jvvm3w90e", web3js.utils.toWei("0.155")).sendTransaction({
      from: conflux.selectedAddress
    });
    const transaction = await cfx.getTransactionByHash(hash);
    document.getElementById("getTransactionByHash").innerText = JSON.stringify(transaction, null, "\t");
  }
}
