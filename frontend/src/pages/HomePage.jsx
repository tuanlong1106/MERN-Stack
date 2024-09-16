import { Container, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useProductStore } from '../store/product';
import ProductCard from '../components/ProductCard';
const HomePage = () => {
  const { fetchProducts, products } = useProductStore();
  
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log("products", products);

  return (
    <Container maxW='container.xl' py={12}>
      <VStack spacing={8}>
        <Text fontSize={"30"} fontWeight={"bold"} bgGradient={"linear(to-r, cyan.400, blue.500)"} bgClip={"text"} textAlign={"center"}>
          Welcome to the Andrew Home page 🪿!
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} w={"full"}>
          {products.map((product) => (
            <ProductCard key={product._id} product={product}/>
          ))}
        </SimpleGrid>
        {products.length === 0 && (
          <Text fontSize="xl" textAlign={"center"} fontWeight="bold" color="gray.500">
          No Product Yet 🗑️ <br /> {" "}
          <Link to={"/create"}>
            <Text as="span" color="blue.500" _hover={{ textDecoration: "underline" }}>
              Add a Product 🔖
            </Text>
          </Link>
        </Text>
      )};
      </VStack>
    </Container>
  );
};

export default HomePage;