import { Box, Container, Flex, Heading, Link, Text, VStack, HStack, Spacer, IconButton } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="gray.800" color="white" p={4} align="center">
        <Heading size="md">My Blog</Heading>
        <Spacer />
        <HStack spacing={4}>
          <Link href="#">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Blog</Link>
          <Link href="#">Contact</Link>
        </HStack>
      </Flex>

      <Flex direction={{ base: "column", md: "row" }} mt={4}>
        <Box flex="3" p={4}>
          <Heading size="lg" mb={4}>Welcome to My Blog</Heading>
          <Text mb={4}>
            This is a sample blog post. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </Text>
          <Text mb={4}>
            Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. 
            Praesent mauris. Fusce nec tellus sed augue semper porta.
          </Text>
        </Box>

        <Box flex="1" bg="gray.100" p={4} ml={{ md: 4 }} mt={{ base: 4, md: 0 }}>
          <Heading size="md" mb={4}>Recent Posts</Heading>
          <VStack align="start" spacing={2}>
            <Link href="#">Post 1</Link>
            <Link href="#">Post 2</Link>
            <Link href="#">Post 3</Link>
          </VStack>
        </Box>
      </Flex>

      <Flex as="footer" bg="gray.800" color="white" p={4} mt={4} align="center" justify="center">
        <HStack spacing={4}>
          <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter />} />
          <IconButton as="a" href="#" aria-label="Facebook" icon={<FaFacebook />} />
          <IconButton as="a" href="#" aria-label="Instagram" icon={<FaInstagram />} />
        </HStack>
      </Flex>
    </Container>
  );
};

export default Index;