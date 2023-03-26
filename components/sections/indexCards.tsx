import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Stack,
  Image,
  Link,
} from "@chakra-ui/react";

export default function IndexPageCard({
  url,
  cardName,
  image,
}: {
  url: string;
  cardName: string;
  image: string
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
            backdropFilter: "saturate(80%) blur(10px)",
            filter: "blur(16px)",
          }}
          _hover={{
            _after: {
              backdropFilter: "saturate(300%) blur(15px)",
            },
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
              top: 3,
              left: 0,
              backgroundImage: `url(${image})`,
              filter: "blur(15px)",
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: "blur(25px)",
              },
            }}
          >
            <Image
              rounded={"lg"}
              height={{ base: "190px", md: "230px" }}
              width={230}
              objectFit={"cover"}
              src={image}
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
