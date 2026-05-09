import { useState } from "react";

const FigmaToReactAutoSmart = () => {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    const convertToTailwind = () => {
        let classes = new Set();
        const lines = input.split("\n");

        let isFlexRow = false;
        let isFlexColumn = false;

        let isLikelyText = false;
        let width = null;
        let height = null;

        const getValueWithUnit = (line) => {
            const match = line.match(/([\d.]+)(px|%)/);
            if (!match) return null;
            return `${match[1]}${match[2]}`;
        };

        // ================= FIRST PASS (Detect Type) =================
        lines.forEach((line) => {
            const l = line.trim().toLowerCase();

            if (l.includes("font-size") || l.includes("line-height")) {
                isLikelyText = true;
            }

            if (l.includes("width")) {
                const val = l.match(/\d+/);
                if (val) width = parseInt(val[0]);
            }

            if (l.includes("height")) {
                const val = l.match(/\d+/);
                if (val) height = parseInt(val[0]);
            }

            if (l.includes("flex-direction: row")) isFlexRow = true;
            if (l.includes("flex-direction: column")) isFlexColumn = true;
        });

        const isSmallElement = width && height && width < 150 && height < 150;

        // ================= SECOND PASS (Convert) =================
        lines.forEach((line) => {
            const l = line.trim().toLowerCase();

            // POSITION
            if (l.includes("position: absolute")) {
                if (isSmallElement) classes.add("absolute");
            }

            if (l.includes("position: relative")) classes.add("relative");

            // LEFT / TOP → ONLY FOR SMALL ELEMENTS
            if ((l.includes("left") || l.includes("top")) && isSmallElement) {
                const val = getValueWithUnit(l);
                if (val) {
                    if (l.includes("left")) classes.add(`left-[${val}]`);
                    if (l.includes("top")) classes.add(`top-[${val}]`);
                }
            }

            // FLEX
            if (l.includes("display: flex")) classes.add("flex");

            // GAP
            if (l.includes("gap")) {
                const val = l.match(/\d+/);
                if (val) classes.add(`gap-${Math.round(parseInt(val[0]) / 4)}`);
            }

            // WIDTH
            if (l.includes("width")) {
                const val = getValueWithUnit(l);
                if (val) {
                    if (!isSmallElement) {
                        classes.add("w-full");
                        classes.add(`md:w-[${val}]`);
                    } else {
                        classes.add(`w-[${val}]`);
                    }
                }
            }

            // HEIGHT
            if (l.includes("height")) {
                const val = getValueWithUnit(l);
                if (val) classes.add(`h-[${val}]`);
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

            // FONT
            if (l.includes("font-size")) {
                const val = l.match(/\d+/);
                if (val) {
                    const size = parseInt(val[0]);
                    classes.add(`text-[${Math.max(size - 6, 12)}px]`);
                    classes.add(`md:text-[${size}px]`);
                }
            }

            if (l.includes("font-weight")) {
                const val = l.match(/\d+/);
                if (val) {
                    const weight = parseInt(val[0]);
                    if (weight >= 700) classes.add("font-bold");
                    if (weight >= 900) classes.add("font-black");
                }
            }

            if (l.includes("line-height")) {
                const val = getValueWithUnit(l);
                if (val) classes.add(`leading-[${val}]`);
            }

            // BORDER
            if (l.includes("border")) {
                const width = l.match(/\d+/);
                const color = l.match(/#([0-9a-f]+)/);

                if (width) classes.add(`border-[${width[0]}px]`);
                if (color) classes.add(`border-[#${color[1]}]`);
            }

            // BORDER RADIUS
            if (l.includes("border-radius")) {
                const val = l.match(/\d+/);
                if (val) classes.add(`rounded-[${val[0]}px]`);
            }

            // ROTATE
            if (l.includes("rotate")) {
                const val = l.match(/[-\d.]+/);
                if (val) classes.add(`rotate-[${val[0]}deg]`);
            }
        });

        // ================= LAYOUT FIX =================
        if (isLikelyText && !isSmallElement) {
            classes.delete("absolute");
            classes.add("mt-10");
            classes.add("md:mt-20");
            classes.add("text-center");
            classes.add("md:text-left");
        }

        // FLEX APPLY
        if (isFlexRow) {
            classes.add("flex");
            classes.add("flex-col");
            classes.add("md:flex-row");
        }

        if (isFlexColumn) {
            classes.add("flex");
            classes.add("flex-col");
        }

        // FINAL OUTPUT
        const jsx = `<div className="${[...classes].join(" ")}">
  Your Content Here
</div>`;

        setOutput(jsx);
    };

    return (
        <div className="w-full max-w-[1440px] mx-auto px-4 py-6">
            <h2 className="text-[20px] md:text-[24px] font-bold mb-4">
                Smart Figma → Tailwind Converter 🚀
            </h2>

            <textarea
                className="w-full h-40 border p-3 rounded mb-4"
                placeholder="Paste Figma CSS here..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            <button
                onClick={convertToTailwind}
                className="bg-green-600 text-white px-4 py-2 rounded"
            >
                Convert Smartly
            </button>

            <pre className="mt-4 bg-gray-100 p-4 rounded whitespace-pre-wrap text-sm">
                {output}
            </pre>
        </div>
    );
};

export default FigmaToReactAutoSmart;