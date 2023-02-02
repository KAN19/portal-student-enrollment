import { Breadcrumb, Layout } from 'antd';
import React from 'react';

const { Content } = Layout;

type Props = {
	children: React.ReactNode;
	breadCrumb?: Array<string>;
};

function ContentField({ children, breadCrumb }: Props) {
	return (
		<Content style={{ margin: '0 16px' }}>
			<Breadcrumb style={{ margin: '16px 0' }}>
				{breadCrumb &&
					breadCrumb.map((item, index) => {
						return (
							<Breadcrumb.Item key={index}>
								{item}
							</Breadcrumb.Item>
						);
					})}
			</Breadcrumb>
			<div className="bg-white min-h-[70vh] p-6 flex">{children}</div>
		</Content>
	);
}

export default ContentField;
