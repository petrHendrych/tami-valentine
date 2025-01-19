'use client'

import Image from "next/image";
import {useRef} from "react";
import {useButtonClick} from "@/app/useButtonClick";
import dancingCats from '@/public/dancing-cats.gif'

export default function Home() {
    const noButton = useRef<HTMLButtonElement>(null);
    const yesButton = useRef<HTMLButtonElement>(null);

    const {
        moveButton,
        clickIndex,
        showInitText,
        sadCats,
        sadTexts,
        isYesClicked,
        handleYesClick
    } =
        useButtonClick(noButton, yesButton)

    const getSadText = () => {
        return sadTexts[clickIndex - 1]
    }

    return (
        <div className="h-dvh w-full flex items-center justify-center min-h-full relative">
            <div className="flex items-center justify-center flex-col gap-10 px-5">
                {isYesClicked && (
                    <div className="text-3xl drop-shadow-lg text-center">
                        🎊 Yaaaaay!!! 🎊
                    </div>
                )}
                {showInitText && (
                    <div className="text-xl drop-shadow-lg text-center">Sorry for waiting so long. I wanted to come up
                        with
                        something creative 🥺, so...
                    </div>
                )}
                {!showInitText && !isYesClicked && clickIndex < 7 && (
                    <div className="text-xl drop-shadow-lg text-center">
                        {getSadText()}
                    </div>
                )}

                {!isYesClicked && clickIndex ?
                    (
                        <>
                            <Image src={sadCats[clickIndex - 1].src} alt="Sad cat"
                                   width={sadCats[clickIndex - 1].width}
                                   height={sadCats[clickIndex - 1].width}
                                   priority
                                   fetchPriority="high"
                                   className="rounded-2xl max-w-[400px] min-w-[300px]"/>
                            <audio src="/sad-violin.mp3" autoPlay loop/>
                        </>
                    ) : (!isYesClicked && (
                            <Image src="/cat_with_flower.jpg" alt="Cat With Flower"
                                   priority
                                   fetchPriority="high"
                                   className="rounded-2xl"
                                   width={400}
                                   height={0}/>
                        )
                    )
                }

                {isYesClicked && (
                    <>

                        <Image src={dancingCats.src}
                               alt="Dancing cats"
                               width={dancingCats.width}
                               height={dancingCats.height}
                               priority
                               fetchPriority="high"
                               className="rounded-2xl"/>
                        <audio src="/audio.mp3" autoPlay loop/>
                        <div className="drop-shadow-2xl text-xl xs:text-xl sm:text-3xl text-center leading-loose">
                            More information to come, stay tuned
                        </div>
                        <div className="drop-shadow-2xl text-xl xs:text-xl sm:text-3xl text-center leading-loose">
                            💝 Te amo mi amor 💝
                        </div>
                    </>
                )}

                {!isYesClicked && (
                    <>
                        <div className="drop-shadow-2xl text-xl xs:text-xl sm:text-3xl text-center leading-loose">💖 Will
                            you be
                            my Valentine? 💖
                        </div>
                        <div className="flex gap-3">
                            <button ref={yesButton} className="bg-green-600 p-4 px-6 rounded-2xl"
                                    onClick={handleYesClick}>Yes
                            </button>
                            {clickIndex < 6 && (
                                <button ref={noButton}
                                        className="bg-red-700 p-4 px-6 rounded-2xl relative transition-transform"
                                        onClick={moveButton}>No
                                </button>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
