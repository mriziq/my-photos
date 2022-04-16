import React from "react"
import { Box, Grid, GridItem, Text, VStack, HStack } from '@chakra-ui/react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


const CollectionE = () => {
  return (
    <VStack>
      <Image
        src='https://media.discordapp.net/attachments/964105649095061544/964751601376055316/8EAG6317_2.jpg'
        Quality={100}
        layout='intrinsic'
        width={1994}
        height={1333}
        alt={'Picture by Amer'}
      />
      <div className={styles.grid}>
        <Image
          src='https://media.discordapp.net/attachments/964105649095061544/964751601665445958/8EAG6329.jpg'
          Quality={100}
          layout='intrinsic'
          width={941}
          height={1332}
          alt={'Picture by Amer'}
        />
        <Image
          src='https://media.discordapp.net/attachments/964105649095061544/964751605083799562/IMG_0661.jpg'
          Quality={100}
          layout='intrinsic'
          width={2000}
          height={1333}
          alt={'Picture by Amer'}
        />
      </div>
    </VStack>
  )
}

export default CollectionE