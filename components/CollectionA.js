import React from "react"
import { Box, Grid, GridItem, Text, VStack, HStack } from '@chakra-ui/react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


const CollectionA = () => {
  return (
    <HStack>
    <div className={styles.grid}>
      <Image
        src='/assets/A/A3.PNG'
        Quality={100}
        layout='intrinsic'
        width={400}
        height={600}
        alt={'A3'}
      />
      <Image
        src='/assets/A/A2.PNG'
        Quality={100}
        layout='intrinsic'
        width={320}
        height={440}
        alt={'A2'}
      />
      <Image
        src='/assets/A/A5.PNG'
        Quality={100}
        layout='intrinsic'
        width={130}
        height={190}
        alt={'A5'}
      />
    </div>

    <div className={styles.grid}>
      <Image
        src='/assets/A/A4.PNG'
        Quality={100}
        layout='intrinsic'
        width={1000}
        height={1500}
        alt={'A4'}
      />

      <Image
        src='/assets/A/A1.PNG'
        Quality={100}
        layout='intrinsic'
        width={1000}
        height={1500}
        alt={'A1'}
      />

      <Image
        src='/assets/A/A6.PNG'
        Quality={100}
        layout='intrinsic'
        width={1400}
        height={1300}
        alt={'A6'}
      />
    </div>
  </HStack>
  )
}

export default CollectionA