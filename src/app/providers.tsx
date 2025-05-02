'use client'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { ReactNode } from 'react'

// Initialize PostHog client-side only
if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST!
  })
}

// Define props interface for the PostHog component
interface PostHogProps {
  children: ReactNode
}

export function PostHog({ children }: PostHogProps): React.ReactElement {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}
