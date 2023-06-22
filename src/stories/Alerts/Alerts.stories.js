import { Alerts } from './Alerts';

export default {
    title: 'Components/Alerts',
    component: Alerts,
    tags: ['autodocs'],
    argTypes: {
        message: { control: 'text' },
    },
};

export const Error = {
    args: {
        message: 'This is a sample message.',
        type: 'error'
    },
};

export const Warning = {
    args: {
        message: 'This is a sample message.',
        type: 'warning'
    },
};


export const Info = {
    args: {
        message: 'This is a sample message.',
        type: 'info'
    },
};

export const Success = {
    args: {
        message: 'This is a sample message.',
        type: 'success'
    },
};

