import { EnrollingStudentRequest } from 'models/enrollingStudent';
import axiosClient from './axiosClient';

export const enrollingStudentApi = {
	enroll: (data: EnrollingStudentRequest) => {
		const url = `/enrolling`;
		return axiosClient.post(url, data);
	},
};
