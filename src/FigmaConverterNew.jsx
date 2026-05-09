import React, { useState } from "react";
export default function FigmaConverter() {
    const sampleInput = `CURVE
/* Vector 1 */

position: absolute;
width: 24px;
height: 21px;
left: 513px;
top: 219px;

border: 3px solid #49C4DD;
transform: rotate(15.58deg);`;

    const [input, setInput] = React.useState(sampleInput);
    const [output, setOutput] = React.useState("");

    // Parent values (Group)
    const parentLeft = 410;
    const parentTop = 155;
    const parentWidth = 131.76;
    const parentHeight = 119.82;

    const convert = () => {
        const text = input;

        // Detect percentage mode
        const isPercentMode = text.includes("%");

        // Helpers
        const getPxValue = (name) => {
            const match = text.match(new RegExp(`${name}:\\s*([\\d.]+)px`));
            return match ? parseFloat(match[1]) : null;
        };

        const getPercentValue = (name) => {
            const match = text.match(new RegExp(`${name}:\\s*([\\d.]+)%`));
            return match ? parseFloat(match[1]) : null;
        };

        const getRotate = () => {
            const match = text.match(/rotate\\(([-\\d.]+)deg\\)/);
            return match ? match[1] : "0";
        };

        let left = 0;
        let top = 0;
        let width = 0;
        let height = 0;

        // -----------------------------
        // PX MODE
        // -----------------------------
        if (!isPercentMode) {
            const figmaLeft = getPxValue("left");
            const figmaTop = getPxValue("top");

            width = getPxValue("width");
            height = getPxValue("height");

            // Convert global → local
            left = Math.round(figmaLeft - parentLeft);
            top = Math.round(figmaTop - parentTop);
        }

        // -----------------------------
        // PERCENT MODE
        // -----------------------------
        else {
            const leftPercent = getPercentValue("left") || 0;
            const rightPercent = getPercentValue("right") || 0;
            const topPercent = getPercentValue("top") || 0;
            const bottomPercent = getPercentValue("bottom") || 0;

            // Convert percentages → px using parent dimensions
            left = Math.round((leftPercent / 100) * parentWidth);
            top = Math.round((topPercent / 100) * parentHeight);

            // width = remaining percentage space
            width = Math.round(
                ((100 - leftPercent - rightPercent) / 100) * parentWidth
            );

            // height = remaining percentage space
            height = Math.round(
                ((100 - topPercent - bottomPercent) / 100) * parentHeight
            );
        }

        const rotate = getRotate();

        const divCode = `<div
  className="
    absolute
    left-[${left}px]
    top-[${top}px]
    w-[${width}px]
    h-[${height}px]
    rotate-[${rotate}deg]
  "
>
</div>`;

        setOutput(divCode);
    };

    return (
        <div className="min-h-screen bg-black text-white p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold mb-6">
                    Figma CSS → Tailwind Converter
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* INPUT */}
                    <div>
                        <h2 className="text-xl mb-3">Paste Figma CSS</h2>

                        <textarea
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="
                w-full
                h-[500px]
                bg-zinc-900
                border
                border-zinc-700
                rounded-2xl
                p-4
                outline-none
                font-mono
                text-sm
              "
                        />
                    </div>

                    {/* OUTPUT */}
                    <div>
                        <h2 className="text-xl mb-3">Generated Tailwind Div</h2>

                        <div
                            className="
                w-full
                h-[500px]
                bg-zinc-900
                border
                border-zinc-700
                rounded-2xl
                p-4
                overflow-auto
              "
                        >
                            <pre className="whitespace-pre-wrap text-green-400 text-sm">
                                {output}
                            </pre>
                        </div>
                    </div>
                </div>

                {/* PARENT VALUES */}
                <div className="mt-8 bg-zinc-900 rounded-2xl p-6 border border-zinc-700">
                    <h2 className="text-2xl mb-4">Parent Settings</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div>
                            <label className="block mb-2">Parent Left</label>
                            <input
                                value={parentLeft}
                                readOnly
                                className="w-full bg-black border border-zinc-700 rounded-xl p-3"
                            />
                        </div>

                        <div>
                            <label className="block mb-2">Parent Top</label>
                            <input
                                value={parentTop}
                                readOnly
                                className="w-full bg-black border border-zinc-700 rounded-xl p-3"
                            />
                        </div>

                        <div>
                            <label className="block mb-2">Parent Width</label>
                            <input
                                value={parentWidth}
                                readOnly
                                className="w-full bg-black border border-zinc-700 rounded-xl p-3"
                            />
                        </div>

                        <div>
                            <label className="block mb-2">Parent Height</label>
                            <input
                                value={parentHeight}
                                readOnly
                                className="w-full bg-black border border-zinc-700 rounded-xl p-3"
                            />
                        </div>
                    </div>
                </div>

                {/* BUTTON */}
                <div className="mt-8 flex justify-center">
                    <button
                        onClick={convert}
                        className="
              px-8
              py-4
              rounded-2xl
              bg-cyan-500
              hover:scale-105
              transition-all
              text-black
              font-bold
            "
                    >
                        Convert CSS
                    </button>
                </div>

                {/* EXAMPLES */}
                <div className="mt-10 bg-zinc-900 border border-zinc-700 rounded-2xl p-6">
                    <h2 className="text-2xl mb-4">Supported Inputs</h2>

                    <div className="space-y-6 text-sm font-mono">
                        <div>
                            <h3 className="text-cyan-400 mb-2">PX Mode</h3>
                            <pre>{`left: 513px;
top: 219px;
width: 24px;
height: 21px;`}</pre>
                        </div>

                        <div>
                            <h3 className="text-cyan-400 mb-2">Percentage Mode</h3>
                            <pre>{`left: 29.12%;
right: 67.71%;
top: 22.71%;
bottom: 72.02%;`}</pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
