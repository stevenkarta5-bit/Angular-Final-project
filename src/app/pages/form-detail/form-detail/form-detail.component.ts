import { Component } from '@angular/core';
import { DataCustomer } from '../../../../shared/interface/dataCustomer';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerServiceService } from '../../../../shared/service/customer/customer-service.service';
import { CommonModule } from '@angular/common';
import { ReminderService } from '../../../../shared/service/reminder/reminder.service';

@Component({
  selector: 'app-form-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-detail.component.html',
  styleUrl: './form-detail.component.scss'
})
export class FormDetailComponent {
  customer: DataCustomer | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private customerService: CustomerServiceService,
    private reminderService: ReminderService
  ) {}

  ngOnInit(): void {
    const name = this.activatedRoute.snapshot.paramMap.get('name');
    if (name) {
      this.customer = this.customerService
        .getCustomers()
        .find(c => c.name === name);
    }
  }

  goToHome(){
    this.router.navigate(['home']);
  }

  get showReminder(): boolean {
    return this.reminderService.isReminderAvailable(this.customer?.dueDate);
  }

  get showOffering(): boolean {
    return this.reminderService.isPromotionAvailable(this.customer?.registeredSince, this.customer?.isRo);
  }

  sendReminder() {
      if (this.customer?.email) {
      const subject = encodeURIComponent("Payment Reminder");
      const body = encodeURIComponent(
        `Dear ${this.customer.name},\n\nThis is a reminder regarding your payment schedule.\n\nThank you.`
      );
      window.location.href = `mailto:${this.customer.email}?subject=${subject}&body=${body}`;
    } else {
      alert("No email address available for this customer.");
    }
  }

  sendOffering() {
    const subject = encodeURIComponent('Special Offer Just for You');
    const body = encodeURIComponent(
      `Hi ${this.customer?.name},\n\nThank you for being with us for over 3 years! 🎉\nWe’d like to offer you a special promotion as our appreciation.`
    );
    window.location.href = `mailto:${this.customer?.email}?subject=${subject}&body=${body}`;
  }

}
