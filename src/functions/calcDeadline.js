const dayjs = require("dayjs");
const { calcPrice } = require("./calcPrice");

const calcDeadline = function (
  languageCode,
  symboles,
  docType = "none",
  orderDay
) {
  let totalWorkHours = 0.5;

  totalWorkHours +=
    languageCode === "ru" || languageCode === "ua"
      ? +(symboles / 1333).toFixed(1)
      : +(symboles / 333).toFixed(1);

  if (docType === "other") totalWorkHours *= 1.2;
  if (totalWorkHours < 1) totalWorkHours = 1;

  let requiredDays = Math.floor(totalWorkHours / 9);
  const requiredHours = +(totalWorkHours % 9).toFixed(1);

  let deadlineDate = dayjs();
  // For code test
  // let deadlineDate = dayjs(orderDay);

  if (deadlineDate.day() === 6 || deadlineDate.day() === 0)
    deadlineDate = deadlineDate.hour(9).minute(0);

  if (deadlineDate.hour() >= 19) {
    requiredDays++;
    deadlineDate = deadlineDate.hour(9).minute(0);
  }

  if (deadlineDate.hour() < 9) deadlineDate = deadlineDate.hour(9).minute(0);

  if (
    deadlineDate.minute(requiredHours * 60 + deadlineDate.minute()).hour() >=
      19 ||
    deadlineDate.minute(requiredHours * 60 + deadlineDate.minute()).hour() < 9
  ) {
    if (deadlineDate.day() === 5) deadlineDate = deadlineDate.add(1, "day");
    else requiredDays++;
    const leftHours = requiredHours - (19 - deadlineDate.hour());
    console.log(leftHours, requiredHours);
    deadlineDate = deadlineDate.hour(9).add(leftHours, "hours");
  } else {
    deadlineDate = deadlineDate.add(requiredHours, "hour");
  }

  let day = 0;
  do {
    if (deadlineDate.day() === 6 || deadlineDate.day() === 0)
      deadlineDate =
        deadlineDate.day() === 6
          ? deadlineDate.add(2, "day")
          : deadlineDate.add(1, "day");

    if (requiredDays) deadlineDate = deadlineDate.add(1, "day");
    day++;
  } while (day < requiredDays);

  return {
    price: calcPrice(languageCode, symboles, docType),
    time: totalWorkHours,
    deadline: deadlineDate.unix(),
    deadline_date: new Intl.DateTimeFormat("ua", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    }).format(deadlineDate),
  };
};

module.exports = { calcDeadline };
