import { Switches } from './Switches';

export default {
    title: 'Components/Switches',
    component: Switches,
    tags: ['autodocs'],
    argTypes: {
    },
};


export const Default = {
    args: {
        size: 'regular',
        checked: false,
    },
};

export const disabled = {
    args: {
        size: 'regular',
        checked: false,
        disabled: true
    },
};

export const Small = {
    args: {
        size: 'small',
        checked: false,
    },
};