
const modifyFormData= (values: Record<string, unknown>) => {
   const file = values['file']; //catch file
   delete values['file']; //delete file from values
   const data = JSON.stringify(values); //stringify values
   const formData = new FormData();
   formData.append('data', data);
   formData.append('file', file as Blob)

   return formData;
};

export default modifyFormData;