"use client";

import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterFollowButton,
    TwitterHashtagButton,
    TwitterMentionButton,
    TwitterTweetEmbed,
    TwitterMomentShare,
    TwitterDMButton,
    TwitterVideoEmbed,
    TwitterOnAirButton
} from 'react-twitter-embed';
import {Card, CardContent} from "@/components/ui/card";

export default function ProfileSS({src}) {
    return <>
        <Card className="w-[200px]">
            <CardContent>
                <img className="h-[200px]" src={src}/>
            </CardContent>
        </Card>
    </>
}
