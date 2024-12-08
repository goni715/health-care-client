import dayjs, { Dayjs } from "dayjs";


const convertToDateString = (dayjsObject: Dayjs) => {
    //const formattedDate = dayjs(new Date(dayjsObject.$d)).format('YYYY-MM-DD');
    //return formattedDate;

     // Use the public API instead of accessing the internal `$d` property
     const formattedDate = dayjs(dayjsObject.toDate()).format('YYYY-MM-DD');
     return formattedDate;
}

export default convertToDateString;

