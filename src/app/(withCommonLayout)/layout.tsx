import Navbar from "@/components/shared/Navbar/Navbar";
import { ReactNode } from "react";

type TProps = {
    children: ReactNode
}

const CommonLayout = ({children}: TProps) => {
    return (
        <>
            <Navbar/>
            {children}
        </>
    );
};

export default CommonLayout;