import { getDicebearUrl } from '@/lib/api/avatarUtils';

export interface Author {
    id: string;
    name: string;
    avatar: string;
}

export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    author: Author;
    publishDate: string;
    readTime: number;
    categories: string[];
    tags: string[];
    featuredImage: string;
    slug: string;
}

export interface BlogApiResponse {
    posts: BlogPost[];
    pagination: {
        currentPage: number;
        totalPages: number;
        totalPosts: number;
        postsPerPage: number;
    };
    categories: string[];
    tags: string[];
}

export const mockBlogData: BlogApiResponse = {
    posts: [
        {
            id: "1",
            title: "Getting Started with React",
            excerpt: "Learn how to set up your first React application from scratch.",
            content: "React is a powerful JavaScript library for building user interfaces...",
            author: {
                id: "a1",
                name: "Jane Smith",
                avatar: getDicebearUrl("Jane Smith", "lorelei")
            },
            publishDate: "2023-10-15",
            readTime: 5,
            categories: ["Development", "Frontend"],
            tags: ["React", "JavaScript", "Web Development"],
            featuredImage: "/images/blog/react-getting-started.jpg",
            slug: "getting-started-with-react"
        },
        {
            id: "2",
            title: "Understanding TypeScript Generics",
            excerpt: "A deep dive into TypeScript generics and how they can improve your code.",
            content: "TypeScript generics provide a way to create reusable components...",
            author: {
                id: "a2",
                name: "John Doe",
                avatar: getDicebearUrl("John Doe", "micah")
            },
            publishDate: "2023-09-28",
            readTime: 8,
            categories: ["Development", "TypeScript"],
            tags: ["TypeScript", "JavaScript", "Programming"],
            featuredImage: "/images/blog/typescript-generics.jpg",
            slug: "understanding-typescript-generics"
        },
        // Add more mock posts as needed
    ],
    pagination: {
        currentPage: 1,
        totalPages: 5,
        totalPosts: 28,
        postsPerPage: 6
    },
    categories: ["Development", "Frontend", "Backend", "DevOps", "TypeScript"],
    tags: ["React", "JavaScript", "TypeScript", "Web Development", "Programming", "Next.js"]
};