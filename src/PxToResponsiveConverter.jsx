import { useState } from "react";

export default function PxToResponsiveConverter() {

    const [parentInput, setParentInput] = useState("");
    const [childInput, setChildInput] = useState("");

    const [removeOffset, setRemoveOffset] =
        useState(true);

    const [absoluteOutput, setAbsoluteOutput] =
        useState("");

    const [responsiveOutput, setResponsiveOutput] =
        useState("");

    // =========================================
    // EXTRACT VALUE
    // =========================================

    const extractValue = (text, property) => {

        const regex = new RegExp(
            `${property}:\\s*(-?\\d*\\.?\\d+)px`,
            "i"
        );

        const match = text.match(regex);

        return match ? parseFloat(match[1]) : 0;
    };

    // =========================================
    // MAIN CONVERTER
    // =========================================

    const convert = () => {

        // =====================================
        // PARENT
        // =====================================

        const parentWidth = extractValue(
            parentInput,
            "width"
        );

        const parentHeight = extractValue(
            parentInput,
            "height"
        );

        const parentLeft = extractValue(
            parentInput,
            "left"
        );

        const parentTop = extractValue(
            parentInput,
            "top"
        );

        // =====================================
        // CHILD
        // =====================================

        const childWidth = extractValue(
            childInput,
            "width"
        );

        const childHeight = extractValue(
            childInput,
            "height"
        );

        const childLeft = extractValue(
            childInput,
            "left"
        );

        const childTop = extractValue(
            childInput,
            "top"
        );

        // =====================================
        // OPTIONAL OFFSET REMOVAL
        // =====================================

        const relativeLeft = removeOffset
            ? childLeft - parentLeft
            : childLeft;

        const relativeTop = removeOffset
            ? childTop - parentTop
            : childTop;

        // =====================================
        // PX → %
        // =====================================

        const widthPercent = (
            (childWidth / parentWidth) *
            100
        ).toFixed(2);

        const heightPercent = (
            (childHeight / parentHeight) *
            100
        ).toFixed(2);

        const leftPercent = (
            (relativeLeft / parentWidth) *
            100
        ).toFixed(2);

        const topPercent = (
            (relativeTop / parentHeight) *
            100
        ).toFixed(2);

        // =====================================
        // ABSOLUTE OUTPUT
        // =====================================

        const absoluteCode = `
<div
  className="
    absolute

    w-[${childWidth}px]
    h-[${childHeight}px]

    left-[${relativeLeft}px]
    top-[${relativeTop}px]
  "
>
</div>
`;

        // =====================================
        // RESPONSIVE OUTPUT
        // =====================================

        const responsiveCode = `
<div
  className="
    absolute

    w-[${widthPercent}%]
    h-[${heightPercent}%]

    left-[${leftPercent}%]
    top-[${topPercent}%]
  "
>
</div>
`;

        setAbsoluteOutput(absoluteCode);

        setResponsiveOutput(responsiveCode);
    };

    return (

        <div className="min-h-screen bg-black text-white p-8">

            {/* TITLE */}

            <h1 className="text-4xl font-bold mb-10">
                PX → Responsive Tailwind Converter
            </h1>

            {/* REMOVE OFFSET TOGGLE */}

            <div className="mb-6 flex items-center gap-3">

                <input
                    type="checkbox"
                    checked={removeOffset}
                    onChange={() =>
                        setRemoveOffset(!removeOffset)
                    }
                />

                <label className="text-lg">
                    Remove Parent Offset
                </label>

            </div>

            {/* PARENT */}

            <div className="mb-8">

                <h2 className="text-2xl mb-3">
                    Parent CSS
                </h2>

                <textarea
                    className="
                        w-full
                        h-[220px]
                        bg-gray-900
                        p-4
                        rounded-lg
                    "
                    value={parentInput}
                    onChange={(e) =>
                        setParentInput(e.target.value)
                    }
                />

            </div>

            {/* CHILD */}

            <div className="mb-8">

                <h2 className="text-2xl mb-3">
                    Child CSS
                </h2>

                <textarea
                    className="
                        w-full
                        h-[220px]
                        bg-gray-900
                        p-4
                        rounded-lg
                    "
                    value={childInput}
                    onChange={(e) =>
                        setChildInput(e.target.value)
                    }
                />

            </div>

            {/* BUTTON */}

            <button
                onClick={convert}
                className="
                    px-8
                    py-4
                    bg-blue-500
                    rounded-lg
                    text-lg
                "
            >
                Convert
            </button>

            {/* ABSOLUTE */}

            <div className="mt-12">

                <h2 className="text-2xl mb-3">
                    React JSX Absolute
                </h2>

                <textarea
                    className="
                        w-full
                        h-[220px]
                        bg-gray-900
                        p-4
                        rounded-lg
                    "
                    value={absoluteOutput}
                    readOnly
                />

            </div>

            {/* RESPONSIVE */}

            <div className="mt-12">

                <h2 className="text-2xl mb-3">
                    React JSX Responsive
                </h2>

                <textarea
                    className="
                        w-full
                        h-[220px]
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