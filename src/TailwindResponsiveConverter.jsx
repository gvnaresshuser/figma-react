import { useState } from "react";

export default function TailwindResponsiveConverter() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    const convertToResponsive = () => {
        let code = input;

        // ===============================
        // Detect Parent Width & Height
        // ===============================

        const parentWidthMatch = code.match(/w-\[(\d+)px\]/);
        const parentHeightMatch = code.match(/h-\[(\d+)px\]/);

        const parentWidth = parentWidthMatch
            ? parseFloat(parentWidthMatch[1])
            : 1600;

        const parentHeight = parentHeightMatch
            ? parseFloat(parentHeightMatch[1])
            : 960;

        // ===============================
        // Convert left px → %
        // ===============================

        code = code.replace(/left-\[(.*?)px\]/g, (_, value) => {
            const percent = ((parseFloat(value) / parentWidth) * 100).toFixed(2);
            return `left-[${percent}%]`;
        });

        // ===============================
        // Convert top px → %
        // ===============================

        code = code.replace(/top-\[(.*?)px\]/g, (_, value) => {
            const percent = ((parseFloat(value) / parentHeight) * 100).toFixed(2);
            return `top-[${percent}%]`;
        });

        // ===============================
        // Convert width px → %
        // ===============================

        code = code.replace(/w-\[(.*?)px\]/g, (_, value) => {
            const percent = ((parseFloat(value) / parentWidth) * 100).toFixed(2);
            return `w-[${percent}%]`;
        });

        // ===============================
        // Convert height px → %
        // ===============================

        code = code.replace(/h-\[(.*?)px\]/g, (_, value) => {
            const percent = ((parseFloat(value) / parentHeight) * 100).toFixed(2);
            return `h-[${percent}%]`;
        });

        // ===============================
        // Replace Main Container
        // ===============================

        code = code.replace(
            /relative w-\[(.*?)%\] h-\[(.*?)%\]/,
            `relative w-full min-h-screen`
        );

        // ===============================
        // Responsive Typography
        // ===============================

        code = code.replace(
            /text-\[(.*?)px\]/g,
            `text-[32px] sm:text-[42px] md:text-[52px] lg:text-[68px]`
        );

        // ===============================
        // Line Height
        // ===============================

        code = code.replace(/leading-\[(.*?)px\]/g, `leading-tight`);

        setOutput(code);
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6">
            <h1 className="text-3xl font-bold mb-6">
                Tailwind Responsive Converter
            </h1>

            <textarea
                className="w-full h-[300px] bg-black border border-gray-700 p-4 rounded-lg"
                placeholder="Paste Tailwind code..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            <button
                onClick={convertToResponsive}
                className="mt-4 px-6 py-3 bg-blue-500 rounded-lg"
            >
                Convert
            </button>

            <textarea
                className="w-full h-[300px] bg-black border border-gray-700 p-4 rounded-lg mt-6"
                placeholder="Responsive output..."
                value={output}
                readOnly
            />
        </div>
    );
}