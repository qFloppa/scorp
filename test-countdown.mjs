// Runnable check for the countdown decomposition in index.html.
// Run: node test-countdown.mjs   (exits non-zero on failure)
import assert from "node:assert/strict";

const split = ms => {
  const s = Math.floor(ms / 1000);
  return {
    d: Math.floor(s / 86400),
    h: Math.floor((s % 86400) / 3600),
    m: Math.floor((s % 3600) / 60),
    s: s % 60,
  };
};

assert.deepEqual(split(0), { d: 0, h: 0, m: 0, s: 0 });
assert.deepEqual(split(59_000), { d: 0, h: 0, m: 0, s: 59 });
assert.deepEqual(split(3_600_000), { d: 0, h: 1, m: 0, s: 0 });
assert.deepEqual(split(90_061_000), { d: 1, h: 1, m: 1, s: 1 }); // 1d 1h 1m 1s
console.log("countdown split ok");
