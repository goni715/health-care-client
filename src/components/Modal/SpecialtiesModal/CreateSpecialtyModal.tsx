import { useState } from "react";
import PHModal from "@/components/Modal/PHModal/PHModal";


const CreateSpecialtyModal = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <PHModal open={open} setOpen={setOpen}/>
        </>
    );
};

export default CreateSpecialtyModal;