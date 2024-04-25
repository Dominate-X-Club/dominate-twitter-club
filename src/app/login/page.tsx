import {LoginTwitterButton} from "@/components/auth/twitter/LoginTwitterButton";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {CardHeader, CardContent, CardFooter, Card, CardTitle, CardDescription} from "@/components/ui/card"
import {Button} from "@/components/ui/button";
export default function Login() {
    return <>
        <div className={'flex  items-center justify-center h-screen'}>
            <Card className="mx-auto max-w-sm p-6">
                <CardHeader className="text-center space-y">
                    <div className="flex flex-col items-center justify-center gap-3">
                        <Avatar className="h-16 w-16">
                            <AvatarImage src="/dt-logo.png" alt="Dominate Twitter Club Logo"/>
                            <AvatarFallback>DT</AvatarFallback>
                        </Avatar>
                        <CardTitle className="text-2xl font-bold">Dominate Twitter Club</CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    <LoginTwitterButton/>
                </CardContent>
                <CardFooter className="border-t justify-center">
                    <Button size="sm" variant="ghost">
                        Privacy Policy
                    </Button>
                    <Button size="sm" variant="ghost">
                        Terms of Use
                    </Button>
                </CardFooter>
            </Card>
        </div>
    </>
}
