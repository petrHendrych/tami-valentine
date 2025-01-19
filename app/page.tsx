'use client'

import Image from "next/image";
import Buttons from "@/app/Buttons";

export default function Home() {
    return (
        <div className="h-dvh w-full flex items-center justify-center min-h-full relative">
            <div className="flex items-center justify-center flex-col gap-10 px-5">
                <div className="text-xl drop-shadow-lg text-center">Sorry for waiting so long. I wanted to come up with something creative 🥺, so...</div>
                <Image src="/cat_with_flower.jpg" alt="Cat With Flower"
                       priority
                       fetchPriority="high"
                       className="rounded-2xl"
                       width={400}
                       height={0}/>
                <div className="drop-shadow-2xl text-xl xs:text-xl sm:text-3xl text-center leading-loose">💖 Will you be my Valentine? 💖</div>
                <Buttons />
            </div>
        </div>
    );
}
