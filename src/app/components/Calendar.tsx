import { Card, CardBody, Flex, VStack } from "@chakra-ui/react";

export default function Calendar() {
    return (
        // get a list of all appointments and display them here
       <VStack>
        <Card backgroundColor="lightgray">
           <CardBody>Appointment Info: Date, Time, Description</CardBody> 
        </Card>
        <Card backgroundColor="lightgray">
           <CardBody>Appointment Info: Date, Time, Description</CardBody> 
        </Card>
        <Card backgroundColor="lightgray">
           <CardBody>Appointment Info: Date, Time, Description</CardBody> 
        </Card>
        <Card backgroundColor="lightgray">
           <CardBody>Appointment Info: Date, Time, Description</CardBody> 
        </Card>
        <Card backgroundColor="lightgray">
           <CardBody>Appointment Info: Date, Time, Description</CardBody> 
        </Card>
        <Card backgroundColor="lightgray">
           <CardBody>Appointment Info: Date, Time, Description</CardBody> 
        </Card>
        <Card backgroundColor="lightgray">
           <CardBody>Appointment Info: Date, Time, Description</CardBody> 
        </Card>
        <Card backgroundColor="lightgray">
           <CardBody>Appointment Info: Date, Time, Description</CardBody> 
        </Card>
        </VStack>
    )
}