import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReminderService {

  constructor() { }
  isReminderAvailable(jatuhTempo: Date | string | null | undefined): boolean {
    if (!jatuhTempo) return false;

    const today = new Date();
    const dueDate = new Date(jatuhTempo);

    const diffTime = dueDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays <= 3 && diffDays >= 0;
  }

  daysUntilDue(jatuhTempo: Date | string | null | undefined): number | null {
    if (!jatuhTempo) return null;

    const today = new Date();
    const dueDate = new Date(jatuhTempo);

    const diffTime = dueDate.getTime() - today.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  isPromotionAvailable(registeredSince: Date | string | null | undefined, ro: boolean | undefined): boolean {
    if (!registeredSince) return false;
    if (!ro) return false;

    const today = new Date();
    const regDate = new Date(registeredSince);

    const diffYears =
      (today.getTime() - regDate.getTime()) / (1000 * 60 * 60 * 24 * 365);

    return diffYears >= 3;
  }
}
