import { useState } from "react";

const FigmaToReactConverterResponsive = () => {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    const convertToTailwind = () => {
        let classes = new Set(); // avoid duplicates
        const lines = input.split("\n");

        let isFlexRow = false;
        let isFlexColumn = false;

        lines.forEach((line) => {
            const l = line.trim().toLowerCase();

            // POSITION
            if (l.includes("position: absolute")) classes.add("absolute");
            if (l.includes("position: relative")) classes.add("relative");

            // TOP / LEFT / RIGHT / BOTTOM
            if (l.includes("left")) {
                const val = l.match(/[\d.]+/);
                if (val) classes.add(val[0] === "0" ? "left-0" : `left-[${val[0]}%]`);
            }

            if (l.includes("top")) {
                const val = l.match(/[\d.]+/);
                if (val) classes.add(val[0] === "0" ? "top-0" : `top-[${val[0]}%]`);
            }

            // FLEX DETECTION
            if (l.includes("flex-direction: row")) isFlexRow = true;
            if (l.includes("flex-direction: column")) isFlexColumn = true;

            // GAP
            if (l.includes("gap")) {
                const val = l.match(/\d+/);
                if (val) classes.add(`gap-${Math.round(parseInt(val[0]) / 4)}`);
            }

            // PADDING → responsive
            if (l.includes("padding")) {
                const val = l.match(/\d+/);
                if (val) {
                    const p = Math.round(parseInt(val[0]) / 4);
                    classes.add(`px-${p}`);
                    classes.add(`md:px-${p * 2}`);
                }
            }

            // WIDTH → responsive
            if (l.includes("width")) {
                const val = l.match(/\d+/);
                if (val) {
                    classes.add("w-full");
                    classes.add(`md:w-[${val[0]}px]`);
                }
            }

            // HEIGHT (keep fixed usually)
            if (l.includes("height")) {
                const val = l.match(/\d+/);
                if (val) classes.add(`h-[${val[0]}px]`);
            }

            // COLORS
            if (l.includes("background")) {
                const color = l.match(/#([0-9a-f]+)/);
                if (color) classes.add(`bg-[#${color[1]}]`);
            }

            if (l.includes("color") && !l.includes("background")) {
                const color = l.match(/#([0-9a-f]+)/);
                if (color) classes.add(`text-[#${color[1]}]`);
            }

            // FONT SIZE → responsive
            if (l.includes("font-size")) {
                const val = l.match(/\d+/);
                if (val) {
                    const size = parseInt(val[0]);
                    classes.add(`text-[${Math.max(size - 4, 12)}px]`);
                    classes.add(`md:text-[${size}px]`);
                }
            }

            // BORDER RADIUS
            if (l.includes("border-radius")) {
                const val = l.match(/\d+/);
                if (val) classes.add(`rounded-[${val[0]}px]`);
            }
        });

        // FLEX APPLY (smart)
        if (isFlexRow) {
            classes.add("flex");
            classes.add("flex-col");
            classes.add("md:flex-row");
        }

        if (isFlexColumn) {
            classes.add("flex");
            classes.add("flex-col");
        }

        // MOBILE SCROLL SAFETY
        if (isFlexRow) {
            classes.add("overflow-x-auto");
            classes.add("md:overflow-visible");
        }

        const jsx = `<div className="${[...classes].join(" ")}">
  Your Content Here
</div>`;

        setOutput(jsx);
    };

    return (
        <div className="w-full max-w-[1440px] mx-auto px-4 py-6">
            <h2 className="text-[18px] md:text-[22px] font-bold mb-4">
                Figma CSS → Responsive Tailwind Converter 🚀
            </h2>

            <textarea
                className="w-full h-40 border p-3 rounded mb-4 text-sm md:text-base"
                placeholder="Paste Figma CSS here..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            <button
                onClick={convertToTailwind}
                className="w-full md:w-[200px] bg-blue-500 text-white px-4 py-2 rounded"
            >
                Convert
            </button>

            <pre className="mt-4 bg-gray-100 p-4 rounded whitespace-pre-wrap text-xs md:text-sm">
                {output}
            </pre>
        </div>
    );
};

export default FigmaToReactConverterResponsive;