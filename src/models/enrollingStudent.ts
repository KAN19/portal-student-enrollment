export interface EnrollingStudent {
    studentId: string;
    highSchoolCert: string; 
    highSchoolResult: string; 
    fullName: string; 
    studentDob: string;
    identityNumber: string; 
    major: string; 
    startingSeason: string;
    email: string;
    status: string;
}

export type EnrollingStudentRequest = Omit<EnrollingStudent, "studentId" | "status">;