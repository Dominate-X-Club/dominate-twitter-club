"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import ClubIcon from "@/components/club/ClubIcon";
import {router} from "next/client";
import {useRouter} from "next/router";

const resources: { title: string; href: string; description: string }[] = [
    {
        title: "Getting Started",
        href: "/hire/freelancers",
        description:
            "Highly skilled professionals who work independently for a variety of clients.",
    },
    {
        title: "Open Source",
        href: "/hire/freelancers",
        description:
            "Highly skilled professionals who work independently for a variety of clients.",
    },
    ]

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Freelancers",
        href: "/hire/freelancers",
        description:
            "Highly skilled professionals who work independently for a variety of clients.",
    },
    {
        title: "Full Time Employees",
        href: "/hire/employees",
        description:
            "Hire full-time employees to work exclusively for your company.",
    },
    {
        title: "Consultants",
        href: "/hire/consultants",
        description:
            "Hire consultants to provide expert advice in a particular area.",
    },
    {
        title: "Interns",
        href: "/hire/interns",
        description: "Hire interns to work for your company for a fixed period of time.",
    },
    {
        title: "Project Managers",
        href: "/hire/project-managers",
        description:
            "Hire managers to oversee the planning, execution, and closing of a project.",
    },
    {
        title: "Brand Ambassadors",
        href: "/hire/brand-ambassadors",
        description:
            "Storytellers who represent your brand to increase awareness and sales.",
    },
]

export function LandingNav() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()} >
                            Home
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>#ClassOf24</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/classOf24"
                                    >
                                        <ClubIcon/>
                                        <div className="mb-2 mt-4 text-lg font-medium">
                                            #ClassOf24
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            10 Techies, 1 Goal - Get Hired!
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <ListItem href="/docs" title="#DominateCohorts">
                                10 Mentees, 5 Mentors, 1 Goal
                            </ListItem>
                            <ListItem href="/classOf24" title="#ClassOf24">
                                10 Techies, Groomed by Experts, Showcase Talent to get Hired 🚀
                            </ListItem>
                            <ListItem href="/docs/primitives/typography" title="Upcoming Cohorts">
                                Join the waitlist for upcoming cohorts.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Join Us</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/"
                                    >
                                        <ClubIcon/>
                                        <div className="mb-2 mt-4 text-lg font-medium">
                                            #DominateTwitter
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            We are club of <span className="text-blue-500">#digitalNomads</span>, aiming for success, while living on our terms!
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <ListItem href="/steering-squad" title="Steering Squad">
                                Core Members, Steering us to the Moon 🚀
                            </ListItem>
                            <ListItem href="/docs/primitives/typography" title="Contributors">
                                Dedicated members, running the show 🕺🏼
                            </ListItem>
                            <ListItem href="/docs/installation" title="Members">
                                Group of digital nomads, aiming for twitter and career success 💪🏻
                            </ListItem>
                            <ListItem href="/docs/primitives/typography" title="Sponsors">
                                Founders and Companies supporting the cause 🤑
                            </ListItem>
                            <ListItem href="/docs/primitives/typography" title="Experts">
                                Industry experts, guiding the members to success 🧭
                            </ListItem>
                            <ListItem href="/docs/primitives/typography" title="Patrons">
                                Angel Investors, looking to invest in the future 🔮
                            </ListItem>
                            <ListItem href="/docs/primitives/typography" title="Storytellers">
                                Content Creators, who share our journey with the world 🎙️
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Hire</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/"
                                    >
                                        <ClubIcon/>
                                        <div className="mb-2 mt-4 text-lg font-medium">
                                            #DominateTwitter
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            We are club of <span className="text-blue-500">#digitalNomads</span>, aiming for success, while living on our terms!
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/"
                                    >
                                        <ClubIcon/>
                                        <div className="mb-2 mt-4 text-lg font-medium">
                                            #DominateTwitter
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            We are club of <span className="text-blue-500">#digitalNomads</span>, aiming for success, while living on our terms!
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            {resources.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
    >(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
