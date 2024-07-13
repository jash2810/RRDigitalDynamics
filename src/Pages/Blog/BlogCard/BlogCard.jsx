import { useTheme } from '@emotion/react';
import React, { Component } from 'react';
import './BlogCard.css'
import { Typography } from '@mui/material';

function BlogCard({title, statement, date, image, id, readMore, readMoreClicked}) {
    const theme = useTheme();

    return(
        <div className='blog-card-wrapper'>
            <img src={image} className='blog-card-image' />
            <div className='blog-card-title'>
                <Typography variant='h6'>{title}</Typography>
                <Typography variant='p'>{statement}</Typography><br/>
                <Typography variant='caption'>{date}</Typography><br/>
                <Typography variant='caption' className='read-more' id={'read'+id} onClick={() => {readMoreClicked(readMore, title)}}><i>Read More{'>>'}</i></Typography>
            </div>
        </div>
    )
}

export default BlogCard;