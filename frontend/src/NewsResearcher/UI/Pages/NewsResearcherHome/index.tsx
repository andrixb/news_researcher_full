import React from 'react';
import NewsResearcherComponent from './Components/NewsResearcherComponent';

import { useNewsResearcherHomeStyles } from './Styles/NewsResearcherHome.style';

interface NewsResearcherHomeProps {
    classes?: any;
}


export default function NewsResearcherHome(props: NewsResearcherHomeProps) {
    const classes = useNewsResearcherHomeStyles();

    return (
        <main className={classes.content}>
            <NewsResearcherComponent />
        </main>
    );
}
