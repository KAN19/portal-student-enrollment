import { Button, Form, FormInstance, Upload } from 'antd';
import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
type Props = {
	form: FormInstance;
};

function UploadFileStep({ form }: Props) {
	const normFile = (e: any) => {
		console.log('Upload event:', e);
		if (Array.isArray(e)) {
			return e;
		}
		return e?.fileList;
	};

	return (
		<Form form={form} layout="vertical">
			<Form.Item
				name="upload"
				label="Upload"
				valuePropName="fileList"
				getValueFromEvent={normFile}
			>
				<Upload name="logo" listType="picture">
					<Button icon={<UploadOutlined />}>Click to upload</Button>
				</Upload>
			</Form.Item>
		</Form>
	);
}

export default UploadFileStep;
