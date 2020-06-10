/*
 * action types
 */

export const PROVIDERS = 'PROVIDERS';

/*
 * action creators
 */

export default function updateProviders(providers) {
  return {
    type: PROVIDERS,
    providers
  }
}