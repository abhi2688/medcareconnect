import React, { useEffect, useState } from 'react'
import { AppBar, Slide, Toolbar, useScrollTrigger, Typography, styled, Tabs, Tab, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import logo from "../assets/logoPharmacy.webp"
import phoneLogo from "../assets/phone-call.png"
import Image from 'next/image';
import Link from 'next/link';
// function HideOnScroll(props) {
//     const { children, window } = props;
//     const trigger = useScrollTrigger({
//         target: window ? window() : undefined,
//     });

//     return (
//         <Slide appear={false} direction="down" in={!trigger}>
//             {children}
//         </Slide>
//     );
// }

// const useStyles = makeStyles(theme => ({
//     toolbarMargin: {
//         ...theme.mixins.toolbar,
//         marginBottom: '2em'
//     },
//     logo: {
//         height: "6em",
//         maxHeight: "6em",
//         width: '8em',
//         maxWidth: '8em',
//     }
// }))

// const Navbar = () => {

//     const [tabValue, setTabValue] = useState(0)

//     const tabChangeHandler = (e, value) => {
//         setTabValue(value)
//         console.log(value)
//     }



//     const StyledDiv = styled('div')(({ theme }) => ({
//         ...theme.mixins.toolbar,
//         marginBottom: '2em'
//     }))

//     const TabsContainer = styled(Tabs)(({ theme }) => ({
//         marginLeft: 'auto',
//         '& .Mui-selected': {
//             color: 'white !important',
//         },
//     }))
//     const CustomTab = styled(Tab)(({ theme }) => ({
//         ...theme.typography.tab,
//         minWidth: 10,
//         color: 'lightgrey',
//         marginLeft: '25px'
//     }))
//     const CustomButton = styled(Button)(({ theme }) => ({
//         ...theme.typography.appointment,
//         borderRadius: '50px',
//         marginRight: '50px',
//         marginLeft: '25px',
//         fontWeight: 700,
//         height: '45px',
//     }))

//     useEffect(() => {
//         if (window) {
//             if (window.location.pathname === '/' && tabValue !== 0) {
//                 setTabValue(0)
//             } else if (window.location.pathname === '/doctors' && tabValue !== 1) {
//                 setTabValue(1)
//             } else if (window.location.pathname === '/departments' && tabValue !== 2) {
//                 setTabValue(2)
//             } else if (window.location.pathname === '/gallery' && tabValue !== 3) {
//                 setTabValue(3)
//             } else if (window.location.pathname === '/contact-us' && tabValue !== 4) {
//                 setTabValue(4)
//             }
//         }


//     }, [])


//     return (<>
//         <HideOnScroll>
//             <AppBar position='fixed'>
//                 <Toolbar disableGutters>
//                     <Image src={logo} alt="hospital logo" style={{ width: '8em', height: '6em' }} />
//                     <Typography variant="h6" fontFamily={'Raleway'} fontWeight={700}>
//                         Shree Krushna <br />
//                         Seva Sadan
//                     </Typography>
//                     <TabsContainer indicatorColor='secondary' color='secondary' value={tabValue} onChange={tabChangeHandler}>
//                         <CustomTab label="Home" component={Link} href={'/'} />
//                         <CustomTab label="Doctors" component={Link} href={'/doctors'} />
//                         <CustomTab label="Departments" component={Link} href={'/departments'} />
//                         <CustomTab label="Gallary" component={Link} href={'/gallery'} />
//                         <CustomTab label="Contact Us" component={Link} href={'/contact-us'} />
//                     </TabsContainer>
//                     <CustomButton variant="contained" color='secondary'>
//                         Book Appointment
//                     </CustomButton>
//                 </Toolbar>
//             </AppBar>
//         </HideOnScroll>
//         {/* <div className={classes.toolbarMargin} /> */}
//         <StyledDiv />
//     </>
//     )
// }

// export default Navbar;

import Head from 'next/head';

import { useRouter } from 'next/router'

export default function Navbar() {
    const [navbar, setNavbar] = useState(false);
    const router = useRouter();

    return (
        <div>
            {/* <Head>
        <title>Create Next Responsive Navbar With Tailwind CSS</title>
        <meta
          name="description"
          content="Create Next JS Responsive Menu with Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
            <nav className="w-full bg-blue-600 shadow h-feet">
                <div className="justify-around px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 ">
                    <div className="flex items-center justify-between md:py-5 md:block">

                        <div class="mb-6 md:mb-0 flex self-start items-center">

                            <Image src={logo} alt="hospital logo" style={{ width: '3em', height: '2em', marginRight: '4px' }} />

                            <Link href="/" className="text-white">
                                Vanshan Pharmaceuticals
                            </Link>
                        </div>


                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'
                                }`}
                        >
                            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                                <li className={`text-white text-sm w-fit ${router.asPath === '/' ? 'border-b-2 border-yellow-300' : ''}`}>

                                    <Link href="/">
                                        Home
                                    </Link>
                                </li>
                                <li className={`text-white text-sm w-fit ${router.asPath === '/doctors' ? 'border-b-2 border-yellow-300' : ''}`}>
                                    <Link href="/products">
                                        Products
                                    </Link>
                                </li>
                                <li className={`text-white text-sm w-fit ${router.asPath === '/departments' ? 'border-b-2 border-yellow-300' : ''}`}>
                                    <Link href="/aboutUs">
                                        About Us
                                    </Link>
                                </li>
                                <li className={`text-white text-sm w-fit ${router.asPath === '/gallery' ? 'border-b-2 border-yellow-300' : ''}`}>
                                    <Link href="/gallery">
                                        Gallary
                                    </Link>
                                </li>
                                <li className={`text-white text-sm w-fit ${router.asPath === '/contact-us' ? 'border-b-2 border-yellow-300' : ''}`}>
                                    <Link href="/contact-us">
                                        Contact US
                                    </Link>
                                </li>
                                <li>

                                    <Link href='/book-appointment' className=" text-md text-black bg-yellow-300 p-2 rounded-full">Book An Call</Link>
                                </li>
                                <li className='flex items-center gap-4 w-fit shadow-white'>
                                    <Image src={phoneLogo} className='w-8 shadow ' />

                                    <Link href='https://wa.me/+918050595964' target='_blank' className=" text-lg text-white font-semibold underline">+918050595964</Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </nav>

        </div>
    );
}
