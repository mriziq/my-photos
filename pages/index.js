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
import CollectionF from '../components/CollectionF';
import Crucify from '../components/Crucify'


export default function Home() {

  return (

    <div>
      <Head>
        <title>Amer&apos;s Photos 🏷</title>
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
            padding={'15px'}
          >
          </VStack>
          <CollectionE />
          <CollectionF />
          <CollectionA />
          <Crucify />
          <CollectionB />
          <CollectionD />
          <CollectionC />
        </VStack>

      </div>
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
        <NextLink href="/contact" passHref>
          <Button className={''}>
            HIT ME UP
          </Button>

        </NextLink>


      </footer>

    </div>

  )
}
