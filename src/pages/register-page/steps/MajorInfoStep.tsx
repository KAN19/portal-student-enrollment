import { Form, FormInstance, Input, Select } from 'antd';

type Props = {
	form: FormInstance;
};

function MajorInfoStep({ form }: Props) {
	return (
		<Form
			form={form}
			name="basic"
			layout="vertical"
			initialValues={{ remember: true }}
			autoComplete="off"
		>
			<Form.Item
				label="Chọn ngành học"
				name="major"
				initialValue={'ky-thuat-phan-mem'}
			>
				<Select>
					<Select.Option value="ky-thuat-phan-mem">
						Kỹ thuật phần mềm
					</Select.Option>
					<Select.Option value="khoa-hoc-may-tinh">
						Khoa học máy tính
					</Select.Option>
					<Select.Option value="cong-nghe-thong-tin">
						Công nghệ thông tin
					</Select.Option>
				</Select>
			</Form.Item>
			<Form.Item
				label="Kỳ nhập học"
				name="startingSeason"
				rules={[
					{ required: true, message: 'Please input start season' },
				]}
				initialValue={'oct-2023'}
			>
				<Select>
					<Select.Option value="oct-2023">October 2023</Select.Option>
					<Select.Option value="march-2024">March 2024</Select.Option>
				</Select>
			</Form.Item>
		</Form>
	);
}

export default MajorInfoStep;
