import React,{useEffect} from 'react'
import {products,pricingInfo} from '../../utils/productData'
import { Box, Button, Flex,Text } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'

const Home = (props) => {
  const{productList,storeProductsList}=props
  // useEffect(() => {
  //  console.log(props,products,pricingInfo)
  //  storeProductsList(products)
  // }, [])
  const history = useHistory()
  console.log(productList,"productList")
  return (
   <>
   <Flex justifyContent={"space-around"} alignItems="center" flexWrap={"wrap"}>
     {  console.log(productList,"checkWHats")}
    { productList.length>0?productList.map((prod,index)=>{
  return <Flex h="280px" w="220px" bg="" flexDir={"column"}   border="1px solid black" p="4" m="5">
        <Text fontWeight={"extrabold"} mt="2">Name:{prod.name}</Text>
        <Text mt="2">Price: {prod.priceRange}</Text>
        <Text mt="2">Pricing Tier: {prod.pricingTier}</Text>
        <Text mt="2">product Url: <Text fontSize={10}>{prod.productUrl}</Text></Text>
        <Text mt="2">Weight :{prod.weight}gms</Text>
        {prod.isEditable==false || prod.isEditable=="false" ?'':
        <Button 
        onClick={()=>{history.push({
         pathname: `/product/${prod.id}`,
         state: {
           name: prod.name,
           priceRange: prod.priceRange,
           pricingTier: prod.pricingTier,
           productUrl: prod.productUrl,
           weight: prod.weight,
           availability: prod.availability,
           id:prod.id,
           isEditable:prod.isEditable.toString()
       },
       })}} mt="5">Edit</Button>
        }
   </Flex>
     }):''}
   </Flex>
   </>
  )
}

export default Home
