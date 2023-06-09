import React, { useState } from "react";

import { useForm } from "react-hook-form";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  FormControl,
  FormHelperText,
  Heading,
  Input,
  Stack,
  Textarea,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

const validationMessages = {
  email: {
    required: "Email is required",
    pattern: {
      value: /\S+@\S+\.\S+/,
      message: "Invalid email format",
    },
  },
  message: {
    required: "Message is required",
  },
};

export default function ContactForm() {
  const formFocusColor = useColorModeValue("gray.400", "offwhite");
  const formErrorColor = useColorModeValue("red.500", "red.700");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [mailValue, setMailValue] = useState(0);
  const [messageValue, setMessageValue] = useState(0);

  function onSubmit(data) {
    //TODO add loading state to prevent the user from submitting the form twice
    onOpen();
    // const submittedData = data;  //TODO send actual data
    reset();
    setMailValue(0);
    setMessageValue(0);
  }

  function enableButton(e) {
    if (e.target.placeholder === "E-mail") {
      setMailValue(e.target.value.trim().length);
    }

    if (e.target.placeholder === "Message") {
      setMessageValue(e.target.value.trim().length);
    }
  }

  return (
    <div>
      <Heading fontSize={"xl"} py={4} as="h3">
        Send us a question
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <FormControl
            isInvalid={errors.mail?.message !== undefined}
            isRequired
          >
            <Input
              errorBorderColor={formErrorColor}
              placeholder="E-mail"
              _placeholder={{ color: formFocusColor }}
              focusBorderColor={formFocusColor}
              {...register("mail", validationMessages.email)}
              onBlur={enableButton}
            />

            {errors.mail?.message && (
              <FormHelperText>{errors.mail?.message}</FormHelperText>
            )}
          </FormControl>

          <FormControl
            isInvalid={errors.message?.message !== undefined}
            isRequired
          >
            <Textarea
              as="input"
              placeholder="Message"
              _placeholder={{ color: formFocusColor }}
              focusBorderColor={formFocusColor}
              errorBorderColor={formErrorColor}
              {...register("message", validationMessages.message)}
              onBlur={enableButton}
            />

            {errors.message?.message && (
              <FormHelperText>{errors.message?.message}</FormHelperText>
            )}
          </FormControl>

          <Button
            colorScheme="teal"
            variant="outline"
            type="sumbit"
            isDisabled={mailValue > 0 && messageValue > 0 ? false : true}
          >
            Submit
          </Button>
        </Stack>

        <AlertDialog
          motionPreset="slideInBottom"
          isOpen={isOpen}
          isCentered
          onClose={onClose}
        >
          <AlertDialogOverlay />
          <AlertDialogContent>
            <AlertDialogHeader> Successfully submitted</AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>
              We'll answer your question shortly.
            </AlertDialogBody>
          </AlertDialogContent>
        </AlertDialog>
      </form>
    </div>
  );
}
