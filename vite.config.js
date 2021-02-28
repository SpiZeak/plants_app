import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';

/**
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [
    vue(),
    VitePWA({
      manifest: {
        "theme_color": "#7cd392",
        "background_color": "#222",
        "display": "standalone",
        "scope": "/",
        "start_url": "/",
        "name": "Plants",
        "short_name": "Plants",
        "description": "An app for monitoring plants",
        "icons": [
          {
            "src": "/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "/icon-256x256.png",
            "sizes": "256x256",
            "type": "image/png"
          },
          {
            "src": "/icon-384x384.png",
            "sizes": "384x384",
            "type": "image/png"
          },
          {
            "src": "/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
          }
        ]
      },
      workbox: {
        // workbox options for generateSW
      }
    })
  ],
  optimizeDeps: {
    include: [
      'firebase/app',
      'firebase/analytics',
      'firebase/database',
      'firebase/performance',
      'firebase/auth',
      'firebase/messaging'
    ]
  },
};
