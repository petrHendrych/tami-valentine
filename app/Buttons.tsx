'use client'

import {useMemo, useRef, useState} from "react";

const Buttons = () => {
    const [scale, setScale] = useState(1)

    const noButton = useRef<HTMLButtonElement>(null);
    const yesButton = useRef<HTMLButtonElement>(null);

    const moveButton = () => {
        if (noButton.current && yesButton.current) {
            const randomTopOffset = Math.floor(Math.random() * window.innerHeight) - noButton.current.clientHeight;
            const randomLeftOffset = Math.floor(Math.random() * window.innerWidth) - noButton.current.clientWidth;
            noButton.current.style.position = "absolute";
            noButton.current.style.top = `${randomTopOffset < 0 ? 0 : randomTopOffset}px`;
            noButton.current.style.left = `${randomLeftOffset < 0 ? 0 : randomLeftOffset}px`;

            setScale(prevState => prevState + Math.random() / 10);
            yesButton.current.style.transform = `scale(${scale > 1.5 ? 1.5 : scale})`;
            }
        }


        return (
            <div className="flex gap-3">
                <button ref={yesButton} className="bg-green-600 p-4 px-6 rounded-2xl">Yes</button>
                <button ref={noButton} className="bg-red-700 p-4 px-6 rounded-2xl relative transition-transform"
                        onClick={moveButton}>No</button>
            </div>

    );
    }
;

export default Buttons;