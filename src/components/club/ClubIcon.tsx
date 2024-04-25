import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

export default function ClubIcon(props) {
    return <>
        <Avatar className="h-10 w-10">
            <AvatarImage src="/dt-logo.png" alt="Dominate Twitter Club Logo"/>
            <AvatarFallback>DT</AvatarFallback>
        </Avatar>
    </>
}
