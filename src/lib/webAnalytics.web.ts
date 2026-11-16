import { inject } from '@vercel/analytics';

let started = false;

/**
 * Vercel Web Analytics on the website only: cookieless, counts page views. The query string
 * and the hash are cut before sending — sign-in returns put tokens there, and ?paid=1 and the
 * like say nothing about traffic.
 */
export function startWebAnalytics() {
  if (started) return;
  started = true;
  inject({
    beforeSend: (event) => {
      const url = new URL(event.url);
      url.search = '';
      url.hash = '';
      return { ...event, url: url.toString() };
    },
  });
}
