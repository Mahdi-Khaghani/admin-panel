import jmoment from "jalali-moment";

export const dateToJalali = (date) => {
  return jmoment(date).format("jYYYY/jMM/jDD");
};
