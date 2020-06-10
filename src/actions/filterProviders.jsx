/*
 * action types
 */

export const FILTERED_PROVIDERS = 'FILTERED_PROVIDERS';

/*
 * action creators
 */

export default function filterProviders(id) {
  return {
    type: FILTERED_PROVIDERS,
    id
  }
}