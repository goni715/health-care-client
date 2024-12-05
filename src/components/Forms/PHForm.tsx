import { zodResolver } from "@hookform/resolvers/zod";
import { ReactNode } from "react";
import { useForm, FormProvider, FieldValues, SubmitHandler } from "react-hook-form";
import { ZodEffects, ZodObject } from "zod";

type TFormConfig = {
    resolver: any,
    defaultValues?: Record<string, unknown>
}

type TProps = {
    children: ReactNode,
    onSubmit: SubmitHandler<FieldValues>,
    schema: ZodObject<any> | ZodEffects<any>,
    defaultValues?: Record<string, unknown>
}

const PHForm = ({children, onSubmit, schema, defaultValues}: TProps) => {
    const formConfig : TFormConfig = {
        resolver: zodResolver(schema)
    }
    
    //set defaultValues
    if(defaultValues){
        formConfig['defaultValues'] = defaultValues;
      }

    const methods = useForm(formConfig);
    console.log(methods.formState.errors)
    
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