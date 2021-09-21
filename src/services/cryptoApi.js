
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '42f77560d0msh01cc44e9fdf3d90p1d5759jsn4b76c6a9c969'
    
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    // eslint-disable-next-line no-undef
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            // eslint-disable-next-line no-undef
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getExchanges: builder.query({
            // eslint-disable-next-line no-undef
            query: () => createRequest(`/exchanges`)
        }),
        getCryptoDetails: builder.query({
            // eslint-disable-next-line no-undef
            query: (coinId) => createRequest(`/coin/${coinId}`),
        }),
         getCryptoHistory: builder.query({
            // eslint-disable-next-line no-undef
            query: ({coinId, timeperiod}) => createRequest(`/coin/${coinId}/history/${timeperiod}`),
        })
    })
});

export const {
    useGetCryptosQuery, useGetExchangesQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery
} = cryptoApi;