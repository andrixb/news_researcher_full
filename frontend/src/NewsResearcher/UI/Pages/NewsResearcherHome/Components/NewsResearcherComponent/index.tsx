import React, { useState } from 'react';
import { ArticleType } from '../../../../../Domain/Entities/Article';
import useGetNewsEverything from '../../../../../Infrastructure/Hooks/useGetNewsResearcher';
import { Box, Grid, Typography, TextField, Stack } from '@mui/material';
import { ArticleCardComponent } from '../ArticleCardComponent';
import { useNewsResearcherStyles } from '../../Styles/NewsResearcher.style';

export interface NewsResearcherComponentProps {}

export default function NewsResearcherComponent({}: NewsResearcherComponentProps) {
    const classes = useNewsResearcherStyles();
    const [keyword, setKeyword] = useState<string>('');
    const { articles, articlesError } = useGetNewsEverything({ keyword });

    const handleChange = (event: any) => {
        const { value } = event.target as HTMLInputElement;
        setKeyword(value);
    };

    return (
        <Box component="div">
            <Stack className={classes.searchBarContainer}>
                <Typography variant="h2" className={classes.titleHeader}>Search Articles</Typography>
                {articlesError !== undefined ? <Typography variant="h4">Error when finding articles</Typography> : <></>}

                <TextField
                    onChange={handleChange}
                    aria-label="Search field"
                    label="Search articles"
                    InputProps={{
                        type: 'search',
                    }}
                />
            </Stack>
            {articles ? (
                <Grid container spacing={3} className={classes.articlesContainer}>
                    {articles.map((article: ArticleType, index: number) => (
                        <Grid item xs={8} key={index}>
                            <ArticleCardComponent article={article} />
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <></>
            )}
        </Box>
    );
}
