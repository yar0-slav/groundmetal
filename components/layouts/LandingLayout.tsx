import { Box, Flex, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function LandingLayout(props: { children: React.ReactNode }) {
  const { pathname } = useRouter();
  const headerFromPath = pathname
    .substring(pathname.lastIndexOf("/") + 1)
    .replace("/", "");

  return (
    <Box maxW={{ xl: "980px" }} m={"0 auto"}>
      <Heading textTransform={"capitalize"} mt={20}>
        {headerFromPath}
      </Heading>

      <Flex direction="column" align="center" m="0 auto">
        {props.children}
      </Flex>
    </Box>
  );
}
