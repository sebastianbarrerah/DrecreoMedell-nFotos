import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase/auth";

export const getData = async(data) => {
    try {
        const storageRef = ref(storage, `images/${data.name}`);
        await uploadBytes(storageRef, data);
        const downloadURL = await getDownloadURL(storageRef);
        console.log("File uploaded successfully", downloadURL);
        return downloadURL
        
    } catch (error) {
        console.error("Error uploading file:", error);
    }

}