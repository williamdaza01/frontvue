import {isEmpty} from "lodash";

/**
 * Validate string with alphabetical data and dots
 * Ej: daniel.prado
 *
 * @param {string|string[]} value
 * @param {es|en|pt} locale
 * @return Boolean
 */
const alphaDotsValidator = (value: string|string[], locale: string = 'es'): boolean => {
  const alphaDots = {
    en: /^[0-9A-Z.]*$/i,
    cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ.]*$/i,
    da: /^[0-9A-ZÆØÅ.]*$/i,
    de: /^[0-9A-ZÄÖÜß.]*$/i,
    es: /^[0-9A-ZÁÉÍÑÓÚÜ.]*$/i,
    fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ.]*$/i,
    it: /^[0-9A-Z\xC0-\xFF.]*$/i,
    lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ.]*$/i,
    nl: /^[0-9A-ZÉËÏÓÖÜ.]*$/i,
    hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ.]*$/i,
    pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ.]*$/i,
    pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ.]*$/i,
    ru: /^[0-9А-ЯЁ.]*$/i,
    sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ.]*$/i,
    sr: /^[0-9A-ZČĆŽŠĐ.]*$/i,
    sv: /^[0-9A-ZÅÄÖ.]*$/i,
    tr: /^[0-9A-ZÇĞİıÖŞÜ.]*$/i,
    uk: /^[0-9А-ЩЬЮЯЄІЇҐ.]*$/i,
    ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ.]*$/,
    az: /^[0-9A-ZÇƏĞİıÖŞÜ.]*$/i,
    ug: /^[0-9A-Zچۋېرتيۇڭوپھسداەىقكلزشغۈبنمژفگخجۆئ.]*$/i,
  };
  type T = keyof typeof alphaDots
  if (isEmpty(value)) {
    return true;
  }
  if (Array.isArray(value)) {
    return value.every(val => alphaDotsValidator(val, locale));
  }
  const valueAsString = String(value);
  // Match at least one locale.
  if (!locale) {
    return Object.keys(alphaDots).some(loc => alphaDots[loc as T].test(valueAsString));
  }
  return (alphaDots[locale as T] || alphaDots.es).test(valueAsString);
};

export {
  alphaDotsValidator
}