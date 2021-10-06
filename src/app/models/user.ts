export class UserSaveRequest {
    username: string;
    password: string;
    name: string;
    lastName: string;
    email: string;
    roles: number[];
}

export class UserLoginResponse {
    userId: number;
    username: string;
    fullName: string;
    status: number;
    roles: string[];
}

export class LoginRequest {
    username: string;
    password: string;
}
