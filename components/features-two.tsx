import { Card } from '@/components/ui/card'
import Image from 'next/image'

export default function FeaturesTwo() {
    return (
        <section>
            <div className="bg-muted/50 py-24">
                <div className="mx-auto max-w-5xl px-6">
                    <div>
                        <h2 className="text-foreground text-4xl font-semibold">Choose from the world's best open-source AI models</h2><p className="text-muted-foreground mb-12 mt-4 text-balance text-lg">Use state-of-the-art models at no additional cost — and switch anytime.</p>
                        
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
                                className="aspect-video overflow-hidden px-6"
                                variant="soft">
                                <div className="flex h-full items-center justify-center">
                                    <Image
                                        src="/qwen3.png"
                                        alt="Qwen3"
                                        width="3944"
                                        height="1555"
                                        className="object-contain"
                                    />
                                </div>
                            </Card>
                            <div className="sm:max-w-sm">
                                <h3 className="text-foreground text-xl font-semibold">Qwen3</h3>
                                <p className="text-muted-foreground my-4 text-lg">A comprehensive suite of dense and mixture-of-experts models from Alibaba</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <Card
                                className="aspect-video overflow-hidden px-6"
                                variant="soft">
                                <div className="flex h-full items-center justify-center">
                                    <Image
                                        src="/meta.png"
                                        alt="Meta"
                                        width="1244"
                                        height="826"
                                        className="max-h-[80%] max-w-[80%] object-contain"
                                    />
                                </div>
                            </Card>
                            <div className="sm:max-w-sm">
                                <h3 className="text-foreground text-xl font-semibold">Llama 4</h3>
                                <p className="text-muted-foreground my-4 text-lg">Native multimodal AI models from Meta that enable text and image inputs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
