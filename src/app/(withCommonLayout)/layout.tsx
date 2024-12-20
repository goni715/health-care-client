import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import { ReactNode } from "react";

type TProps = {
    children: ReactNode
}

const CommonLayout = ({children}: TProps) => {
    return (
        <>
            <Navbar/>
             <div style={{
                minHeight: '100vh'
             }}> 
                {children}
             </div>
            <Footer/>
        </>
    );
};

export default CommonLayout;