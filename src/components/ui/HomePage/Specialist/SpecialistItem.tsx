import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { ISpecialties } from "@/types/specialties/specialties";


interface IProps {
    speciality: ISpecialties
}

const SpecialistItem = ({speciality}: IProps) => {
    return (
        <>
             <Box sx={{
                      flex: 1,
                      width: '150px',
                      backgroundColor: 'rgba(245, 245, 245, 1)',
                      border: '1px solid rgba(250, 250, 250, 1)',
                      borderRadius: '10px',
                      textAlign: 'center',
                      padding: "40px 10px",
                      '& img': {
                        width: '50px',
                        height: '50px',
                        margin: '0 auto'
                      },
                      ':hover': {
                        border: '1px solid rgba(36, 153, 239, 1)',
                        borderRadius: '10px',
                        cursor: 'pointer',
                        transition: 'all 0.5s',
                      }
                    }}>
                      <Image src={speciality.icon} width={100} height={100} alt="speciality icon"/>
                      <Box>
                         <Typography component="p" fontWeight={600} fontSize={18} mt={2}>
                            {speciality.title}
                         </Typography>
                      </Box>
                    </Box>
        </>
    );
};

export default SpecialistItem;