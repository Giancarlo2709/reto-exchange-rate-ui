export class BrandGetPageableResponse {
    createdDate: string;
    createdBy: string;
    modifiedBy: string;
    modifiedDate: string;
    brandId: number;
    description: string;
    status: number;
}

export class Brand {
    brandId: number;
    description: string;
}

export class BrandResponse {
  brandId: number;
  description: string;
  status: number;
  createdDate: string;
}