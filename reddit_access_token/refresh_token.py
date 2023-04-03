import requests

client_id = 'your_client_id'
client_secret = 'your_client_secret'
refresh_token = 'your_refresh_token' # Replace this with the refresh token that you received

data = {
    'grant_type': 'refresh_token',
    'refresh_token': refresh_token
}

auth = requests.auth.HTTPBasicAuth(client_id, client_secret)
headers = {'User-Agent': 'MyBot/0.0.1'}

response = requests.post('https://www.reddit.com/api/v1/access_token', 
                         auth=auth, data=data, headers=headers)

print(response.json())
