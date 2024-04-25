import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

export default function ClassOf24Icon(props) {
    return <>
        <Avatar className="h-10 w-10">
            <AvatarImage src="/assets/classOf24/24-logo.png" alt="Dominate Twitter Club Logo"/>
            <AvatarFallback>DT</AvatarFallback>
        </Avatar>
    </>
}
