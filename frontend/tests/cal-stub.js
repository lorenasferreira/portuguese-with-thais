// Replays the site's queued Cal commands, then accepts later plan changes.
// Each inline command appends a frame so duplicate mounts are observable.
export const calEmbedScript = `(() => {
  for (const [namespace, queued] of Object.entries(window.Cal.ns)) {
    const dispatch = (action, options) => {
      if (action !== "inline") return;
      const frame = document.createElement("iframe");
      frame.title = options.config.iframeAttrs.title;
      frame.src = "/__test/cal/" + options.calLink;
      options.elementOrSelector.append(frame);
    };

    window.Cal.ns[namespace] = dispatch;
    for (const args of queued.q) dispatch(...args);
  }
})();`;
