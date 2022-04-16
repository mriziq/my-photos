import React from "react"
import { Box, Grid, GridItem, Text, VStack, HStack } from '@chakra-ui/react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


const CollectionE = () => {
  return (
    <VStack paddingTop={"15PX"} paddingBottom={"15PX"}
      >
      <Image
        src='https://media.discordapp.net/attachments/964105649095061544/964751601376055316/8EAG6317_2.jpg'
        Quality={100}
        layout='intrinsic'
        width={1994}
        height={1333}
        alt={'Picture by Amer'}
      />
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

      <HStack>

        <Image
          src='https://media.discordapp.net/attachments/964105649095061544/964751602521100318/IMG_0533.jpg'
          Quality={100}
          layout='intrinsic'
          width={888}
          height={1332}
          alt={'Picture by Amer'}
        />
        <Image
          src='https://media.discordapp.net/attachments/964105649095061544/964751604018479104/IMG_0633.jpg'
          Quality={100}
          layout='intrinsic'
          width={888}
          height={1332}
          alt={'Picture by Amer'}
        />
        <Image
          src='https://media.discordapp.net/attachments/964105649095061544/964751604551135292/IMG_0641.jpg'
          Quality={100}
          layout='intrinsic'
          width={923}
          height={1334}
          alt={'Picture by Amer'}
        />
        <Image
          src='https://media.discordapp.net/attachments/964105649095061544/964751603259285554/IMG_0558.jpg'
          Quality={100}
          layout='intrinsic'
          width={888}
          height={1332}
          alt={'Picture by Amer'}
        />
      </HStack>

    </VStack>
  )
}

export default CollectionE