import React from 'react';
import UnderConstruction from "@/components/fallback/UnderConstruction";
// testing out certbot post ssl expiration
const Prologue = () => {
    return (
        <UnderConstruction
            title="Still Working On This Part"
            message="Our team is working hard to complete this section of the site. Please check back later!"
            gifPath="/icons/under_construction.gif"
            estimatedCompletion="June 2025"
            // contactEmail="support@yourdomain.com"
        />
        // <div className={"flex min-h-screen flex-col items-center justify-between p-24"}>
        //     <h1>Coming soon...</h1>
        // </div>
    );
};

export default Prologue;