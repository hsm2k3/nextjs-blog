'use client';
import DashboardLayout from "@/components/boards/Dashboard";
import UnderConstruction from "@/components/fallback/UnderConstruction";
import React from "react";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { useAuth } from '@/components/auth/AuthContext';


export default function ProfilePage() {
    const { user } = useAuth();

    return (
        <ProtectedRoute>
            <DashboardLayout user={user?.name || ''}>
                <UnderConstruction
                    title="Still Working On This Part"
                    message="Our team is working hard to complete this section of the site. Please check back later!"
                />
            </DashboardLayout>
        </ProtectedRoute>
    );
}