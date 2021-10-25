export interface ISupplier {
    id?: string;
    name: string;
    mobile: string;
    address: string;
    created_at?: string;
    created_by?: string;
    linkname?: string;
}
export interface IProduct {
    name: string;
    sku: string;
    cost_price: number;
    stock: number;
    weight: number;
    length: number;
    bredth: number;
    height: number;
    description: string;
    id?: string;
}

export interface IDimension {
    l: number;
    b: number;
    h: number;
}

export interface IPurchase {
    id?: string;
    supplier_id: string;
    supplierName?: string;
    items: IItem[];
    total: number;
    purchased_at: string | Date;
}

export interface IItem {
    id: string;
    linkname?: string;
    price: string;
    product_id?: string;
    purchase_id?: string;
    quantity: number;

}

export interface ISelectOption {
    name: string;
    value: string;
}


export interface IEasyShip {
    productId: string;
    dimension: IDimension;
    cp: number;
    packingAnotherCp: number;
    sp: number;
    shippingCharge: number;
    discount: number;
    totalSp: number;
    referralFees: number;
    closingFees: number;
    amazonEasyShippingCharges: number;
    gstTax: number;
    tcsCollected: number;
    totalCharges: number;
    getBalanceInAccount: number;
    profitLoss: number;
}

export interface IFinance {
    amount: string;
    action_towards_company: string;
    user_involved: string;
    action_performed_at: string;
    id?: string;
    description?: string;
}
