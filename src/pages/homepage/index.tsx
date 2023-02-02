import ContentField from 'components/content/ContentField';
import SectionHeader from 'components/section-header/SectionHeader';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Space } from 'antd';

function Home() {
	const navigate = useNavigate();

	return (
		<>
			<SectionHeader>
				<div>Hồ sơ của tôi</div>
			</SectionHeader>
			<ContentField>
				<div className="flex justify-between w-full">
					<div>Danh sách số lần nộp</div>
					<Button
						type="primary"
						onClick={() => navigate('/nop-ho-so')}
					>
						Nộp hồ sơ
					</Button>
				</div>
			</ContentField>
		</>
	);
}

export default Home;
