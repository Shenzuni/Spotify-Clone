# Spotify Clone

Spotify Clone that uses Spotify API to show currently playing song and almost-full playback control with Spotify SDK
#### Technologies
- Typescript
- React
  - Vite
  - Tailwindcss
- Node.js

## Live
Remembering that it is available [live](https://spotify-clone-nu-swart.vercel.app)!

## For own use
Be sure to set the following .env files (don't use slashes on uri ending):
 
client/.env:  
VITE_CLIENT_ID="your_spotify_integration_id"  
VITE_SERVER_URL="server_url"  

server/.env:  
CLIENT_ID="your_spotify_integration_id"  
CLIENT_SECRET="your_spotify_integration_secret"  
REDIRECT_URI="client_uri"  

## How does it work?

The user is greeted by the main page, assimilating the Spotify GUI  
It is provided a music example that has all features, except playing and changing tracks  

### Main menu
![Main menu with cursor on login button](/docs/1_first_access.png)

When the user clicks "Login with Spotify", a new popup appears, requesting the user's consent and fetches Spotify's auth token 

## Popup
![Popup appears](/docs/2_login_code_retrieve.png)

Logged in, the current user is displayed at the top right of the screen

## Logged in
![Current user profile example](/docs/4_successful_login.png)

The application now tries to connect and synchronize to the SDK to play, locally, Spotify tracks

## Synchronizing
![Synchronized, track example](/docs/5_synchronized_to_spotify.png)

Now you're able to like, play, seek, go to previous/next track, toggle shuffle/repeat and change volume synchronously.

### Examples
![Side by side comparation](/docs/8_clone_and_original.png)  
### Like
![Toggle like](/docs/9_like.png)  
### Volume
![Changing volume](/docs/10_change_volume.png)  

![Changing volume](/docs/10_change_volume_2.png)  
### Seek
![Seeking](/docs/11_seek.png)  

![Seeking](/docs/11_seek_2.png)  
### Previous
![Previous to 0 milliseconds](/docs/12_prev_click_to_0_ms.png)  

![Previous to previous track](/docs/12_prev_click_previous.png)  
### Next
![Next track](/docs/13_next_again.png)  


