#!/usr/bin/env node

/**
 * Simple IndexNow submission - just submit URLs manually when needed
 * Usage: node scripts/simple-indexnow.js <url1> [url2] [url3]
 */

const SITE_URL = 'https://saifabdelrazek.com';
const API_KEY = '343b4cd9b94d455c965aa48b55159df8';

async function submitToIndexNow(urls) {
  const payload = {
    host: 'saifabdelrazek.com',
    key: API_KEY,
    keyLocation: `${SITE_URL}/${API_KEY}.txt`,
    urlList: urls
  };

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      console.log('✅ URLs submitted to IndexNow successfully');
    } else {
      console.log(`❌ Failed: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    console.log('❌ Error:', error.message);
  }
}

const args = process.argv.slice(2);
if (args.length === 0) {
  console.log('Usage: node scripts/simple-indexnow.js <url1> [url2] [url3]');
  console.log('Example: node scripts/simple-indexnow.js https://saifabdelrazek.com/blog/new-post');
  process.exit(0);
}

submitToIndexNow(args);