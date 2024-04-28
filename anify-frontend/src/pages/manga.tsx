/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import axios from "axios";

import { type GetServerSideProps, type NextPage } from "next";
import Sidebar from "~/components/sidebar";

import { env } from "~/env.mjs";
import Footer from "~/components/footer";
import { type Seasonal, type Manga, type ReadHistory, Format } from "~/types";
import Slideshow from "~/components/slideshow";
import Navbar from "~/components/navbar";
import LargeSlideshow from "~/components/largeSlideshow";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useStore } from "zustand";
import { useReadHistory } from "~/store/store";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";

const Manga: NextPage<Props> = ({ seasonal, recent }) => {
    const [readHistory, setReadHistory] = useState<ReadHistory[]>([]);

    const storedReadHistory = useStore(useReadHistory, (state: any) => state.readHistory as ReadHistory[]);

    useEffect(() => {
        const uniqueReadHistoryMap = new Map<string, ReadHistory>();

        for (const history of storedReadHistory) {
            if (history.format === Format.NOVEL) continue;
            uniqueReadHistoryMap.set(history.mediaId, history);
        }

        const newReadHistory = Array.from(uniqueReadHistoryMap.values());
        setReadHistory(newReadHistory);
    }, [storedReadHistory]);

    return (
        <>
            <Head>
                <title>{"Manga"}</title>
                <meta name="title" content={"Manga"} />
                <meta name="description" content={"Find new series to read and share with your friends with ease with high quality scanlations."} />

                <meta property="og:type" content="website" />
                <meta property="og:url" content={`https://anify.tv/manga`} />
                <meta property="og:title" content={"Manga"} />
                <meta property="og:description" content={"Find new series to read and share with your friends with ease with high quality scanlations."} />
                <meta property="og:image" content={""} />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={`https://anify.tv/manga`} />
                <meta property="twitter:title" content={"Manga"} />
                <meta property="twitter:description" content={"Find new series to read and share with your friends with ease with high quality scanlations."} />
                <meta property="twitter:image" content={""} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Sidebar active="manga" />
            <Navbar active="manga" />
            <main>
                <div className="mx-auto mb-8 md:ml-24 md:mr-6 lg:mt-24">
                    <div className="mx-auto mt-5">
                        <LargeSlideshow media={seasonal?.trending ?? []} />
                    </div>
                    {readHistory?.length > 0 ? (
                        <div className="mx-auto mt-5">
                            <h1 className="mb-2 ml-2 text-2xl font-semibold text-white lg:text-3xl">Continue Reading</h1>
                            <Swiper slidesPerView={"auto"} className="relative h-fit" freeMode={true}>
                                {readHistory.map((media, index: number) => {
                                    return (
                                        <SwiperSlide key={index} className="!w-fit px-2">
                                            <div className="group flex h-full w-[calc(34vh/1.5)] min-w-[120px] flex-col gap-2 text-white">
                                                <div className="h-[40vh] min-h-[220px] rounded-md border border-slate-600/40 bg-main-primary/5 md:h-[40vh]">
                                                    <section className="group relative p-4">
                                                        <Link href={media.readId && media.providerId ? `/read/${media.mediaId}/${media.providerId}/${encodeURIComponent(media.readId)}` : `/info/${media.mediaId}`}>
                                                            <Image src={media.coverImage ?? ""} alt={(media.title?.english ?? media.title?.romaji ?? media.title?.native ?? "") + " Cover"} className="relative w-full rounded-md object-cover opacity-100 shadow-md shadow-background transition-transform duration-300 group-hover:scale-[1.09] group-hover:opacity-70 lg:h-[28vh] 2xl:h-[32vh]" width={1000} height={1000} />
                                                        </Link>
                                                        <div
                                                            className="absolute bottom-[-5%] z-50 flex w-[89%] flex-col rounded-md border-t border-main-dark/10 bg-main/70 p-[1rem] px-2 py-1 opacity-0 shadow-md shadow-main-dark transition-all duration-300 group-hover:bottom-1 group-hover:opacity-100 lg:left-2.5 lg:rounded-b-md xl:left-4"
                                                            style={{
                                                                backdropFilter: "blur(2px)",
                                                                WebkitBackdropFilter: "blur(2px)",
                                                            }}
                                                        >
                                                            <section className="z-50 flex items-center justify-between">
                                                                <button type="button" className="rounded-md transition-all duration-200 hover:bg-main-primary/30">
                                                                    <svg width="24" height="24" stroke="currentColor" strokeWidth="2" className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                        <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                                                                    </svg>
                                                                </button>
                                                                <Link href={media.readId && media.providerId ? `/read/${media.mediaId}/${media.providerId}/${encodeURIComponent(media.readId)}` : `/info/${media.mediaId}`} className="rounded-md transition-all duration-200 hover:bg-main-primary/30">
                                                                    <svg width="24" height="24" stroke="currentColor" strokeWidth="2" className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                        <circle cx="12" cy="12" r="10" />
                                                                        <path d="M12 16v-4" />
                                                                        <path d="M12 8h.01" />
                                                                    </svg>
                                                                </Link>
                                                                <button type="button" className="rounded-md transition-all duration-200 hover:bg-main-primary/30">
                                                                    <svg width="24" height="24" stroke="currentColor" strokeWidth="2" className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                        <polygon points="5 3 19 12 5 21 5 3" />
                                                                    </svg>
                                                                </button>
                                                                <button type="button" className="rounded-md transition-all duration-200 hover:bg-main-primary/30">
                                                                    <svg width="24" height="24" stroke="currentColor" strokeWidth="2" className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                        <line x1="12" x2="12" y1="5" y2="19"></line>
                                                                        <line x1="5" x2="19" y1="12" y2="12" />
                                                                    </svg>
                                                                </button>
                                                            </section>
                                                        </div>
                                                    </section>
                                                    <footer className="flex flex-col p-[1rem] pt-[0px]">
                                                        <ul className="">
                                                            <li className="line-clamp-1 w-full text-lg font-semibold text-slate-300">{media.title?.english ?? media.title?.romaji ?? media.title?.native ?? "N/A"}</li>
                                                            <li className="flex items-center gap-1">{media.chapterNumber ? <span className="text-sm text-slate-300">Chapter {media.chapterNumber}</span> : null}</li>
                                                        </ul>
                                                    </footer>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        </div>
                    ) : null}
                    <div className="mx-auto mt-5">
                        <h1 className="mb-2 ml-2 text-2xl font-semibold text-white lg:text-3xl">Recent Chapters</h1>
                        <Slideshow media={recent ?? []} recent={true} />
                    </div>
                    <div className="mx-auto mt-5">
                        <h1 className="mb-2 ml-2 text-2xl font-semibold text-white lg:text-3xl">Popular</h1>
                        <Slideshow media={seasonal?.popular ?? []} />
                    </div>
                    <div className="mx-auto mt-5">
                        <h1 className="mb-2 ml-2 text-2xl font-semibold text-white lg:text-3xl">Highest Rated</h1>
                        <Slideshow media={seasonal?.top ?? []} />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    const seasonal = (await axios.get(String(env.BACKEND_URL) + "/seasonal?type=manga&fields=[id,description,bannerImage,coverImage,title,genres,format,averageRating,episodes,chapters,year,type]&apikey=" + String(env.API_KEY))).data as Seasonal;
    const recent = (await axios.get(String(env.BACKEND_URL) + "/recent?type=manga&apikey=" + String(env.API_KEY))).data as Manga[];

    return {
        props: {
            seasonal,
            recent,
        },
    };
};

export default Manga;

interface Props {
    seasonal?: Seasonal;
    recent?: Manga[];
}
