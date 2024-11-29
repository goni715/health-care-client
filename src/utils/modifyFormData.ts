
const modifyFormData= (values: Record<string, unknown>) => {
   const data = JSON.stringify(values); //stringify values
   const formData = new FormData();
   formData.append('data', data);
   return formData;
};

export default modifyFormData;