import { UploadOutlined } from '@ant-design/icons';
import { Button, Form, FormInstance, message, Upload } from 'antd';
import type {
	RcFile,
	UploadChangeParam,
	UploadFile,
	UploadProps,
} from 'antd/es/upload/interface';
import { useEffect, useState } from 'react';
type Props = {
	form: FormInstance;
};

function UploadFileStep({ form }: Props) {
	const [highSchoolCert, setHighSchoolCert] = useState<string>();
	const [highSchoolResult, setHighSchoolResult] = useState<string>();

	useEffect(() => {
		if (form) {
			const fields = form.getFieldsValue();
			if (fields.highSchoolCert) {
				setHighSchoolCert(fields.highSchoolCert);
			}
			if (fields.highSchoolResult) {
				setHighSchoolResult(fields.highSchoolResult);
			}
		}
	}, [form]);

	const getBase64 = (img: RcFile, callback: (url: string) => void) => {
		const reader = new FileReader();
		reader.addEventListener('load', () =>
			callback(reader.result as string)
		);
		reader.readAsDataURL(img);
	};

	const handleChangeHighSchoolCert: UploadProps['onChange'] = (
		info: UploadChangeParam<UploadFile>
	) => {
		if (info.file.status === 'done') {
			getBase64(info.file.originFileObj as RcFile, (url) => {
				setHighSchoolCert(url);
			});
		}
	};

	const handleChangeHighSchoolResult: UploadProps['onChange'] = (
		info: UploadChangeParam<UploadFile>
	) => {
		if (info.file.status === 'done') {
			getBase64(info.file.originFileObj as RcFile, (url) => {
				setHighSchoolResult(url);
			});
		}
	};

	const beforeUpload = (file: RcFile) => {
		const isJpgOrPng =
			file.type === 'image/jpeg' || file.type === 'image/png';
		if (!isJpgOrPng) {
			message.error('You can only upload JPG/PNG file!');
		}
		const isLt2M = file.size / 1024 / 1024 < 2;
		if (!isLt2M) {
			message.error('Image must smaller than 2MB!');
		}
		return isJpgOrPng && isLt2M;
	};

	const normFile = (info: any) => {
		if (info.file.status === 'done') {
			return info.file.response.link;
		}
	};

	return (
		<Form form={form} layout="vertical">
			<Form.Item
				name="highSchoolCert"
				label="Giấy chứng nhận tốt nghiệp THPT"
				rules={[
					{ required: true, message: 'Please upload this image!' },
				]}
				valuePropName="file"
				getValueFromEvent={normFile}
			>
				<Upload
					name="file"
					listType="picture"
					showUploadList={false}
					action="https://nova-file.taisanvn.com/file-handler/upload-image/dochero"
					beforeUpload={beforeUpload}
					onChange={handleChangeHighSchoolCert}
				>
					{highSchoolCert ? (
						<img
							src={highSchoolCert}
							alt="avatar"
							className="max-h-[300px] w-full object-cover"
						/>
					) : (
						<Button icon={<UploadOutlined />}>Upload</Button>
					)}
				</Upload>
			</Form.Item>
			<Form.Item
				name="highSchoolResult"
				label="Kết quả thi THPT"
				valuePropName="file"
				rules={[
					{ required: true, message: 'Please upload this image!' },
				]}
				getValueFromEvent={normFile}
			>
				<Upload
					name="file"
					listType="picture"
					showUploadList={false}
					action="https://nova-file.taisanvn.com/file-handler/upload-image/dochero"
					beforeUpload={beforeUpload}
					onChange={handleChangeHighSchoolResult}
				>
					{highSchoolResult ? (
						<img
							src={highSchoolResult}
							alt="avatar"
							className="max-h-[300px] w-full object-cover"
						/>
					) : (
						<Button icon={<UploadOutlined />}>Upload</Button>
					)}
				</Upload>
			</Form.Item>
		</Form>
	);
}

export default UploadFileStep;
