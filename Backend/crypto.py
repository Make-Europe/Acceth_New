from tqdm import trange
import requests, json
from web3 import Web3
from web3.middleware import geth_poa_middleware
w3 = Web3(Web3.HTTPProvider('https://forno.celo.org'))
w3.middleware_onion.inject(geth_poa_middleware, layer=0)  #  Inject poa middleware 

abi = '[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"customer","type":"address"},{"internalType":"string","name":"tokenURI","type":"string"}],"name":"awardTicket","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]'
tckt_add = '0x05798781Bc7cDAef3996B4529E75a3Ad4702C03c'
alice = '0x5f026494524c24C0e7B54FC2C68fE292b74D8121'
bob = '0x916dd63525c4A5340D6C2C022e5811c9446eC320'
celo_test = '9059fded856e5b1895c082de1ea5f316cf498820c0873cbf152ec172b863e3de'
celo_test_p = '0x7d8cE01D0feCEdd800F146A8eEB2f2769bb9F5c6'

def getContract(address, abi):
    contract = w3.eth.contract(address=w3.toChecksumAddress(address), abi=abi)
    return contract

contract = getContract(tckt_add, abi)

def getBalance_eth(address):
    balance = w3.eth.get_balance(w3.toChecksumAddress(address))
    return balance

def getBalance_nft(address):
    balance = contract.functions.balanceOf(w3.toChecksumAddress(address)).call()
    return balance

def returnName_contract():
    name = contract.functions.name().call()
    return name

def mintToUser(address, uri):
    tx = contract.functions.awardTicket(address, uri).transact({'from': celo_test_p})

    #tx_hash = contract.functions.awardTicket(Web3.toChecksumAddress(address), uri).buildTransaction({
#
    #    "chainId": 42220,
    #    "gasPrice": w3.eth.gas_price,
    #    "from": Web3.toChecksumAddress(celo_test_p),
    #    "nonce": 2,
    #    })
    #    
    #w3.eth.account.sign_transaction(tx_hash, celo_test)
#
   
    #tx_receipt = w3.eth.wait_for_transaction_receipt(tx_hash)
    return tx

def mint(pkey, address, uri):
    nonce = w3.eth.get_transaction_count(pkey)

    # Create the contracrt
    mint_txn = contract.functions.awardTicket(address, uri).buildTransaction(
        {
            "chainId": 42220,
            "gas": 10000000,
            "gasPrice": w3.toWei("1", "gwei"),
            "nonce": nonce,
        }
    )

    signed_txn = w3.eth.account.sign_transaction(mint_txn, private_key=celo_test_p)

    w3.eth.send_raw_transaction(signed_txn.rawTransaction)
    hash = w3.toHex(w3.keccak(signed_txn.rawTransaction))

    print(f"mint txn hash: {hash} ")

    receipt = w3.eth.wait_for_transaction_receipt(hash)  # hmmm have to wait...

    hex_tokenid = receipt["logs"][0]["topics"][3].hex()  # this is token id in hex

    # convert from hex to decmial
    tokenid = int(hex_tokenid, 16)
    print(f"Got tokenid: {tokenid}")

    return hash, tokenid

def returnSymbol_contract():
    symbol = contract.functions.symbol().call()
    return symbol

def returnTokensOf(address):
    tokensOf = contract.functions.tokensOf(w3.toChecksumAddress(address)).call()
    return tokensOf

def returnAllTokensMinted():
    allTokens = contract.functions.totalTokensMinted().call()
    return allTokens

def returnBaseTokenUri():
    tokenUri = contract.functions.baseTokenURI().call()
    return tokenUri

def returnTokenUri(id):
    tokenUri = contract.functions.tokenURI(id).call()
    return tokenUri

def returnOwnerOf(id):
    owner = contract.functions.ownerOf(id).call()
    return owner

def getAllDinosSingle():
    dinos = []
    for t in trange(returnAllTokensMinted()):
        uri = returnTokenUri(t+1)
        dino = requests.get(uri).json()
        if dino:
            dinos.append(dino)

    with open('dinosSingle.json', 'w', encoding='utf-8') as f:
        json.dump(dinos, f, ensure_ascii=False, indent=4)
