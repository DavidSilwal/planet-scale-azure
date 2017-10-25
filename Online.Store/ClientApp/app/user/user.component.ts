import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';
import { ISubscription } from 'rxjs/Subscription';

@Component({
    selector: 'user-view',
    templateUrl: './user.component.html'
})

export class UserComponent implements OnInit {

    redirectToLogin$: Observable<boolean>;
    user$: Observable<User>;

    private subscription: ISubscription;

    constructor(private store: Store<any>) {
        this.redirectToLogin$ = this.store.select<boolean>(state => state.user.userState.redirectToLogin);
        this.user$ = this.store.select<User>(state => state.user.userState.user);
    }

    ngOnInit() {
        this.subscription = this.redirectToLogin$
            .filter(val => val === true)
            .subscribe(() => window.location.href = '/account/signin');
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}