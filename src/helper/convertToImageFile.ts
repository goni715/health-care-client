
// Convert Base64 to File
const convertToImageFile = (base64Image: string) => {
    const byteCharacters = atob(base64Image.split(",")[1]);
    const byteNumbers = Array.from(byteCharacters, (char) => char.charCodeAt(0));
    const byteArray = new Uint8Array(byteNumbers);

    const contentType = "image/png";
    const imageBlob = new Blob([byteArray], { type: contentType });
    const imageFile = new File([imageBlob], "image.png", { type: contentType });
    return imageFile;
} 

export default convertToImageFile;

