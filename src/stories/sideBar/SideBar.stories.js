import { SideBar } from './SideBar';

export default {
    title: 'Components/SideBar',
    component: SideBar,
    tags: ['autodocs'],
    argTypes: {
    },
};


export const Primary = {
    args: {
        items: [
            {
                label: "Customer list",
                url: "customer/list"

            }
        ],
    },
};