import { Button } from '@/components/ui/button'
import { CalendarCheck, ChevronRight, Target } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function FeaturesFive() {
    return (
        <section>
            <div className="bg-muted/50 py-24">
                <div className="mx-auto w-full max-w-5xl px-6">
                    <div className="grid gap-12 md:grid-cols-5">
                        <div className="md:col-span-2">
                            <h2 className="text-foreground text-balance text-4xl font-semibold">Beautiful, silent on-premise unit</h2>
                            {/* <Button
                                className="mt-8 pr-2"
                                variant="outline"
                                asChild>
                                <Link href="#">
                                    Learn more
                                    <ChevronRight className="size-4 opacity-50" />
                                </Link>
                            </Button> */}
                        </div>

                        <div className="space-y-6 md:col-span-3 md:space-y-10">
                            <div>
                                <div className="flex items-center gap-2">
                                    <Target className="size-5" />
                                    <h3 className="text-foreground text-lg font-semibold">Plug and Play</h3>
                                </div>
                                <p className="text-muted-foreground mt-3 text-balance">Simply connect to power and Wi-Fi — and you’re ready to go.</p>
                            </div>

                            <div>
                                <div className="flex items-center gap-2">
                                    <CalendarCheck className="size-5" />
                                    <h3 className="text-foreground text-lg font-semibold">Ultra Compact</h3>
                                </div>
                                <p className="text-muted-foreground mt-3 text-balance">Massive oomph and raw computational power for the size of a Big Mac.</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative -mx-12 mt-16 px-12">
                        <div className="bg-background rounded-(--radius) relative mx-auto overflow-hidden border border-transparent shadow-lg shadow-black/10 ring-1 ring-black/10">
                            <Image
                                src="/device.webp"
                                alt="app screen"
                                width="1024"
                                height="1024"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
