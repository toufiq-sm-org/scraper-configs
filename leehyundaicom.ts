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
            name: 'leehyundaicom',
            postData: null,
            proxyConfig: 'default',
            referrer: null,
            retryCount: 2,
            retryInterval: 120,
            useProxy: true,
        },
    ],
    config: {
        name: 'leehyundaicom',
        active: true,
        organization: {
            id: 22,
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
                    id: 4,
                },
                url: 'https://api.hootinteractive.net/v1.0/feed/24493?token=fONWOiZSyz&advertiser=6071&format=Facebook%20(Automotive)&fname=Facebook%20Default%20Feed',
                requiredParams: null,
                productType: ProductType.BOAT,
                type: EntryPoint_Type.CSV,
            },
        ],
        fields: [
            {
                type: Field_Type.VIN,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.CSV_TITLE,
                        pageType: PageType.LIST,
                        order: 1,
                        value: 'vin',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.MAKE,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.CSV_TITLE,
                        pageType: PageType.LIST,
                        order: 1,
                        value: 'make',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.MODEL,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.CSV_TITLE,
                        pageType: PageType.LIST,
                        order: 1,
                        value: 'model',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.YEAR,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.CSV_TITLE,
                        pageType: PageType.LIST,
                        order: 1,
                        value: 'year',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.TRIM,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.CSV_TITLE,
                        pageType: PageType.LIST,
                        order: 1,
                        value: 'trim',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.DRIVETRAIN,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.CSV_TITLE,
                        pageType: PageType.LIST,
                        order: 1,
                        value: 'drivetrain',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.FUEL_TYPE,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.CSV_TITLE,
                        pageType: PageType.LIST,
                        order: 1,
                        value: 'fuel_type',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.TRANSMISSION,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.CSV_TITLE,
                        pageType: PageType.LIST,
                        order: 1,
                        value: 'transmission',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.BODY_STYLE,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.CSV_TITLE,
                        pageType: PageType.LIST,
                        order: 1,
                        value: 'body_style',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.IMAGES,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.CSV_TITLE,
                        pageType: PageType.LIST,
                        order: 1,
                        value: 'image[0].url',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.PRICE,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.CSV_TITLE,
                        pageType: PageType.LIST,
                        order: 1,
                        value: 'price',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.URL,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.CSV_TITLE,
                        pageType: PageType.LIST,
                        order: 1,
                        value: 'url',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.STOCK_TYPE,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.CSV_TITLE,
                        pageType: PageType.LIST,
                        order: 1,
                        value: 'New/Used',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.EXTERIOR_COLOR,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.CSV_TITLE,
                        pageType: PageType.LIST,
                        order: 1,
                        value: 'exterior_color',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.INTERIOR_COLOR,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.CSV_TITLE,
                        pageType: PageType.LIST,
                        order: 1,
                        value: 'interior_color',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.ENGINE_DESCRIPTION,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.CSV_TITLE,
                        pageType: PageType.LIST,
                        order: 1,
                        value: 'engine',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.DESCRIPTION,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.CSV_TITLE,
                        pageType: PageType.LIST,
                        order: 1,
                        value: 'description',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.ODOMETER,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.CSV_TITLE,
                        pageType: PageType.LIST,
                        order: 1,
                        value: 'mileage.value',
                        active: true,
                    },
                ],
            },
        ],
    },
};
