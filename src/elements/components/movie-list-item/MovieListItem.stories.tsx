import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MovieListItem from './MovieListItem';

export default {
    title: 'Components/MovieListItem',
    argTypes: {
        posterImage: { control: 'file' },
    },
    component: MovieListItem,
} as ComponentMeta<typeof MovieListItem>;

const Template: ComponentStory<typeof MovieListItem> = function () {
    return <MovieListItem data={{ posterImage: 'string', title: 'string', description: 'test' }} />;
};

export const MovieListItemExample = Template.bind({});
