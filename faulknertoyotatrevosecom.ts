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
            name: 'faulknertoyotatrevosecom',
            postData: null,
            proxyConfig: 'default',
            referrer: null,
            retryCount: 2,
            retryInterval: 120,
            useProxy: true,
        },
    ],
    config: {
        name: 'faulknertoyotatrevosecom',
        active: true,
        organization: {
            id: 18,
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
                url: 'https://www.faulknertoyotatrevose.com/resrc/xmlsitemap/sitemap-inventory-search',
                requiredParams: null,
                productType: ProductType.CAR,
                type: EntryPoint_Type.SITE_MAP,
                sitemapPdpUrlValidator: '\\/auto\\/(?:new|used)',
            },
        ],
        fields: [
            {
                type: Field_Type.STOCK_TYPE,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.REGEX,
                        pageType: PageType.PDP,
                        order: 1,
                        value: 'tp=(?<stock_type>[^\\&]+)&yr',
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
                        value: "vehicle_title_h1'>(?<stock_type>[^\\s*]+)\\s*(?<year>[^\\s*]+)\\s*(?<make>[^\\s*]+)\\s*(?<model>[^\\s*]+)\\s*(?<trim>[^\\s*]+)",
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
                        value: "vehicle_title_h1'>(?<stock_type>[^\\s*]+)\\s*(?<year>[^\\s*]+)\\s*(?<make>[^\\s*]+)\\s*(?<model>[^\\s*]+)\\s*(?<trim>[^\\s*]+)",
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
                        value: "vehicle_title_h1'>(?<stock_type>[^\\s*]+)\\s*(?<year>[^\\s*]+)\\s*(?<make>[^\\s*]+)\\s*(?<model>[^\\s*]+)\\s*(?<trim>[^\\s*]+)",
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
                        pageType: PageType.PDP,
                        order: 1,
                        value: 'Retail Price[^>]+>[^>]+>(?<price>[^<]+)',
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
                        pageType: PageType.PDP,
                        order: 1,
                        value: 'Mileage[^>]+>[^>]+>(?<odometer>[^<]+)',
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
                        pageType: PageType.PDP,
                        order: 1,
                        value: '"vehicle_stock":\\["(?<stock_number>[^"]+)',
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
                        pageType: PageType.PDP,
                        order: 1,
                        value: '"vehicle_vin":\\["(?<vin>[^"]+)',
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
                        value: "vehicle_title_h1'>(?<stock_type>[^\\s*]+)\\s*(?<year>[^\\s*]+)\\s*(?<make>[^\\s*]+)\\s*(?<model>[^\\s*]+)\\s*(?<trim>[^\\s*]+)",
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.INTERIOR_COLOR,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.REGEX,
                        pageType: PageType.PDP,
                        order: 1,
                        value: 'Interior Color[^>]+>[^>]+>(?<interior_color>[^<]+)<\\/div',
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
                        pageType: PageType.PDP,
                        order: 1,
                        value: 'Exterior Color[^>]+>[^>]+>(?<exterior_color>[^<]+)<\\/div',
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
                        value: 'data-src="(?<images>[^"]+)',
                        active: true,
                    },
                ],
            },
        ],
    },
};
