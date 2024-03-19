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
            name: 'carefreervca',
            postData: null,
            proxyConfig: 'default',
            referrer: null,
            retryCount: 2,
            retryInterval: 120,
            useProxy: true,
        },
    ],
    config: {
        name: 'carefreervca',
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
                url: 'https://www.carefreerv.ca/sitemap.xml',
                requiredParams: null,
                productType: ProductType.RV,
                type: EntryPoint_Type.SITE_MAP,
                sitemapPdpUrlValidator: '\\/product\\/(?:new|used)-',
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
                        value: '<meta property="og:title" content="(?<title>(?<stock_type>[^\\s*]+) *(?<year>[^\\s*<]+) *(?<make>[^\\s*<]+) *(?<model>[^\\s*<]+) *(?<trim>[^\\s*<]+) *?[^\\s*]*)',
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
                        value: '<meta property="og:title" content="(?<title>(?<stock_type>[^\\s*]+) *(?<year>[^\\s*<]+) *(?<make>[^\\s*<]+) *(?<model>[^\\s*<]+) *(?<trim>[^\\s*<]+) *?[^\\s*]*)',
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
                        value: '<meta property="og:title" content="(?<title>(?<stock_type>[^\\s*]+) *(?<year>[^\\s*<]+) *(?<make>[^\\s*<]+) *(?<model>[^\\s*<]+) *(?<trim>[^\\s*<]+) *?[^\\s*]*)',
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
                        value: '<meta property="og:title" content="(?<title>(?<stock_type>[^\\s*]+) *(?<year>[^\\s*<]+) *(?<make>[^\\s*<]+) *(?<model>[^\\s*<]+) *(?<trim>[^\\s*<]+) *?[^\\s*]*)',
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
                        value: '<meta property="og:title" content="(?<title>(?<stock_type>[^\\s*]+) *(?<year>[^\\s*<]+) *(?<make>[^\\s*<]+) *(?<model>[^\\s*<]+) *(?<trim>[^\\s*<]+) *?[^\\s*]*)',
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
                        value: '<span class="stock-number-text">(?<stock_number>[^<]+)',
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
                        value: 'SpecInteriorColor specs-desc">(?<exterior_color>[^<]+)',
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
                        value: 'data-saleprice="(?<price>[^"]+)',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.MSRP,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.REGEX,
                        pageType: PageType.PDP,
                        order: 1,
                        value: "Manufacturer's Price:[^>]+>[^>]+>(?<msrp>[^<]+)",
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
                        value: 'data-type="(?<body_style>[^"]+)',
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
                        value: 'Specvin specs-desc">(?<vin>[^<]+)',
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
                        value: '<li>\\s*<img llsrc="(?<images>[^"]+)"',
                        active: true,
                    },
                ],
            },
        ],
    },
};
