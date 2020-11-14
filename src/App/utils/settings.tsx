const BASE_API_URL = "http://localhost:8080/";
const BLOG_URL = "api/v1/posts";
const API_DATE_FORMAT = "YYYY-MM-DD";
const SHOW_DATE_FORMAT = "dd.mm.yy";
const CALENDAR_DATE_RANGE = `1900:2022`;

const POLISH_LOCALE_FOR_CALENDAR = {
  firstDayOfWeek: 1,
  dayNames: [
    "niedziela",
    "poniedziałek",
    "wtorek",
    "środa",
    "czwartek",
    "piątek",
    "sobota",
  ],
  dayNamesShort: ["niedz", "pon", "wto", "śr", "czw", "pt", "sob"],
  dayNamesMin: ["Nd", "Pn", "Wt", "Śr", "Cz", "Pt", "Sb"],
  monthNames: [
    "styczeń",
    "luty",
    "marzec",
    "kwiecień",
    "maj",
    "czerwiec",
    "lipiec",
    "sierpień",
    "wrzesień",
    "październik",
    "listopad",
    "grudzień",
  ],
  monthNamesShort: [
    "sty",
    "lut",
    "mar",
    "kwie",
    "maj",
    "cze",
    "lip",
    "sie",
    "wrz",
    "paź",
    "lis",
    "gru",
  ],
  today: "Dziś",
  clear: "Wyczyść",
  dateFormat: SHOW_DATE_FORMAT,
  weekHeader: "Sm",
};

export {
  BASE_API_URL,
  BLOG_URL,
  API_DATE_FORMAT,
  POLISH_LOCALE_FOR_CALENDAR,
  SHOW_DATE_FORMAT,
  CALENDAR_DATE_RANGE,
};
