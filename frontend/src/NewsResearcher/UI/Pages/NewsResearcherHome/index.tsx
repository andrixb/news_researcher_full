import React from 'react';
import NewsResearcherComponent from './Components/NewsResearcherComponent';

interface NewsResearcherHomeProps {
    classes?: any;
}


export default function NewsResearcherHome(props: NewsResearcherHomeProps) {
    return (
        <main>
            <NewsResearcherComponent />
        </main>
    );
}
