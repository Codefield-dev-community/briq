import { Component, Input, OnDestroy } from '@angular/core';
import { BriqMenuItem } from '../../shared/classes/briq-menu-item';
import { BriqUserService } from '../../authentication/shared/services/briq-user.service';
import { BriqHeader } from '@briq/layout/briq-header/briq-header';
import { Subscription } from 'rxjs';

@Component({
  selector: 'briq-sidebar',
  templateUrl: './briq-sidebar.component.html',
  styleUrls: ['./briq-sidebar.component.scss']
})
export class BriqSidebarComponent implements OnDestroy {
  @Input() public collapsed: boolean;
  @Input() public logo: string;
  @Input() public info: BriqHeader;
  @Input() public menuItems: BriqMenuItem[];

  private role: string;
  private subscription: Subscription;

  constructor(private userService: BriqUserService) {
    this.subscription = new Subscription();
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public allowedForRole(item: BriqMenuItem): boolean {
    this.getUserRole();

    if (item.rolesAllowed?.length) {
      return item.rolesAllowed.includes(this.role);
    } else {
      return true;
    }
  }

  private getUserRole(): void {
    this.subscription.add(
      this.userService.getUser$().subscribe((user) => {
        if (this.role) {
          this.role = user.role;
        }
      })
    );
  }
}
