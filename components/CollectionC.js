import React from "react"
import { Box, Grid, GridItem, Text, VStack, HStack } from '@chakra-ui/react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


const CollectionC = () => {
  return (
    <HStack>
      <div className={styles.grid}>
        <Image
          src='https://media.discordapp.net/attachments/964105649095061544/964106140453568562/C1.png'
          Quality={100}
          layout='intrinsic'
          width={1000}
          height={1500}
          alt={'Picture by Amer'}
        />
        <Image
          src='https://media.discordapp.net/attachments/964105649095061544/964106140902379590/C2.png'
          Quality={100}
          layout='intrinsic'
          width={2000}
          height={1500}
          alt={'Picture by Amer'}
        />
        <Image
          src='https://media.discordapp.net/attachments/964105649095061544/964106141451837480/C3.png'
          Quality={100}
          layout='intrinsic'
          width={2000}
          height={1500}
          alt={'Picture by Amer'}
        />
        <Image
          src='https://media.discordapp.net/attachments/964105649095061544/964106142009683968/C4.png'
          Quality={100}
          layout='intrinsic'
          width={1500}
          height={1500}
          alt={'Picture by Amer'}
        />

        <Image
          src='https://media.discordapp.net/attachments/964105649095061544/964106142559121428/C5.png'
          Quality={100}
          layout='intrinsic'
          width={1600}
          height={1500}
          alt={'Picture by Amer'}
        />

        <Image
          src='https://media.discordapp.net/attachments/964105649095061544/964106143016288306/C6.png'
          Quality={100}
          layout='intrinsic'
          width={1000}
          height={1500}
          alt={'Picture by Amer'}
        />
      </div>
    </HStack>
  )
}

export default CollectionC