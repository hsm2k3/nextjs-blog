import React from 'react';
import DashboardLayout from '@/components/boards/Dashboard';
import UnderConstruction from "@/components/fallback/UnderConstruction";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function SettingsPage() {
    return (
        <ProtectedRoute>
            <DashboardLayout>
                <UnderConstruction
                    title="Still Working On This Part"
                    message="Our team is working hard to complete this section of the site. Please check back later!"
                    mediaPath="/assets/giphy.webp"
                    estimatedCompletion="June 2025"
                />
            </DashboardLayout>
        </ProtectedRoute>
    );
}