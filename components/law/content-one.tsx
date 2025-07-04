'use client'
import { cn } from '@/lib/utils'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Bold, Calendar1, Ellipsis, Italic, Strikethrough, Underline, MessageCircle, FileText, UploadCloud } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ContentOne() {
    return (
        <section>
            <div id="features" className="bg-muted/50 py-24">
                <div className="mx-auto w-full max-w-5xl px-6">
                    <div>
                        <span className="text-primary">Designed for Legal Workflows</span>
                        <h2 className="text-foreground mt-4 text-4xl font-semibold">Let AI handle the grunt work</h2>
                        <p className="text-muted-foreground mb-12 mt-4 text-lg">Summarize contracts instantly, draft client responses faster, extract insights from dense case files. </p>
                    </div>

                    <div className="border-foreground/5 space-y-6 [--color-border:color-mix(in_oklab,var(--color-foreground)10%,transparent)] sm:space-y-0 sm:divide-y">
                        <div className="grid sm:grid-cols-5 sm:divide-x">
                            <IdentifyInsightsIllustration className="sm:col-span-2" />
                            <div className="mt-6 mb-6 sm:col-span-3 sm:mt-0 sm:border-l sm:pl-12">
                                <h3 className="text-foreground text-xl font-semibold">Summarize Contracts</h3>
                                <p className="text-muted-foreground mt-4 text-lg">Save hours of reading time. Instantly pull out key clauses, obligations, and risks from complex legal documents.</p>
                            </div>
                        </div>
                        <div className="grid sm:grid-cols-5 sm:divide-x">
                            <div className="pt-12 sm:col-span-3 sm:border-r sm:pr-12">
                                <h3 className="text-foreground text-xl font-semibold">Draft Client Responses</h3>
                                <p className="text-muted-foreground mt-4 text-lg">Turn legal insights into clear, professional replies — tailored to your client’s needs and your firm’s voice.</p>
                            </div>
                            <div className="row-start-1 flex items-center justify-center pt-12 sm:col-span-2 sm:row-start-auto">
                                <CreateReportsIllustration className="pt-2" />
                            </div>
                        </div>
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

export const IdentifyInsightsIllustration = ({ className }: { className?: string }) => {
    return (
        <div className={cn('relative flex flex-col items-center gap-4', className)}>
            <div className="relative bg-background border border-foreground/10 rounded-xl px-4 py-3 shadow-md flex items-center max-w-xs">
                <span className="text-base text-foreground font-medium">What are the termination and renewal clauses?</span>
            </div>
            <div className="flex items-center gap-1 mb-2">
                <FileText className="w-5 h-5 text-muted-foreground" />
                <span className="ml-2 text-xs text-muted-foreground">RentalAgreement.docx</span>
            </div>
        </div>
    )
}

export const CreateReportsIllustration = ({ className }: { className?: string }) => {
    return (
        <div className={cn('relative flex flex-col items-center gap-4', className)}>
            <div className="relative bg-background border border-foreground/10 rounded-xl px-4 py-3 shadow-md flex items-center max-w-xs">
                <span className="text-base text-foreground font-medium">Respond to the client with a summary of our advice on clause 9.</span>
            </div>
            <div className="flex items-center gap-1 mb-2">
                <FileText className="w-5 h-5 text-muted-foreground" />
                <span className="ml-2 text-xs text-muted-foreground">M&A.docx</span>
            </div>
        </div>
    )
}
