import { ChakraProvider, Box } from "@chakra-ui/react";

export default function ContWhite(text) {
  return (
    <ChakraProvider>
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
        {text}
      </Box>
    </ChakraProvider>
  );
}
