import React, { useState } from 'react';
import { ArticleType } from '../../../../../Domain/Entities/Article';
import useGetNewsEverything from '../../../../../Infrastructure/Hooks/useGetNewsResearcher';
import { Box, Grid, Typography, TextField, Stack } from '@mui/material';
import { ArticleCardComponent } from '../ArticleCardComponent';

export interface NewsResearcherComponentProps {}

export default function NewsResearcherComponent({}: NewsResearcherComponentProps) {
    const [keyword, setKeyword] = useState<string>('');
    const { articles, articlesError } = useGetNewsEverything({ keyword });

    const handleChange = (event: any) => {
        const { value } = event.target as HTMLInputElement;
        setKeyword(value);
    };

    return (
        <Box component="div">
            <Stack sx={{ marginBottom: 8 }}>
                <Typography variant="h2">Search Articles</Typography>
                {articlesError !== null ? <Typography variant="h4">Error when finding articles</Typography> : <></>}

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
                <Grid container spacing={3}>
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
