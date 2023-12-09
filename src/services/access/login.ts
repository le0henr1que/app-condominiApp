
  import { api } from '../api';
  
  export const exitEarlyApi = api.injectEndpoints({
    endpoints: (builder) => ({
      login: builder.query<any>({
        query: (ra) =>
          `/students/${ra}`,
        providesTags: ['teste'],
      }),
    
    }),
  });
  
  export const {
    useLoginQuery
  } = exitEarlyApi;
  
  export const {
    endpoints: {
        login
    },
  } = exitEarlyApi;
  