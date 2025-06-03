import { Card } from '@/components/ui/card'
import Image from 'next/image'

export default function Features() {
    return (
        <section>
            <div className="bg-muted/50 py-24">
                <div className="mx-auto max-w-5xl px-6">
                    <div>
                        <h2 className="text-foreground text-4xl font-semibold">Choose from the world's best open-source AI models</h2>
                        <p className="text-muted-foreground mb-12 mt-4 text-balance text-lg">Get access to state-of-the-art models like DeepSeek, Qwen and LLaMA — and switch anytime.</p>
                    </div>
                    <div className="mt-8 grid gap-4 sm:grid-cols-2 md:mt-16 md:grid-cols-3">
                        <div className="space-y-4">
                            <Card
                                className="aspect-video overflow-hidden px-6"
                                variant="soft">
                                <div className="flex h-full items-center justify-center">
                                    <Image
                                        src="/deepseek.png"
                                        alt="DeepSeek"
                                        width="488"
                                        height="103"
                                        className="object-contain"
                                    />
                                </div>
                            </Card>
                            <div className="sm:max-w-sm">
                                <h3 className="text-foreground text-xl font-semibold">DeepSeek-R1</h3>
                                <p className="text-muted-foreground my-4 text-lg">A family of reasoning models with performance approaching that of leading models, such as OpenAI's O3</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <Card
                                className="aspect-video overflow-hidden p-6"
                                variant="soft">
                                <Card className="h-full" />
                            </Card>
                            <div className="sm:max-w-sm">
                                <h3 className="text-foreground text-xl font-semibold">AI Meeting Scheduler</h3>
                                <p className="text-muted-foreground my-4 text-lg">Effortlessly book and manage your meetings. Stay on top of your schedule.</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <Card
                                className="aspect-video overflow-hidden"
                                variant="soft">
                                <Card className="translate-6 h-full" />
                            </Card>
                            <div className="sm:max-w-sm">
                                <h3 className="text-foreground text-xl font-semibold">AI Meeting Scheduler</h3>
                                <p className="text-muted-foreground my-4 text-lg">Effortlessly book and manage your meetings. Stay on top of your schedule.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
