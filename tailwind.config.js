/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            transitionProperty: {
                height: "height",
            },
            boxShadow: {
                card: "0 2px 10px 0 rgb(94 86 105 / 10%)",
            },
            colors: {
                "primary-background": "#f4f5fa;",
                "primary-color": "rgba(94,86,105,.87)",
                "primary-color-opac": "rgba(94,86,105,.04)",
                "anchor-base": "#9155fd;",
                "subtitle-color": "rgba(94,86,105,.68)",
                "icon-color": "rgba(94,86,105,.76)",
                "primary-error": "#ff4c51",
                "primary-base": "#9155fd",
                "theme-primary": "rgb(145,85,253)",
                "theme-on-surface": "rgb(58,53,65)",
            },
            spacing: {
                100: "28rem",
            },
        },
    },
    plugins: [
        //...
        require("@tailwindcss/forms"),
    ],
};
