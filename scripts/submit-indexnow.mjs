// Submits website URLs to Bing & IndexNow search engines
const KEY = "4a8f9c2d1e3b5a7e6f8d0c2b4a6e8f1d";
const HOST = "mashaalgroups.com";

const payload = {
  host: HOST,
  key: KEY,
  keyLocation: `https://${HOST}/${KEY}.txt`,
  urlList: [
    `https://${HOST}/`,
    `https://${HOST}/about`,
    `https://${HOST}/businesses`,
    `https://${HOST}/businesses/mashal-petroleum`,
    `https://${HOST}/businesses/mashwani-shipping`,
    `https://${HOST}/businesses/mashal-foods`,
    `https://${HOST}/businesses/mashal-rent-a-car`,
    `https://${HOST}/contact`,
    `https://${HOST}/llms.txt`,
    `https://${HOST}/llms-full.txt`,
  ],
};

async function submitIndexNow() {
  const endpoints = [
    "https://api.indexnow.org/indexnow",
    "https://www.bing.com/indexnow",
  ];

  for (const endpoint of endpoints) {
    try {
      console.log(`Submitting to ${endpoint}...`);
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(payload),
      });
      console.log(`Response from ${endpoint}: Status ${res.status} (${res.statusText})`);
    } catch (err) {
      console.error(`Error submitting to ${endpoint}:`, err.message);
    }
  }
}

submitIndexNow();
