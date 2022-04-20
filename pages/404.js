import React from "react"
import { Box, VStack, Center, Heading, Text, Button } from "@chakra-ui/react"
import Link from "next/link"
import styles from '../styles/Home.module.css'

export default function Resolve404() {
    return (
        <Center className={styles.container}>
            <VStack pt="6rem" maxW="100vw" maxH="100vh" textAlign="center" spacing={5} paddingBottom={"35px"}>
                <Heading fontSize={128}>Oops!</Heading>
                <Heading fontWeight="extrabold">This Page Doesn&apos;t Exist</Heading>
                <Text fontWeight="semibold">You don&apos;t have to go home, but you shouldn&apos;t stay here.</Text>
                <Box pt="1rem">
                    <Link href="/" passHref>
                        <Button px="1.5rem" variant="solid" colorScheme={"red"}> GO SAFE ZONE</Button>
                    </Link>
                </Box>
            </VStack>
        </Center>
    )
}