Spotify Clone that uses Spotify API to show currently playing song and almost-full playback control with Spotify SDK.
To set for your own use, be sure to set the following .env files (don't use slashes on uri ending):
 
client/.env:

VITE_CLIENT_ID="your_spotify_integration_id"

VITE_SERVER_URL="server_url"

  
server/.env:

CLIENT_ID="your_spotify_integration_id"

CLIENT_SECRET="your_spotify_integration_secret"

REDIRECT_URI="client_uri"