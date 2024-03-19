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
            method: RequestSetting_Method.GET,
            name: 'bannisters',
            postData: null,
            proxyConfig: 'default',
            referrer: null,
            retryCount: 2,
            retryInterval: 120,
            useProxy: true,
        },
    ],
    config: {
        name: 'bannisters',
        active: true,
        organization: {
            id: 2,
        },
        entryPoints: [
            {
                active: true,
                initRequestSetting: null,
                pdpRequestSetting: null,
                requestSetting: {
                    id: 1,
                },
                runInterval: {
                    id: 1,
                },
                url: 'https://www.bannistergmvernon.com/new/',
                requiredParams: null,
                type: EntryPoint_Type.HTML,
                productType: ProductType.CAR,
            },   
            {
                active: true,
                initRequestSetting: null,
                pdpRequestSetting: null,
                requestSetting: {
                    id: 1,
                },
                runInterval: {
                    id: 1,
                },
                url: 'https://www.bannistergmvernon.com/used/da/Bannister+Chevrolet+Buick+GMC+Vernon+Inc.%7CBannister+Chevrolet+Buick+GMC+Vernon+Inc',
                requiredParams: null,
                type: EntryPoint_Type.HTML,
                productType: ProductType.CAR,
            },   
            {
                active: true,
                initRequestSetting: null,
                pdpRequestSetting: null,
                requestSetting: {
                    id: 1,
                },
                runInterval: {
                    id: 1,
                },
                url: 'https://www.bannistergmvernon.com/used/segment/certified/dealer/Bannister+Chevrolet+Buick+GMC+Vernon+Inc.',
                requiredParams: null,
                type: EntryPoint_Type.HTML,
                productType: ProductType.CAR,
            },   
        ],
        fields: [
            {
                type: Field_Type.SPLITTER,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.SPLIT,
                        pageType: PageType.LIST,
                        order: 1,
                        value: 'itemprop="ItemOffered"', 
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.URL,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.REGEX,
                        pageType: PageType.LIST,
                        order: 1,
                        value: 'href="(?<url>[^"]+)"><span\\s*style=\\\'',
                        active: true,
                    },
                    {
                        type: Extractor_Type.PREPEND_STRING,
                        pageType: PageType.LIST,
                        order: 2,
                        value: 'https://www.bannistergmvernon.com',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.NEXT_PAGE,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.REGEX,
                        pageType: PageType.LIST,
                        order: 1,
                        value: 'rel="next"\\shref="(?<next_page>[^"]+)"',
                        active: true,
                    },
                    {
                        type: Extractor_Type.PREPEND_STRING,
                        pageType: PageType.LIST,
                        order: 2,
                        value: 'https://www.bannistergmvernon.com',
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
                        value: "year:\\s*'(?<year>[^']+)",
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.MAKE,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.REGEX,
                        pageType: PageType.PDP,
                        order: 1,
                        value: "make:\\s*'(?<make>[^']+)",
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.MODEL,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.REGEX,
                        pageType: PageType.PDP,
                        order: 1,
                        value: "model:\\s*'(?<model>[^']+)",
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.ODOMETER,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.REGEX,
                        pageType: PageType.LIST,
                        order: 1,
                        value: 'itemprop="mileageFromOdometer"[^>]*>(?<kilometres>[^\\s*]+)',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.STOCK_NUMBER,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.REGEX,
                        pageType: PageType.LIST,
                        order: 1,
                        value: 'itemprop="sku">(?<stock_number>[^<]+)',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.ENGINE_DESCRIPTION,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.REGEX,
                        pageType: PageType.LIST,
                        order: 1,
                        value: 'itemprop="vehicleEngine">(?<engine_description>[^<]+)',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.BODY_STYLE,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.REGEX,
                        pageType: PageType.PDP,
                        order: 1,
                        value: 'itemprop="bodyType">(?<body_style>[^\\<]+)',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.TRANSMISSION,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.REGEX,
                        pageType: PageType.LIST,
                        order: 1,
                        value: 'itemprop="vehicleTransmission">(?<transmission>[^<]+)',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.EXTERIOR_COLOR,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.REGEX,
                        pageType: PageType.LIST,
                        order: 1,
                        value: 'itemprop="color"\\s>(?<exterior_color>[^<]+)',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.TRIM,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.REGEX,
                        pageType: PageType.PDP,
                        order: 1,
                        value: '\\&trim=(?<trim>[^\\&]+)',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.DESCRIPTION,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.REGEX,
                        pageType: PageType.PDP,
                        order: 1,
                        value: '<meta name="description" content="(?<description>[^"]+)',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.PRICE,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.REGEX,
                        pageType: PageType.LIST,
                        order: 1,
                        value: '<span itemprop="price"[^>]+>(?<price>[^\\<]+)',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.VIN,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.REGEX,
                        pageType: PageType.LIST,
                        order: 1,
                        value: 'id\\="vin\\-(?<vin>[^"]+)',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.FUEL_TYPE,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.REGEX,
                        pageType: PageType.PDP,
                        order: 1,
                        value: 'itemprop="fuelType">(?<fuel_type>[^<]+)',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.IMAGES,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.REGEX,
                        pageType: PageType.PDP,
                        order: 1,
                        value: 'imgError\\(this\\)\\;"\\s*(?:src|data-src)="(?<images>[^"]+)',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.STOCK_TYPE,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.REGEX,
                        pageType: PageType.PDP,
                        order: 1,
                        value: "detail condition', '(?<stock_type>[^']+)",
                        active: true,
                    },
                    {
                        type: Extractor_Type.CHANGE_CASE,
                        pageType: PageType.PDP,
                        order: 2, 
                        value: 'lower',
                        active: true,
                    },
                ],
            },
        ],
    },
};
