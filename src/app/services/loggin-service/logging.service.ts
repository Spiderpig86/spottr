import { Injectable } from '@angular/core';

export enum LOG_LEVEL {
  None,
  Severe,
  Warning,
  All
}

/**
 * Service class for logging based on severity level
 *
 * @export
 * @class LoggingService
 */
@Injectable()
export class LoggingService {

  private loggingLevel = LOG_LEVEL.All; // By default for development

  constructor() {

  }

  /**
   * Utility method for logging to console depending on severity level.
   *
   * @param message - message to log
   * @param level - severity level of the log
   */
  public log(message: string, level: LOG_LEVEL) {
    if (level < this.loggingLevel) {
      console.log(message);
    }
  }

  // HELPER FUNCTIONS
  public setLogging(logging: LOG_LEVEL) {
    this.loggingLevel = logging;
  }

  public getLogging(): LOG_LEVEL {
    return this.loggingLevel;
  }

}
