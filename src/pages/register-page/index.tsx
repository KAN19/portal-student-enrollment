import ContentField from 'components/content/ContentField';
import SectionHeader from 'components/section-header/SectionHeader';
import React, { useState } from 'react';
import { Button, message, Steps, Form } from 'antd';
import UploadFileStep from './steps/UploadFileStep';
import PersonalInfoStep from './steps/PersonalInfoStep';
import MajorInfoStep from './steps/MajorInfoStep';
import { useNavigate } from 'react-router-dom';

type Props = {};

function RegisterPage({}: Props) {
	const navigate = useNavigate();

	const [form] = Form.useForm();
	const steps = [
		{
			title: 'Đính kèm giấy tờ',
			content: <UploadFileStep form={form} />,
		},
		{
			title: 'Bổ sung thông tin',
			content: <PersonalInfoStep form={form} />,
		},
		{
			title: 'Lựa chọn nguyện vọng',
			content: <MajorInfoStep form={form} />,
		},
	];

	const [current, setCurrent] = useState(0);
	const [formContent, setFormContent] = useState({});

	const handleSubmitProcess = () => {
		validateData().then((data) => {
			message.success('Đăng ký thành công');
			navigate('/');
			console.log(data);
		});
	};

	const validateData = async () => {
		return new Promise((resolve, reject) => {
			form.validateFields()
				.then(() => {
					const fieldValues = form.getFieldsValue();
					let newUpdateContent = {
						...formContent,
						...fieldValues,
					};
					if (fieldValues['studentDob']) {
						newUpdateContent = {
							...formContent,
							...fieldValues,
							studentDob:
								fieldValues['studentDob'].format('YYYY-MM-DD'),
						};
					}
					setFormContent(newUpdateContent);
					resolve(newUpdateContent);
				})
				.catch((err) => {
					reject(err);
				});
		});
	};

	const handleNextPhase = () => {
		validateData().then(() => {
			setCurrent(current + 1);
		});
	};

	const prev = () => {
		setCurrent(current - 1);
	};

	const items = steps.map((item) => ({ key: item.title, title: item.title }));

	return (
		<>
			<SectionHeader>Nộp hồ sơ</SectionHeader>
			<ContentField>
				<div className="space-y-4 flex flex-col w-full ">
					<div>
						<Steps
							current={current}
							items={items}
							className="flex-grow-0"
						/>
					</div>

					<div className="border-dashed border flex-grow border-gray-400 p-4">
						{steps[current].content}
					</div>

					<div className="self-end">
						{current > 0 && (
							<Button
								style={{ margin: '0 8px' }}
								onClick={() => prev()}
							>
								Previous
							</Button>
						)}
						{current < steps.length - 1 && (
							<Button type="primary" onClick={handleNextPhase}>
								Next
							</Button>
						)}
						{current === steps.length - 1 && (
							<Button
								type="primary"
								onClick={handleSubmitProcess}
							>
								Done
							</Button>
						)}
					</div>
				</div>
			</ContentField>
		</>
	);
}

export default RegisterPage;
