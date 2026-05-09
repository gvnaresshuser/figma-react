import React, { useState } from "react";

export default function PxVectorConverter() {

    const [parentLeft, setParentLeft] = useState("");
    const [parentTop, setParentTop] = useState("");

    const [left, setLeft] = useState("");
    const [top, setTop] = useState("");

    const [width, setWidth] = useState("");
    const [height, setHeight] = useState("");

    const [rotate, setRotate] = useState("");

    const [borderWidth, setBorderWidth] = useState("");
    const [borderColor, setBorderColor] = useState("#49c4dd");

    const [output, setOutput] = useState("");

    const generateDiv = () => {

        const relativeLeft =
            Number(left) - Number(parentLeft);

        const relativeTop =
            Number(top) - Number(parentTop);

        const divCode = `<div className="absolute 
left-[${relativeLeft}px] 
top-[${relativeTop}px] 
w-[${width}px] 
h-[${height}px] 
border-[${borderWidth}px] 
border-[${borderColor}] 
rotate-[${rotate}deg] 
origin-center">
</div>`;

        setOutput(divCode);
    };

    return (
        <div className="min-h-screen bg-black text-white p-10">

            <h1 className="text-3xl font-bold mb-8">
                PX Vector Converter
            </h1>

            {/* Parent */}
            <div className="grid grid-cols-2 gap-4 mb-8">

                <input
                    type="number"
                    placeholder="Parent Left"
                    value={parentLeft}
                    onChange={(e) => setParentLeft(e.target.value)}
                    className="p-3 rounded bg-gray-800"
                />

                <input
                    type="number"
                    placeholder="Parent Top"
                    value={parentTop}
                    onChange={(e) => setParentTop(e.target.value)}
                    className="p-3 rounded bg-gray-800"
                />
            </div>

            {/* Vector */}
            <div className="grid grid-cols-2 gap-4">

                <input
                    type="number"
                    placeholder="Vector Left"
                    value={left}
                    onChange={(e) => setLeft(e.target.value)}
                    className="p-3 rounded bg-gray-800"
                />

                <input
                    type="number"
                    placeholder="Vector Top"
                    value={top}
                    onChange={(e) => setTop(e.target.value)}
                    className="p-3 rounded bg-gray-800"
                />

                <input
                    type="number"
                    placeholder="Width"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    className="p-3 rounded bg-gray-800"
                />

                <input
                    type="number"
                    placeholder="Height"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="p-3 rounded bg-gray-800"
                />

                <input
                    type="number"
                    placeholder="Border Width"
                    value={borderWidth}
                    onChange={(e) => setBorderWidth(e.target.value)}
                    className="p-3 rounded bg-gray-800"
                />

                <input
                    type="text"
                    placeholder="Border Color"
                    value={borderColor}
                    onChange={(e) => setBorderColor(e.target.value)}
                    className="p-3 rounded bg-gray-800"
                />

                <input
                    type="number"
                    placeholder="Rotate Deg"
                    value={rotate}
                    onChange={(e) => setRotate(e.target.value)}
                    className="p-3 rounded bg-gray-800 col-span-2"
                />
            </div>

            {/* Button */}
            <button
                onClick={generateDiv}
                className="mt-8 px-6 py-3 bg-cyan-500 rounded-xl text-black font-bold"
            >
                Generate Div
            </button>

            {/* Output */}
            {output && (
                <div className="mt-10 bg-gray-900 p-6 rounded-xl">

                    <pre className="text-green-400 whitespace-pre-wrap overflow-auto">
                        {output}
                    </pre>

                </div>
            )}
        </div>
    );
}