import React from 'react';
import NewsResearcherComponent from './Components/NewsResearcherComponent';

interface NewsResearcherHomeProps { }


export default function NewsResearcherHome(props: NewsResearcherHomeProps) {
    return (
        <main>
            <NewsResearcherComponent />
        </main>
    );
}
