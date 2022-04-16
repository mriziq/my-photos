import React from "react"
import { Box, Grid, GridItem, Text, VStack, HStack } from '@chakra-ui/react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


const CollectionF = () => {
  return (
    <VStack paddingTop={"15PX"} paddingBottom={"15PX"}
      >
      <Image
        src='https://media.discordapp.net/attachments/964105649095061544/964800941041799219/F1.png'
        Quality={100}
        layout='intrinsic'
        width={1078}
        height={1238}
        alt={'Picture by Amer'}
      />
      <HStack>
      {/* <Image
        src='https://media.discordapp.net/attachments/964105649095061544/964800941654179850/F2.png'
        Quality={100}
        layout='intrinsic'
        width={2000}
        height={1238}
        alt={'Picture by Amer'}
      /> */}
      <Image
        src='https://media.discordapp.net/attachments/964105649095061544/964800942346231808/F3.png'
        Quality={100}
        layout='intrinsic'
        width={741}
        height={1239}
        alt={'Picture by Amer'}
      />
      </HStack>


      <HStack>

        <Image
          src='https://media.discordapp.net/attachments/964105649095061544/964800942836969482/F4.png'
          Quality={100}
          layout='intrinsic'
          width={871}
          height={1238}
          alt={'Picture by Amer'}
        />
          {/* <Image
            src='https://media.discordapp.net/attachments/964105649095061544/964800943591948298/F5.png'
            Quality={100}
            layout='intrinsic'
            width={934}
            height={1238}
            alt={'Picture by Amer'}
          /> */}
        <Image
          src='https://media.discordapp.net/attachments/964105649095061544/964800996805083186/F7.png'
          Quality={100}
          layout='intrinsic'
          width={2379}
          height={1239}
          alt={'Picture by Amer'}
        />
      </HStack>

    </VStack>
  )
}

export default CollectionF