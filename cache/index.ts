import { makeVar } from '@apollo/client';
import { InMemoryCache } from '@apollo/experimental-nextjs-app-support';

export const itemsVar = makeVar<any>([]);

export const dimensionsVar = makeVar<any>({});

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        items: {
          read() {
            return itemsVar();
          },
        },
        dimensions: {
          read() {
            return dimensionsVar();
          },
        },
      },
    },
  },
});
