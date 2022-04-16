import React from "react"
import { Box, Grid, GridItem, Text, VStack, HStack } from '@chakra-ui/react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


const CollectionE = () => {
  return (
    <VStack paddingTop={"15PX"} paddingBottom={"15PX"}
      >
      <Image
        src='https://media.discordapp.net/attachments/964105649095061544/964804903954419752/Screen_Shot_2022-04-16_at_1.29.57_AM.png'
        Quality={100}
        layout='intrinsic'
        width={1715}
        height={1238}
        alt={'Picture by Amer'}
      />
      <Image
        src='https://media.discordapp.net/attachments/964105649095061544/964804914234679366/Screen_Shot_2022-04-16_at_1.30.00_AM.png'
        Quality={100}
        layout='intrinsic'
        width={891}
        height={1238}
        alt={'Picture by Amer'}
      />
      <Image
        src='https://media.discordapp.net/attachments/964105649095061544/964805381421416498/Screen_Shot_2022-04-16_at_1.31.34_AM.png'
        Quality={100}
        layout='intrinsic'
        width={1722}
        height={1238}
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