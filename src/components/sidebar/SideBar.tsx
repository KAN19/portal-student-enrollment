import { FileOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';

const { Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[]
): MenuItem {
	return {
		key,
		icon,
		children,
		label,
	} as MenuItem;
}

const items: MenuItem[] = [getItem('Hồ sơ của tôi', '1', <FileOutlined />)];

function SideBar() {
	const [collapsed, setCollapsed] = useState(false);

	return (
		<Sider
			collapsible
			collapsed={collapsed}
			onCollapse={(value) => setCollapsed(value)}
		>
			<div
				style={{
					height: 32,
					margin: 16,
					background: 'rgba(255, 255, 255, 0.2)',
				}}
			/>
			<Menu
				theme="dark"
				defaultSelectedKeys={['1']}
				mode="inline"
				items={items}
			/>
		</Sider>
	);
}

export default SideBar;
