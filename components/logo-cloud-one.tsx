export default function LogoCloudOne() {
    return (
        <section>
            <div className="mx-auto max-w-5xl px-6 py-8">
                <div>
                    <p className="text-muted-foreground font-medium">Trusted by teams at:</p>
                    <div className="mt-4 flex items-center gap-12">
                        <div className="flex">
                            <img
                                className="mx-auto h-14"
                                src="/miracleplus.png"
                                alt="MiraclePlus Logo"
                                width="auto"
                            />
                        </div>

                        <div className="flex">
                            <img
                                className="mx-auto h-14"
                                src="/HKUST.png"
                                alt="HKUST Logo"
                                width="auto"
                            />
                        </div>
                        {/* <div className="flex">
                            <img
                                className="mx-auto h-4 w-fit"
                                src="https://html.tailus.io/blocks/customers/github.svg"
                                alt="GitHub Logo"
                                height="16"
                                width="auto"
                            />
                        </div>
                        <div className="flex">
                            <img
                                className="mx-auto h-5 w-fit"
                                src="https://html.tailus.io/blocks/customers/nike.svg"
                                alt="Nike Logo"
                                height="20"
                                width="auto"
                            />
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}
