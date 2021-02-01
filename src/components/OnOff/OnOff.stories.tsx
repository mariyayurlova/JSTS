import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import OnOff from "./OnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'OnOff stories',
    component: OnOff,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

export const OnMode = () => <OnOff on={true} onChange={action('on or off clicked')}/>;
export const OffMode = () => <OnOff on={false} onChange={action('on or off clicked')}/>;

export const ModeChange = () => {
    const [value, setValue] = useState<boolean>(true);
    return <OnOff on={value} onChange={setValue}/>;
}
