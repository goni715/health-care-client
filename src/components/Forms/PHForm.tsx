import { ReactNode } from "react";
import { useForm, FormProvider, FieldValues, SubmitHandler } from "react-hook-form";

type TProps = {
    children: ReactNode
}

const PHForm = ({children}: TProps) => {
    const methods = useForm();
    
    const onSubmit : SubmitHandler<FieldValues> = (data) => {
       console.log(data)
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