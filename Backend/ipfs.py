import ipfshttpclient

client = ipfshttpclient.connect()

def addToIpfs(filePath):
    res = client.add(filePath)
    client.pin.add(res['Hash'])
    return res['Hash']