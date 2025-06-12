'use client'
import { cn } from '@/lib/utils'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Bold, Calendar1, Ellipsis, Italic, Strikethrough, Underline } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Image from 'next/image'

export default function FeaturesThree() {
    return (
        <section>
            <div className="py-24">
                <div className="mx-auto w-full max-w-5xl px-6">
                    <div>
                        <h2 className="text-foreground mt-4 text-4xl font-semibold">Your data stays 100% local.</h2>
                        <p className="text-muted-foreground mb-12 mt-4 text-balance text-lg">
                        Perfect for working with sensitive data</p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        <Card
                            variant="soft"
                            className="p-6">
                            <div className="flex items-center justify-center">
                                {/* <CodeIllustration className="w-full" /> */}
                                <Image
                                    src="/private_by_design.png"
                                    alt="A cloud with a red cross"
                                    width="1024"
                                    height="1024"
                                    className="max-h-[80%] max-w-[80%] object-contain"
                                />
                            </div>
                            <div className="text-center">
                                <h3 className="text-foreground text-xl font-semibold">Private by Design</h3>
                                <p className="text-muted-foreground mt-4 text-balance text-lg">Your queries are never sent to external servers. All processing happens locally on your office unit - even without internet access.</p>
                            </div>
                        </Card>
                        <Card
                            variant="soft"
                            className="p-6">
                            <div className="flex items-center justify-center">
                                {/* <ScheduleIllustation className="border" /> */}
                                <Image
                                    src="/private_knowledge_base.png"
                                    alt="A folder with a lock"
                                    width="1024"
                                    height="1024"
                                    className="max-h-[80%] max-w-[80%] object-contain"
                                />
                            </div>
                            <div className="text-center">
                                <h3 className="text-foreground text-xl font-semibold">Build a Local Knowledge Base</h3>
                                <p className="text-muted-foreground mt-4 text-balance text-lg">Chat with your documents without uploading them to the cloud.</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}

type IllustrationProps = {
    className?: string
    variant?: 'elevated' | 'outlined' | 'mixed'
}

export const ScheduleIllustation = ({ className, variant = 'elevated' }: IllustrationProps) => {
    return (
        <div className={cn('relative', className)}>
            <div
                className={cn('bg-background -translate-x-1/8 absolute flex -translate-y-[110%] items-center gap-2 rounded-lg p-1', {
                    'shadow-black-950/10 shadow-lg': variant === 'elevated',
                    'border-foreground/10 border': variant === 'outlined',
                    'border-foreground/10 border shadow-md shadow-black/5': variant === 'mixed',
                })}>
                <Button
                    size="sm"
                    className="rounded-sm">
                    <Calendar1 className="size-3" />
                    <span className="text-sm font-medium">Schedule</span>
                </Button>
                <span className="bg-border block h-4 w-px"></span>
                <ToggleGroup
                    type="multiple"
                    size="sm"
                    className="gap-0.5 *:rounded-md">
                    <ToggleGroupItem
                        value="bold"
                        aria-label="Toggle bold">
                        <Bold className="size-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem
                        value="italic"
                        aria-label="Toggle italic">
                        <Italic className="size-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem
                        value="underline"
                        aria-label="Toggle underline">
                        <Underline className="size-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem
                        value="strikethrough"
                        aria-label="Toggle strikethrough">
                        <Strikethrough className="size-4" />
                    </ToggleGroupItem>
                </ToggleGroup>
                <span className="bg-border block h-4 w-px"></span>
                <Button
                    size="icon"
                    className="size-8"
                    variant="ghost">
                    <Ellipsis className="size-3" />
                </Button>
            </div>
            <span>
                <span className="bg-secondary text-secondary-foreground py-1">Tomorrow 8:30 pm</span> is our priority.
            </span>
        </div>
    )
}

export const CodeIllustration = ({ className }: { className?: string }) => {
    return (
        <div className={cn('[mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_50%,transparent_100%)]', className)}>
            <ul className="text-muted-foreground mx-auto w-fit font-mono text-2xl font-medium">
                {['Images', 'Variables', 'Pages', 'Components', 'Styles'].map((item, index) => (
                    <li
                        key={index}
                        className={cn(index == 2 && "text-foreground before:absolute before:-translate-x-[110%] before:text-orange-500 before:content-['Import']")}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}
