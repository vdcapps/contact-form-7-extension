import * as fs from 'fs';

// Connection details of the throwaway Docker site, written by run.sh (never committed).
export const site = JSON.parse(fs.readFileSync(new URL('./.site.json', import.meta.url), 'utf8'));

export const siteConfig = { baseUrl: site.url, username: site.username, applicationPassword: site.appPassword };
