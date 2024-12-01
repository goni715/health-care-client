import { ReactNode } from "react";
import { useForm, FormProvider, FieldValues, SubmitHandler } from "react-hook-form";

type TProps = {
    children: ReactNode,
    onSubmit: SubmitHandler<FieldValues>
}

const PHForm = ({children, onSubmit}: TProps) => {
    const methods = useForm();
    
    const submit : SubmitHandler<FieldValues> = async (data) => {
       await onSubmit(data);
    };
    

    return (
        <>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                {children}
                </form>
            </FormProvider>
        </>
    );
};

export default PHForm;