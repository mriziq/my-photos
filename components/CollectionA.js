import React from "react"
import { Box, Grid, GridItem, Text, VStack, HStack } from '@chakra-ui/react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


const CollectionA = () => {
  return (
    <HStack>
        <Image
          src='https://media.discordapp.net/attachments/964105649095061544/964105817261473862/A3.png'
          Quality={100}
          layout='intrinsic'
          width={400}
          height={600}
          alt={'A3'}
        />
        <Image
          src='https://media.discordapp.net/attachments/964105649095061544/964105816565252096/A2.png'
          Quality={100}
          layout='intrinsic'
          width={320}
          height={440}
          alt={'A2'}
        />
        <Image
          src='https://media.discordapp.net/attachments/964105649095061544/964105818255536168/A5.png'
          Quality={100}
          layout='intrinsic'
          width={130}
          height={190}
          alt={'A5'}
        />

      <HStack>
        <Image
          src='https://media.discordapp.net/attachments/964105649095061544/964105817680924702/A4.png'
          Quality={100}
          layout='intrinsic'
          width={1000}
          height={1500}
          alt={'A4'}
        />

        <Image
          src='https://media.discordapp.net/attachments/964105649095061544/964105816011599872/A1.png'
          Quality={100}
          layout='intrinsic'
          width={1000}
          height={1500}
          alt={'A1'}
        />

        <Image
          src='https://media.discordapp.net/attachments/964105649095061544/964105818683342899/A6.png'
          Quality={100}
          layout='intrinsic'
          width={1400}
          height={1300}
          alt={'A6'}
        />
        <Image
          src='https://media.discordapp.net/attachments/964105649095061544/964803814458810429/E10.png'
          Quality={100}
          layout='intrinsic'
          width={938}
          height={1239}
          alt={'A6'}
        />
      </HStack>

    </HStack>
  )
}

export default CollectionA