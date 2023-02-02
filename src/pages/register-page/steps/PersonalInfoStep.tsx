import { Form, FormInstance, Input } from 'antd';
import React from 'react';

type Props = {
	form: FormInstance;
};

function PersonalInfoStep({ form }: Props) {
	return (
		<Form
			form={form}
			name="basic"
			layout="vertical"
			initialValues={{ remember: true }}
			autoComplete="off"
		>
			<Form.Item
				label="Username"
				name="username"
				rules={[
					{ required: true, message: 'Please input your username!' },
				]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				label="Password"
				name="password"
				rules={[
					{ required: true, message: 'Please input your password!' },
				]}
			>
				<Input.Password />
			</Form.Item>
		</Form>
	);
}

export default PersonalInfoStep;
