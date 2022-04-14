import React from "react"
import { Box, Grid, GridItem, Text, VStack, HStack } from '@chakra-ui/react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


const CollectionC = () => {
  return (
    <HStack>
      <div className={styles.grid}>
        <Image
          src='/assets/C/C1.PNG'
          Quality={100}
          layout='intrinsic'
          width={1000}
          height={1500}
          alt={'Picture by Amer'}
        />
        <Image
          src='/assets/C/C2.PNG'
          Quality={100}
          layout='intrinsic'
          width={2000}
          height={1500}
          alt={'Picture by Amer'}
        />
        <Image
          src='/assets/C/C3.PNG'
          Quality={100}
          layout='intrinsic'
          width={2000}
          height={1500}
          alt={'Picture by Amer'}
        />
        <Image
          src='/assets/C/C4.PNG'
          Quality={100}
          layout='intrinsic'
          width={1500}
          height={1500}
          alt={'Picture by Amer'}
        />

        <Image
          src='/assets/C/C5.PNG'
          Quality={100}
          layout='intrinsic'
          width={1600}
          height={1500}
          alt={'Picture by Amer'}
        />

        <Image
          src='/assets/C/C6.PNG'
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