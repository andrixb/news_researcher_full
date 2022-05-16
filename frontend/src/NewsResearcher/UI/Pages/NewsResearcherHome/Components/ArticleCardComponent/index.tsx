import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { ArticleType } from '../../../../../Domain/Entities/Article';


export interface ArticleCardComponentProps {
    article: ArticleType;
}

export const ArticleCardComponent = ({ article }: ArticleCardComponentProps) => (
    <Card sx={{ minWidth: 275 }}>
        <CardMedia component="img" height="194" image={article.urlToImage} alt={article.title} />
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {article.publishedAt}
            </Typography>
            <Typography variant="h5" component="div">
                {article.title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {article.author}
            </Typography>
            <Typography variant="body2">{article.description}</Typography>
        </CardContent>
        <CardActions>
            <a target="_blank" href={`${article.url}`}>
                <Button size="small">Read Article</Button>
            </a>
        </CardActions>
    </Card>
);
