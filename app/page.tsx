'use client'

import Image from "next/image";
import {useRef} from "react";
import {useButtonClick} from "@/app/useButtonClick";
import cat1 from "@/public/sad-cats/sad-cat-1.jpg";
import cat2 from "@/public/sad-cats/sad-cat-2.jpg";
import cat3 from "@/public/sad-cats/sad-cat-3.jpg";
import cat4 from "@/public/sad-cats/sad-cat-4.jpg";
import cat5 from "@/public/sad-cats/sad-cat-5.jpg";
import cat6 from "@/public/sad-cats/sad-cat-6.jpeg";

export default function Home() {
    const noButton = useRef<HTMLButtonElement>(null);
    const yesButton = useRef<HTMLButtonElement>(null);

    const sadCats = [cat1, cat2, cat3, cat4, cat5, cat6]

    const {moveButton, clickIndex} = useButtonClick(noButton, yesButton)

    console.log(clickIndex)

    return (
        <div className="h-dvh w-full flex items-center justify-center min-h-full relative">
            <div className="flex items-center justify-center flex-col gap-10 px-5">
                <div className="text-xl drop-shadow-lg text-center">Sorry for waiting so long. I wanted to come up with
                    something creative 🥺, so...
                </div>
                {clickIndex ?
                    (<Image src={sadCats[clickIndex - 1].src} alt="Sad cat"
                            width={sadCats[clickIndex - 1].width}
                            height={sadCats[clickIndex - 1].width}
                            priority
                            fetchPriority="high"
                            className="rounded-2xl max-w-[400px] min-w-[300px]"/>
                    ) : (
                        <Image src="/cat_with_flower.jpg" alt="Cat With Flower"
                               priority
                               fetchPriority="high"
                               className="rounded-2xl"
                               width={400}
                               height={0}/>
                    )
                }

                <div className="drop-shadow-2xl text-xl xs:text-xl sm:text-3xl text-center leading-loose">💖 Will you be
                    my Valentine? 💖
                </div>

                <div className="flex gap-3">
                    <button ref={yesButton} className="bg-green-600 p-4 px-6 rounded-2xl">Yes</button>
                    <button ref={noButton} className="bg-red-700 p-4 px-6 rounded-2xl relative transition-transform"
                            onClick={moveButton}>No
                    </button>
                </div>
            </div>
        </div>
    );
}
