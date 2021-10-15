import { ChakraProvider, Box } from "@chakra-ui/react";

export default function contactSend(text) {
  return (
    <ChakraProvider>
      <Box
        type="submit"
        as="button"
        height="40px"
        lineHeight="1.2"
        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
        border="1px"
        px="30px"
        borderRadius="8px"
        fontSize="14px"
        fontWeight="semibold"
        bg="#062572"
        borderColor="#062572"
        color="white"
        _hover={{
          bg: "#062572",
          color: "white",
        }}
      >
        {text}
      </Box>
    </ChakraProvider>
  );
}
