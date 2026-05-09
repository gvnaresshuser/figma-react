import { useState } from "react";

const FigmaToReactConverterNew = () => {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    // ================= BASE FRAME =================
    // Main Figma frame size
    const FRAME_WIDTH = 1600;
    const FRAME_HEIGHT = 960;

    let parentWidth = FRAME_WIDTH;
    let parentHeight = FRAME_HEIGHT;

    // If parent smaller than this,
    // keep px instead of %
    const SMALL_GROUP_THRESHOLD = 300;

    // ================= HELPERS =================
    const pxToPercent = (value, base) => {
        return `${((parseFloat(value) / base) * 100).toFixed(2)}%`;
    };

    const getNumber = (line) => {
        const match = line.match(/([\d.]+)(px|%)/);
        return match ? match[1] : null;
    };

    const getUnit = (line) => {
        const match = line.match(/([\d.]+)(px|%)/);
        return match ? match[2] : null;
    };

    const convertPosition = (
        value,
        unit,
        parentSize,
        usePixels
    ) => {
        if (usePixels) {
            return `${value}px`;
        }

        if (unit === "%") {
            return `${value}%`;
        }

        return pxToPercent(value, parentSize);
    };

    // ================= MAIN CONVERT =================
    const convertToTailwind = () => {
        let classes = new Set();

        const lines = input.split("\n");

        let widthValue = null;
        let heightValue = null;

        let leftValue = null;
        let topValue = null;

        let parentLeft = 0;
        let parentTop = 0;

       /*  const isRoot =
            leftValue === null &&
            topValue === null; */
       
        // ================= GET VALUES =================
        lines.forEach((line) => {
            const l = line.trim().toLowerCase();

            // WIDTH
            if (/^width:/.test(l)) {
                widthValue = parseFloat(getNumber(l));
            }

            // HEIGHT
            if (/^height:/.test(l)) {
                heightValue = parseFloat(getNumber(l));
            }

            // LEFT
            if (/^left:/.test(l)) {
                leftValue = parseFloat(getNumber(l));
            }

            // TOP
            if (/^top:/.test(l)) {
                topValue = parseFloat(getNumber(l));
            }
        });

        const isRoot =
            widthValue === FRAME_WIDTH &&
            heightValue === FRAME_HEIGHT;

        const isSmallGroup =
            widthValue < 300 ||
            heightValue < 300;

        // ================= ROOT FIX =================
        if (isRoot) {

            classes.add("w-full");
            classes.add("max-w-[1600px]");
            classes.add("aspect-[1600/960]");
            classes.add("min-h-screen");
            classes.add("mx-auto");
            classes.add("overflow-hidden");
        }

        // ================= ASK FOR PARENT =================
        // Example:
        // Group at left:410 top:155
        // Child at left:513 top:219
        // local => 103 / 64

        if (!isRoot) {

            parentLeft = parseFloat(
                prompt("Enter parent LEFT value", "0")
            );

            parentTop = parseFloat(
                prompt("Enter parent TOP value", "0")
            );
        }

        if (isSmallGroup) {

            parentWidth = parseFloat(
                prompt("Enter parent WIDTH", "0")
            );

            parentHeight = parseFloat(
                prompt("Enter parent HEIGHT", "0")
            );
        }



        // ================= LOCAL POSITION =================
       /*  const localLeft =
            leftValue !== null
                ? leftValue - parentLeft
                : null;

        const localTop =
            topValue !== null
                ? topValue - parentTop
                : null;
 */


        const isVector =
            input.toLowerCase().includes("fill") &&
            isSmallGroup;

        /* const hasPercentPosition =
            input.includes("%"); */

        const hasPercentPosition =
            getUnit(
                lines.find(line =>
                    line.toLowerCase().includes("left:")
                ) || ""
            ) === "%";
//--------------------------------------------------            
        let localLeft = null;
        let localTop = null;

        // layout blocks
        if (!isVector || !hasPercentPosition) {

            localLeft =
                leftValue !== null
                    ? leftValue - parentLeft
                    : null;

            localTop =
                topValue !== null
                    ? topValue - parentTop
                    : null;
        }

        // vector geometry elements
       /*  if (isVector && hasPercentPosition) {

            // big vector
            if (
                leftValue === 25.62 &&
                topValue === 16.15
            ) {
                localLeft = 0;
                localTop = 0;
            }

            // small vector
            else if (
                leftValue === 29.12 &&
                topValue === 22.71
            ) {
                localLeft = 48;
                localTop = 60;
            }
        } */
        // vector geometry percentages
        if (isVector && hasPercentPosition) {

            localLeft =
                (leftValue / 100) * parentWidth;

            localTop =
                (topValue / 100) * parentHeight;
        }

        // ================= SMALL GROUP DETECTION =================


        // ================= POSITION =================
        lines.forEach((line) => {
            const l = line.trim().toLowerCase();

            if (/^position:\s*absolute/.test(l)) {
                classes.add("absolute");
            }

            if (/^position:\s*relative/.test(l)) {
                classes.add("relative");
            }

            // ================= WIDTH =================
            //if (/^width:/.test(l)) {
            if (/^width:/.test(l) && !isRoot) {
                if (isSmallGroup) {
                    classes.add(`w-[${widthValue}px]`);
                } else {
                    classes.add(
                        `w-[${pxToPercent(
                            widthValue,
                            FRAME_WIDTH
                        )}]`
                    );
                }
            }

            // ================= HEIGHT =================
            //if (/^height:/.test(l)) {
            if (/^height:/.test(l) && !isRoot) {
                if (isSmallGroup) {
                    classes.add(`h-[${heightValue}px]`);
                } else {
                    classes.add(
                        `h-[${pxToPercent(
                            heightValue,
                            FRAME_HEIGHT
                        )}]`
                    );
                }
            }

            // ================= LEFT =================
            if (localLeft !== null) {

                // vector px positioning
                if (isVector) {

                    if (Math.round(localLeft) === 0) {
                        classes.add("left-0");
                    } else {
                        classes.add(
                            `left-[${Math.round(localLeft)}px]`
                        );
                    }
                }

                // origin element
                else if (localLeft === 0) {
                    classes.add("left-0");
                }

                // small groups use px
                else if (isSmallGroup) {
                    classes.add(`left-[${Math.round(localLeft)}px]`);
                }

                // large layouts use %
                else {
                    classes.add(
                        `left-[${pxToPercent(
                            localLeft,
                            FRAME_WIDTH
                        )}]`
                    );
                }
            }

            // ================= TOP =================
            if (localTop !== null) {

                // vector px positioning
                if (isVector) {

                    if (Math.round(localTop) === 0) {
                        classes.add("top-0");
                    } else {
                        classes.add(
                            `top-[${Math.round(localTop)}px]`
                        );
                    }
                }

                // origin element
                else if (localTop === 0) {
                    classes.add("top-0");
                }

                // small groups use px
                else if (isSmallGroup) {
                    classes.add(`top-[${Math.round(localTop)}px]`);
                }

                // large layouts use %
                else {
                    classes.add(
                        `top-[${pxToPercent(
                            localTop,
                            FRAME_HEIGHT
                        )}]`
                    );
                }
            }

            // ================= VECTOR ORIGIN =================
         

            // ================= BACKGROUND =================
            if (/^background:/.test(l)) {
                const color = l.match(/#([0-9a-f]+)/);

                if (color) {
                    classes.add(`bg-[#${color[1]}]`);
                }
            }

            // ================= ROTATE =================
            if (/rotate/.test(l)) {
                const match = l.match(
                    /rotate\(([-\d.]+)deg\)/
                );

                if (match) {
                    classes.add(
                        `rotate-[${match[1]}deg]`
                    );

                    classes.add("origin-center");
                }
            }

            // ================= BORDER =================
            if (/^border:/.test(l)) {
                const width = l.match(/(\d+)px/);

                const color = l.match(
                    /#([0-9a-f]+)/
                );

                if (width) {
                    classes.add(
                        `border-[${width[1]}px]`
                    );
                }

                if (color) {
                    classes.add(
                        `border-[#${color[1]}]`
                    );
                }
            }
        });

        // ================= OUTPUT =================
        const jsx = `<div className="${[
            ...classes,
        ].join(" ")}">
    {/* Content */}
</div>`;

        setOutput(jsx);
    };

    return (
        <div className="w-full max-w-[1440px] mx-auto px-4 py-6">
            <h2 className="text-[22px] font-bold mb-4">
                Advanced Figma → Tailwind Converter 🚀
            </h2>

            <textarea
                className="w-full h-56 border p-4 rounded mb-4"
                placeholder="Paste Figma CSS here..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            <button
                onClick={convertToTailwind}
                className="bg-blue-500 text-white px-5 py-2 rounded"
            >
                Convert
            </button>

            <pre className="mt-6 bg-gray-100 p-4 rounded whitespace-pre-wrap text-sm overflow-auto">
                {output}
            </pre>
        </div>
    );
};

export default FigmaToReactConverterNew;