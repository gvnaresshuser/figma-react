import { useState } from "react";

export default function TestConverter() {
    const [treeInput, setTreeInput] = useState("");
    const [cssInput, setCssInput] = useState("");

    const [absoluteOutput, setAbsoluteOutput] = useState("");
    const [responsiveOutput, setResponsiveOutput] = useState("");

    // =========================================
    // NORMALIZE NAMES
    // =========================================

    const normalizeName = (name) => {
        return name
            .toLowerCase()
            .replace(/[^a-z0-9]/g, "")
            .trim();
    };

    // =========================================
    // DETECT VECTOR / SVG / CURVE
    // =========================================

    const isVectorLike = (name) => {
        const n = normalizeName(name);

        return (
            n.includes("vector") ||
            n.includes("curve") ||
            n.includes("svg") ||
            n.includes("icon")
        );
    };

    // =========================================
    // DETECT TEXT ELEMENTS
    // =========================================

    const isTextLike = (styles) => {
        return (
            styles["font-size"] ||
            styles["font-family"] ||
            styles["font-weight"]
        );
    };

    // =========================================
    // PARSE TREE
    // =========================================

    const parseTree = (text) => {
        const lines = text.split("\n");

        const tree = [];
        const stack = [];

        lines.forEach((line) => {
            if (!line.trim()) return;

            const indent = line.search(/\S/);

            const node = {
                name: line.trim(),
                children: [],
            };

            while (
                stack.length &&
                stack[stack.length - 1].indent >= indent
            ) {
                stack.pop();
            }

            if (stack.length === 0) {
                tree.push(node);
            } else {
                stack[stack.length - 1].node.children.push(node);
            }

            stack.push({ indent, node });
        });

        return tree;
    };

    // =========================================
    // PARSE CSS
    // =========================================

    const parseCSS = (text) => {
        const regex =
            /\/\*\s*(.*?)\s*\*\/([\s\S]*?)(?=\/\*|$)/g;

        const styles = {};

        let match;

        while ((match = regex.exec(text)) !== null) {
            const rawName = match[1].trim();

            const normalized = normalizeName(rawName);

            const body = match[2];

            const styleObj = {};

            body.split(";").forEach((line) => {
                const [key, value] = line.split(":");

                if (key && value) {
                    styleObj[key.trim()] = value.trim();
                }
            });

            styles[normalized] = styleObj;
        }

        return styles;
    };

    // =========================================
    // CSS → TAILWIND
    // =========================================

    const cssToTailwind = (styles, nodeName) => {
        let classes = [];

        // POSITION
        if (styles.position) {
            classes.push(styles.position);
        }

        // =====================================
        // VECTOR / SVG ELEMENTS
        // =====================================

        if (isVectorLike(nodeName)) {
            classes.push(
                `
w-[20px]
sm:w-[28px]
md:w-[36px]
lg:w-[48px]
h-auto
`
            );
        }

        // =====================================
        // NORMAL ELEMENTS
        // =====================================

        else {
            if (styles.width) {
                classes.push(`w-[${styles.width}]`);
            }

            if (styles.height) {
                classes.push(`h-[${styles.height}]`);
            }
        }

        // POSITIONING

        if (styles.left) {
            classes.push(`left-[${styles.left}]`);
        }

        if (styles.top) {
            classes.push(`top-[${styles.top}]`);
        }

        // BACKGROUND

        if (styles.background) {
            if (styles.background === "#000000") {
                classes.push("bg-black");
            } else if (styles.background === "#FFFFFF") {
                classes.push("bg-white");
            } else {
                classes.push(`bg-[${styles.background}]`);
            }
        }

        // BORDER

        if (styles.border) {
            const parts = styles.border.split(" ");

            if (parts[0]) {
                classes.push(`border-[${parts[0]}]`);
            }

            if (parts[2]) {
                classes.push(`border-[${parts[2]}]`);
            }
        }

        // ROTATION

        if (styles.transform?.includes("rotate")) {
            const rotate =
                styles.transform.match(/rotate\((.*?)\)/);

            if (rotate) {
                classes.push(`rotate-[${rotate[1]}]`);
            }
        }

        // =====================================
        // TEXT STYLES
        // =====================================

        if (styles["font-family"]) {
            classes.push(
                `font-[${styles["font-family"].replace(
                    /'/g,
                    ""
                )}]`
            );
        }

        if (styles["font-weight"] === "900") {
            classes.push("font-black");
        }

        // RESPONSIVE TYPOGRAPHY

        if (styles["font-size"]) {
            classes.push(`
text-[32px]
sm:text-[42px]
md:text-[52px]
lg:text-[68px]
`);
        }

        if (styles["line-height"]) {
            classes.push("leading-tight");
        }

        // TEXT COLOR

        if (styles.color === "#FFFFFF") {
            classes.push("text-white");
        }

        // OVERFLOW

        if (styles.overflow === "hidden") {
            classes.push("overflow-hidden");
        }

        return classes.join("\n");
    };

    // =========================================
    // GENERATE JSX RECURSIVELY
    // =========================================

    const generateJSX = (
        nodes,
        styles,
        level = 0
    ) => {
        return nodes
            .map((node) => {
                const normalized = normalizeName(node.name);

                const style = styles[normalized] || {};

                const classNames = cssToTailwind(
                    style,
                    node.name
                );

                // =====================================
                // VECTOR PLACEHOLDER
                // =====================================

                const vectorContent = isVectorLike(node.name)
                    ? `
<svg
  viewBox="0 0 100 100"
  className="w-full h-auto"
  fill="none"
>
</svg>
`
                    : "";

                // =====================================
                // TEXT PLACEHOLDER
                // =====================================

                const textContent = isTextLike(style)
                    ? `
${node.name}
`
                    : "";

                return `
${" ".repeat(level * 2)}{/* ${node.name.toUpperCase()} */}
${" ".repeat(level * 2)}<div
${" ".repeat(level * 2)}  className="
${classNames}
${" ".repeat(level * 2)}  "
${" ".repeat(level * 2)}>
${vectorContent}
${textContent}
${generateJSX(
                    node.children,
                    styles,
                    level + 1
                )}
${" ".repeat(level * 2)}</div>
`;
            })
            .join("");
    };

    // =========================================
    // RESPONSIVE CONVERTER
    // =========================================

    const makeResponsive = (code) => {
        let output = code;

        const parentWidthMatch =
            output.match(/w-\[(\d+)px\]/);

        const parentHeightMatch =
            output.match(/h-\[(\d+)px\]/);

        const parentWidth = parentWidthMatch
            ? parseFloat(parentWidthMatch[1])
            : 1600;

        const parentHeight = parentHeightMatch
            ? parseFloat(parentHeightMatch[1])
            : 960;

        // LEFT

        output = output.replace(
            /left-\[(.*?)px\]/g,
            (_, value) => {
                return `left-[${(
                    (parseFloat(value) / parentWidth) *
                    100
                ).toFixed(2)}%]`;
            }
        );

        // TOP

        output = output.replace(
            /top-\[(.*?)px\]/g,
            (_, value) => {
                return `top-[${(
                    (parseFloat(value) / parentHeight) *
                    100
                ).toFixed(2)}%]`;
            }
        );

        // WIDTH

        output = output.replace(
            /w-\[(.*?)px\]/g,
            (_, value) => {
                return `w-[${(
                    (parseFloat(value) / parentWidth) *
                    100
                ).toFixed(2)}%]`;
            }
        );

        // HEIGHT

        output = output.replace(
            /h-\[(.*?)px\]/g,
            (_, value) => {
                return `h-[${(
                    (parseFloat(value) / parentHeight) *
                    100
                ).toFixed(2)}%]`;
            }
        );

        // MAIN CONTAINER

        output = output.replace(
            /relative\s+w-\[(.*?)%\]\s+h-\[(.*?)%\]/,
            "relative w-full min-h-screen"
        );

        return output;
    };

    // =========================================
    // MAIN
    // =========================================

    const processInput = () => {
        const tree = parseTree(treeInput);

        const styles = parseCSS(cssInput);

        const jsx = generateJSX(tree, styles);

        setAbsoluteOutput(jsx);

        setResponsiveOutput(makeResponsive(jsx));
    };

    return (
        <div className="min-h-screen bg-black text-white p-6">

            <h1 className="text-4xl font-bold mb-8">
                Figma → Responsive Tailwind Converter
            </h1>

            {/* TREE INPUT */}

            <div className="mb-8">
                <h2 className="text-2xl mb-3">
                    Tree Structure
                </h2>

                <textarea
                    className="
w-full
h-[250px]
bg-gray-900
p-4
rounded-lg
"
                    placeholder="Paste hierarchy tree..."
                    value={treeInput}
                    onChange={(e) =>
                        setTreeInput(e.target.value)
                    }
                />
            </div>

            {/* CSS INPUT */}

            <div className="mb-8">
                <h2 className="text-2xl mb-3">
                    Figma CSS
                </h2>

                <textarea
                    className="
w-full
h-[400px]
bg-gray-900
p-4
rounded-lg
"
                    placeholder="Paste Figma CSS..."
                    value={cssInput}
                    onChange={(e) =>
                        setCssInput(e.target.value)
                    }
                />
            </div>

            {/* BUTTON */}

            <button
                onClick={processInput}
                className="
px-8
py-4
bg-blue-500
rounded-lg
text-lg
"
            >
                Generate Code
            </button>

            {/* ABSOLUTE OUTPUT */}

            <div className="mt-10">
                <h2 className="text-2xl mb-3">
                    Absolute Tailwind JSX
                </h2>

                <textarea
                    className="
w-full
h-[400px]
bg-gray-900
p-4
rounded-lg
"
                    value={absoluteOutput}
                    readOnly
                />
            </div>

            {/* RESPONSIVE OUTPUT */}

            <div className="mt-10">
                <h2 className="text-2xl mb-3">
                    Responsive Tailwind JSX
                </h2>

                <textarea
                    className="
w-full
h-[400px]
bg-gray-900
p-4
rounded-lg
"
                    value={responsiveOutput}
                    readOnly
                />
            </div>

        </div>
    );
}