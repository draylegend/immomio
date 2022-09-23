import { FactoryProvider } from '@angular/core';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';

export default (env: { api: string; production: boolean }) =>
  ({
    provide: APOLLO_OPTIONS,
    useFactory: (httpLink: HttpLink) =>
      ({
        cache: new InMemoryCache(),
        link: httpLink.create({ uri: env.api }),
      } as ApolloClientOptions<unknown>),
    deps: [HttpLink],
  } as FactoryProvider);
