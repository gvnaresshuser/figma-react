import { useState } from "react";

const FigmaToReactConverter = () => {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    const convertToTailwind = () => {
        let classes = [];
        const lines = input.split("\n");

        lines.forEach((line) => {
            const l = line.trim().toLowerCase();

            // POSITION
            if (l.includes("position: absolute")) {
                classes.push("absolute");
            }
            if (l.includes("position: relative")) {
                classes.push("relative");
            }

            // TOP / LEFT / RIGHT / BOTTOM
            if (l.includes("left")) {
                const val = l.match(/[\d.]+/);
                if (val) {
                    if (val[0] === "0") classes.push("left-0");
                    else classes.push(`left-[${val[0]}%]`);
                }
            }

            if (l.includes("right")) {
                const val = l.match(/[\d.]+/);
                if (val) {
                    if (val[0] === "0") classes.push("right-0");
                    else classes.push(`right-[${val[0]}%]`);
                }
            }

            if (l.includes("top")) {
                const val = l.match(/[\d.]+/);
                if (val) {
                    if (val[0] === "0") classes.push("top-0");
                    else classes.push(`top-[${val[0]}%]`);
                }
            }

            if (l.includes("bottom")) {
                const val = l.match(/[\d.]+/);
                if (val) {
                    if (val[0] === "0") classes.push("bottom-0");
                    else classes.push(`bottom-[${val[0]}%]`);
                }
            }

            // FLEX / AUTO LAYOUT
            if (l.includes("flex-direction: row")) {
                classes.push("flex");
            }
            if (l.includes("flex-direction: column")) {
                classes.push("flex flex-col");
            }

            // GAP
            if (l.includes("gap")) {
                const val = l.match(/\d+/);
                if (val) classes.push(`gap-${parseInt(val[0]) / 4}`);
            }

            // PADDING
            if (l.includes("padding")) {
                const val = l.match(/\d+/);
                if (val) classes.push(`p-${parseInt(val[0]) / 4}`);
            }

            // WIDTH / HEIGHT
            if (l.includes("width")) {
                const val = l.match(/\d+/);
                if (val) classes.push(`w-[${val[0]}px]`);
            }

            if (l.includes("height")) {
                const val = l.match(/\d+/);
                if (val) classes.push(`h-[${val[0]}px]`);
            }

            // COLORS
            if (l.includes("background")) {
                const color = l.match(/#([0-9a-f]+)/);
                if (color) classes.push(`bg-[#${color[1]}]`);
            }

            if (l.includes("color") && !l.includes("background")) {
                const color = l.match(/#([0-9a-f]+)/);
                if (color) classes.push(`text-[#${color[1]}]`);
            }

            // FONT SIZE
            if (l.includes("font-size")) {
                const val = l.match(/\d+/);
                if (val) classes.push(`text-[${val[0]}px]`);
            }

            // BORDER RADIUS
            if (l.includes("border-radius")) {
                const val = l.match(/\d+/);
                if (val) classes.push(`rounded-[${val[0]}px]`);
            }
        });

        const jsx = `<div className="${classes.join(" ")}">
  Your Content Here
</div>`;

        setOutput(jsx);
    };

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h2 className="text-xl font-bold mb-4">
                Figma CSS → React Tailwind Converter
            </h2>

            <textarea
                className="w-full h-40 border p-3 rounded mb-4"
                placeholder="Paste Figma CSS here..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            <button
                onClick={convertToTailwind}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Convert
            </button>

            <pre className="mt-4 bg-gray-100 p-4 rounded whitespace-pre-wrap">
                {output}
            </pre>
        </div>
    );
};

export default FigmaToReactConverter;