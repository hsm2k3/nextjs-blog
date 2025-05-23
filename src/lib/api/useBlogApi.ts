// src/lib/api/useBlogApi.ts
import { useApi } from './ApiProvider';
import { BlogApiResponse, BlogPost } from '@/app/(sidebar)/blog/_data/mockBlogData';

export const useBlogApi = () => {
    const api = useApi();

    const getBlogPosts = async (page = 1, postsPerPage = 6, filters?: {
        search?: string,
        category?: string,
        tags?: string[]
    }): Promise<BlogApiResponse | null> => {
        const params: Record<string, string> = {
            page: page.toString(),
            limit: postsPerPage.toString(),
        };

        if (filters?.search) params.search = filters.search;
        if (filters?.category) params.category = filters.category;
        if (filters?.tags?.length) params.tags = filters.tags.join(',');

        return api.makeRequest<BlogApiResponse>({
            endpoint: '/blog/posts',
            method: 'GET',
            params,
            storageStrategy: 'redux',
            storageKey: 'blogPosts',
        });
    };

    const getBlogPost = async (slug: string): Promise<BlogPost | null> => {
        return api.makeRequest<BlogPost>({
            endpoint: `/blog/posts/${slug}`,
            method: 'GET',
            storageStrategy: 'both',
            storageKey: `blogPost_${slug}`,
        });
    };

    return {
        loading: api.loading,
        error: api.error,
        getBlogPosts,
        getBlogPost
    };
};