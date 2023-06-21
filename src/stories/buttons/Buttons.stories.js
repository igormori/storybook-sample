import { Buttons } from './Buttons';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
    title: 'Components/Button',
    component: Buttons,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
        textColor: { control: 'color' },
    },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args


export const Primary = {
    args: {
        label: 'Button',
        variant: 'primary'
    },
};

export const Secondary = {
    args: {
        label: 'Button',
        variant: 'secondary'
    },
};

export const Large = {
    args: {
        size: 'large',
        label: 'Button',
        variant: 'primary'
    },
};

export const Medium = {
    args: {
        size: 'medium',
        label: 'Button',
        variant: 'primary'
    },
};

export const Small = {
    args: {
        size: 'small',
        label: 'Button',
        variant: 'primary'
    },
};

export const Full = {
    args: {
        size: 'full',
        label: 'Button',
        variant: 'primary'
    },
};
