import { DatePicker, Form, FormInstance, Input } from 'antd';
import React from 'react';

type Props = {
	form: FormInstance;
};

function PersonalInfoStep({ form }: Props) {
	const config = {
		rules: [
			{
				type: 'object' as const,
				required: true,
				message: 'Please select time!',
			},
		],
	};

	return (
		<Form
			form={form}
			name="basic"
			layout="vertical"
			initialValues={{ remember: true }}
			autoComplete="off"
		>
			<Form.Item
				label="Họ và tên"
				name="fullName"
				rules={[
					{ required: true, message: 'Please input your username!' },
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item name="studentDob" label="Ngày sinh" {...config}>
				<DatePicker />
			</Form.Item>
            <Form.Item
				label="Địa chỉ email liên lạc"
				name="email"
				rules={[
					{ required: true, message: 'Please input email address' },
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				label="CMND/CCCD"
				name="identityNumber"
				rules={[
					{ required: true, message: 'Please input identity number' },
				]}
			>
				<Input />
			</Form.Item>
		</Form>
	);
}

export default PersonalInfoStep;
