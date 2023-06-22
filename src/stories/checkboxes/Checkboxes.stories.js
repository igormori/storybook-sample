import { Checkboxes } from './Checkboxes';

export default {
    title: 'Components/Checkboxes',
    component: Checkboxes,
    tags: ['autodocs'],
    argTypes: {
        color: { control: 'color' },
    },
};


export const Primary = {
    args: {
        color: '#13499f',
    },
};

export const Secondary = {
    args: {
        color: '#13499f',
    },
};

export const Error = {
    args: {
        color: '#e51937',
    },
};

export const Disabled = {
    args: {
        color: '#767676',
        disabled: true
    },
};

