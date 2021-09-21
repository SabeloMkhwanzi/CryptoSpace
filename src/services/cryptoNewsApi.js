import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '42f77560d0msh01cc44e9fdf3d90p1d5759jsn4b76c6a9c969'
  }

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    // eslint-disable-next-line no-undef
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            // eslint-disable-next-line no-undef
            query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
});

export const {useGetCryptoNewsQuery} = cryptoNewsApi;
