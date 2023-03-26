import { Box } from "@chakra-ui/react";
import IndexPageCard from "../sections/indexCards";

export default function IndexLayout() {
  return (
    <Box
      display={"flex"}
      height="100vh"
      justifyContent={"center"}
      flexDirection={{ base: "column", md: "row" }}
      alignItems={"center"}

      _after={{
        backgroundImage: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        backgroundSize: "cover",
        content: '""',
        w: "full",
        h: "full",
        pos: "absolute",
        top: 0,
        left: 0,
        opacity: .5,
      }}
    >
      <IndexPageCard url={"/bagrovanie"} cardName={"Bagrovanie"} />
      <IndexPageCard url={"/strojarina"} cardName={"Strojarina"} />
      {/* <Box
      h={'1000px'}
      w={'1000px'}
      pos={'absolute'}
        backgroundImage={
          "linear-gradient(to bottom right, #E8E4FF 0%, var(--chakra-colors-white) 40%, #E8E4FF 100%)"
        }
      ></Box> */}
    </Box>
  );
}
