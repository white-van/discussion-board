import en from "./en.json";
import es from "./es.json";
import fr from "./fr.json";

interface Translation {
  [id: string]: string;
}

export const locales: { [locale: string]: Translation } = {
  en: en as Translation,
  es: es as Translation,
  fr: fr as Translation,
};
