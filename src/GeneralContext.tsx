import React, { useState } from "react";
import { toggleKanjiDisplay } from "src/config/requests";

const GeneralContextDefaultValue: GeneralContextType = {
  selectedWord: {
    kanji: "Word",
    hiragana: "Hiragana",
    meaning: "Meaning",
    show_kanji: true,
    contains_known_kanji: false,
    content: "",
    is_word: false,
    known_kanji: [],
    unknown_kanji: [],
    known_rtk_kanji: [],
    contains_no_kanji: false,
  },
  setSelectedWord: () => { },
  selectKanji: () => { },
  toggleKanjiFunction: () => { },
  wordSeparation: 0,
  setWordSeparation: () => { },
};

type GeneralContextType = {
  selectedWord: SeparateElements;
  setSelectedWord: React.Dispatch<React.SetStateAction<SeparateElements>>;
  selectKanji: (toggleKanji: () => void, element: SeparateElements) => void; // Change this line
  toggleKanjiFunction: () => void;
  wordSeparation: number;
  setWordSeparation: React.Dispatch<React.SetStateAction<number>>;
};

export const GeneralContext = React.createContext<GeneralContextType>(
  GeneralContextDefaultValue
);

type Props = {
  children: React.ReactNode;
};

export function GeneralProvider({ children }: Props) {
  const [selectedWord, setSelectedWord] = useState<SeparateElements>({
    kanji: "Word",
    hiragana: "Hiragana",
    meaning: "Meaning",
    show_kanji: true,
  } as SeparateElements);

  const [toggleKanjiFunction, setToggleKanjiFunction] = useState<() => void>(() => { });

  const selectKanji = (toggleKanji: () => void, element: SeparateElements) => {
    setToggleKanjiFunction(() => {
      return () => {
        toggleKanjiDisplay(element.kanji);
        toggleKanji();
      }
    });
    setSelectedWord(element);
  };

  const [wordSeparation, setWordSeparation] = useState(0);

  return (
    <GeneralContext.Provider
      value={{
        selectedWord,
        setSelectedWord,
        selectKanji,
        toggleKanjiFunction,
        wordSeparation,
        setWordSeparation
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
}
