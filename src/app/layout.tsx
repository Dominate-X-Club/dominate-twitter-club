import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Link from "next/link";
import ClubIcon from "@/components/club/ClubIcon";
import {Button} from "@/components/ui/button";
import {LandingNav} from "@/components/nav/landingNav/LandingNav";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "#DominateTwitter Club 🚀",
    description: "A community of digital nomads aiming for Twitter success while living life on their own terms.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en">
        <body className={inter.className}>

        <div className="flex flex-col min-h-[100dvh]">

            {/*<ThemeProvider*/}
            {/*    attribute="class"*/}
            {/*    defaultTheme="system"*/}
            {/*    enableSystem*/}
            {/*    disableTransitionOnChange*/}
            {/*>*/}
                <header
                    className="sticky top-0 z-10 flex h-16 w-full items-center
                     justify-between bg-white px-4 shadow-sm dark:bg-gray-950 md:px-6">
                    <Link className="flex items-center" href="/">
                        <ClubIcon/>
                        {/*<span className="ml-2 text-lg font-semibold">#DominateTwitter</span>*/}
                    </Link>
                    <nav className="hidden items-center gap-4 sm:flex justify-content-center">
                        <LandingNav/>
                    </nav>
                    <div className="flex justify-end items-center gap-2 flex-grow-1">
                        {/*<ModeToggle />*/}
                        <Button size="sm" className={'color-orange'}>
                            Sign In
                        </Button>
                    </div>
                </header>

                {children}
                <footer
                    className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                    <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 <a href="https://umun.in"
                                                                                      target="_blank">Umun Tech Pvt.
                        Ltd.</a> All rights reserved.</p>
                    <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                        <Link className="text-xs hover:underline hover:underline-offset-4" href="#">
                            Terms of Service
                        </Link>
                        <Link className="text-xs hover:underline hover:underline-offset-4" href="#">
                            Privacy
                        </Link>
                    </nav>
                </footer>
            {/*</ThemeProvider>*/}

        </div>
        </body>
        </html>
    );
}
