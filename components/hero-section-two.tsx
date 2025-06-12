import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { HeroHeader } from './header'
import { Sparkle } from 'lucide-react'

export default function HeroSectionTwo() {
    return (
        <>
            <HeroHeader />
            <main>
                {/* <section className="before:bg-muted border-e-foreground relative overflow-hidden before:absolute before:inset-1 before:h-[calc(100%-8rem)] before:rounded-2xl sm:before:inset-2 md:before:rounded-[2rem] lg:before:h-[calc(100%-14rem)]"> */}
                <section className="before:bg-muted border-e-foreground relative overflow-hidden before:absolute before:h-[calc(100%-8rem)] lg:before:h-[calc(100%-14rem)]">
                    <div className="py-20 md:py-36">
                        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
                            <div>
                                {/* <Link
                                    href="#"
                                    className="hover:bg-foreground/5 mx-auto flex w-fit items-center justify-center gap-2 rounded-md py-0.5 pl-1 pr-3 transition-colors duration-150">
                                    <div
                                        aria-hidden
                                        className="border-background bg-linear-to-b dark:inset-shadow-2xs to-foreground from-primary relative flex size-5 items-center justify-center rounded border shadow-md shadow-black/20 ring-1 ring-black/10">
                                        <div className="absolute inset-x-0 inset-y-1.5 border-y border-dotted border-white/25"></div>
                                        <div className="absolute inset-x-1.5 inset-y-0 border-x border-dotted border-white/25"></div>
                                        <Sparkle className="size-3 fill-white stroke-white drop-shadow" />
                                    </div>
                                    <span className="font-medium">🤖 Introducing Terracotta</span>
                                </Link> */}
                                <h1 className="mx-auto mt-8 max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl">Use AI without sending data to the cloud.</h1>
                                <p className="text-muted-foreground mx-auto my-6 max-w-xl text-balance text-xl">Your own private AI assistant deployed on-site. <br></br>Works out of the box, no IT team required.</p>

                                <div className="flex items-center justify-center gap-3">
                                    <Button
                                        asChild
                                        size="lg">
                                        <Link target="_blank" href="https://calendly.com/terracotta-demo/30min">
                                            <span className="text-nowrap">Book a Demo</span>
                                        </Link>
                                    </Button>
                                    {/* <Button
                                        asChild
                                        size="lg"
                                        variant="outline">
                                        <Link href="#link">
                                            <span className="text-nowrap">Watch Video</span>
                                        </Link>
                                    </Button> */}
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="relative z-10 mx-auto max-w-5xl px-6">
                                <div className="mt-12 md:mt-16">
                                    {/* <div className="bg-background rounded-(--radius) relative mx-auto overflow-hidden border border-transparent shadow-lg shadow-black/10 ring-1 ring-black/10">
                                        <Image
                                            src="/dashboard.png"
                                            alt="app screen"
                                            width="3248"
                                            height="2064"
                                        />
                                    </div> */}
                                    <Image
                                        src="/dashboard.png"
                                        alt="app screen"
                                        width="3248"
                                        height="2064"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
