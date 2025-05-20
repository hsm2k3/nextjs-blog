'use client';
import DashboardLayout from "@/components/boards/Dashboard";
import { useUser } from '@/lib/redux/hooks/useUser';
import UnderConstruction from "@/components/fallback/UnderConstruction";


const RegisterPage = () => {
    const user = useUser();
    return (
      <>
          <DashboardLayout user={user.name}>
              <UnderConstruction
                  title="Still Working On This Part"
                  message="Our team is working hard to complete this section of the site. Please check back later!"
                  mediaPath="/assets/giphy.webp"
                  estimatedCompletion="June 2025"
                  // contactEmail="support@yourdomain.com"
              />
          </DashboardLayout>
      </>
    );
}

export default RegisterPage;