import { Layout, theme } from 'antd';
const { Header } = Layout;
type Props = {
	children: React.ReactNode;
};

function SectionHeader({ children }: Props) {
	const {
		token: { colorBgContainer },
	} = theme.useToken();

	return (
		<Header
			style={{
				background: colorBgContainer,
				display: 'flex',
				alignItems: 'center',
			}}
		>
			<div className="font-semibold text-2xl w-full">{children}</div>
		</Header>
	);
}

export default SectionHeader;
