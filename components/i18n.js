import React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import Link from "next/link";

export function JA(locale, asPath) {
  if (locale !== "ja") {
    return (
      <ChakraProvider>
        <Link href={asPath} locale="ja">
          <Box
            as="button"
            height="24px"
            lineHeight="1.2"
            transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
            px="8px"
            borderRadius="2px"
            fontSize="14px"
            fontWeight="semibold"
            bg="none"
            borderColor="none"
            color="white"
            _hover={{
              opacity: 0.5,
            }}
          >
            JA
          </Box>
        </Link>
      </ChakraProvider>
    );
  } else {
    return (
      <ChakraProvider>
        <Link href={asPath} locale="ja">
          <Box
            as="button"
            height="24px"
            lineHeight="1.2"
            transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
            px="8px"
            fontSize="14px"
            fontWeight="semibold"
            bg="white"
            borderColor="white"
            color="#0B318E"
            _hover={{
              opacity: 0.5,
            }}
            _active={{
              bg: "#dddfe2",
              transform: "scale(0.98)",
              borderColor: "#0B318E",
            }}
          >
            JA
          </Box>
        </Link>
      </ChakraProvider>
    );
  }
}

export function EN(locale, asPath) {
  if (locale === "en") {
    return (
      <ChakraProvider>
        <Link href={asPath} locale="en">
          <Box
            as="button"
            height="24px"
            lineHeight="1.2"
            transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
            px="8px"
            fontSize="14px"
            fontWeight="semibold"
            bg="white"
            borderColor="white"
            color="#0B318E"
            _hover={{
              opacity: 0.5,
            }}
            _active={{
              bg: "#dddfe2",
              transform: "scale(0.98)",
              borderColor: "#0B318E",
            }}
          >
            EN
          </Box>
        </Link>
      </ChakraProvider>
    );
  } else {
    return (
      <ChakraProvider>
        <Link href={asPath} locale="en">
          <Box
            as="button"
            height="24px"
            lineHeight="1.2"
            transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
            px="8px"
            borderRadius="2px"
            fontSize="14px"
            fontWeight="semibold"
            bg="none"
            borderColor="none"
            color="white"
            _hover={{
              opacity: 0.5,
            }}
          >
            EN
          </Box>
        </Link>
      </ChakraProvider>
    );
  }
}
