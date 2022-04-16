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
import Crucify from '../components/Crucify'
import CollectionE from '../components/CollectionE';

export default function Home() {

  return (

    <div>
      <Head>
        <title>Amer's Photos</title>
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
          <CollectionE/>
          <CollectionA />
          <Crucify />
          <CollectionB />
          <CollectionD />
          <CollectionC />
        </VStack>

      </div>


    </div>

  )
}
