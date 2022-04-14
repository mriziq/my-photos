import React from "react"
import { Box, Grid, GridItem, Text, VStack, HStack } from '@chakra-ui/react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


const CollectionB = () => {
  return (
    <VStack>
      <Image
        src='/assets/B/B11.PNG'
        Quality={100}
        layout='intrinsic'
        width={4000}
        height={2800}
      />
      <HStack>


        <Image
          src='/assets/B/B6.PNG'
          Quality={100}
          layout='intrinsic'
          width={2000}
          height={1500}
        />

        <Image
          src='/assets/B/B7.PNG'
          Quality={100}
          layout='intrinsic'
          width={1000}
          height={1500}
        />

        <Image
          src='/assets/B/B8.PNG'
          Quality={100}
          layout='intrinsic'
          width={3000}
          height={4000}
        />

        <Image
          src='/assets/B/B9.PNG'
          Quality={100}
          layout='intrinsic'
          width={1200}
          height={1700}
        />
        <Image
          src='/assets/B/B2.PNG'
          Quality={100}
          layout='intrinsic'
          width={400}
          height={600}
        />
        <Image
          src='/assets/B/B3.PNG'
          Quality={100}
          layout='intrinsic'
          width={600}
          height={400}
        />
        <div className={styles.grid}>

          <Image
            src='/assets/B/10.PNG'
            Quality={100}
            layout='intrinsic'
            width={500}
            height={700}
          />
          <Image
            src='/assets/B/B1.PNG'
            Quality={100}
            layout='intrinsic'
            width={600}
            height={400}
          />

          <Image
            src='/assets/B/B4.PNG'
            Quality={100}
            layout='intrinsic'
            width={350}
            height={520}
          />

          <Image
            src='/assets/B/B5.PNG'
            Quality={100}
            layout='intrinsic'
            width={400}
            height={600}
          />
        </div>
      </HStack>
    </VStack>
  )
}

export default CollectionB