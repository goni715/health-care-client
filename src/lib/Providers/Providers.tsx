"use client"
import { ThemeProvider } from "@mui/material";
import { theme } from "../theme/theme";
import { ReactNode } from "react";


type TProps = {
    children: ReactNode
}

const Providers = ({children}: TProps) => {
    return (
        <>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </>
    );
};

export default Providers;