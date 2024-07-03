import { db } from './firebase.js';
import { collection, addDoc } from 'firebase/firestore';

const clientId = import.meta.env.PUBLIC_SPOTIFY_CLIENT_ID;
const clientSecret = import.meta.env.PUBLIC_SPOTIFY_CLIENT_SECRET;

document.addEventListener('DOMContentLoaded', () => {
  const searchButton = document.getElementById('global-button');
  const searchInput = document.getElementById('searchInput');

  searchButton.addEventListener('click', async () => {
    const query = searchInput.value;
    const accessToken = await getAccessToken();
    const results = await searchSpotify(query, accessToken);
    displayResults(results);
  });

  async function getAccessToken() {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
      },
      body: 'grant_type=client_credentials'
    });

    const data = await response.json();
    return data.access_token;
  }

  async function searchSpotify(query, accessToken) {
    const response = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=track`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    const data = await response.json();
    return data.tracks.items;
  }

  function displayResults(tracks) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    tracks.forEach(track => {
      const albumCoverUrl = track.album.images[0].url; // Get the album cover URL
      const trackDiv = document.createElement('div');
      trackDiv.innerHTML = `
        <div class="result-item">
          <img src="${albumCoverUrl}" alt="${track.name} cover" class="album-cover" />
          <div class="result-details">
            <p>${track.name} by ${track.artists.map(artist => artist.name).join(', ')}</p>
            <button id="songButton" onclick="addTrackToFirebase('${track.id}', '${track.name}', '${track.artists.map(artist => artist.name).join(', ')}')">Request Song</button>
          </div>
        </div>
      `;
      resultsDiv.appendChild(trackDiv);
    });
  }

  window.addTrackToFirebase = async function(trackId, trackName, trackArtists) {
    const trackData = {
      id: trackId,
      name: trackName,
      artists: trackArtists
    };
    console.log('Track data to be added:', trackData); // Log the data being sent to Firestore

    try {
      const docRef = await addDoc(collection(db, "songs"), trackData);
      console.log("Document written with ID: ", docRef.id);
      alert('Track added to Firebase!');
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
});
