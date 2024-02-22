'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';

const YouTubeComponent = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchYouTubeData = async () => {
            try {
                // Replace process.env.NEXT_PUBLIC_YOUTUBE_API_KEY with your actual environment variable
                const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
                const channelId = 'UCRryQyXjjk612tHLWvHo6gw'; // Replace with the desired channel ID
                const maxResults = 10;

                const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
                    params: {
                        part: 'snippet',
                        channelId: channelId,
                        maxResults: maxResults,
                        order: 'date',
                        key: apiKey,
                    },
                });
                console.log(response.data.items)
                console.log(response.data.items[0].snippet.thumbnails.default)

                setVideos(response.data.items);
            } catch (error) {
                // Handle errors
                console.error('Error fetching YouTube data:', error);
            }
        };

        fetchYouTubeData();
    }, []);

    return (
        <div>
            <h2>YouTube Videos</h2>
            <ul> 
                {videos.map(video => (
                    <section>
                        <img src={video.snippet.thumbnails.default.url} alt="" />
                        <li key={video.id.videoId}>
                            <a
                                href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {video.snippet.title}
                            </a>
                        </li>
                    </section>

                ))}
            </ul>
        </div>
    );
};

export default YouTubeComponent;