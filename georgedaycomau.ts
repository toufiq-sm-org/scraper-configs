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
            name: 'georgedaycomau new', 
            postData:
                '{"Area":"Stock","FilterId":"ba2ae24a97","IsSEO":false,"StockFilter":{"WebsiteId":303,"PageNumber":1,"PageSize":1000,"Branch":null,"Cylinders":null,"SoldDay":null,"Sleep":null,"Berth":null,"AuctionId":null,"IsLAMS":null,"DealerNo":null,"State":null,"SearchText":null,"SearchType":"all","StockNumber":null,"Class":null,"ClassNotIn":null,"IsSelectedAllClass":null,"Type":"NEW,DEMO","Keyword":"","KeywordPackage":null,"KeywordLength":null,"KeywordOutboardMotor":null,"KeywordType":null,"KeywordCategory":null,"Seats":null,"IsSelectedAllKeywordPackage":null,"IsSelectedAllKeywordLength":null,"IsSelectedAllKeywordOutboardMotor":null,"IsSelectedAllKeywordType":null,"IsSelectedAllKeywordCategory":null,"IsSelectedAllSeats":null,"Make":null,"MakeNotIn":null,"Model":null,"IsSelectedAllBodies":null,"Body":"1-axle,2-axle,","IsSelectedAllVariant":null,"Variant":",camper,camper-trailer,camper-van,campervan,caravan,hybrid,motorhome,pod,pop-top,poptop","Series":null,"FuelType":null,"Colour":null,"Transmission":null,"TransmissionType":null,"ReleaseStatus":null,"ANCAPSafetyRating":null,"GreenStarRating":null,"CaravanConcept":null,"SortBy":"stock_number","AuctionLoginOption":null,"SaleStatusNotInForSold":"F,,D,P","VehStatus":null,"SoldFilter":{"SoldType":"ALL","SoldTypeEnum":0},"YearFilter":null,"PriceFilter":{"PriceType":null,"PriceTypeEnum":null,"Min":null,"Max":225000,"Step":5000,"Ceil":null,"Floor":null},"PricePerWeekFilter":null,"ATMWeightFilter":{"Min":null,"Max":3500,"Step":1,"Ceil":null,"Floor":null},"BallWeightFilter":{"Min":null,"Max":257,"Step":1,"Ceil":null,"Floor":null},"LengthMetricFilter":{"Min":null,"Max":543,"Step":1,"Ceil":null,"Floor":null},"TareWeightFilter":{"Min":null,"Max":3900,"Step":1,"Ceil":null,"Floor":null},"TowLengthMetricFilter":null,"OdometerFilter":null,"EngineSizeLiter":null,"EngineSizeCCFilter":null,"DoorFilter":null,"SeatFilter":null,"SleepFilter":{"Min":null,"Max":8,"Step":1,"Ceil":null,"Floor":null},"PageSizes":null,"IsCondNewAgeType":null,"LengthFeetFilter":{"Min":0,"Max":1781,"Step":3,"Ceil":null,"Floor":null}},"StockFilterSetup":{"WebsiteId":303,"PageNumber":1,"PageSize":12,"Branch":null,"Cylinders":null,"SoldDay":null,"Sleep":null,"Berth":null,"AuctionId":null,"IsLAMS":null,"DealerNo":null,"State":null,"SearchText":null,"SearchType":"all","StockNumber":null,"Class":null,"ClassNotIn":null,"IsSelectedAllClass":null,"Type":"NEW","Keyword":null,"KeywordPackage":null,"KeywordLength":null,"KeywordOutboardMotor":null,"KeywordType":null,"KeywordCategory":null,"Seats":null,"IsSelectedAllKeywordPackage":null,"IsSelectedAllKeywordLength":null,"IsSelectedAllKeywordOutboardMotor":null,"IsSelectedAllKeywordType":null,"IsSelectedAllKeywordCategory":null,"IsSelectedAllSeats":null,"Make":null,"MakeNotIn":null,"Model":null,"IsSelectedAllBodies":null,"Body":null,"IsSelectedAllVariant":null,"Variant":"CARAVAN,CAMPER TRAILER,CAMPERVAN,POP TOP,POPTOP,POD,CAMPER VAN,MOTORHOME,HYBRID,Camper trailer,CAMPER,22\'-RDSBCAFW-B-GD","Series":null,"FuelType":null,"Colour":null,"Transmission":null,"TransmissionType":null,"ReleaseStatus":null,"ANCAPSafetyRating":null,"GreenStarRating":null,"CaravanConcept":null,"SortBy":"make","AuctionLoginOption":null,"SaleStatusNotInForSold":null,"VehStatus":null,"SoldFilter":{"SoldType":"ALL","SoldTypeEnum":0},"YearFilter":null,"PriceFilter":null,"PricePerWeekFilter":null,"ATMWeightFilter":null,"BallWeightFilter":null,"LengthMetricFilter":null,"TareWeightFilter":null,"TowLengthMetricFilter":null,"OdometerFilter":null,"EngineSizeLiter":null,"EngineSizeCCFilter":null,"DoorFilter":null,"SeatFilter":null,"SleepFilter":null,"PageSizes":null,"IsCondNewAgeType":null},"FilterOptions":{"Make":true,"Model":true,"YearFilter":true,"PriceFilter":true,"Body":true,"VehBody":false,"Variant":true,"Odometer":true,"IsLAMS":true,"Seats":false,"Type":false,"Class":false,"ReleaseStatus":false,"AuctionLoginOption":false,"StockNumber":true,"StockNumberV2":null,"SearchText":false,"Branch":false,"PricePerWeek":false,"EngineSizeCC":true,"KeywordPackage":false,"KeywordLength":false,"KeywordOutboardMotor":false,"KeywordType":false,"KeywordCategory":false,"LoadMore":false},"ViewOption":{"SortByOptions":null,"WSStockSpec":{"MaxDisplayColumn":4,"WSStockSpecColumns":[{"FieldName":"Sleep","Label":"Sleeps","ClassName":"vehicleList-Sleeps","Value":null,"VehClass":null,"VehKWRD":null},{"FieldName":"Tare","Label":"Tare","ClassName":"vehicleList-Tare","Value":null,"VehClass":null,"VehKWRD":null},{"FieldName":"BallWeight","Label":"Ball Weight","ClassName":"vehicleList-Ball","Value":null,"VehClass":null,"VehKWRD":null},{"FieldName":"LengthMetric","Label":"Length","ClassName":"vehicleList-Length","Value":null,"VehClass":null,"VehKWRD":null},{"FieldName":"StockNumber","Label":"Stock#","ClassName":"vehicleList-Stock","Value":null,"VehClass":null,"VehKWRD":null}]},"WSStockFormSearch":{"TextTotalRecords":"vehicle"},"WSStockDetail":{"IsShowCreditOneFinance":false,"CalcRepayHTML":null},"LengthMetricFormat":{"HasMeter":false,"HasFeet":false,"HasInch":false,"FeatUnit":" ft","InchUnit":"\"","MeterUnit":" m"},"IntLengthMetricFormat":{"HasMeter":false,"HasFeet":false,"HasInch":false,"FeatUnit":" ft","InchUnit":"\"","MeterUnit":" m"},"MinHeightMetricFormat":{"HasMeter":false,"HasFeet":false,"HasInch":false,"FeatUnit":" ft","InchUnit":"\"","MeterUnit":" m"},"TowLengthMetricFormat":{"HasMeter":false,"HasFeet":false,"HasInch":false,"FeatUnit":" ft","InchUnit":"\"","MeterUnit":" m"},"IsStockAuction":null,"IsFinanceMandatory":null,"IsShowPricePerWeek":false,"IsShowBiggestSaving":false,"IsShowDownloadDoc":false,"IsShowbtnFloorplan":false,"IsShowWasPrice":true,"IsShowDealerState":false,"IsShowDealerSuburb":false,"IsShowSaleStatus":true,"IsShowDesc":false,"IsShowThumbnail":false,"CondLocationInBacket":null,"TextIconBasket":null,"TextTotalRecord":null,"TemplateVehInfo":null,"ListViewNumber":10,"ListViewExtension":"Index","DetailViewNumber":12,"ThanksViewNumber":null,"FormSearchViewNumber":null,"IsAngularView":true},"Route":{"RoutePrefix":"caravans-in-stock","ActionList":"Index","ActionDetail":"Detail","ActionCheckoutThanks":null,"TemplateUrlList":null,"TemplateUrlDetail":null,"TermAndCondition":null,"IsFilterIdEndPoint":false,"Mode":0},"CalculateRepayment":{"LoanAmount":{"Value":null,"Min":null,"Max":null,"Step":null,"Ceil":null,"Floor":null},"InterestRate":{"Value":null,"Min":null,"Max":null,"Step":null,"Ceil":null,"Floor":null},"Deposit":{"Value":null,"Min":null,"Max":null,"Step":null,"Ceil":null,"Floor":null},"Residual":{"Value":null,"Min":null,"Max":null,"Step":null,"Ceil":null,"Floor":null},"LoanLengthOrPeriod":{"Value":null,"Min":null,"Max":null,"Step":null,"Ceil":null,"Floor":null},"LoanTerm":{"Value":null,"Min":null,"Max":null,"Step":null,"Ceil":null,"Floor":null},"IsCheckWithVehType":false,"FinanceFees":null,"IsShow":null}}',
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
            name: 'georgedaycomau used',
            postData:
                '{"Area":"Stock","FilterId":"3834e1fc83","IsSEO":false,"StockFilter":{"WebsiteId":303,"PageNumber":1,"PageSize":1000,"Branch":null,"Cylinders":null,"SoldDay":null,"Sleep":null,"Berth":null,"AuctionId":null,"IsLAMS":null,"DealerNo":null,"State":null,"SearchText":null,"SearchType":"all","StockNumber":null,"Class":null,"ClassNotIn":null,"IsSelectedAllClass":null,"Type":"USED","Keyword":"","KeywordPackage":null,"KeywordLength":null,"KeywordOutboardMotor":null,"KeywordType":null,"KeywordCategory":null,"Seats":null,"IsSelectedAllKeywordPackage":null,"IsSelectedAllKeywordLength":null,"IsSelectedAllKeywordOutboardMotor":null,"IsSelectedAllKeywordType":null,"IsSelectedAllKeywordCategory":null,"IsSelectedAllSeats":null,"Make":null,"MakeNotIn":null,"Model":null,"IsSelectedAllBodies":null,"Body":"1-axle,2-axle,","IsSelectedAllVariant":null,"Variant":",camper,camper-trailer,camper-van,caravan,motorhome","Series":null,"FuelType":null,"Colour":null,"Transmission":null,"TransmissionType":null,"ReleaseStatus":null,"ANCAPSafetyRating":null,"GreenStarRating":null,"CaravanConcept":null,"SortBy":"stock_number","AuctionLoginOption":null,"SaleStatusNotInForSold":"F,,D,P","VehStatus":null,"SoldFilter":{"SoldType":"ALL","SoldTypeEnum":0},"YearFilter":null,"PriceFilter":{"PriceType":null,"PriceTypeEnum":null,"Min":null,"Max":145000,"Step":5000,"Ceil":null,"Floor":null},"PricePerWeekFilter":null,"ATMWeightFilter":{"Min":null,"Max":3500,"Step":1,"Ceil":null,"Floor":null},"BallWeightFilter":{"Min":null,"Max":0,"Step":1,"Ceil":null,"Floor":null},"LengthMetricFilter":{"Min":null,"Max":1,"Step":1,"Ceil":null,"Floor":null},"TareWeightFilter":{"Min":null,"Max":3581,"Step":1,"Ceil":null,"Floor":null},"TowLengthMetricFilter":null,"OdometerFilter":null,"EngineSizeLiter":null,"EngineSizeCCFilter":null,"DoorFilter":null,"SeatFilter":null,"SleepFilter":{"Min":null,"Max":8,"Step":1,"Ceil":null,"Floor":null},"PageSizes":null,"IsCondNewAgeType":null,"LengthFeetFilter":{"Min":0,"Max":3,"Step":3,"Ceil":null,"Floor":null}},"StockFilterSetup":{"WebsiteId":303,"PageNumber":1,"PageSize":12,"Branch":null,"Cylinders":null,"SoldDay":null,"Sleep":null,"Berth":null,"AuctionId":null,"IsLAMS":null,"DealerNo":null,"State":null,"SearchText":null,"SearchType":"all","StockNumber":null,"Class":null,"ClassNotIn":null,"IsSelectedAllClass":null,"Type":"USED","Keyword":null,"KeywordPackage":null,"KeywordLength":null,"KeywordOutboardMotor":null,"KeywordType":null,"KeywordCategory":null,"Seats":null,"IsSelectedAllKeywordPackage":null,"IsSelectedAllKeywordLength":null,"IsSelectedAllKeywordOutboardMotor":null,"IsSelectedAllKeywordType":null,"IsSelectedAllKeywordCategory":null,"IsSelectedAllSeats":null,"Make":null,"MakeNotIn":null,"Model":null,"IsSelectedAllBodies":null,"Body":null,"IsSelectedAllVariant":null,"Variant":"CARAVAN,CAMPER TRAILER,CAMPERVAN,POP TOP,POPTOP,POD,CAMPER VAN,MOTORHOME,HYBRID,Camper trailer,CAMPER,22\'-RDSBCAFW-B-GD","Series":null,"FuelType":null,"Colour":null,"Transmission":null,"TransmissionType":null,"ReleaseStatus":null,"ANCAPSafetyRating":null,"GreenStarRating":null,"CaravanConcept":null,"SortBy":"make","AuctionLoginOption":null,"SaleStatusNotInForSold":null,"VehStatus":null,"SoldFilter":{"SoldType":"ALL","SoldTypeEnum":0},"YearFilter":null,"PriceFilter":null,"PricePerWeekFilter":null,"ATMWeightFilter":null,"BallWeightFilter":null,"LengthMetricFilter":null,"TareWeightFilter":null,"TowLengthMetricFilter":null,"OdometerFilter":null,"EngineSizeLiter":null,"EngineSizeCCFilter":null,"DoorFilter":null,"SeatFilter":null,"SleepFilter":null,"PageSizes":null,"IsCondNewAgeType":null},"FilterOptions":{"Make":true,"Model":true,"YearFilter":true,"PriceFilter":true,"Body":true,"VehBody":false,"Variant":true,"Odometer":true,"IsLAMS":true,"Seats":false,"Type":false,"Class":false,"ReleaseStatus":false,"AuctionLoginOption":false,"StockNumber":true,"StockNumberV2":null,"SearchText":false,"Branch":false,"PricePerWeek":false,"EngineSizeCC":true,"KeywordPackage":false,"KeywordLength":false,"KeywordOutboardMotor":false,"KeywordType":false,"KeywordCategory":false,"LoadMore":false},"ViewOption":{"SortByOptions":null,"WSStockSpec":{"MaxDisplayColumn":4,"WSStockSpecColumns":[{"FieldName":"Sleep","Label":"Sleeps","ClassName":"vehicleList-Sleeps","Value":null,"VehClass":null,"VehKWRD":null},{"FieldName":"Tare","Label":"Tare","ClassName":"vehicleList-Tare","Value":null,"VehClass":null,"VehKWRD":null},{"FieldName":"BallWeight","Label":"Ball Weight","ClassName":"vehicleList-Ball","Value":null,"VehClass":null,"VehKWRD":null},{"FieldName":"LengthMetric","Label":"Length","ClassName":"vehicleList-Length","Value":null,"VehClass":null,"VehKWRD":null},{"FieldName":"StockNumber","Label":"Stock#","ClassName":"vehicleList-Stock","Value":null,"VehClass":null,"VehKWRD":null}]},"WSStockFormSearch":{"TextTotalRecords":"vehicle"},"WSStockDetail":{"IsShowCreditOneFinance":false,"CalcRepayHTML":null},"LengthMetricFormat":{"HasMeter":false,"HasFeet":false,"HasInch":false,"FeatUnit":" ft","InchUnit":"\"","MeterUnit":" m"},"IntLengthMetricFormat":{"HasMeter":false,"HasFeet":false,"HasInch":false,"FeatUnit":" ft","InchUnit":"\"","MeterUnit":" m"},"MinHeightMetricFormat":{"HasMeter":false,"HasFeet":false,"HasInch":false,"FeatUnit":" ft","InchUnit":"\"","MeterUnit":" m"},"TowLengthMetricFormat":{"HasMeter":false,"HasFeet":false,"HasInch":false,"FeatUnit":" ft","InchUnit":"\"","MeterUnit":" m"},"IsStockAuction":null,"IsFinanceMandatory":null,"IsShowPricePerWeek":false,"IsShowBiggestSaving":false,"IsShowDownloadDoc":false,"IsShowbtnFloorplan":false,"IsShowWasPrice":true,"IsShowDealerState":false,"IsShowDealerSuburb":false,"IsShowSaleStatus":true,"IsShowDesc":false,"IsShowThumbnail":false,"CondLocationInBacket":null,"TextIconBasket":null,"TextTotalRecord":null,"TemplateVehInfo":null,"ListViewNumber":10,"ListViewExtension":"Index","DetailViewNumber":12,"ThanksViewNumber":null,"FormSearchViewNumber":null,"IsAngularView":true},"Route":{"RoutePrefix":"caravans-in-stock","ActionList":"Index","ActionDetail":"Detail","ActionCheckoutThanks":null,"TemplateUrlList":null,"TemplateUrlDetail":null,"TermAndCondition":null,"IsFilterIdEndPoint":false,"Mode":0},"CalculateRepayment":{"LoanAmount":{"Value":null,"Min":null,"Max":null,"Step":null,"Ceil":null,"Floor":null},"InterestRate":{"Value":null,"Min":null,"Max":null,"Step":null,"Ceil":null,"Floor":null},"Deposit":{"Value":null,"Min":null,"Max":null,"Step":null,"Ceil":null,"Floor":null},"Residual":{"Value":null,"Min":null,"Max":null,"Step":null,"Ceil":null,"Floor":null},"LoanLengthOrPeriod":{"Value":null,"Min":null,"Max":null,"Step":null,"Ceil":null,"Floor":null},"LoanTerm":{"Value":null,"Min":null,"Max":null,"Step":null,"Ceil":null,"Floor":null},"IsCheckWithVehType":false,"FinanceFees":null,"IsShow":null}}',
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
            name: 'georgedaycomau',
            postData: null,
            proxyConfig: 'default',
            referrer: null,
            retryCount: 2,
            retryInterval: 120,
            useProxy: true,
        },
    ],
    config: {
        name: 'georgedaycomau',
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
                url: 'https://www.georgeday.com.au/Stock/WSStockAngular/GetStockList',
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
                url: 'https://www.georgeday.com.au/Stock/WSStockAngular/GetStockList',
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
                        value: 'https://www.georgeday.com.au/',
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
                type: Field_Type.MSRP,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.JSON_PATH,
                        pageType: PageType.LIST,
                        order: 1,
                        value: '$.DriveawayPrice',
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
