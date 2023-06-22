import { TextField } from './TextField';

export default {
    title: 'Components/TextField',
    component: TextField,
    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text' },
        errorLabel: { control: 'text' },
    },
};


export const Default = {
    args: {
        label: 'Sample label*',
        error: false,
        errorLabel: 'Sample error',
    },
};

export const Error = {
    args: {
        label: 'Login email',
        error: true,
        errorLabel: 'Invalid email',
    },
};

export const Disabled = {
    args: {
        label: 'Sample label*',
        error: false,
        errorLabel: 'Sample error',
        disabled: true
    },
};

