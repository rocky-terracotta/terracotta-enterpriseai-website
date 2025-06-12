import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CallToActionOne() {
    return (
        <section>
            <div className="py-12">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="space-y-6 text-center">
                        <h2 className="text-foreground text-balance text-3xl font-semibold lg:text-4xl">See how it works</h2>
                        <p className="text-muted-foreground mb-12 mt-4 text-balance text-lg">In 15 minutes, we’ll walk you through exactly how your firm can start leveraging AI today</p>
                        <div className="flex justify-center gap-3">
                            <Button
                                asChild
                                size="lg">
                                <Link target="_blank" href="https://calendly.com/terracotta-demo/30min">Book a Demo</Link>
                            </Button>
                            {/* <Button
                                asChild
                                variant="outline"
                                size="lg">
                                <Link href="#">Get a Demo</Link>
                            </Button> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
