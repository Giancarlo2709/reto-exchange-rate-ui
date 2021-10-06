export class CustomerGetResponse {
    customerId: number;
    name: string;
    lastName: string;
    phone: string;
    email: string;
    address: string;
    referenceAddress: string;
    status: number;
    createdDate: string;
    createdBy: string;
    modifiedBy: string;
    modifiedDate: string;
}

export class CustomerSaveRequest {
    name: string;
    lastName: string;
    phone: string;
    email: string;
    address: string;
    referenceAddress: string;
}

export class CustomerSaveResponse {
    customerId: number;
    name: string;
    lastName: string;
    phone: string;
    email: string;
    address: string;
    referenceAddress: string;
    status: number;
    createdDate: string;
}
