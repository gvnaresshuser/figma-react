import React, { useState } from "react";

export default function UniversalFigmaConverter() {

    const [mode, setMode] = useState("percent");

    // GROUP / PARENT
    const [groupWidth, setGroupWidth] = useState("");
    const [groupHeight, setGroupHeight] = useState("");

    const [parentLeft, setParentLeft] = useState("");
    const [parentTop, setParentTop] = useState("");

    // FIGMA VALUES
    const [left, setLeft] = useState("");
    const [right, setRight] = useState("");

    const [top, setTop] = useState("");
    const [bottom, setBottom] = useState("");

    const [width, setWidth] = useState("");
    const [height, setHeight] = useState("");

    const [rotate, setRotate] = useState("");

    const [borderWidth, setBorderWidth] = useState("");
    const [borderColor, setBorderColor] = useState("#49c4dd");

    const [output, setOutput] = useState("");

    const generateDiv = () => {

        // =========================================
        // PERCENT MODE
        // =========================================

        if (mode === "percent") {

            const leftPx = (
                (Number(left) / 100) * Number(groupWidth)
            ).toFixed(0);

            const topPx = (
                (Number(top) / 100) * Number(groupHeight)
            ).toFixed(0);

            const widthPercent =
                100 - Number(left) - Number(right);

            const heightPercent =
                100 - Number(top) - Number(bottom);

            const widthPx = (
                (widthPercent / 100) * Number(groupWidth)
            ).toFixed(0);

            const heightPx = (
                (heightPercent / 100) * Number(groupHeight)
            ).toFixed(0);

            const divCode = `<div className="absolute left-[${leftPx}px] top-[${topPx}px] rotate-[${rotate}deg] origin-center">

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
        }

        // =========================================
        // PX MODE
        // =========================================

        else {

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
        }
    };

    return (
        <div className="min-h-screen bg-black text-white p-10">

            <h1 className="text-3xl font-bold mb-8">
                Universal Figma → Tailwind Converter
            </h1>

            {/* MODE */}
            <div className="flex gap-4 mb-8">

                <button
                    onClick={() => setMode("percent")}
                    className={`px-6 py-3 rounded-xl font-bold ${mode === "percent"
                            ? "bg-cyan-500 text-black"
                            : "bg-gray-800"
                        }`}
                >
                    % Vector
                </button>

                <button
                    onClick={() => setMode("px")}
                    className={`px-6 py-3 rounded-xl font-bold ${mode === "px"
                            ? "bg-cyan-500 text-black"
                            : "bg-gray-800"
                        }`}
                >
                    PX Vector
                </button>
            </div>

            {/* ========================================= */}
            {/* PERCENT MODE */}
            {/* ========================================= */}

            {mode === "percent" && (

                <>
                    {/* Group Size */}
                    <div className="grid grid-cols-2 gap-4 mb-8">

                        <input
                            type="number"
                            placeholder="Group Width"
                            value={groupWidth}
                            onChange={(e) =>
                                setGroupWidth(e.target.value)
                            }
                            className="p-3 rounded bg-gray-800"
                        />

                        <input
                            type="number"
                            placeholder="Group Height"
                            value={groupHeight}
                            onChange={(e) =>
                                setGroupHeight(e.target.value)
                            }
                            className="p-3 rounded bg-gray-800"
                        />
                    </div>

                    {/* Percent Inputs */}
                    <div className="grid grid-cols-2 gap-4">

                        <input
                            type="number"
                            placeholder="Left %"
                            value={left}
                            onChange={(e) => setLeft(e.target.value)}
                            className="p-3 rounded bg-gray-800"
                        />

                        <input
                            type="number"
                            placeholder="Right %"
                            value={right}
                            onChange={(e) => setRight(e.target.value)}
                            className="p-3 rounded bg-gray-800"
                        />

                        <input
                            type="number"
                            placeholder="Top %"
                            value={top}
                            onChange={(e) => setTop(e.target.value)}
                            className="p-3 rounded bg-gray-800"
                        />

                        <input
                            type="number"
                            placeholder="Bottom %"
                            value={bottom}
                            onChange={(e) => setBottom(e.target.value)}
                            className="p-3 rounded bg-gray-800"
                        />

                        <input
                            type="number"
                            placeholder="Rotate"
                            value={rotate}
                            onChange={(e) => setRotate(e.target.value)}
                            className="p-3 rounded bg-gray-800 col-span-2"
                        />
                    </div>
                </>
            )}

            {/* ========================================= */}
            {/* PX MODE */}
            {/* ========================================= */}

            {mode === "px" && (

                <>
                    {/* Parent */}
                    <div className="grid grid-cols-2 gap-4 mb-8">

                        <input
                            type="number"
                            placeholder="Parent Left"
                            value={parentLeft}
                            onChange={(e) =>
                                setParentLeft(e.target.value)
                            }
                            className="p-3 rounded bg-gray-800"
                        />

                        <input
                            type="number"
                            placeholder="Parent Top"
                            value={parentTop}
                            onChange={(e) =>
                                setParentTop(e.target.value)
                            }
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
                            onChange={(e) =>
                                setBorderWidth(e.target.value)
                            }
                            className="p-3 rounded bg-gray-800"
                        />

                        <input
                            type="text"
                            placeholder="Border Color"
                            value={borderColor}
                            onChange={(e) =>
                                setBorderColor(e.target.value)
                            }
                            className="p-3 rounded bg-gray-800"
                        />

                        <input
                            type="number"
                            placeholder="Rotate"
                            value={rotate}
                            onChange={(e) => setRotate(e.target.value)}
                            className="p-3 rounded bg-gray-800 col-span-2"
                        />
                    </div>
                </>
            )}

            {/* BUTTON */}
            <button
                onClick={generateDiv}
                className="mt-8 px-6 py-3 bg-cyan-500 rounded-xl text-black font-bold"
            >
                Generate JSX
            </button>

            {/* OUTPUT */}
            {output && (
                <div className="mt-10 bg-gray-900 p-6 rounded-xl">

                    <h2 className="text-2xl font-bold mb-4">
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