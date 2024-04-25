import React from 'react';
import { Tweet } from 'react-tweet';

interface TweetProps {
    tweetId: string; // Type the tweet ID as string
}

const data  = {
    id_str: '1783416493213909466',
    user: {
        name: 'Abhinav Singhal',
        screen_name: 'XXX',
        profile_image_url: 'XXX'
    },
    text: 'XXX',
    created_at: 'XXX',
    favorite_count: 'XXX',
    retweet_count: 'XXX',
    entities: {
        media: [],
        urls: [],
        user_mentions: [],
        hashtags: [],
        symbols: []
    }
}

export const CustomTweet: React.FC<TweetProps> = ({ tweetId }) => {
    return (
        <div>
            <Tweet id="1783416493213909466" data={data} />
        </div>
    );
};
