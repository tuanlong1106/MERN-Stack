import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import { Box, HStack, IconButton, Image, Heading, Text, useColorModeValue, useDisclosure, Modal, ModalOverlay, ModalContent, ModalBody, ModalHeader, ModalCloseButton, VStack, Input } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/toast';
import { useProductStore } from '../store/product';

const ProductCard = ({ product }) => {
    const textColor = useColorModeValue('gray.800', 'gray.200');
    const bg = useColorModeValue('white', 'gray.800');
    const { deleteProduct } = useProductStore();
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();
    
    const handleDeleteProduct = async (pid) => {
        const { success, message } = await deleteProduct(pid);
        if (!success) {
            toast({
                title: "Error",
                description: message,
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        } else {
            toast({
                title: "Success",
                description: message,
                status: "success",
                duration: 5000,
                isClosable: true,
            });
        }
    };

    return (
        <Box shadow='lg' rounded='lg' overflow='hidden' transition='all 0.3s' _hover={{ transform: "translateY(-5px)", shadow: "xl" }} bg={bg}>
            <Image src={product.image} alt={product.name} h={48} w='full' objectFit='cover' />
            <Box p={4}>
                <Heading as='h3' size='md' mb={2}>
                    {product.name}
                </Heading>
                <Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>
                    ${product.price}
                </Text>
                <HStack>
                    <IconButton icon={<EditIcon />} onClick={onOpen} colorScheme='blue' />
                    <IconButton icon={<DeleteIcon />} onClick={() => handleDeleteProduct(product._id)} colorScheme='red' />
                </HStack>
            </Box>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Edit Product</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack spacing={4}>
                            <Input placeholder='Product Name' name='name' />
                            <Input placeholder='Price' name='price' type='number' />
                            <Input placeholder='Image URL' name='image' />
                        </VStack>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default ProductCard;