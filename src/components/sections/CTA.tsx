export const CTA = () => {
    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-zinc-900 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
                        <div className="absolute bottom-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl" />
                    </div>
                    <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
                        READY TO BUILD <br /> SOMETHING AMAZING?
                    </h2>
                    <p className="text-zinc-400 text-xl max-w-2xl mx-auto mb-12">
                        Let's discuss your project and see how I can help you achieve your goals with the MERN stack.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button
                            onClick={() => {
                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                setTimeout(() => {
                                    document.getElementById('contact-name')?.focus();
                                }, 800);
                            }}
                            className="bg-white text-zinc-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-zinc-100 transition-all"
                        >
                            Start a Conversation
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};
