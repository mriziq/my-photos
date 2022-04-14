import React from "react"
import { Box, Grid, GridItem, Text, VStack, HStack } from '@chakra-ui/react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


const CollectionD = () => {
  return (
    <VStack>
      <VStack>
        <Image
          src='/assets/D/D7.PNG'
          Quality={100}
          layout='intrinsic'
          width={1700}
          height={1500}
        />
        <div className={styles.grid}>
          <Image
            src='/assets/D/D3.PNG'
            Quality={100}
            layout='intrinsic'
            width={1800}
            height={1500}
          />
          <Image
            src='/assets/D/D4.PNG'
            Quality={100}
            layout='intrinsic'
            width={2000}
            height={1500}
          />
        </div>
      </VStack>
      <HStack>
        <div className={styles.grid}>
          <Image
            src='/assets/D/D6.PNG'
            Quality={100}
            layout='intrinsic'
            width={1000}
            height={1500}
          />


          <Image
            src='/assets/D/D8.PNG'
            Quality={100}
            layout='intrinsic'
            width={1000}
            height={1500}
          />
          <Image
            src='/assets/D/D9.PNG'
            Quality={100}
            layout='intrinsic'
            width={1500}
            height={1500}
          />
        </div>

        <Image
          src='/assets/D/D10.PNG'
          Quality={100}
          layout='intrinsic'
          width={1300}
          height={1500}
        />
      </HStack>

      <Image
        src='/assets/D/D11.PNG'
        Quality={100}
        layout='intrinsic'
        width={800}
        height={1000}
      />
      <Image
        src='/assets/D/D12.PNG'
        Quality={100}
        layout='intrinsic'
        width={1700}
        height={1300}
      />
    </VStack>
  )
}

export default CollectionD