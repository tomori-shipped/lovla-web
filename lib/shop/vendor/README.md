# StPageFlip

`page-flip.js` is the ES module distribution of StPageFlip 2.0.7 (`page-flip@2.0.7`, MIT), https://github.com/Nodlik/StPageFlip. Its license is included alongside the source. It is bundled locally and loaded only when the book preview opens; there is no CDN dependency or network request to the vendor.

The distribution is vendored to include a small lifecycle fix: the upstream renderer recursively requests animation frames without cancelling them on `destroy()`. The local `start()` retains its frame ID and checks a running flag, `stop()` cancels that frame, and `PageFlip.destroy()` calls `render.stop()` before removing the UI. This prevents closed/reopened previews from accumulating render loops. No page-turn geometry was changed.

`page-flip.d.ts` describes the API used by the preview. The preview gives the engine cloned DOM nodes so it never mutates React-owned pages. Keep the lifecycle patch and MIT notice when updating the vendored version.
