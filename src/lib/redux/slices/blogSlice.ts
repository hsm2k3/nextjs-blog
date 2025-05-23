// src/lib/redux/slices/blogSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BlogApiResponse, BlogPost } from '@/app/(sidebar)/blog/_data/mockBlogData';

interface BlogState {
    posts: BlogApiResponse | null;
    postDetails: Record<string, BlogPost>;
    loading: boolean;
}

const initialState: BlogState = {
    posts: null,
    postDetails: {},
    loading: false,
};

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        setBlogPosts: (state, action: PayloadAction<BlogApiResponse>) => {
            state.posts = action.payload;
        },
        setBlogPostDetail: (state, action: PayloadAction<BlogPost>) => {
            state.postDetails[action.payload.slug] = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        }
    },
});

export const { setBlogPosts, setBlogPostDetail, setLoading } = blogSlice.actions;
export default blogSlice.reducer;