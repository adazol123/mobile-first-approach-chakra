import { useState } from "react";
import head from "next/head";
import {
    Heading,
    Flex,
    Stack,
    Input,
    InputGroup,
    InputRightElement
} from '@chakra-ui/react'
import { Container } from "../components/Content/Container";
import { CenterWrapper } from "../components/Wrapper/Center";
import {getAllFilesFrontMatter} from '../lib/mdx'
import BlogPost from "../components/Content/BlogPost";
const Blog = ({ posts}) => {
    return (
        <>
        <Container>
        <Stack
            as='main'
            spacing={8}
            justifyContent='center'
            alignItems='center'
            m='0 auto 4rem auto'
            >
                <Flex
                    flexDirection='column'
                    justifyContent='flex-start'
                    alignItems='flex-start'
                    width='100%'
                    px={4}
                >
                    <Heading letterSpacing='tight' mb={3} as='h1' size='2xl'> Blog</Heading>
                    {posts.map((frontMatter) => <BlogPost key={frontMatter.title} {...frontMatter} />)}
                </Flex>

        </Stack>
        </Container>
        </>
    )
}

export async function getStaticProps() {
    const posts = await getAllFilesFrontMatter('blog')
    return { props: { posts }}
}

export default Blog