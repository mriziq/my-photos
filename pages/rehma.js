import Head from 'next/head'
import NextLink from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import "98.css";
import React from "react"
import Link from 'next/link';
import { Button, Box, Grid, GridItem, Text, VStack, HStack } from '@chakra-ui/react'
import CollectionA from '../components/CollectionA'
import CollectionB from '../components/CollectionB'
import CollectionC from '../components/CollectionC'
import CollectionD from '../components/CollectionD';
import CollectionE from '../components/CollectionE';
import Crucify from '../components/Crucify'

export default function Home() {

  return (

    <div>
      <Head>
        <title>Welcome In 👋</title>
        <meta name="description" content="Rendered and doing well thank you." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={'window'}
        style={{
          flex: '1',
          flexDirection: 'column',
          alignContent: 'center',
          justifyContent: 'center',
        }
        }
      >
        <VStack
          align={"center"}
          justify={"cetner"}
        >
          <VStack
            paddingTop={'20px'}
            paddingBottom={'40px'}
          >
            <Text
              fontSize={'48px'}
              padding={'60px'}
            >
              4 <b>REHMA</b>
            </Text>
            <Text> Zoom in anywhere!</Text>
            <Text className={'animate-flicker'}>pls wait 4 HD images to load </Text>
            <Text><b>FROM @AMER.PY (AMER)</b></Text>
            <Text>P r o n o u n c e d : uh • m-air</Text>
            <Text>P r o n o u n s : he / him</Text>
          </VStack>
          <CollectionE/>
          <CollectionA />
          <Crucify />
          <CollectionB />
          <CollectionD />
          <CollectionC />
          <Box paddingBottom={'50px'}>
            <NextLink href='/tarot' passHref >
              <Button fontFamily={'sans-serif'}> Double Click For Complimentary Tarot Card! </Button>
            </NextLink>
          </Box>
        </VStack>

      </div>


    </div>

  )
}
