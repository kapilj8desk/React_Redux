/*
 * action types
 */

export const SERVICES = 'SERVICES';

/*
 * action creators
 */

export default function updateServices(services) {
  return {
    type: SERVICES,
    services
  }
}