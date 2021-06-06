import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import readingTime from 'reading-time'
import renderToString from 'next-mdx-remote/'
import MDXComponents from '../components/Content/MDXComponents'

const root = process.cwd()

export async function getFiles(type){
    return fs.readdirSync(path.join(root, 'data', type))
}

export async function getFileBySlug(type, slug) {
    const source = slug? fs.readFileSync(path.join(root, 'data', type, `${slug}.mdx`), 'utf-8')
    : fs.readFileSync(path.join(root, 'data', `${slug}.mdx`), 'utf-8')

    const {data, context} = matter(source)
    const mdxSource = await renderToString(context, {
        components: MDXComponents
    })

    return {
        mdxSource,
        frontMatter: {
            wordCount: context.split(/\s+/gu).length,
            readingTime: readingTime(context),
            slug: slug || null,
            ...data
        }
    }
}

export async function getAllFilesFrontMatter(type) {
    const files = fs.readdirSync(path.join(root, 'data', type))

    return files.reduce((allPosts, postSlug) => {
        const source = fs.readFileSync(
            path.join(root, 'data', type, postSlug),
            'utf8'
        )
        const { data } = matter(source)

        return [
            {
                ...data,
                slug: postSlug.replace('.mdx', '')
            },
            ...allPosts
        ]
    }, [])
}