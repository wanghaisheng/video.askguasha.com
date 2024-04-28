import Image from "next/image";
import { useEffect, useState } from "react";

export function MangaPage({ source }: { source: string | undefined }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const isLoaded = (document.getElementById(`page-${source as string}`) as HTMLImageElement).complete;
        if (isLoaded) {
            setIsLoading(false);
        }
    }, []);

    return (
        <div>
            {isLoading && (
                <div className="left-0 top-0 flex h-full w-full items-center justify-center p-5">
                    <svg className="h-8 w-8 animate-spin text-gray-400" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM20 12a8 8 0 01-8 8v-4a4 4 0 004-4h4zm-2-7.938A7.962 7.962 0 0120 12h4c0-6.627-5.373-12-12-12v4z" />
                    </svg>
                </div>
            )}
            <Image
                id={`page-${source as string}`}
                src={source as string}
                alt=""
                loading="lazy"
                onLoad={() => setIsLoading(false)}
                className="page mx-auto h-auto max-w-[98vw] transition-all duration-200 ease-in-out"
                style={{
                    width: "var(--page-size)",
                }}
                width={3000}
                height={3000}
            />
        </div>
    );
}
