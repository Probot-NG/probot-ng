import type { Logger } from "pino";

import type { DeprecatedLogger } from "../types.js";

/**
 * `probot.log()`, `app.log()` and `context.log()` are aliasing `.log.info()`.
 * We will probably remove the aliasing in future.
 */
export function aliasLog(log: Logger): DeprecatedLogger {
  function logInfo() {
    // @ts-ignore
    log.info(...arguments);
  }

  for (const key in log) {
    // @ts-ignore
    logInfo[key] =
    // @ts-ignore
      typeof log[key] === "function" ? log[key].bind(log) : log[key];
  }

  // @ts-ignore
  return logInfo;
}
