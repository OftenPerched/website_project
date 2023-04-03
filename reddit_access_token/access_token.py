import requests

client_id = '21BFBezUCBRAyWqljQpp8w'
client_secret = 'V1dRfYWFvrcmQCVfmFDYUee2c3GETg'
username = 'OftenPerched'
password = 'VenAvq62hWccrWe'

auth = requests.auth.HTTPBasicAuth(client_id, client_secret)
data = {
    'grant_type': 'password',
    'username': username,
    'password': password
}
headers = {'User-Agent': 'MyBot/0.0.1'}
response = requests.post('https://www.reddit.com/api/v1/access_token',
                         auth=auth, data=data, headers=headers, timeout=20)
                         
print(response.json())
