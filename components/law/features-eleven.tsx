import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowUp, Globe, Plus, Sparkles } from 'lucide-react'

export default function FeaturesEleven() {
    return (
        <section>
            <div className="py-24">
                <div className="mx-auto w-full max-w-3xl px-6">
                    <h2 className="text-foreground text-balance text-3xl font-semibold md:text-4xl">
                    Leverage your Document Database
                    </h2>
                    <p class="text-muted-foreground mb-12 mt-4 text-balance text-lg">Apply your firm’s past work to new matters — with a local AI that understands your contracts, case notes, and legal reasoning.</p>
                    <div className="@container mt-12 space-y-12">
                        <Card
                            className="relative overflow-hidden p-0 sm:col-span-2">
                            <img
                                src="https://images.unsplash.com/photo-1635776062043-223faf322554?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt=""
                                className="absolute inset-0 size-full object-cover"
                            />
                            <div className="m-auto max-w-md p-4 sm:p-12">
                                <AIAssistantIllustration />
                            </div>
                        </Card>
                        <div className="@sm:grid-cols-2 @2xl:grid-cols-3 grid gap-6">
                            <div className="space-y-2">
                                <h3 className="text-xl font-medium">Data Input</h3>
                                <p className="text-muted-foreground">Add contracts, case law, and client notes to your assistant
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-medium">Smart Search</h3>
                                <p className="text-muted-foreground">Ask questions and get answers from your own documents
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-medium">Track Sources</h3>
                                <p className="text-muted-foreground">Responses include citations — know exactly where the answer came from
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const AIAssistantIllustration = () => {
    return (
        <Card
            aria-hidden
            className="relative space-y-4 p-6">
            <div className="w-fit">
                {/* <Sparkles className="size-3.5 fill-purple-300 stroke-purple-300" /> */}
                <p className="mt-2 line-clamp-2 text-sm">What clauses in our previous NDAs could support this new client negotiation?</p>
                <ul
                    role="list"
                    className="text-muted-foreground mt-3 space-y-2 text-sm">
                    {[
                        { value: '1000+', emoji: '📄', label: 'Documents Indexed' },
                        { value: '95%', emoji: '🔍', label: 'Search Precision' },
                        { value: '100%', emoji: '📌', label: 'Source-Linked Answers' },
                    ].map((stat, index) => (
                        <li
                            key={index}
                            className="-ml-0.5 flex items-center gap-2">
                            <span>{stat.emoji}</span>
                            <span className="text-foreground font-medium">{stat.value}</span> {stat.label}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="bg-foreground/5 -mx-3 -mb-3 space-y-3 rounded-lg p-3">
                <div className="text-muted-foreground text-sm">Ask me anything</div>

                <div className="flex justify-between">
                    <div className="flex gap-2">
                        <Button
                            variant="outline"
                            size="icon"
                            className="size-7 rounded-2xl bg-transparent shadow-none">
                            <Plus />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="size-7 rounded-2xl bg-transparent shadow-none">
                            <Globe />
                        </Button>
                    </div>

                    <Button
                        size="icon"
                        className="size-7 rounded-2xl bg-black">
                        <ArrowUp strokeWidth={3} />
                    </Button>
                </div>
            </div>
        </Card>
    )
}
