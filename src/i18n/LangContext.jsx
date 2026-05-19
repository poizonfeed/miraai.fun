import { createContext, useContext, useState } from "react";
import { translations } from "./translations.js";

const LangContext = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLang] = useState("en");
  const t = translations[lang];
  const toggle = () => setLang((l) => (l === "en" ? "ru" : "en"));

  return (
    <LangContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
