import { ChakraProvider, Container } from "@chakra-ui/react";
import Header from "./components/Header";
import Calendar from "./components/Calendar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ChakraProvider >
        <Header/>
        <Calendar/>
    </ChakraProvider>
    </main>
  );
}

