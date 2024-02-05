import { ONE_MIN, ONE_SEC } from "../constants"


/** Map from ReportIn options to the time constants */
const REPORT_OPTIONS_TO_CONSTANT: Record<'seconds' | 'minutes', number> = {
    /** seconds */
    seconds: ONE_SEC,
    /** minutes */
    minutes: ONE_MIN,
}

/**
 * Get the interval in seconds between two points in time.
 * 
 * @param args - the parameters
 * @returns the interval in seconds
 */
export const getInterval = ({
    t1,
    t2,
    reportIn = 'seconds',
}: {
    /** first point in time */
    t1: Date;
    /** second point in time */
    t2: Date;
    /** the reporting options */
    reportIn?: 'seconds' | 'minutes'
}) => ((t2.getTime() - t1.getTime()) / REPORT_OPTIONS_TO_CONSTANT[reportIn]).toFixed(0);