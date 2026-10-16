/* KAM-Q. Copyright (c) 2026 PRB Interactive Inc., a Delaware corporation. All rights reserved.
   Proprietary and confidential. No part of this software may be copied, modified,
   distributed, or used to create derivative works without prior written permission
   from PRB Interactive Inc. */

/* This service worker exists so Chrome will treat KAM-Q as installable. Chrome refuses to
   offer installation unless a service worker with a fetch handler is registered.

   It deliberately caches nothing. KAM-Q ships as one large index.html that changes on every
   release, and a cache here would hand people a stale app with no obvious way to refresh it.
   Everything goes to the network exactly as it would without a worker. */

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => { /* pass through to the network */ });
