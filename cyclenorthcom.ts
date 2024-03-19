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
    plugins: [
        {
            name: 'cyclenorthcom_url',
            code: `function (value)
                     jsonData = json.decode(value);
                     return "https://www.cyclenorth.com/default.asp?page=xInventoryDetail&id=" .. jsonData.id
                   end
                  `,
            description: '',
            active: true,
            tags: [],
        },
        {
            name: 'cyclenorthcom_stock_type',
            code: `function (value)
                     jsonData = json.decode(value);
                     if jsonData.type == "U" then
                        return "used"
                     else
                        return "new"
                     end
                   end
                  `,
            description: '',
            active: true,
            tags: [],
        },
    ],
    request: [
        {
            active: true,
            additionalHeader: [],
            contentType: null,
            method: RequestSetting_Method.GET,
            name: 'cyclenorthcom',
            postData: null,
            proxyConfig: 'default',
            referrer: null,
            retryCount: 2,
            retryInterval: 120,
            useProxy: true,
        },
    ],
    config: {
        name: 'cyclenorthcom',
        active: true,
        organization: {
            id: 15,
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
                url: 'https://www.cyclenorth.com/imglib/Inventory/cache/722/VehInv.js?v=8810971',
                requiredParams: null,
                type: EntryPoint_Type.JSON,
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
                url: 'https://www.cyclenorth.com/imglib/Inventory/cache/722/UVehInv.js?v=8418073',
                requiredParams: null,
                type: EntryPoint_Type.JSON,
                productType: ProductType.POWERSPORTS,
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
                url: 'https://www.cyclenorth.com/imglib/Inventory/cache/722/VehInv.js?v=6554654',
                requiredParams: null,
                type: EntryPoint_Type.JSON,
                productType: ProductType.CAR,
            },
        ],
        fields: [
            {
                type: Field_Type.JSON_START,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.SEARCH_AND_REPLACE,
                        pageType: PageType.LIST,
                        order: 1,
                        value: '^.*var Vehicles=<replace_with>',
                        active: true,
                    },
                    {
                        type: Extractor_Type.SEARCH_AND_REPLACE,
                        pageType: PageType.LIST,
                        order: 2,
                        value: '];<replace_with>]',
                        active: true,
                    },
                    {
                        type: Extractor_Type.JSON_PATH,
                        pageType: PageType.LIST,
                        order: 3,
                        value: '$',
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
                        value: '$.id',
                        active: true,
                    },
                    {
                        type: Extractor_Type.PREPEND_STRING,
                        pageType: PageType.LIST,
                        order: 2,
                        value: 'https://www.cyclenorth.com/default.asp?page=xInventoryDetail&id=',
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
                        value: '$.manuf',
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
                        value: '$.model',
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
                        value: '$.bike_year',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.PRICE,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.PLUGIN,
                        pageType: PageType.LIST,
                        order: 1,
                        value: 'cyclenorthcom_price',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.STOCK_TYPE,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.PLUGIN,
                        pageType: PageType.LIST,
                        order: 1,
                        value: 'cyclenorthcom_stock_type',
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
                        value: '$.stockno',
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
                        value: '$.vehtypename',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.ODOMETER,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.JSON_PATH,
                        pageType: PageType.LIST,
                        order: 1,
                        value: '$.miles',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.EXTERIOR_COLOR,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.JSON_PATH,
                        pageType: PageType.LIST,
                        order: 1,
                        value: '$.color',
                        active: true,
                    },
                    {
                        type: Extractor_Type.SEARCH_AND_REPLACE,
                        pageType: PageType.LIST,
                        order: 2,
                        value: '&<replace_with>and',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.TRANSMISSION,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.JSON_PATH,
                        pageType: PageType.LIST,
                        order: 1,
                        value: '$.transmission',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.ENGINE_TYPE,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.JSON_PATH,
                        pageType: PageType.LIST,
                        order: 1,
                        value: '$.engine',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.CITY,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.JSON_PATH,
                        pageType: PageType.LIST,
                        order: 1,
                        value: '$.location',
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
                        value: '$.stock_image',
                        active: true,
                    },
                    {
                        type: Extractor_Type.PREPEND_STRING,
                        pageType: PageType.LIST,
                        order: 2,
                        value: 'https://cdn.dealerspike.com/imglib/v1/1024x1024',
                        active: true,
                    },
                    {
                        type: Extractor_Type.REGEX,
                        pageType: PageType.PDP,
                        order: 1,
                        value: '<li class="photo image_[0-9]+"[^>]+><a\\s*[^\\s]+\\s*href="[^"]+"\\s*data-src="(?<images>[^"]+)"',
                        active: true,
                    },
                ],
            },
        ],
    },
};
