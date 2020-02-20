import { writable } from "svelte/store";

export let mulines = writable([
  {
    DMC: 111,
    Kirova: 222,
    Anchor: 333,
    Madeira: 444,
    stock: 1000,
    color_ru: "светленький серый",
    color_en: "lt grey",
    color: "cccccc",
  },
  {
    DMC: 2312,
    Kirova: 1231,
    Anchor: 1231,
    Madeira: 1213,
    stock: 2,
    color_ru: "темненький серый",
    color_en: "dark grey",
    color: "333333",
  },
  {
    DMC: 888,
    Kirova: 888,
    Anchor: 888,
    Madeira: 888,
    stock: 0,
    color_ru: "серый",
    color_en: "just grey",
    color: "777777",
  }
]);