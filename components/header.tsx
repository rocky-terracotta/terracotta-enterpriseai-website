'use client'
import Link from 'next/link'
import { Logo, LogoIcon } from '@/components/logo'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { cn } from '@/lib/utils'

interface MenuItemWithHref {
    name: string;
    href: string;
}

interface SubMenuItem {
    name: string;
    href: string;
}

interface MenuItemWithSubItems {
    name: string;
    subItems: SubMenuItem[];
}

type MenuItem = MenuItemWithHref | MenuItemWithSubItems;

function isMenuItemWithSubItems(item: MenuItem): item is MenuItemWithSubItems {
    return ('subItems' in item);
}

const menuItems: MenuItem[] = [
    // { name: 'About', href: '/about' },
    // { name: 'Features', href: '#features' },
    {
        name: 'Industries',
        subItems: [
            { name: 'Law', href: '/law' },
            // { name: 'Accounting', href: '#accounting' },
        ],
    },
    // { name: 'Pricing', href: '#link' },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className={cn('fixed z-20 w-full transition-all duration-300', isScrolled && 'bg-background/75 border-b border-black/5 backdrop-blur-lg')}>
                <div className="mx-auto max-w-5xl px-6">
                    <div className={cn('relative flex flex-wrap items-center justify-between gap-6 py-6 transition-all duration-200 lg:gap-0', isScrolled && 'py-3')}>
                        <div className="flex w-full justify-between gap-6 lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <LogoIcon />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>

                            <div className="m-auto hidden size-fit lg:block">
                                <ul className="flex gap-1">
                                    {menuItems.map((item, index) => (
                                        <li key={index} className="relative group">
                                            <Button
                                                asChild
                                                variant="ghost"
                                                size="sm"
                                                className="flex items-center"
                                            >
                                                <span>{item.name}</span>
                                            </Button>
                                            {isMenuItemWithSubItems(item) && item.subItems && (
                                                <ul className="absolute left-0 top-full min-w-[150px] rounded-md bg-white shadow-lg z-30 hidden group-hover:block">
                                                    {item.subItems.map((sub, subIdx) => (
                                                        <li key={subIdx}>
                                                            <Link
                                                                href={sub.href}
                                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                            >
                                                                {sub.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            {isMenuItemWithSubItems(item) && item.subItems ? (
                                                <>
                                                    <span className="font-semibold">{item.name}</span>
                                                    <ul className="ml-4 mt-2 space-y-2">
                                                        {item.subItems.map((sub, subIdx) => (
                                                            <li key={subIdx}>
                                                                <Link
                                                                    href={sub.href}
                                                                    className="text-muted-foreground hover:text-accent-foreground block duration-150"
                                                                >
                                                                    {sub.name}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </>
                                            ) : (
                                                'href' in item && (
                                                    <Link
                                                        href={item.href}
                                                        className="text-muted-foreground hover:text-accent-foreground block duration-150"
                                                    >
                                                        <span>{item.name}</span>
                                                    </Link>
                                                )
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                {/* <Button
                                    asChild
                                    variant="ghost"
                                    size="sm"
                                    className={cn(isScrolled && 'lg:hidden')}>
                                    <Link href="#">
                                        <span>Login</span>
                                    </Link>
                                </Button> */}
                                <Button
                                    asChild
                                    size="sm"
                                    className={cn(isScrolled && 'lg:hidden')}>
                                    <Link target="_blank" href="https://calendly.com/terracotta-demo/30min">
                                        <span>Book a Demo</span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="sm"
                                    className={cn(isScrolled ? 'lg:inline-flex' : 'hidden')}>
                                    <Link target="_blank" href="https://calendly.com/terracotta-demo/30min">
                                        <span>Book a Demo</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
