import { TopNav } from './TopNav';

export default {
    title: 'Components/TopNav',
    component: TopNav,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
        textColor: { control: 'color' },
    },
};


export const Primary = {
    args: {
        state: false,
    },
};