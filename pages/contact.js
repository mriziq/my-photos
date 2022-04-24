import Head from 'next/head'
import Image from 'next/image'
import NextLink from 'next/link'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import "98.css";
import React from "react"
import { Center, Button, Box, Grid, GridItem, Text, VStack, HStack, Heading } from '@chakra-ui/react'

const ELZARGIF = '/assets/elzar.gif';

export default function Contact() {

    return (

        <div>
            <Head>
                <title>Don&apos;t Be Shy</title>
                <meta name="description" content="Rendered and doing well thank you." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Center paddingTop="10">
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '500px',
                        height: '500px'
                    }}
                >

                    <Box flexDir={'column'} alignItems={'center'} justify='center' className='window'>
                        <VStack pt="6rem" textAlign="center" align={"center"} justify={"center"} spacing={4} paddingBottom={"35px"}>
                            <Text fontSize={"xl"} fontWeight="bold">Amer Mriziq</Text>
                            <Text fontSize={"lg"}>Creative Director -  VHS Video Producer - Visual Photographer <br /> Software Engineer -  Graphic Designer</Text>
                            {/* <Image
                                src={ELZARGIF}
                                width={'300px'}
                                height={'300px'}
                                alt='elzar'
                            /> */}


                            <Text fontSize={"md"} color="purple">a m e r k m r i z i q @gmail.com</Text>

                            <Link href="mailto:amerkmriziq@gmail.com" passHref target="_blank" rel="noopener noreferrer">
                                <Button className={''} color="purple" size="lg">
                                    PRESS TO EMAIL
                                </Button>
                            </Link>

                            <Link href="https://www.instagram.com/amercanfilm" passHref target="_blank" rel="noopener noreferrer">
                                <Button className={''} color="green" size="lg">
                                    @AMERCANFILM
                                </Button>
                            </Link>

                            <Link href="https://www.instagram.com/amer.py" passHref target="_blank" rel="noopener noreferrer">
                                <Button className={''} color="brown " size="lg">
                                    MY INSTAGRAM                        </Button>
                            </Link>
                        </VStack>


                    </Box>
                </div>
            </Center>



            <footer
                className='title-bar'
                style={{
                    position: 'fixed',
                    bottom: 0,
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'

                }}
            >
                <NextLink href="/" passHref>
                    <Button className={''}>
                        BACK
                    </Button>

                </NextLink>


            </footer>

        </div>

    )
}
