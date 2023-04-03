import requests
import webbrowser

client_id = '21BFBezUCBRAyWqljQpp8w'
redirect_uri = 'http://localhost.5500'
state = 'random_string'

# Step 1: Obtain authorization code
auth_url = 'https://www.reddit.com/api/v1/authorize?client_id={}&response_type=code&state={}&redirect_uri={}&duration=permanent&scope=read'.format(client_id, state, redirect_uri)
webbrowser.open(auth_url)
