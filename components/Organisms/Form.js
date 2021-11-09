import {
  FormControl,
  FormLabel,
  ChakraProvider,
  Textarea,
  Input,
  Text,
} from "@chakra-ui/react";
import ContainBlue from "../Atoms/button/ContainBlue";

export default function Form(submitFunc, text) {
  return (
    <ChakraProvider>
      <form onSubmit={submitFunc}>
        <div>
          <FormControl isRequired>
            <FormLabel>{text.name}</FormLabel>
            <Input type="text" id="name" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>{text.mailAddress}</FormLabel>
            <Input type="email" id="email" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>{text.tel}</FormLabel>
            <Input type="tel" id="tel" />
          </FormControl>
          <Text mb="8px">{text.content}</Text>
          <Textarea placeholder={text.placefolder} id="message" isRequired />
        </div>
        <div
          className={`submit`}
          //onClick={() => {
          //    //router.back(), handler;
          //}}
        >
          {ContainBlue(text.submit)}
        </div>
      </form>
    </ChakraProvider>
  );
}
