import '../styles/globals.css';
import { ChakraProvider, Center } from '@chakra-ui/react';
import Navbar from '@/components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navbar />

      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
