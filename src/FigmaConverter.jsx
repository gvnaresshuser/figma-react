import React, { useState } from "react";

export default function FigmaToTailwindConverter() {

    // GROUP SIZE (not screen size)
    const [groupWidth, setGroupWidth] = useState(131.76);
    const [groupHeight, setGroupHeight] = useState(119.82);

    // FIGMA %
    const [left, setLeft] = useState("");
    const [right, setRight] = useState("");
    const [top, setTop] = useState("");
    const [bottom, setBottom] = useState("");

    // ROTATION
    const [rotate, setRotate] = useState("");

    // OUTPUT
    const [output, setOutput] = useState("");

    const generateDiv = () => {

        // POSITION INSIDE GROUP
        const leftPx = (
            (Number(left) / 100) * groupWidth
        ).toFixed(0);

        const topPx = (
            (Number(top) / 100) * groupHeight
        ).toFixed(0);

        // WIDTH %
        const widthPercent =
            100 - Number(left) - Number(right);

        // HEIGHT %
        const heightPercent =
            100 - Number(top) - Number(bottom);

        // VECTOR SIZE
        const widthPx = (
            (widthPercent / 100) * groupWidth
        ).toFixed(0);

        const heightPx = (
            (heightPercent / 100) * groupHeight
        ).toFixed(0);

        const divCode = `<div className="absolute left-[${leftPx}px] top-[${topPx}px] rotate-[${rotate}deg]">

    <div
        className="absolute
        left-0
        top-0
        w-[${widthPx}px]
        h-[${heightPx}px]
        bg-white"
    >
    </div>

</div>`;

        setOutput(divCode);
    };

    return (
        <div className="min-h-screen bg-black text-white p-10">

            <h1 className="text-3xl font-bold mb-8">
                Figma Vector → Tailwind Converter
            </h1>

            {/* GROUP SIZE */}
            <div className="grid grid-cols-2 gap-4 mb-8">

                <input
                    type="number"
                    value={groupWidth}
                    onChange={(e) => setGroupWidth(Number(e.target.value))}
                    placeholder="Group Width"
                    className="p-3 rounded bg-gray-800"
                />

                <input
                    type="number"
                    value={groupHeight}
                    onChange={(e) => setGroupHeight(Number(e.target.value))}
                    placeholder="Group Height"
                    className="p-3 rounded bg-gray-800"
                />
            </div>

            {/* FIGMA VALUES */}
            <div className="grid grid-cols-2 gap-4">

                <input
                    type="number"
                    value={left}
                    onChange={(e) => setLeft(e.target.value)}
                    placeholder="Left %"
                    className="p-3 rounded bg-gray-800"
                />

                <input
                    type="number"
                    value={right}
                    onChange={(e) => setRight(e.target.value)}
                    placeholder="Right %"
                    className="p-3 rounded bg-gray-800"
                />

                <input
                    type="number"
                    value={top}
                    onChange={(e) => setTop(e.target.value)}
                    placeholder="Top %"
                    className="p-3 rounded bg-gray-800"
                />

                <input
                    type="number"
                    value={bottom}
                    onChange={(e) => setBottom(e.target.value)}
                    placeholder="Bottom %"
                    className="p-3 rounded bg-gray-800"
                />

                <input
                    type="number"
                    value={rotate}
                    onChange={(e) => setRotate(e.target.value)}
                    placeholder="Rotate Deg"
                    className="p-3 rounded bg-gray-800 col-span-2"
                />
            </div>

            {/* BUTTON */}
            <button
                onClick={generateDiv}
                className="mt-8 px-6 py-3 bg-cyan-500 rounded-xl text-black font-bold hover:scale-105 transition"
            >
                Generate Vector Div
            </button>

            {/* OUTPUT */}
            {output && (
                <div className="mt-10 bg-gray-900 p-6 rounded-xl">

                    <h2 className="text-xl mb-4 font-semibold">
                        Generated JSX
                    </h2>

                    <pre className="text-green-400 whitespace-pre-wrap overflow-auto">
                        {output}
                    </pre>

                </div>
            )}
        </div>
    );
}