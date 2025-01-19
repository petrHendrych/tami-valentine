import {RefObject, useState} from "react";
import cat1 from "@/public/sad-cats/sad-cat-1.jpg";
import cat2 from "@/public/sad-cats/sad-cat-2.jpg";
import cat3 from "@/public/sad-cats/sad-cat-3.jpg";
import cat4 from "@/public/sad-cats/sad-cat-4.jpg";
import cat5 from "@/public/sad-cats/sad-cat-5.jpg";
import cat6 from "@/public/sad-cats/sad-cat-6.jpeg";


const sadText1 = "Are you sure you didn't miss click by accident? Try again 🤨"
const sadText2 = "Wow, so you really clicked no? Are you sure? 😱"
const sadText3 = "That cannot be true, here have one more chance 😉"
const sadText4 = "Now I'm getting a little bit sad by your choices. So? 😔"
const sadText5 = "So I think you really don't want to go? 😞"
const sadText6 = "That's it. One last time I ask or I will stay sad forever 😿"

export const useButtonClick = (noButton: RefObject<HTMLButtonElement | null>, yesButton: RefObject<HTMLButtonElement | null>) => {
    const [showInitText, setShowInitText] = useState(true)
    const [isYesClicked, setIsYesClicked] = useState(false)
    const [scale, setScale] = useState(1)
    const [clickIndex, setClickIndex] = useState(0)

    const sadCats = [cat1, cat2, cat3, cat4, cat5, cat6]
    const sadTexts = [sadText1, sadText2, sadText3, sadText4, sadText5, sadText6]

    const moveButton = () => {
        if (noButton.current && yesButton.current) {
            setClickIndex(prevState => prevState + 1)

            if (showInitText) {
                setShowInitText(false)
            }

            const randomTopOffset = Math.floor(Math.random() * window.innerHeight) - noButton.current.clientHeight;
            const randomLeftOffset = Math.floor(Math.random() * window.innerWidth) - noButton.current.clientWidth;
            noButton.current.style.position = "absolute";
            noButton.current.style.top = `${randomTopOffset < 0 ? 0 : randomTopOffset}px`;
            noButton.current.style.left = `${randomLeftOffset < 0 ? 0 : randomLeftOffset}px`;

            setScale(prevState => prevState + Math.random() / 10);
            yesButton.current.style.transform = `scale(${scale > 1.5 ? 1.5 : scale})`;
        }
    }

    const handleYesClick = () => {
        setShowInitText(false)
        setIsYesClicked(true)
    }

    return {moveButton, clickIndex, showInitText, sadCats, sadTexts, isYesClicked, handleYesClick};
}