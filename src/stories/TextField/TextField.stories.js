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

