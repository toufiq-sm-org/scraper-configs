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
            name: 'sherwoodpark_vwca new', 
            postData:
                '{"requests":[{"indexName":"sherwoodparkvolkswagen_production_inventory_specials_oem_price","params":"maxValuesPerFacet=250&hitsPerPage=500&page=0&facets=%5B%22features%22%2C%22our_price%22%2C%22lightning.lease_monthly_payment%22%2C%22lightning.finance_monthly_payment%22%2C%22type%22%2C%22api_id%22%2C%22year%22%2C%22make%22%2C%22model%22%2C%22model_number%22%2C%22trim%22%2C%22body%22%2C%22doors%22%2C%22miles%22%2C%22ext_color_generic%22%2C%22features%22%2C%22lightning.isSpecial%22%2C%22lightning.locations%22%2C%22fueltype%22%2C%22engine_description%22%2C%22transmission_description%22%2C%22metal_flags%22%2C%22city_mpg%22%2C%22hw_mpg%22%2C%22days_in_stock%22%2C%22lightning.locations.meta_location%22%2C%22custom_sort%22%2C%22title_vrp%22%2C%22ext_color%22%2C%22int_color%22%2C%22certified%22%2C%22lightning%22%2C%22location%22%2C%22drivetrain%22%2C%22int_options%22%2C%22ext_options%22%2C%22cylinders%22%2C%22vin%22%2C%22stock%22%2C%22msrp%22%2C%22our_price_label%22%2C%22finance_details%22%2C%22lease_details%22%2C%22thumbnail%22%2C%22link%22%2C%22objectID%22%5D&tagFilters=&facetFilters=%5B%5B%22type%3ANew%22%5D%2C%5B%22custom_sort%3Atrue%22%5D%5D"},{"indexName":"sherwoodparkvolkswagen_production_inventory_specials_oem_price","params":"maxValuesPerFacet=250&hitsPerPage=1&page=0&attributesToRetrieve=%5B%5D&attributesToHighlight=%5B%5D&attributesToSnippet=%5B%5D&tagFilters=&analytics=false&clickAnalytics=false&facets=type&facetFilters=%5B%5B%22custom_sort%3Atrue%22%5D%5D"},{"indexName":"sherwoodparkvolkswagen_production_inventory_specials_oem_price","params":"maxValuesPerFacet=250&hitsPerPage=1&page=0&attributesToRetrieve=%5B%5D&attributesToHighlight=%5B%5D&attributesToSnippet=%5B%5D&tagFilters=&analytics=false&clickAnalytics=false&facets=custom_sort&facetFilters=%5B%5B%22type%3ANew%22%5D%5D"}]}',
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
            name: 'sherwoodpark_vwca used',
            postData:
                '{"requests":[{"indexName":"sherwoodparkvolkswagen_production_inventory_specials_oem_price","params":"maxValuesPerFacet=250&hitsPerPage=500&page=0&facets=%5B%22features%22%2C%22our_price%22%2C%22lightning.lease_monthly_payment%22%2C%22lightning.finance_monthly_payment%22%2C%22type%22%2C%22api_id%22%2C%22year%22%2C%22make%22%2C%22model%22%2C%22model_number%22%2C%22trim%22%2C%22body%22%2C%22doors%22%2C%22miles%22%2C%22ext_color_generic%22%2C%22features%22%2C%22lightning.isSpecial%22%2C%22lightning.locations%22%2C%22fueltype%22%2C%22engine_description%22%2C%22transmission_description%22%2C%22metal_flags%22%2C%22city_mpg%22%2C%22hw_mpg%22%2C%22days_in_stock%22%2C%22lightning.locations.meta_location%22%2C%22custom_sort%22%2C%22title_vrp%22%2C%22ext_color%22%2C%22int_color%22%2C%22certified%22%2C%22lightning%22%2C%22location%22%2C%22drivetrain%22%2C%22int_options%22%2C%22ext_options%22%2C%22cylinders%22%2C%22vin%22%2C%22stock%22%2C%22msrp%22%2C%22our_price_label%22%2C%22finance_details%22%2C%22lease_details%22%2C%22thumbnail%22%2C%22link%22%2C%22objectID%22%5D&tagFilters=&facetFilters=%5B%5B%22type%3AUsed%22%2C%22type%3ACertified%20Used%22%5D%5D"},{"indexName":"sherwoodparkvolkswagen_production_inventory_specials_oem_price","params":"maxValuesPerFacet=250&hitsPerPage=1&page=0&attributesToRetrieve=%5B%5D&attributesToHighlight=%5B%5D&attributesToSnippet=%5B%5D&tagFilters=&analytics=false&clickAnalytics=false&facets=type"}]}',
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
            name: 'sherwoodpark_vwca',
            postData: null,
            proxyConfig: 'default',
            referrer: null,
            retryCount: 2,
            retryInterval: 120,
            useProxy: true,
        },
    ],
    config: {
        name: 'sherwoodpark_vwca',
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
                url: 'https://sewjn80htn-dsn.algolia.net/1/indexes/*/queries?x-algolia-agent=Algolia%20for%20JavaScript%20(4.1.0)%3B%20Browser%20(lite)%3B%20JS%20Helper%20(3.1.1)&x-algolia-api-key=179608f32563367799314290254e3e44&x-algolia-application-id=SEWJN80HTN',
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
                url: 'https://sewjn80htn-dsn.algolia.net/1/indexes/*/queries?x-algolia-agent=Algolia%20for%20JavaScript%20(4.1.0)%3B%20Browser%20(lite)%3B%20JS%20Helper%20(3.1.1)&x-algolia-api-key=179608f32563367799314290254e3e44&x-algolia-application-id=SEWJN80HTN',
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
                        value: '$.results[0].hits',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.TOTAL_PRODUCT,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.JSON_PATH,
                        pageType: PageType.LIST,
                        order: 1,
                        value: '$.results[0].nbHits',
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
                        value: '$.link',
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
                type: Field_Type.PRICE,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.JSON_PATH,
                        pageType: PageType.LIST,
                        order: 1,
                        value: '$.our_price',
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
                type: Field_Type.STOCK_TYPE,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.JSON_PATH,
                        pageType: PageType.LIST,
                        order: 1,
                        value: '$.type',
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
                type: Field_Type.STOCK_NUMBER,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.JSON_PATH,
                        pageType: PageType.LIST,
                        order: 1,
                        value: '$.stock',
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
                        value: '$.body',
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
                        value: '$.ext_color',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.INTERIOR_COLOR,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.JSON_PATH,
                        pageType: PageType.LIST,
                        order: 1,
                        value: '$.int_color',
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
                        value: '$.transmission_description',
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
                        value: '$.fueltype',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.DRIVETRAIN,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.JSON_PATH,
                        pageType: PageType.LIST,
                        order: 1,
                        value: '$.drivetrain',
                        active: true,
                    },
                ],
            },
            {
                type: Field_Type.ENGINE_DESCRIPTION,
                active: true,
                extractors: [
                    {
                        type: Extractor_Type.JSON_PATH,
                        pageType: PageType.LIST,
                        order: 1,
                        value: '$.engine_description',
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
                        value: 'class="swiper-slide">\\s*<img class="swiper-lazy" data-src="(?<images>[^"]+)"',
                        active: true,
                    },
                ],
            },
        ],
    },
};
