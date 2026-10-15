# Privacy Policy

**CF7 Developer Assistant** (the Claude plugin in this repository) is published by Optimized Theme. This policy explains what the plugin does with data. Last updated: 2026-10-15.

## Summary

The plugin has no servers of its own. It collects no analytics or telemetry, and it sends nothing to Optimized Theme. It talks only to the WordPress site you connect it to.

## What the plugin accesses

- **Your WordPress site.** When you connect a site, the plugin calls that site's REST API to read, create and update Contact Form 7 forms and to check the connection.
- **Form submissions.** If you install the optional CF7 Submissions Bridge WordPress plugin (or use Flamingo), `cf7_get_submissions` reads stored submissions from your site when you ask for them. Submissions can contain personal data entered by your site's visitors, such as names, email addresses and messages. They are shown in your Claude session and are not copied anywhere else by the plugin.
- **Addresses you choose.** `cf7_test_integration`, when you run it with a live request, sends a test payload to the webhook URL you configured. `cf7_test_submission` submits a test entry to your own form.

## What is stored, and where

Everything the plugin stores stays on your own computer or your own WordPress site:

- **WordPress credentials.** The Application Password is kept as a sensitive plugin setting by Claude Code, or in `.cf7-sites.json` (file mode 0600) in the folder where Claude Code runs if you connect through the browser. It is never shown to Claude.
- **Form backups and settings.** These are saved in `.cf7-backups/` and `.cf7-integrations.json` in the same folder.
- **Submissions.** The Submissions Bridge stores submissions in your WordPress database. Only administrators (or Flamingo message editors) can read them.

You can delete these files at any time. You can revoke the plugin's access in WordPress under Users > Profile > Application Passwords.

## Claude

Content the plugin returns to Claude, including any submissions you ask to see, is handled by Anthropic under the terms and privacy policy of your Claude account. The plugin does not change that.

## Your responsibilities as a site owner

If you read visitor submissions with this plugin, you are responsible for handling that personal data in line with your own site's privacy policy and the laws that apply to you. Show only what you need.

## Contact

Questions about this policy: update@optimizedtheme.com, or open an issue at https://github.com/vdcapps/contact-form-7-extension/issues.
