export interface IGemModel {
  Gem: number;
  Date: Date;
  CollectedToday: number;
  CollectedLast7Days: number;
  CollectedLastMonth: number;
  CollectedLast3Months: number;
  CollectedLast9Months: number;
  CollectedLastYear: number;
}

export class GemModel implements IGemModel {
  CollectedLast3Months: number;
  CollectedLast7Days: number;
  CollectedLast9Months: number;
  CollectedLastMonth: number;
  CollectedLastYear: number;
  CollectedToday: number;
  Date: Date;
  Gem: number;

  constructor(
    date: Date, gem: number,
    collectedLast3Months?: number, collectedLast7Days?: number,
    collectedLast9Months?: number, collectedLastMonth?: number,
    collectedLastYear?: number, collectedToday?: number,
  ) {
    this.CollectedLast3Months = collectedLast3Months ?? 0;
    this.CollectedLast7Days = collectedLast7Days ?? 0;
    this.CollectedLast9Months = collectedLast9Months ?? 0;
    this.CollectedLastMonth = collectedLastMonth ?? 0;
    this.CollectedLastYear = collectedLastYear ?? 0;
    this.CollectedToday = collectedToday ?? 0;
    this.Date = date ?? new Date();
    this.Gem = gem ?? 0;
  }

  fromJSON(data: JSON){
    this.CollectedLast3Months = data['CollectedLast3Months'] ?? 0;
    this.CollectedLast7Days = data['CollectedLast7Days'] ?? 0;
    this.CollectedLast9Months = data['CollectedLast9Months'] ?? 0;
    this.CollectedLastMonth = data['CollectedLastMonth'] ?? 0;
    this.CollectedLastYear = data['CollectedLastYear'] ?? 0;
    this.CollectedToday = data['CollectedToday'] ?? 0;
    this.Date = data['Date'] ?? new Date();
    this.Gem = data['Gem'] ?? 0;
  }

}
