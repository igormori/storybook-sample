import { Tables } from './Tables';

export default {
    title: 'Components/Tables',
    component: Tables,
    tags: ['autodocs'],
    argTypes: {
    },
};


export const Primary = {
    args: {
        data: [
            {
                id: '01',
                contactName: 'Olive Tree',
                phoneNumber: '+1 (555) 555 555',
                companyName: 'Idea Theorem',
                domainUrl: 'https://www.ideatheorem.com/'
            },
        ],
        headers: [
            {
                name: 'id',
                label: 'ID',
            },
            {
                name: 'contactName',
                label: 'Contact Name',
            },
            {
                name: 'phoneNumber',
                label: 'Phone Number',
            },
            {
                name: 'companyName',
                label: 'Company name',
            },
            {
                name: 'domainUrl',
                label: 'Domain URL',
            }
        ],
        actions: [
            {
                name: 'edit',
                label: 'Edit',
                type: 'edit',
                onClick: function () {
                    console.log('action')
                },
            },
            {
                name: 'trainData',
                label: 'Train data',
                type: 'new',
                onClick: function () {
                    console.log('action')
                },
            }
        ]
    },
};