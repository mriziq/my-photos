import React from "react"
import { Box, Grid, GridItem, Text, VStack, HStack } from '@chakra-ui/react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


const CollectionB = () => {
  return (
    <VStack>
      <Image
        src='https://media.discordapp.net/attachments/964105649095061544/964105926481166357/B11.png'
        Quality={100}
        layout='intrinsic'
        width={4000}
        height={2800}
        alt={'B11'}
      />
      <div className={styles.grid}>

        <Image
          src='https://media.discordapp.net/attachments/964105649095061544/964106045523906560/B10.png'
          Quality={100}
          layout='intrinsic'
          width={500}
          height={700}
          alt={'Picture by Amer'}
        />
        <Image
          src='https://media.discordapp.net/attachments/964105649095061544/964106040679485461/B1.png'
          Quality={100}
          layout='intrinsic'
          width={600}
          height={400}
          alt={'Picture by Amer'}
        />

        <Image
          src='https://media.discordapp.net/attachments/964105649095061544/964106042378166302/B4.png'
          Quality={100}
          layout='intrinsic'
          width={350}
          height={520}
          alt={'Picture by Amer'}
        />

        <Image
          src='https://media.discordapp.net/attachments/964105649095061544/964106042789228584/B5.png'
          Quality={100}
          layout='intrinsic'
          width={400}
          height={600}
          alt={'Picture by Amer'}
        />
      </div>
      <HStack>


        <Image
          src='https://media.discordapp.net/attachments/964105649095061544/964106043141537812/B6.png'
          Quality={100}
          layout='intrinsic'
          width={2000}
          height={1500}
          alt={'B6'}
        />

        <Image
          src='https://media.discordapp.net/attachments/964105649095061544/964106043678396427/B7.png'
          Quality={100}
          layout='intrinsic'
          width={1000}
          height={1500}
          alt={'Picture by Amer'}
        />

        <Image
          src='https://media.discordapp.net/attachments/964105649095061544/964106044005580830/B8.png'
          Quality={100}
          layout='intrinsic'
          width={3000}
          height={4000}
          alt={'Picture by Amer'}
        />

        <Image
          src='https://media.discordapp.net/attachments/964105649095061544/964106044424990750/B9.png'
          Quality={100}
          layout='intrinsic'
          width={1200}
          height={1700}
          alt={'Picture by Amer'}
        />
        <Image
          src='https://media.discordapp.net/attachments/964105649095061544/964106041287643186/B2.png'
          Quality={100}
          layout='intrinsic'
          width={400}
          height={600}
          alt={'Picture by Amer'}
        />
        <Image
          src='https://media.discordapp.net/attachments/964105649095061544/964106041950363668/B3.png'
          Quality={100}
          layout='intrinsic'
          width={600}
          height={400}
          alt={'Picture by Amer'}
        />
      </HStack>
    </VStack>
  )
}

export default CollectionB