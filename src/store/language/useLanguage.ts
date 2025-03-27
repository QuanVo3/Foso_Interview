import { create } from "zustand";

const useLanguage = create((set) => ({
    language: typeof window !== "undefined" ? localStorage.getItem("language") || "VI" : "VI",
    setLanguage: (lang: string) => {
        if (typeof window !== "undefined") {
            localStorage.setItem("language", lang);
        }
        set({ language: lang });
    },
}));

export default useLanguage;
