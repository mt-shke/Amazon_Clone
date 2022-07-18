module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    plugins: [require("daisyui")],
    theme: {
        extend: {
            colors: {
                // 'darkgrey': withOpacityValue('--primary-cool'),
                darkgrey: "#3f3f3f",
                "bg-dark": "#131921",
                "bg-grey": "#232f3e",
                "bg-gray": "#37475a",
                "bg-lightgrey": "#485769",
                "bg-main": "#eaeded",
                "bg-mainlight": "#f3f3f3",
                secondary: "#cccccc",
                orange: "#ffc739",
                orangelight: "#ffd978",
                orangedark: "#f08804",
                transparent: "transparent",
            },
            fontFamily: {
                ember: ["ember", "sans-serif"],
                emberl: ["emberlight", "sans-serif"],
                emberb: ["emberbold", "sans-serif"],
                bookerly: ["bookerly", "sans-serif"],
            },
            fontSize: {
                xxs: [".65rem", ".7rem"],
            },
        },
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1240px",
            "2xl": "1520px",
        },
    },
    daisyui: {
        themes: [
            {
                custom: {
                    primary: "#a991f7",
                    secondary: "#f6d860",
                    "base-header": "#131921",
                    orange: "#ffc739",
                    orangelight: "#ffd978",
                    accent: "#37cdbe",
                    neutral: "#3d4451",
                    "base-100": "#ffffff",
                    "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
                    "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
                    "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
                    "--animation-btn": "0.25s", // duration of animation when you click on button
                    "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
                    "--btn-text-case": "uppercase", // set default text transform for buttons
                    "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
                    "--border-btn": "1px", // border width of buttons
                    "--tab-border": "1px", // border width of tabs
                    "--tab-radius": "0.5rem", // border radius of tabs
                },
            },
        ],
    },
};
