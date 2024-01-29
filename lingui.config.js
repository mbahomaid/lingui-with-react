export const locales = ["en", "ar"];
export const catalogs = [
    {
        path: "src/locales/{locale}",
        include: ["src"], //includes all files in the src folder
    },
];
export const format = "po";