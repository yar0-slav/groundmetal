import { ReactNode } from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { getCurrentPath, getOppositePath } from "../router/pagesPaths";

const Links = ["Prace", "Kontakt"];

const NavLink = ({ children, url }: { children: ReactNode; url: string }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={url}
  >
    {children}
  </Link>
);

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  const oppositePath = getOppositePath(router)
  const currentPath = getCurrentPath(router)

  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      px={4}
      display={router.pathname === "/" ? "none" : "block"}
    >
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        maxW={"980px"}
        m={"0 auto"}
      >
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={"center"}>
          <Box>
            <Button
              onClick={() => router.push(`${router.basePath}/${currentPath}`)}
            >
              Logo
            </Button>
          </Box>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <NavLink
                url={`${
                  router.basePath
                }/${currentPath}/${link.toLocaleLowerCase()}`}
                key={`${currentPath}/${link.toLocaleLowerCase()}`}
              >
                {link}
              </NavLink>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems={"center"}>
          <Button>
            <NavLink url={`${router.basePath}/${oppositePath}`}>
              {oppositePath}
            </NavLink>
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}
