import dayjs, { Dayjs } from 'dayjs';

const convertToTimeString = (dateObj: Dayjs): string => {
  return dateObj.format("HH:mm") || ""; // Ensures `dateObj` is valid
};

export default convertToTimeString;
