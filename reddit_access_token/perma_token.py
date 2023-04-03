import requests

client_id = '21BFBezUCBRAyWqljQpp8w'
client_secret = 'V1dRfYWFvrcmQCVfmFDYUee2c3GETg'
redirect_uri = 'http://localhost.5500'
auth_code = 'MpxBhHgVeSeHxCBmpAJCQrsZ3CDhAA' # Replace this with the authorization code that you received

data = {
    'grant_type': 'authorization_code',
    'code': auth_code,
    'redirect_uri': redirect_uri
}

auth = requests.auth.HTTPBasicAuth(client_id, client_secret)
headers = {'User-Agent': 'MyBot/0.0.1'}

response = requests.post('https://www.reddit.com/api/v1/access_token', 
                         auth=auth, data=data, headers=headers)

print(response.json())
