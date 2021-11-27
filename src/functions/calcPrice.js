"use strict";

const calcPrice = function (languageCode, symboles, docType = "none") {
  let price = 0;

  price +=
    languageCode === "ru" || languageCode === "ua"
      ? symboles * 0.05
      : symboles * 0.12;

  if (docType === "other") price *= 1.2;

  if (price < 50 && (languageCode === "ru" || languageCode === "ua"))
    price = 50;

  if (price < 120 && languageCode === "en") price = 120;

  return price;
};

module.exports = { calcPrice };
