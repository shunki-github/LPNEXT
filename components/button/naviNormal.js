import { ChakraProvider, Box } from "@chakra-ui/react";

export default function naviNormal(text) {
  return (
    <ChakraProvider>
      <Box
        as="button"
        height="40px"
        lineHeight="1.2"
        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
        border="1px"
        px="20px"
        borderRadius="8px"
        fontSize="14px"
        fontWeight="semibold"
        bg="none"
        borderColor="white"
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
