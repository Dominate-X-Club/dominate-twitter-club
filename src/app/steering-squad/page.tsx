"use client";

import TwitterProfileSS from "@/components/ui/twitter/profile/ProfileSS";
import React from "react";
import {CustomTweet} from "@/components/ui/twitter/profile/CustomTweet";


export default class SteeringSquad extends React.Component<any, any> {
    render () {
        // use linkProps if you want to pass attributes to all links
        const linkProps = {target: '_blank', rel: 'noreferrer'}

        return <>
            <h1>Steering Squad</h1>
            <TwitterProfileSS src="/assets/members/whyrohitwhy/profile.png"></TwitterProfileSS>
            <CustomTweet tweetId="1440734480000000000"></CustomTweet>
        </>
    }
}
