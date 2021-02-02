import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions";
import Accordion, { AccordionPropsType } from "./Accordion";

export default {
    title: 'Accordion stories',
    component: Accordion,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const callback = action('accordion mode change event fired');

// const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;
// export const CollapseMode2 = Template.bind({});
//
// CollapseMode2.args = {
//     titleValue:'Menu' ,
//     collapsed:true,
//     onClick:callback
// };

export const CollapseMode = () => <Accordion titleValue={'Menu'} collapsed={true} onClick={callback}/>;
export const UncollapseMode = () => <Accordion titleValue={'Users'} collapsed={false} onClick={callback}/>;

export const ModeChange = () => {
    const [collapsed, setСollapsed] = useState<boolean>(true);
    return <Accordion titleValue={'Users'} collapsed={collapsed} onClick={setСollapsed}/>;
}
