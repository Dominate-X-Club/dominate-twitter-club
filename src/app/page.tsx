'use client';

import {useRouter} from "next/navigation";
import Link from "next/link";

export default function LandingPage() {
    const router = useRouter();
    const loginButtonHandler = () => {
        console.log('Login button clicked');
        try {
            // redirect('/login');
            router.push('/login');
        } catch (err) {
            console.error(err)
        }


        console.log('Login button clicked');
    }
    return (
        <>
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                    <div className="container grid items-center gap-4 px-4 md:px-6">
                        <div className="space-y-2 text-center">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                #DominateTwitter Club 🚀
                            </h1>
                            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 ">
                                A community of digital nomads aiming for Twitter success while living life on their own terms.
                            </p>
                        </div>
                        <img
                            alt="Dominate Twitter Club"
                            className="mx-auto aspect-video overflow-hidden rounded-xl object-center mt-8"
                            height="400"
                            src="/dt-banner.png"
                            width="900"
                        />
                        <div className="w-full max-w-sm mx-auto space-y-2">
                            <Link
                                className="inline-flex items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white border-gray-200 px-4 py-2 text-sm font-medium shadow-sm gap-1 transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                                href="#"
                            >
                                Join the Club
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

        </>
    );
}

