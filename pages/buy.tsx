import { useContract, useNFTs } from "@thirdweb-dev/react"
import React from "react"
import { NFT_COLLECTION_ADDRESS } from "../const/addresses"
import { Container, Heading, Text } from "@chakra-ui/react"
import NFTGrid from "../components/NFTGrid"

const BuyPage = () => {
  const { contract } = useContract(NFT_COLLECTION_ADDRESS)
  const { data, isLoading } = useNFTs(contract)

  return (
    <div>
      <Container maxW={"1200px"} p={5}>
        <Heading>Buy NFTs</Heading>
        <Text>Browse and buy NFTs from this collection</Text>
        <NFTGrid isLoading={isLoading} data={data} emptyText={"No NFT Found"} />
      </Container>
    </div>
  )
}

export default BuyPage
