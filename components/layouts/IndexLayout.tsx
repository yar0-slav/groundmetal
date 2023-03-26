import { Box, Text, Flex, Center, Image } from "@chakra-ui/react";
import IndexPageCard from "../sections/indexCards";

export default function IndexLayout() {
  return (
    <Center flexDirection={"column"} height="100vh">
      <Box>
        <Image alt="logo" src="/logo-main-350.png" w="250px"></Image>
      </Box>
      <Box mt={4}>
        <Text align={"center"}>Groundmetal s.r.o.</Text>
      </Box>
      <Flex>
        <IndexPageCard
          url={"/zemne-prace"}
          cardName={"Divízia zemné práce"}
          image={
            "https://images.unsplash.com/photo-1580901368919-7738efb0f87e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80"
          }
        />
        <IndexPageCard
          url={"/kovoobrabanie"}
          cardName={"Divízia kovoobrábanie"}
          image={
            "https://images.unsplash.com/photo-1455165814004-1126a7199f9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          }
        />
      </Flex>
    </Center>
  );
}
