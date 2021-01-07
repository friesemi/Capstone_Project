import React from 'react';
import {Menu} from 'antd';
import PropTypes from 'prop-types';
import {UnorderedListOutlined, CodeSandboxOutlined, DashboardOutlined} from '@ant-design/icons';
import * as Constants from '../utility/constants';

function Navbar(props) {
    const handleClick = (e) => {
        props.changePage(e.key);
    };

    return (
        <>
            <Menu onClick={handleClick} theme="light" selectedKeys={[props.currentPage]} mode="horizontal">
                <Menu.Item key={Constants.HEADER_DASHBOARD} icon={<DashboardOutlined />}>
            Dashboard
                </Menu.Item>
                <Menu.Item key={Constants.HEADER_ITEMLIST} icon={<UnorderedListOutlined />}>
            Item List
                </Menu.Item>
                <Menu.Item key={Constants.HEADER_CONTAINER} icon={<CodeSandboxOutlined />}>
            Containers
                </Menu.Item>
            </Menu>
        </>
    );
}

Navbar.propTypes = {
    changePage: PropTypes.func,
    currentPage: PropTypes.string,
};
export default Navbar;
