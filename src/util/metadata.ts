import * as cheerio from 'cheerio';

export interface MetaData {
    title: string | undefined;
    description: string | undefined;
    keywords: string | undefined;
    author: string | undefined;
    favicon: string | undefined;
    ogTitle: string | undefined;
    ogDescription: string | undefined;
    ogImage: string | undefined;
    ogUrl: string | undefined;
}

export const getMetaTags = async (url: string): Promise<MetaData> => {
    const response = await fetch(url);

    if (response.status !== 200) {
        return {
            title: '',
            description: '',
            keywords: '',
            author: '',
            favicon: '',
            ogTitle: '',
            ogDescription: '',
            ogImage: '',
            ogUrl: '',
        };
    }

    const html = await response.text();
    const $ = cheerio.load(html);

    const metaTags = $('meta');

    const metaData: MetaData = {
        title: '',
        description: '',
        keywords: '',
        author: '',
        favicon: '',
        ogTitle: '',
        ogDescription: '',
        ogImage: '',
        ogUrl: '',
    };

    metaTags.each((i, element) => {
        const name = $(element).attr('name');
        const content = $(element).attr('content');
        const property = $(element).attr('property');

        if (name) {
            switch (name) {
                case 'title':
                    metaData.title = content;
                    break;
                case 'description':
                    metaData.description = content;
                    break;
                case 'keywords':
                    metaData.keywords = content;
                    break;
                case 'author':
                    metaData.author = content;
                    break;
            }
        } else if (property) {
            switch (property) {
                case 'og:title':
                    metaData.ogTitle = content;
                    break;
                case 'og:description':
                    metaData.ogDescription = content;
                    break;
                case 'og:image':
                    metaData.ogImage = content;
                    break;
                case 'og:url':
                    metaData.ogUrl = content;
                    break;
            }
        }
    });

    const favicon = $('link[rel="icon"]').attr('href');

    metaData.favicon = favicon;

    return metaData;

};