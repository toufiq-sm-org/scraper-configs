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
            name: 'adamsautosales',
            postData: null,
            proxyConfig: 'default',
            referrer: null,
            retryCount: 2,
            retryInterval: 120,
            useProxy: true,
        },
    ],
    config: {
        name: 'adamsautosales',
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
                url: 'https://adamsautosales.co/newandusedcars?pagesize=500&page=1',
                requiredParams: null,
                type: EntryPoint_Type.HTML,
                productType: ProductType.CAR,
            },   
        ],
        fields: [
            {
                type: Field_Type.TOTAL_PRODUCT,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.REGEX,
                        pageType: PageType.LIST,
                        order: 1,
                        value: 'total-vehicle-number">\\s*(?<total_product>[^\\s<]*)',
                        active: true,
                    },
                ],
            },
            // {
            //     type: Field_Type.NEXT_PAGE,
            //     active: true,
            //     extractors: [
            //         {
            //             type: Extractor_Type.REGEX,
            //             pageType: PageType.LIST,
            //             order: 1,
            //             value: '',
            //             active: true,
            //         },
            //         {
            //             type: Extractor_Type.PREPEND_STRING,
            //             pageType: PageType.LIST,
            //             order: 2,
            //             value: '',
            //             active: true,
            //         },
            //     ],
            // },
            {
                type: Field_Type.SPLITTER,
                active: true,
                extractors: [
                    // {//optional
                    //     type: Extractor_Type.SPLIT_AND_TAKE_ONE,
                    //     pageType: PageType.LIST,
                    //     order: 1,
                    //     value: '<div class="instock-inventory-content|<footer class="footer wp"<take>1',
                    //     active: true, 
                    // },
                    {
                        type: Extractor_Type.SPLIT,
                        pageType: PageType.LIST,
                        order: 1,
                        value: '<div class="row no-gutters invMainCell', 
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
                        value: 'class="vehicleTitleWrap[^>]+>\\s*<a.*href="(?<url>[^"]+)"',
                        active: true,
                    },
                    {
                        type: Extractor_Type.PREPEND_STRING,
                        pageType: PageType.LIST,
                        order: 2,
                        value: 'https://www.adamsautosales.co',
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
                        value: "Stock #:<\\/label>\\s*(?<stock_number>[^\\s*]+)",
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
                        value: 'class=\\"vehicleTitleWrap[^>]+>\\s*<a.*href="(?<url>[^"]+)">\\s*(?<year>[0-9]{4})\\s*(?<make>[^\s*]+)\\s*\\s*(?<model>[^<]+)',
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
                        value: 'class=\\"vehicleTitleWrap[^>]+>\\s*<a.*href="(?<url>[^"]+)">\\s*(?<year>[0-9]{4})\\s*(?<make>[^\s*]+)\\s*\\s*(?<model>[^<]+)',
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
                        value: 'class=\\"vehicleTitleWrap[^>]+>\\s*<a.*href="(?<url>[^"]+)">\\s*(?<year>[0-9]{4})\\s*(?<make>[^\s*]+)\\s*\\s*(?<model>[^<]+)',
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
                        value: 'Internet[^>]+>\\s*[^>]+>(?<price>\\$[0-9,]+)',
                        active: true,
                    },
                    {
                        type: Extractor_Type.REGEX,
                        pageType: PageType.PDP,
                        order: 1,
                        value: 'Retail[^>]+>[^>]+>(?<price>[^<]+)<\/span',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.ENGINE_TYPE,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.REGEX,
                        pageType: PageType.LIST,
                        order: 1,
                        value: 'Engine:<\\/label>\s*(?<engine_type>[^\\s*]+)',
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
                        value: 'VIN:<\\/label>\s*(?<vin>[^\\s*]+)',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.MILEAGE,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.REGEX,
                        pageType: PageType.LIST,
                        order: 1,
                        value: 'Mileage:<\/label>\s*(?<odometer>[^\s*]+)',
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
                        value: 'Trans:<\\/label>\\s*(?<transmission>[^\\s*]+)',
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
                        value: 'Color:<\\/label>\\s*(?<exterior_color>[^\\s*]+)',
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
                        value: "data-gallery='gallery'\\s*class='gallery'\\s*href='(?<images>[^']+)",
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
                        pageType: PageType.LIST,
                        order: 1,
                        value: "Interior:<\\/label>\\s*(?<interior_color>[^<]+)",
                        active: true,
                    },
                ],
            },
        ],
    },
};
