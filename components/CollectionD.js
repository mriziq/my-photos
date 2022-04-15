import React from "react"
import { Box, Grid, GridItem, Text, VStack, HStack } from '@chakra-ui/react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


const CollectionD = () => {
  return (
    <VStack>
      <VStack>
        <Image
          src='https://media.discordapp.net/attachments/964105649095061544/964106166219190292/D7.png'
          Quality={100}
          layout='intrinsic'
          width={1700}
          height={1500}
          alt={'Picture by Amer'}
        />
        <div className={styles.grid}>
          <Image
            src='https://media.discordapp.net/attachments/964105649095061544/964106164801536031/D3.png'
            Quality={100}
            layout='intrinsic'
            width={1800}
            height={1500}
            alt={'Picture by Amer'}
          />
          <Image
            src='https://media.discordapp.net/attachments/964105649095061544/964106165292253224/D4.png'
            Quality={100}
            layout='intrinsic'
            width={2000}
            height={1500}
            alt={'Picture by Amer'}
          />
        </div>
      </VStack>
      <HStack>
        <div className={styles.grid}>
          <Image
            src='https://media.discordapp.net/attachments/964105649095061544/964106165778780160/D6.png'
            Quality={100}
            layout='intrinsic'
            width={1000}
            height={1500}
            alt={'Picture by Amer'}
          />


          <Image
            src='https://media.discordapp.net/attachments/964105649095061544/964106166730891354/D8.png'
            Quality={100}
            layout='intrinsic'
            width={1000}
            height={1500}
            alt={'Picture by Amer'}
          />
          {/* <Image
            src='https://media.discordapp.net/attachments/964105649095061544/964106167469105213/D9.png'
            Quality={100}
            layout='intrinsic'
            width={1500}
            height={1500}
            alt={'Picture by Amer'}
          /> */}
        </div>

        <Image
          src='https://media.discordapp.net/attachments/964105649095061544/964106167901098024/D10.png'
          Quality={100}
          layout='intrinsic'
          width={1300}
          height={1500}
          alt={'Picture by Amer'}
        />
      </HStack>

      <Image
        src='https://media.discordapp.net/attachments/964105649095061544/964106066151497738/D11.png'
        Quality={100}
        layout='intrinsic'
        width={800}
        height={1000}
        alt={'Picture by Amer'}
      />
      <Image
        src='https://media.discordapp.net/attachments/964105649095061544/964106066466050088/D12.png'
        Quality={100}
        layout='intrinsic'
        width={1700}
        height={1300}
        alt={'Picture by Amer'}
      />
    </VStack>
  )
}

export default CollectionD