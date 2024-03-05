import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";

export default function Header() {
    return (
        <Flex gap="20" flexDir="row" alignItems="center" {...styles.text}>
          <Flex flexDir="column" gap="5" alignItems="flex-start">
          <Heading>Appointment Reminder System</Heading>
          <Text fontStyle="italic" width="50%">Create an appointment. All appointments will send an SMS reminder with the option to confirm, cancel, or send a link to reschedule.</Text>
          </Flex>
          <Button width="15%">Create Appointment</Button>
          
        </Flex>
    );
}

const styles = {
    text: {
      fontFamily: 'Menlo',

    }
  }