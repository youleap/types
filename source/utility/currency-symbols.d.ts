const CurrencySymbols = {
  Dollar: "$",
  Euro: "€",
  Pound: "£",
  Yen: "¥",
  Franc: "₣",
  Rupee: "₹",
  Dinar: "د.ك",
  Dirham: "د.إ",
  Riyal: "﷼",
  Mark: "₻",
  Rouble: "₽",
  Lari: "₾",
  Lira: "₺",
  Manat: "₼",
  Tenge: "₸",
  Hryvnia: "₴",
  Spesmilo: "₷",
  Baht: "฿",
  Won: "원",
  Dong: "₫",
  Tugrik: "₮",
  Drachma: "₯",
  Peso: "₱",
  Austral: "₳",
  Cedi: "₵",
  Guarani: "₲",
  Sheqel: "₪",
  Penny: "₰",
} as const;

/**
 * @description Utility type for the `CurrencyField` type which represents the selected currency symbol.
 * @type CurrencySymbols
 * @category Utility
 */
export type CurrencySymbols =
  typeof CurrencySymbols[keyof typeof CurrencySymbols];
