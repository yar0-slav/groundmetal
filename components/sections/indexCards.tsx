import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Stack,
  Image,
  Link,
} from "@chakra-ui/react";

const IMAGE =
  "https://images.unsplash.com/photo-1580901368919-7738efb0f87e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80";
export default function IndexPageCard({
  url,
  cardName,
}: {
  url: string;
  cardName: string;
}) {
  return (
    <Link href={url}>
      <Center p={6}>
        <Box
          role={"group"}
          maxW={{ base: "250px", md: "330px" }}
          px={10}
          py={6}
          w={"full"}
          // bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}
          _after={{
            content: '""',
            zIndex: -1,
            position: "absolute",
            height: "full",
            width: "full",
            top: 0,
            left: 0,
            borderRadius: 34,
            backdropFilter: "saturate(180%) blur(20px)",
            filter: "blur(16px)",
          }}
        >
          <Box
            rounded={"lg"}
            mt={6}
            pos={"relative"}
            _after={{
              transition: "all .3s ease",
              content: '""',
              w: "full",
              h: "full",
              pos: "absolute",
              top: 2,
              left: 0,
              backgroundImage: `url(${IMAGE})`,
              filter: "blur(15px)",
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: "blur(20px)",
              },
            }}
          >
            <Image
              rounded={"lg"}
              height={{ base: "190px", md: "230px" }}
              width={230}
              objectFit={"cover"}
              src={IMAGE}
              alt={"image_homepage"}
            />
          </Box>
          <Stack pt={5} align={"center"}>
            <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
              {cardName}
            </Heading>
          </Stack>
        </Box>
      </Center>
    </Link>
  );
}
