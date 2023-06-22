import { Buttons } from './Buttons';

export default {
    title: 'Components/Button',
    component: Buttons,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
        textColor: { control: 'color' },
    },
};



export const Primary = {
    args: {
        label: 'Button',
        variant: 'primary',
        disabled: false,
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

export const Fit = {
    args: {
        size: 'fit',
        label: 'Button',
        variant: 'primary'
    },
};
