type DateUnit = 'day' | 'hour' | 'minute' | 'second';

interface Moment {
  add: (amount: number, unit: DateUnit) => Moment;
  format: (format: string) => string;
}

interface DayJS {
  dayjs: (date: Date | string) => Moment;
}

export declare const dayjs: DayJS;
