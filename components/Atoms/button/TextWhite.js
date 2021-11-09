import { ChakraProvider, Box } from "@chakra-ui/react";

export default function TextWhite(text) {
  return (
    <ChakraProvider>
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
        {text}
      </Box>
    </ChakraProvider>
  );
}
