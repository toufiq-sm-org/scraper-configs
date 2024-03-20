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
            name: 'carsonpassrvcom_url',
            code: `function (value)
                     jsonData = json.decode(value);
                     if jsonData.type == "U" then
                        return "https://www.carsonpassrv.com/default.asp?page=xPreOwnedInventoryDetail&id=" .. jsonData.id
                     else
                        return "https://www.carsonpassrv.com/default.asp?page=xNewInventoryDetail&id=" .. jsonData.id
                     end
                   end
                  `,
            description: '',
            active: true,
            tags: [],
        },
        {
            name: 'carsonpassrvcom_stock_type',
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
            name: 'carsonpassrvcom',
            postData: null,
            proxyConfig: 'default',
            referrer: null,
            retryCount: 2,
            retryInterval: 120,
            useProxy: true,
        },
    ],
    config: {
        name: 'carsonpassrvcom',
        active: true,
        organization: {
            id: 5,
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
                url: 'https://www.carsonpassrv.com/imglib/Inventory/cache/5760/NVehInv.js?v=1640195',
                requiredParams: null,
                productType: ProductType.RV,
                type: EntryPoint_Type.JSON,
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
                url: 'https://www.carsonpassrv.com/imglib/Inventory/cache/5760/UVehInv.js?v=2185392',
                requiredParams: null,
                productType: ProductType.RV,
                type: EntryPoint_Type.JSON,
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
                        type: Extractor_Type.PLUGIN,
                        pageType: PageType.LIST,
                        order: 1,
                        value: 'carsonpassrvcom_url',
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
                    {
                        type: Extractor_Type.SEARCH_AND_REPLACE,
                        pageType: PageType.LIST,
                        order: 2,
                        value: '^([^ ]*).*<replace_with>$1',
                        active: true,
                    },
                    {
                        type: Extractor_Type.SEARCH_AND_REPLACE,
                        pageType: PageType.LIST,
                        order: 2,
                        value: '[^A-Za-z0-9 -]<replace_with>',
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
                        type: Extractor_Type.JSON_PATH,
                        pageType: PageType.LIST,
                        order: 1,
                        value: '$.price',
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
                        value: 'carsonpassrvcom_stock_type',
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
                type: Field_Type.VIN,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.JSON_PATH,
                        pageType: PageType.LIST,
                        order: 1,
                        value: '$.vin',
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
                type: Field_Type.IMAGES,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.REGEX,
                        pageType: PageType.PDP,
                        order: 1,
                        value: '<li class="photo image_[0-9]+"[^>]+><a\\s*[^\\s]+\\s*href="[^"]+"\\s*data-src="(?<images>[^"]+)"',
                        active: true,
                    },
                    {
                        type: Extractor_Type.SEARCH_AND_REPLACE,
                        pageType: PageType.PDP,
                        order: 2,
                        value: '120x90<replace_with>800x600',
                        active: true,
                    },
                    {
                        type: Extractor_Type.SEARCH_AND_REPLACE,
                        pageType: PageType.PDP,
                        order: 2,
                        value: '_th.jpg<replace_with>.jpg',
                        active: true,
                    },
                ],
            },
        ],
    },
};
