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
            name: '401dixiehyundaicom_url',
            code: `function (value)
            jsonData = json.decode(value);
            return "https://www.401dixiehyundai.com/" .. jsonData.year .. "/" .. jsonData.make .. "/" .. (jsonData.model).replace(" ", "-") .. "/mississauga/on/" .. jsonData.ad_id
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
            name: '401dixiehyundaicom',
            postData: null,
            proxyConfig: 'default',
            referrer: null,
            retryCount: 2,
            retryInterval: 120,
            useProxy: true,
        },
    ],
    config: {
        name: '401dixiehyundaicom',
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
                url: 'https://www.401dixiehyundai.com/wp-content/plugins/convertus-vms/include/php/ajax-vehicles.php?endpoint=https%3A%2F%2Fvms.prod.convertus.rocks%2Fapi%2Ffiltering%2F%3Fcp%3D603%26ln%3Den%26pg%3D1%26pc%3D1000%26dc%3Dfalse%26qs%3D%26im%3Dtrue%26sc%3Dnew%26v1%3D%26st%3Dprice%252Casc%26ai%3D%26oem%3D%26view%3Dgrid%26SrpTemplateParams%3D%26defaultParams%3D%26pnpi%3Dmsrp%26pnpm%3Dnone%26pnpf%3Daski%26pupi%3Dmsrp%26pupm%3Dnone%26pupf%3Dinte%26nnpi%3Dnone%26nnpm%3Dnone%26nnpf%3Dnone%26nupi%3Dnone%26nupm%3Dnone%26nupf%3Dnone%26po%3D&action=vms_data',
                requiredParams: null,
                productType: ProductType.CAR,
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
                url: 'https://www.401dixiehyundai.com/wp-content/plugins/convertus-vms/include/php/ajax-vehicles.php?endpoint=https%3A%2F%2Fvms.prod.convertus.rocks%2Fapi%2Ffiltering%2F%3Fcp%3D603%26ln%3Den%26pg%3D1%26pc%3D1000%26dc%3Dfalse%26qs%3D%26im%3Dtrue%26sc%3Dused%26v1%3D%26st%3Dprice%252Casc%26ai%3D%26oem%3D%26view%3Dgrid%26SrpTemplateParams%3D%26defaultParams%3D%26pnpi%3Dmsrp%26pnpm%3Dnone%26pnpf%3Daski%26pupi%3Dmsrp%26pupm%3Dnone%26pupf%3Dinte%26nnpi%3Dnone%26nnpm%3Dnone%26nnpf%3Dnone%26nupi%3Dnone%26nupm%3Dnone%26nupf%3Dnone%26po%3D&action=vms_data',
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
                        value: '$.results',
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
                        value: '401dixiehyundaicom_url',
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
                        value: '$.stock_number',
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
                        value: '$.sale_class',
                        active: true,
                    },
                    {
                        type: Extractor_Type.SEARCH_AND_REPLACE,
                        pageType: PageType.LIST,
                        order: 2,
                        value: '<change_case>lower',
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
                        value: '$.year',
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
                        value: '$.make',
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
                type: Field_Type.TRIM,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.JSON_PATH,
                        pageType: PageType.LIST,
                        order: 1,
                        value: '$.trim',
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
                        value: '$.body_style',
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
                        value: '$.final_price',
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
                type: Field_Type.MILEAGE,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.JSON_PATH,
                        pageType: PageType.LIST,
                        order: 1,
                        value: '$.odometer',
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
                type: Field_Type.FUEL_TYPE,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.JSON_PATH,
                        pageType: PageType.LIST,
                        order: 1,
                        value: '$.fuel_type',
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
                        value: '$.msrp',
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
                        value: '$.exterior_color',
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
                        value: 'image_lg":"(?<images>[^"]+)"',
                        active: true,
                    },
                ],
            },
        ],
    },
};
