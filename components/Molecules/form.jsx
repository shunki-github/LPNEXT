import {
  FormControl,
  FormLabel,
  Textarea,
  Input,
  Text,
} from "@chakra-ui/react";

import {ContBlue} from "@/components/Atoms/button/ContBlue";
import styles from "@/styles/Molecules/form.module.css";

export function Form(sendfunc, contactText) {
  return (
      <form onSubmit={sendfunc}>
        <div className={styles.form__input}>
          <FormControl isRequired>
            <FormLabel>{contactText.name}</FormLabel>
            <Input type="text" id="name" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>{contactText.mailAddress}</FormLabel>
            <Input type="email" id="email" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>{contactText.tel}</FormLabel>
            <Input type="tel" id="tel" />
          </FormControl>
          <Text mb="8px">{contactText.content}</Text>
          <Textarea
            placeholder={contactText.placefolder}
            id="message"
            isRequired
          />
        </div>
        <div className={styles.form__submit}>
          {ContBlue(contactText.submit)}
        </div>
      </form>
  );
}
