export const Footer = () => {
    return (
        <footer className="py-12 bg-zinc-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-center items-center">
                    <div className="text-zinc-500 text-sm">
                        © {new Date().getFullYear()} MERN Stack Developer Portfolio. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};
