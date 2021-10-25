export interface ISKUMonthlyReport {
  month: string;
  sku: string;
  no_of_orders: number;
  no_of_units: number;
  no_of_returns: number;
  no_of_returned_unit: number;
  profit_after_returning_loss: number;
  return_loss_amount: number;
  is_multi_product: boolean;
  processed_at: string;
}

export interface IOrderWiseReport {
  order_id: string;
  order_date: string; // ISO string - need to show in user-timezone
  skus: string[]; //["sku1", "sku2"];
  settlement_id: string;
  settled_amount: number;
  easy_ship_charges: number;
  gst_amount: number;
  invoice_amount: number;
  cost_price: number;
  cost_price_detail: { sku1: number; sku2: number };
  quantity_detail: { sku1: number; sku2: number };
  profit: number;
  is_returned: string; // some | all | none
  return_details: {
    sku1: { refundCommission: number; refundCommissionIGST: number };
  };
  is_multiple_product_order: boolean;
  is_cancelled: boolean;
  fulfillment_id: string; // MFN | AF;
}

export interface IOverallMonthlyReport {
  type: string;
  description: string;
  amount: number;
  other_detail: string;
}

export interface ISkippedSettlements {
  id: string;
  settlement_id: string;
  settlement_date: string; // ISO string - display in user timezone
  deposit_date: string; // ISO string
  total_amount: number;
  transaction_type: string;
  order_id: string;
  merchant_order_id: string;
  adjustment_id: string;
  shipment_id: string;
  amount_type: string;
  amount_description: string;
  amount: number;
  fulfillment_id: string;
  posted_date: string;
  posted_date_time: string;
  order_item_code: string;
  merchant_order_item_code: string;
  merchant_adjustment_item_id: string;
  sku: string;
  quantity_purchased: string;
  promotion_id: string;
}

export interface ISettlements {
  id: string;
  seller_id: string; // iso string
  settlement_id: string;
  settlement_start_date: string; // ISO string
  settlement_end_date: string; // ISO string
  total_amount: number;
  deposit_date: string;
}
