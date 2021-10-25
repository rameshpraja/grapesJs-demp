export class EndPoint {

    public static sku = 'report/v1/sku-monthly-report'; // ?month=2021-01&q=bangle
    public static order = 'report/v1/order-wise-report'; // ?from=0&rows=100&from_date=2021-01-02&to_date=2021-01-03
    public static overallMonthly = 'report/v1/overall-monthly-report';
    public static unSettle = 'amazon/v1/skipped_settlements';
    public static settle = 'amazon/v1/settlements';
    public static supplier = 'supplier/v1/'; // for supplier add/edit
    public static product = 'product/v1/'; // for supplier add/edit
    public static purchase = 'purchase/v1'; // for static json
    public static finance = 'finance/v1'; // for finance
}