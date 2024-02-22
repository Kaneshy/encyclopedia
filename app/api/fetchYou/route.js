// Replace YOUR_API_KEY with the API key obtained from the Google Cloud Console
const apiKey = 'AIzaSyAUwkDPwErSWgWAj2te9OAoGBqjqh2BSDk';



export const init = async () => {
    gapi.client.init({
        apiKey: 'AIzaSyAUwkDPwErSWgWAj2te9OAoGBqjqh2BSDk',
        discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"],
      }).then(() => {
        // API is ready
        console.log("YouTube API ready");
        // Call the function to fetch YouTube data
        fetchYouTubeData();
      });
}


export const fetchYouTubeData = async () => {
  // Example: Fetching videos from a specific channel
  gapi.client.youtube.search.list({
    part: 'snippet',
    channelId: 'UCRryQyXjjk612tHLWvHo6gw', // Replace with the desired channel ID
    maxResults: 10, // Adjust as needed
    order: 'date', // You can change the order as needed
  }).then(response => {
    // Handle the response
    console.log(response.result);
  }, error => {
    // Handle errors
    console.error('Error fetching YouTube data:', error);
  });
}