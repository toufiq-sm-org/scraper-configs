import {
    CreatePluginRequestDto,
    CreateRequestSettingRequestDto,
    CreateScraperConfigRequestDto,
} from '@smedia/shared/api/data-access/dto/scraper';
import { RequestSetting_Method } from '@smedia/shared/api/data-access/proto-ts/scraper/request_setting_messages';
import {
    EntryPoint_Type,
    Extractor_Type,
    Field_Type,
    PageType,
    ProductType,
} from '@smedia/shared/api/data-access/proto-ts/scraper/scraper_definition';

export const data: {
    plugins: CreatePluginRequestDto[];
    request: CreateRequestSettingRequestDto[];
    config: CreateScraperConfigRequestDto;
} = {
    plugins: [],
    request: [
        {
            active: true,
            additionalHeader: [],
            contentType: null,
            method: RequestSetting_Method.POST,
            name: 'kratzmanncomau new', 
            postData:
                '{"Area":"Stock","FilterId":"eb9a19eb9a","IsSEO":false,"StockFilter":{"WebsiteId":250,"PageNumber":1,"PageSize":200,"Branch":null,"Cylinders":null,"SoldDay":null,"Sleep":null,"Berth":null,"AuctionId":null,"IsLAMS":null,"IsSelectedAllVariant":null,"DealerNo":null,"State":null,"SearchText":null,"SearchType":"veh_title_desc_sn","StockNumber":null,"Class":null,"Type":null,"Keyword":"","Make":null,"Model":null,"Body":"1-axle,2-axle,","Variant":",camper,camper-trailer,caravan,motorhome,pop-top","Series":null,"FuelType":null,"Colour":null,"Transmission":null,"TransmissionType":null,"ReleaseStatus":null,"ANCAPSafetyRating":null,"GreenStarRating":null,"CaravanConcept":null,"SortBy":"stock_number","AuctionLoginOption":null,"SoldFilter":null,"YearFilter":null,"PriceFilter":{"PriceType":null,"PriceTypeEnum":null,"Min":0,"Max":165000,"Step":5000,"Ceil":null,"Floor":null},"PricePerWeekFilter":null,"ATMWeightFilter":{"Min":0,"Max":3500,"Step":1,"Ceil":null,"Floor":null},"BallWeightFilter":{"Min":0,"Max":248,"Step":1,"Ceil":null,"Floor":null},"LengthMetricFilter":{"Min":0,"Max":1,"Step":1,"Ceil":null,"Floor":null},"TareWeightFilter":{"Min":0,"Max":3760,"Step":1,"Ceil":null,"Floor":null},"TowLengthMetricFilter":null,"OdometerFilter":null,"EngineSizeLiter":null,"EngineSizeCCFilter":null,"DoorFilter":null,"SeatFilter":null,"SleepFilter":{"Min":0,"Max":0,"Step":1,"Ceil":null,"Floor":null},"PageSizes":null,"LengthFeetFilter":{"Min":0,"Max":3,"Step":3,"Ceil":null,"Floor":null}},"StockFilterSetup":{"WebsiteId":250,"PageNumber":1,"PageSize":100,"Branch":null,"Cylinders":null,"SoldDay":null,"Sleep":null,"Berth":null,"AuctionId":null,"IsLAMS":null,"IsSelectedAllVariant":null,"DealerNo":null,"State":null,"SearchText":null,"SearchType":"all","StockNumber":null,"Class":null,"Type":null,"Keyword":null,"Make":null,"Model":null,"Body":null,"Variant":"CARAVAN,CAMPER,CAMPER TRAILER,MOTORHOMES,MOTORHOME,POPTOP,POP TOP,B-CLASS,CLASS B,499","Series":null,"FuelType":null,"Colour":null,"Transmission":null,"TransmissionType":null,"ReleaseStatus":null,"ANCAPSafetyRating":null,"GreenStarRating":null,"CaravanConcept":null,"SortBy":"make","AuctionLoginOption":null,"SoldFilter":null,"YearFilter":null,"PriceFilter":null,"PricePerWeekFilter":null,"ATMWeightFilter":null,"BallWeightFilter":null,"LengthMetricFilter":null,"TareWeightFilter":null,"TowLengthMetricFilter":null,"OdometerFilter":null,"EngineSizeLiter":null,"EngineSizeCCFilter":null,"DoorFilter":null,"SeatFilter":null,"SleepFilter":null,"PageSizes":null},"FilterOptions":{"Make":true,"Model":true,"YearFilter":true,"PriceFilter":true,"Body":true,"Variant":true,"Type":false,"Class":false,"ReleaseStatus":false,"AuctionLoginOption":false,"StockNumber":true,"SearchText":false,"Branch":false,"PricePerWeek":false,"EngineSizeCC":true},"ViewOption":{"WSStockSpec":{"MaxDisplayColumn":4,"WSStockSpecColumns":[{"FieldName":"Sleep","Label":"Sleeps","ClassName":"vehicleList-Sleeps","Value":null},{"FieldName":"Tare","Label":"Tare","ClassName":"vehicleList-Tare","Value":null},{"FieldName":"BallWeight","Label":"Ball Weight","ClassName":"vehicleList-Ball","Value":null},{"FieldName":"LengthMetric","Label":"Length","ClassName":"vehicleList-Length","Value":null},{"FieldName":"StockNumber","Label":"Stock#","ClassName":"vehicleList-Stock","Value":null}]},"WSStockFormSearch":{"TextTotalRecords":"vehicle"},"WSStockDetail":{"IsShowCreditOneFinance":false,"CalcRepayHTML":null},"LengthMetricFormat":{"HasMeter":false,"HasFeet":false,"HasInch":false,"FeatUnit":" ft","InchUnit":"\"","MeterUnit":" m"},"IntLengthMetricFormat":{"HasMeter":false,"HasFeet":false,"HasInch":false,"FeatUnit":" ft","InchUnit":"\"","MeterUnit":" m"},"MinHeightMetricFormat":{"HasMeter":false,"HasFeet":false,"HasInch":false,"FeatUnit":" ft","InchUnit":"\"","MeterUnit":" m"},"TowLengthMetricFormat":{"HasMeter":false,"HasFeet":false,"HasInch":false,"FeatUnit":" ft","InchUnit":"\"","MeterUnit":" m"},"IsStockAuction":null,"IsShowPricePerWeek":false,"IsShowBiggestSaving":false,"IsShowDownloadDoc":true,"IsShowbtnFloorplan":true,"IsShowWasPrice":false,"IsShowDealerState":false,"IsShowDealerSuburb":false,"IsShowSaleStatus":false,"CondLocationInBacket":null,"TextIconBasket":null,"ListViewNumber":12,"ListViewExtension":"Index","DetailViewNumber":12,"ThanksViewNumber":null,"FormSearchViewNumber":null,"IsAngularView":true},"Route":{"RoutePrefix":"caravans-in-stock","ActionList":"Index","ActionDetail":"Detail","ActionCheckoutThanks":null,"TemplateUrlList":null,"TemplateUrlDetail":null,"TermAndCondition":null,"IsFilterIdEndPoint":false,"Mode":0},"CalculateRepayment":{"LoanAmount":{"Value":null,"Min":null,"Max":null,"Step":null,"Ceil":null,"Floor":null},"InterestRate":{"Value":null,"Min":null,"Max":null,"Step":null,"Ceil":null,"Floor":null},"Deposit":{"Value":null,"Min":null,"Max":null,"Step":null,"Ceil":null,"Floor":null},"Residual":{"Value":null,"Min":null,"Max":null,"Step":null,"Ceil":null,"Floor":null},"LoanLengthOrPeriod":{"Value":null,"Min":null,"Max":null,"Step":null,"Ceil":null,"Floor":null},"LoanTerm":{"Value":null,"Min":null,"Max":null,"Step":null,"Ceil":null,"Floor":null},"IsCheckWithVehType":false,"FinanceFees":null}}',
            proxyConfig: 'default',
            referrer: null,
            retryCount: 2,
            retryInterval: 120,
            useProxy: true,
        },
        {
            active: true,
            additionalHeader: [],
            contentType: null,
            method: RequestSetting_Method.POST,
            name: 'kratzmanncomau used',
            postData:
                '{"Area":"Stock","FilterId":"eb9a19eb9a","IsSEO":false,"StockFilter":{"WebsiteId":250,"PageNumber":1,"PageSize":150,"Branch":null,"Cylinders":null,"SoldDay":null,"Sleep":null,"Berth":null,"AuctionId":null,"IsLAMS":null,"IsSelectedAllVariant":null,"DealerNo":null,"State":null,"SearchText":null,"SearchType":"veh_title_desc_sn","StockNumber":null,"Class":null,"Type":"USED","Keyword":"","Make":null,"Model":null,"Body":"1-axle,2-axle,","Variant":",camper,camper-trailer,caravan,motorhome","Series":null,"FuelType":null,"Colour":null,"Transmission":null,"TransmissionType":null,"ReleaseStatus":null,"ANCAPSafetyRating":null,"GreenStarRating":null,"CaravanConcept":null,"SortBy":"stock_number","AuctionLoginOption":null,"SoldFilter":null,"YearFilter":null,"PriceFilter":{"PriceType":null,"PriceTypeEnum":null,"Min":0,"Max":165000,"Step":5000,"Ceil":null,"Floor":null},"PricePerWeekFilter":null,"ATMWeightFilter":{"Min":0,"Max":3500,"Step":1,"Ceil":null,"Floor":null},"BallWeightFilter":{"Min":0,"Max":248,"Step":1,"Ceil":null,"Floor":null},"LengthMetricFilter":{"Min":0,"Max":1,"Step":1,"Ceil":null,"Floor":null},"TareWeightFilter":{"Min":0,"Max":3760,"Step":1,"Ceil":null,"Floor":null},"TowLengthMetricFilter":null,"OdometerFilter":null,"EngineSizeLiter":null,"EngineSizeCCFilter":null,"DoorFilter":null,"SeatFilter":null,"SleepFilter":{"Min":0,"Max":0,"Step":1,"Ceil":null,"Floor":null},"PageSizes":null,"LengthFeetFilter":{"Min":0,"Max":3,"Step":3,"Ceil":null,"Floor":null}},"StockFilterSetup":{"WebsiteId":250,"PageNumber":1,"PageSize":100,"Branch":null,"Cylinders":null,"SoldDay":null,"Sleep":null,"Berth":null,"AuctionId":null,"IsLAMS":null,"IsSelectedAllVariant":null,"DealerNo":null,"State":null,"SearchText":null,"SearchType":"all","StockNumber":null,"Class":null,"Type":null,"Keyword":null,"Make":null,"Model":null,"Body":null,"Variant":"CARAVAN,CAMPER,CAMPER TRAILER,MOTORHOMES,MOTORHOME,POPTOP,POP TOP,B-CLASS,CLASS B,499","Series":null,"FuelType":null,"Colour":null,"Transmission":null,"TransmissionType":null,"ReleaseStatus":null,"ANCAPSafetyRating":null,"GreenStarRating":null,"CaravanConcept":null,"SortBy":"make","AuctionLoginOption":null,"SoldFilter":null,"YearFilter":null,"PriceFilter":null,"PricePerWeekFilter":null,"ATMWeightFilter":null,"BallWeightFilter":null,"LengthMetricFilter":null,"TareWeightFilter":null,"TowLengthMetricFilter":null,"OdometerFilter":null,"EngineSizeLiter":null,"EngineSizeCCFilter":null,"DoorFilter":null,"SeatFilter":null,"SleepFilter":null,"PageSizes":null},"FilterOptions":{"Make":true,"Model":true,"YearFilter":true,"PriceFilter":true,"Body":true,"Variant":true,"Type":false,"Class":false,"ReleaseStatus":false,"AuctionLoginOption":false,"StockNumber":true,"SearchText":false,"Branch":false,"PricePerWeek":false,"EngineSizeCC":true},"ViewOption":{"WSStockSpec":{"MaxDisplayColumn":4,"WSStockSpecColumns":[{"FieldName":"Sleep","Label":"Sleeps","ClassName":"vehicleList-Sleeps","Value":null},{"FieldName":"Tare","Label":"Tare","ClassName":"vehicleList-Tare","Value":null},{"FieldName":"BallWeight","Label":"Ball Weight","ClassName":"vehicleList-Ball","Value":null},{"FieldName":"LengthMetric","Label":"Length","ClassName":"vehicleList-Length","Value":null},{"FieldName":"StockNumber","Label":"Stock#","ClassName":"vehicleList-Stock","Value":null}]},"WSStockFormSearch":{"TextTotalRecords":"vehicle"},"WSStockDetail":{"IsShowCreditOneFinance":false,"CalcRepayHTML":null},"LengthMetricFormat":{"HasMeter":false,"HasFeet":false,"HasInch":false,"FeatUnit":" ft","InchUnit":"\"","MeterUnit":" m"},"IntLengthMetricFormat":{"HasMeter":false,"HasFeet":false,"HasInch":false,"FeatUnit":" ft","InchUnit":"\"","MeterUnit":" m"},"MinHeightMetricFormat":{"HasMeter":false,"HasFeet":false,"HasInch":false,"FeatUnit":" ft","InchUnit":"\"","MeterUnit":" m"},"TowLengthMetricFormat":{"HasMeter":false,"HasFeet":false,"HasInch":false,"FeatUnit":" ft","InchUnit":"\"","MeterUnit":" m"},"IsStockAuction":null,"IsShowPricePerWeek":false,"IsShowBiggestSaving":false,"IsShowDownloadDoc":true,"IsShowbtnFloorplan":true,"IsShowWasPrice":false,"IsShowDealerState":false,"IsShowDealerSuburb":false,"IsShowSaleStatus":false,"CondLocationInBacket":null,"TextIconBasket":null,"ListViewNumber":12,"ListViewExtension":"Index","DetailViewNumber":12,"ThanksViewNumber":null,"FormSearchViewNumber":null,"IsAngularView":true},"Route":{"RoutePrefix":"caravans-in-stock","ActionList":"Index","ActionDetail":"Detail","ActionCheckoutThanks":null,"TemplateUrlList":null,"TemplateUrlDetail":null,"TermAndCondition":null,"IsFilterIdEndPoint":false,"Mode":0},"CalculateRepayment":{"LoanAmount":{"Value":null,"Min":null,"Max":null,"Step":null,"Ceil":null,"Floor":null},"InterestRate":{"Value":null,"Min":null,"Max":null,"Step":null,"Ceil":null,"Floor":null},"Deposit":{"Value":null,"Min":null,"Max":null,"Step":null,"Ceil":null,"Floor":null},"Residual":{"Value":null,"Min":null,"Max":null,"Step":null,"Ceil":null,"Floor":null},"LoanLengthOrPeriod":{"Value":null,"Min":null,"Max":null,"Step":null,"Ceil":null,"Floor":null},"LoanTerm":{"Value":null,"Min":null,"Max":null,"Step":null,"Ceil":null,"Floor":null},"IsCheckWithVehType":false,"FinanceFees":null}}',
            proxyConfig: 'default',
            referrer: null,
            retryCount: 2,
            retryInterval: 120,
            useProxy: true,
        },
        {
            active: true,
            additionalHeader: [],
            contentType: null,
            method: RequestSetting_Method.GET,
            name: 'kratzmanncomau',
            postData: null,
            proxyConfig: 'default',
            referrer: null,
            retryCount: 2,
            retryInterval: 120,
            useProxy: true,
        },
    ],
    config: {
        name: 'kratzmanncomau',
        active: true,
        organization: {
            id: 4,
        },
        entryPoints: [
            {
                active: true,
                initRequestSetting: null,
                pdpRequestSetting: { id: 3 },
                requestSetting: {
                    id: 1,
                },
                runInterval: {
                    id: 1,
                },
                url: 'https://www.kratzmann.com.au/Stock/WSStockAngular/GetStockList',
                requiredParams: null,
                productType: ProductType.CAR,
                type: EntryPoint_Type.JSON,
            },
            {
                active: true,
                initRequestSetting: null,
                pdpRequestSetting: { id: 3 },
                requestSetting: {
                    id: 2,
                },
                runInterval: { 
                    id: 1,
                },
                url: 'https://www.kratzmann.com.au/Stock/WSStockAngular/GetStockList',
                requiredParams: null,
                productType: ProductType.CAR,
                type: EntryPoint_Type.JSON,
            },
        ],
        fields: [
            {
                type: Field_Type.JSON_START,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.JSON_PATH,
                        pageType: PageType.LIST,
                        order: 1,
                        value: '$.StockList',
                        active: true,
                    },
                ],
            }, 
            {
                type: Field_Type.URL,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.JSON_PATH,
                        pageType: PageType.LIST,
                        order: 1,
                        value: '$.UrlDetail',
                        active: true,
                    },
                    {
                        type: Extractor_Type.PREPEND_STRING,
                        pageType: PageType.LIST,
                        order: 2,
                        value: 'https://www.kratzmann.com.au/',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.STOCK_NUMBER,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.JSON_PATH,
                        pageType: PageType.LIST,
                        order: 1,
                        value: '$.StockNumber',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.VIN,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.JSON_PATH,
                        pageType: PageType.LIST,
                        order: 1,
                        value: '$.VIN',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.YEAR,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.JSON_PATH,
                        pageType: PageType.LIST,
                        order: 1,
                        value: '$.ModelYear',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.MAKE,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.JSON_PATH,
                        pageType: PageType.LIST,
                        order: 1,
                        value: '$.Make',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.MODEL,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.JSON_PATH,
                        pageType: PageType.LIST,
                        order: 1,
                        value: '$.Model',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.TRIM,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.JSON_PATH,
                        pageType: PageType.LIST,
                        order: 1,
                        value: '$.Series',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.BODY_STYLE,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.JSON_PATH,
                        pageType: PageType.LIST,
                        order: 1,
                        value: '$.Variant',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.PRICE,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.JSON_PATH,
                        pageType: PageType.LIST,
                        order: 1,
                        value: '$.AskingPrice',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.IMAGES,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.JSON_PATH,
                        pageType: PageType.LIST,
                        order: 1,
                        value: '$.StockImages',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.TITLE,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.JSON_PATH,
                        pageType: PageType.LIST,
                        order: 1,
                        value: '$.VehicleInfo',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.STOCK_TYPE,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.JSON_PATH,
                        pageType: PageType.LIST,
                        order: 1,
                        value: '$.Type',
                        active: true,
                    },
                    {
                        type: Extractor_Type.CHANGE_CASE,
                        pageType: PageType.LIST,
                        order: 1,
                        value: 'lower',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.YEAR,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.REGEX,
                        pageType: PageType.PDP,
                        order: 1,
                        value: 'class="veh-year"[^>]+>[^>]+>Year[^>]+>[^>]+>[^>]+>(?<year>[^<]+)',
                        active: true,
                    },
                ],
            },
        ],
    },
};
