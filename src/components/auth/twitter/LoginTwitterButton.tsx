'use client';

import {Button} from "@/components/ui/button";
import {createClient} from "@/utils/supabase/client";
import { redirect } from 'next/navigation'
import {revalidatePath} from "next/cache";
import TwitterIcon from "@/components/auth/twitter/TwitterIcon";

export const LoginTwitterButton: React.FC = () => {

    const handleButtonClick = async () => {
        const supabase = createClient();
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'twitter',
        })
        if (error) {
            redirect('/error')
        }

        revalidatePath('/', 'layout')
        redirect('/')
    }
    return <>
        <Button onClick={handleButtonClick} className="w-full">
            <TwitterIcon className="mr-2 h-4 w-4" />
            Login With Twitter
        </Button>
    </>
}
