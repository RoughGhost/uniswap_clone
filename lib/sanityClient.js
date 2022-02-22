import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'qatqvtii',
  dataset: 'production',
  apiVersion: 'v1',
  token:
    'skW6Dk6pi1auCOJEieuES5mR0o2BGfqdkdudvFOprsX311qUTKHNG91it2qVkB4seGdXWCYpuHKQdGgEnqi9MkiaCepx3ehEJnNwcaXdfkS1NQpsyFWpu8wGmmKk7nGSAH80Q8Kh4mcKGmT14jyCQgPuDZLYPtJ8rXWOUYrmcbWWQgC1WCSV',
  useCdn: 'false',
})
