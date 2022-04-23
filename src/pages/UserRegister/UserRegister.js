import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import BosotBari from './BosotBari/BosotBari';
import BanijjikHolding from './BanijjikHolding/BanijjikHolding';
import TrdLicenseDari from './TrdLicenseDari/TrdLicenseDari';


const UserRegister = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="বসত বাড়ী" value="1" />
                        <Tab label="বানিজ্যিক হোল্ডিং" value="2" />
                        <Tab label="ট্রেড লাইসেন্স ধারী" value="3" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <BosotBari />
                </TabPanel>
                <TabPanel value="2">
                    <BanijjikHolding />
                </TabPanel>
                <TabPanel value="3">
                    <TrdLicenseDari />
                </TabPanel>
            </TabContext>
        </Box>
    );
};

export default UserRegister;