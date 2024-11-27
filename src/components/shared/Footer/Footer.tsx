import { Box, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import facebookIcon from '@/assets/landing_page/facebook.png';
import instagramIcon from '@/assets/landing_page/instagram.png'
import linkedinIcon from '@/assets/landing_page/linkedin.png';
import twitterIcon from '@/assets/landing_page/twitter.png'


import Image from "next/image";

const Footer = () => {
    return (
      <>
        <Box bgcolor="rgb(17, 26, 34)" py={5}>
          <Container>
            <Stack direction="row" gap={4} justifyContent="center">
              <Typography color="#fff" component={Link} href="/consultation">
                Consultation
              </Typography>
              <Typography color="#fff">Health Plans</Typography>
              <Typography color="#fff">Medicine</Typography>
              <Typography color="#fff">Diagnostics</Typography>
              <Typography color="#fff">NGOs</Typography>
            </Stack>
            <Stack direction="row" gap={2} justifyContent="center" py={3}>
              <Image src={facebookIcon} width={30} height={30} alt="facebook"/>
              <Image src={instagramIcon} width={30} height={30} alt="instagram"/>
              <Image src={linkedinIcon} width={30} height={30} alt="facebook"/>
              <Image src={twitterIcon} width={30} height={30} alt="facebook"/>
            </Stack>
            <div className="border-b-[1px] border-dashed"></div>
            <Stack direction="row" gap={2} justifyContent="space-between" alignItems="center" py={2}>
              <Typography component="p" color="#fff">
                &copy; 2024 Health Care. All Rights Reserved
              </Typography>
              <Typography variant="h4" component={Link} href="/" fontWeight={600} color="white">
              P
              <Box component="span" color="primary.main">
                H
              </Box>{" "}
              Health Care
            </Typography>
              <Typography component="p" color="#fff">
                Privacy Policy; Terms & Conditions
              </Typography>
            </Stack>
          </Container>
        </Box>
      </>
    );
};

export default Footer;