import { useState } from "react";

const FRAME_WIDTH = 1440;
const FRAME_HEIGHT = 900;

const FigmaToReactConverter = () => {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [preview, setPreview] = useState("");
    const [mode, setMode] = useState("exact");

    const percentToPx = (value, axis) => {
        const num = parseFloat(value);
        if (axis === "x") return Math.round((num / 100) * FRAME_WIDTH);
        if (axis === "y") return Math.round((num / 100) * FRAME_HEIGHT);
        return value;
    };

    const parseBlock = (block) => {
        let classes = [];
        const lines = block.split("\n");

        lines.forEach((line) => {
            const l = line.trim().toLowerCase();

            if (l.includes("position: absolute")) classes.push("absolute");
            if (l.includes("position: relative")) classes.push("relative");

            const extract = (prop, axis, prefix) => {
                if (l.includes(prop)) {
                    const val = l.match(/[\d.]+/);
                    if (val) {
                        if (mode === "exact") {
                            classes.push(`${prefix}-[${val[0]}%]`);
                        } else {
                            const px = percentToPx(val[0], axis);
                            classes.push(`${prefix}-[${px}px]`);
                        }
                    }
                }
            };

            extract("left", "x", "left");
            extract("right", "x", "right");
            extract("top", "y", "top");
            extract("bottom", "y", "bottom");

            if (l.includes("width")) {
                const val = l.match(/\d+/);
                if (val) classes.push(`w-[${val[0]}px]`);
            }

            if (l.includes("height")) {
                const val = l.match(/\d+/);
                if (val) classes.push(`h-[${val[0]}px]`);
            }

            if (l.includes("background")) {
                const color = l.match(/#([0-9a-f]+)/);
                if (color) classes.push(`bg-[#${color[1]}]`);
            }

            if (l.includes("border-radius")) {
                const val = l.match(/\d+/);
                if (val) classes.push(`rounded-[${val[0]}px]`);
            }

            if (l.includes("box-shadow")) {
                classes.push("shadow-md");
            }
        });

        return classes.join(" ");
    };

    const convertToTailwind = () => {
        const blocks = input.split("\n\n");

        let elements = blocks.map((block) => {
            const lines = block.split("\n");

            let classes = [];
            let isImage = false;
            let imageUrl = "";

            lines.forEach((line) => {
                const l = line.trim().toLowerCase();

                // POSITION
                if (l.includes("position: absolute")) classes.push("absolute");

                const extract = (prop, prefix) => {
                    if (l.includes(prop)) {
                        const val = l.match(/[\d.]+/);
                        if (val) classes.push(`${prefix}-[${val[0]}%]`);
                    }
                };

                extract("left", "left");
                extract("right", "right");
                extract("top", "top");
                extract("bottom", "bottom");

                // SIZE
                if (l.includes("width")) {
                    const val = l.match(/\d+/);
                    if (val) classes.push(`w-[${val[0]}px]`);
                }

                if (l.includes("height")) {
                    const val = l.match(/\d+/);
                    if (val) classes.push(`h-[${val[0]}px]`);
                }

                // BACKGROUND IMAGE DETECTION 🔥
                if (l.includes("background: url")) {
                    isImage = true;
                    const match = line.match(/url\((.*?)\)/);
                    if (match) {
                        imageUrl = match[1].replace(/['"]/g, "");
                    }
                }

                // BACKGROUND COLOR
                if (l.includes("background") && !l.includes("url")) {
                    const color = l.match(/#([0-9a-f]+)/);
                    if (color) classes.push(`bg-[#${color[1]}]`);
                }

                // BORDER
                if (l.includes("border-radius")) {
                    const val = l.match(/\d+/);
                    if (val) classes.push(`rounded-[${val[0]}px]`);
                }
            });

            return { classes: classes.join(" "), isImage, imageUrl };
        });

        // 🔥 SORT LAYERS (background first)
        elements.forEach((el, i) => {
            el.z = el.isImage ? 10 : 0;
        });

        let jsx = `<div className="relative w-[1440px] h-[900px] bg-white">\n`;

        elements.forEach((el, i) => {
            if (el.isImage) {
                jsx += `
  <div className="${el.classes} ${el.z}">
    <img src="/assets/${el.imageUrl}" className="w-full h-full object-cover" />
  </div>`;
            } else {
                jsx += `
  <div className="${el.classes} z-0">
    {/* Vector / Shape */}
  </div>`;
            }
        });

        jsx += `\n</div>`;

        setOutput(jsx);
        setPreview(
            <div className="flex justify-center items-center w-full h-full bg-gray-200 overflow-auto">

                {/* SCALE CONTAINER */}
                <div
                    className="relative bg-white shadow"
                    style={{
                        width: "720px",   // scaled down from 1440
                        height: "450px",  // scaled down from 900
                        transform: "scale(1)",
                        transformOrigin: "top left"
                    }}
                >

                    {elements.map((el, i) => {
                        // detect image layer
                        if (el.isImage) {
                            return (
                                <div key={i} className={`${el.classes} z-${el.z}`}>
                                    <img
                                        src={`/assets/${el.imageUrl}`}
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            );
                        }

                        // detect VECTOR / background shape
                        return (
                            <div
                                key={i}
                                className={`${el.classes} z-0`}
                                style={{
                                    backgroundColor: "#c4c4c4",
                                }}
                            />
                        );
                    })}

                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">

            <h1 className="text-2xl font-bold text-center mb-4">
                🚀 Smart Converter v3 (Preview + Multi Layer)
            </h1>

            {/* MODE */}
            <div className="flex justify-center gap-4 mb-4">
                <button
                    onClick={() => setMode("exact")}
                    className={`px-4 py-2 rounded ${mode === "exact" ? "bg-blue-600 text-white" : "bg-gray-300"}`}
                >
                    Exact
                </button>

                <button
                    onClick={() => setMode("smart")}
                    className={`px-4 py-2 rounded ${mode === "smart" ? "bg-green-600 text-white" : "bg-gray-300"}`}
                >
                    Smart
                </button>
            </div>

            <div className="grid md:grid-cols-3 gap-6">

                {/* INPUT */}
                <textarea
                    className="w-full h-80 p-4 border rounded-lg font-mono"
                    placeholder="Paste multiple Figma CSS blocks..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />

                {/* OUTPUT */}
                <pre className="w-full h-80 p-4 bg-black text-green-400 rounded-lg overflow-auto text-sm">
                    {output}
                </pre>

                {/* PREVIEW */}
                <div className="w-full h-80 overflow-auto bg-white p-2 border">
                    {preview}
                </div>
            </div>

            <button
                onClick={convertToTailwind}
                className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg"
            >
                Convert 🚀
            </button>
        </div>
    );
};

export default FigmaToReactConverter;