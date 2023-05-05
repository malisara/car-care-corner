import React, { useState } from 'react';
import {
    Button, Input, Stack, useColorModeValue, Textarea, AlertDialog,
    AlertDialogBody,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
    FormControl,
    FormHelperText,
    useDisclosure,
} from '@chakra-ui/react';
import { useForm } from "react-hook-form";


export default function ContactForm() {
    const formFocusColor = useColorModeValue('gray.400', 'offwhite');
    const formErrorColor = useColorModeValue('red.500', 'red.700');
    const { isOpen, onOpen, onClose } = useDisclosure();

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [mailValue, setMailValue] = useState(0);
    const [messageValue, setMessageValue] = useState(0);


    function onSubmit(data) {
        onOpen();
        const submittedData = data;
        reset();
        setMailValue(0);
        setMessageValue(0);
        // TODO send data 
    }

    function enableButton(e) { //TODO
        if (e.target.placeholder === 'E-mail') {
            setMailValue(e.target.value.trim().length);
        }

        if (e.target.placeholder === 'Message') {
            setMessageValue(e.target.value.trim().length);
        }
    }



    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={3}>

                    <FormControl isInvalid={errors.mail?.message !== undefined}>
                        <Input
                            onKeyUp={enableButton}
                            errorBorderColor={formErrorColor}
                            placeholder='E-mail'
                            focusBorderColor={formFocusColor}
                            {...register('mail',
                                {
                                    required: 'This field is required',
                                    pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: "Please enter a valid email"
                                    }
                                })}
                        />

                        {errors.mail?.message && (
                            <FormHelperText>
                                {errors.mail?.message}
                            </FormHelperText>
                        )}

                    </FormControl>


                    <FormControl isInvalid={errors.message?.message !== undefined}>
                        <Textarea as='input'
                            onKeyUp={enableButton}
                            placeholder='Message'
                            focusBorderColor={formFocusColor}
                            errorBorderColor={formErrorColor}
                            {...register('message',
                                { required: 'This field is required' })}
                        />

                        {errors.message?.message && (
                            <FormHelperText>
                                {errors.message?.message}
                            </FormHelperText>
                        )}

                    </FormControl>

                    <Button colorScheme='teal'
                        variant='outline'
                        type='sumbit'
                        isDisabled={(mailValue > 0 && messageValue > 0) ? false : true}
                    >
                        Submit

                    </Button>

                </Stack>

                <AlertDialog
                    motionPreset='slideInBottom'
                    isOpen={isOpen}
                    isCentered
                    onClose={onClose}>
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
        </div >
    );
}
