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
            name: 'centennialmazda',
            postData: null,
            proxyConfig: 'default',
            referrer: null,
            retryCount: 2,
            retryInterval: 120,
            useProxy: true,
        },
    ],
    config: {
        name: 'centennialmazda',
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
                url: 'https://www.centennialmazda.ca/en/new-inventory',
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
                url: 'https://www.centennialmazda.ca/en/used-inventory',
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
                        value: '<article class="inventory-list-layout', 
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
                        value: 'inventory-list-layout__preview-name" href="(?<url>[^"]+)"\\s*title="(?<title>(?<year>[0-9]{4})\\s*(?<make>[^\\s]+)\\s*(?<model>[^"]+)[^"]+)',
                        active: true,
                    },
                    {
                        type: Extractor_Type.PREPEND_STRING,
                        pageType: PageType.LIST,
                        order: 2,
                        value: 'https://www.centennialmazda.ca',
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
                        value: '<a class="pagination__page-arrows-text " href="(?<next_page>[^"]+)"[^>]+>[^>]+>Next',
                        active: true,
                    },
                    {
                        type: Extractor_Type.PREPEND_STRING,
                        pageType: PageType.LIST,
                        order: 2,
                        value: 'https://www.centennialmazda.ca',
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
                        pageType: PageType.LIST,
                        order: 1,
                        value: 'inventory-list-layout__preview-name" href="(?<url>[^"]+)"\\s*title="(?<title>(?<year>[0-9]{4})\\s*(?<make>[^\\s]+)\\s*(?<model>[^"]+)[^"]+)',
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
                        pageType: PageType.LIST,
                        order: 1,
                        value: 'inventory-list-layout__preview-name" href="(?<url>[^"]+)"\\s*title="(?<title>(?<year>[0-9]{4})\\s*(?<make>[^\\s]+)\\s*(?<model>[^"]+)[^"]+)',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.TITLE,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.REGEX,
                        pageType: PageType.LIST,
                        order: 1,
                        value: 'inventory-list-layout__preview-name" href="(?<url>[^"]+)"\\s*title="(?<title>(?<year>[0-9]{4})\\s*(?<make>[^\\s]+)\\s*(?<model>[^"]+)[^"]+)',
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
                        pageType: PageType.LIST,
                        order: 1,
                        value: 'inventory-list-layout__preview-name" href="(?<url>[^"]+)"\s*title="(?<title>(?<year>[0-9]{4})\s*(?<make>[^\s]+)\s*(?<model>[^"]+))',
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
                        value: '<span itemprop="price" content="[^>]+>(?<price>\\$[0-9,]+)',
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
                        value: 'Inventory #[^>]+>\\s*[^>]+>(?<stock_number>[^<]+)',
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
                        value: 'Bodystyle[^>]+>\\s*[^>]+>(?<body_style>[^<]+)',
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
                        pageType: PageType.PDP,
                        order: 1,
                        value: 'Cylinders[^>]+>\\s*[^>]+>(?<engine_description>[^(?:\\&|<)]+)',
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
                        pageType: PageType.PDP,
                        order: 1,
                        value: 'Transmission:<\\/div>[^>]+\\s*inventory-details__content-value">(?<transmission>[^<]+)',
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
                        value: 'Ext. Color:[^>]+>\\s*[^>]+>(?<exterior_color>[^<]+)',
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
                        value: 'Int. color:[^>]+>\\s*[^>]+>(?<interior_color>[^<]+)',
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
                        value: "vin:'(?<vin>[^']+)",
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
                        value: "vin: '(?<vin>[^']+)',",
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
                        value: 'Mileage<\\/span>\\s*<span class="inventory-details__vehicle-info-value">(?<odometer>[^<]+)',
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
                        value: 'catalog-photo-(?:interior|exterior)">\\s*[^"]+"\\s*(?<img_url>[^"]+)',
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
                        value: "ca\\/en\\/(?<stock_type>[^-]+)-inventory",
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
                        value: '"fuelType": "(?<fuel_type>[^"]+)',
                        active: true,
                    },
                ],
            },
        ],
    },
};
