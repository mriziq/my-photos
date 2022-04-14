import Head from 'next/head'
import {
    Text, Flex, Button, SimpleGrid, Box, Spacer, Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'
import styles from '../../styles/Home.module.css'
import '98.css'
import NextLink from 'next/link'
import Image from 'next/image';
import React from 'react'
import fetch from 'node-fetch'

const ELZARGIF = '/assets/elzar.gif';
const NAVGIF = '/assets/navgif.gif';

export async function getServerSideProps() {

    const res = await fetch('https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=1')
    var data = await res.json()
    data = data.cards[0]


    if (!data) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }
    return {
        props: { data }, // will be passed to the page component as props
    }
}


export default function TarotPage({ data }) {


    const TarotCard = () => {

        return (

            <div className={styles.main} style={{
                padding: 10
            }}>
                <Flex flexDirection='column' alignItems='center'>

                    <Text fontFamily={'cursive'} color={'navy'} fontSize={'3xl'}>{data.name}</Text>

                    <Spacer />

                    <SimpleGrid columns={2} width='md' spacingY={4}>



                        <Text fontWeight={'bold'} fontSize={'xl'}>
                            Value:</Text>
                        <Text fontFamily={'cursive'} fontWeight={'bold'} fontSize={'lg'}>{data.value} </Text>

                        <Text fontWeight={'bold'} fontSize={'xl'}>
                            Suit:</Text>
                        <Text color={'red'} fontFamily={'cursive'} fontWeight={'bold'} fontSize={'lg'}>{data.suit}</Text>

                        <Text fontWeight={'bold'} fontSize={'xl'}>
                            Type:</Text>
                        <Text fontFamily={'cursive'} fontWeight={'bold'} fontSize={'lg'}>{data.type}</Text>


                        {/* Pop up read more */}
                        <Text fontWeight={'bold'} fontSize={'xl'}>
                            Description:</Text>
                        <Text fontSize={'sm'} noOfLines={10}>{data.desc}</Text>
                        <Box width={'400px'}>
                            <Accordion allowMultiple allowToggle >
                                <AccordionItem>

                                    <AccordionButton _expanded={{ bg: 'tomato', color: 'white' }}>
                                        <Box flex='1' textAlign='left'>
                                            <Text fontWeight={'bold'} fontSize={'md'}>
                                                Meaning (Up):
                                            </Text>
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>

                                    <AccordionPanel pb={4}>
                                        <Text fontSize={'md'}>{data.meaning_up}</Text>
                                    </AccordionPanel>
                                </AccordionItem>

                                <AccordionItem>
                                    <AccordionButton _expanded={{ bg: 'tomato', color: 'white' }}>
                                        <Box flex='1' textAlign='left'>
                                            <Text fontWeight={'bold'} fontSize={'md'}>
                                                Meaning (Reversed):
                                            </Text>                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    <AccordionPanel pb={4}>
                                        <Text fontSize={'md'}>{data.meaning_rev}</Text>

                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        </Box>
                    </SimpleGrid>
                </Flex>


            </div>


        )

    }


    return (

        <Box className={'window'} >
            <Head>
                <title>Tarot Deck</title>
                <meta name="description" content="Rendered and doing well thank you." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Box>

                <TarotCard />

            </Box>
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
                <NextLink href="/rehma" passHref>
                    <Button className={''}>
                        Home!
                    </Button>

                </NextLink>


            </footer>
        </Box>
    )
}


