import {RefObject, useState} from "react";

export const useButtonClick = (noButton: RefObject<HTMLButtonElement | null>, yesButton: RefObject<HTMLButtonElement | null>) => {
    const [scale, setScale] = useState(1)
    const [clickIndex, setClickIndex] = useState(0)

    const moveButton = () => {
        if (noButton.current && yesButton.current) {
            setClickIndex(prevState => {
                if (prevState + 1 > 6) return 1
                return prevState + 1
            })
            const randomTopOffset = Math.floor(Math.random() * window.innerHeight) - noButton.current.clientHeight;
            const randomLeftOffset = Math.floor(Math.random() * window.innerWidth) - noButton.current.clientWidth;
            noButton.current.style.position = "absolute";
            noButton.current.style.top = `${randomTopOffset < 0 ? 0 : randomTopOffset}px`;
            noButton.current.style.left = `${randomLeftOffset < 0 ? 0 : randomLeftOffset}px`;

            setScale(prevState => prevState + Math.random() / 10);
            yesButton.current.style.transform = `scale(${scale > 1.5 ? 1.5 : scale})`;
        }
    }

    return {moveButton, clickIndex};
}