import Image from "next/image";

export default function Home() {
    return (
        <div className="h-dvh w-full flex items-center justify-center min-h-full flex-col gap-10">
            <div className="text-xl drop-shadow-lg">Sorry for waiting so long. I wanted to come up with something creative 🥺, so to the point ↓</div>
            <Image src="/cat_with_flower.jpg" alt="Cat With Flower"
                   className="rounded-2xl"
                   width={400}
                   height={0}/>
            <div className="drop-shadow-2xl text-4xl">💖 Will you be my Valentine? 💖</div>
            <div className="flex gap-3">
                <button className="bg-green-600 p-4 px-6 rounded-2xl">Yes</button>
                <button className="bg-red-700 p-4 px-6 rounded-2xl">No</button>
            </div>
        </div>
    );
}
