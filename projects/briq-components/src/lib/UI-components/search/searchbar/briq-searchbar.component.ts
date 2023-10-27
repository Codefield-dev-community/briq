import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, skip } from 'rxjs/operators';
import { BriqEvent } from '@briq/shared/classes/briq-event';

@Component({
    selector: 'briq-searchbar',
    templateUrl: './briq-searchbar.component.html',
    styleUrls: ['./briq-searchbar.component.scss']
})
export class BriqSearchbarComponent implements OnInit, OnDestroy {
    @Input() public placeholder: string;
    @Input() public searchText: string;
    @Input() public minLength: number;
    @Input() public type: 'grey' | 'white';
    @Output() public search: EventEmitter<BriqEvent>;

    private searchTrigger: BehaviorSubject<string>;
    private subscription: Subscription;

    constructor() {
        this.placeholder = 'Zoek een item';
        this.minLength = 3;
        this.type = 'grey';
        this.search = new EventEmitter<BriqEvent>();
        this.searchTrigger = new BehaviorSubject(null);
        this.subscription = new Subscription();
    }

    public ngOnInit(): void {
        this.dispatchSearchEvent();
    }

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    public userInput(event: any): void {
        this.searchTrigger.next(event.target.value);
    }

    private dispatchSearchEvent(): void {
        this.subscription.add(
            this.searchTrigger
                .asObservable()
                .pipe(skip(1), distinctUntilChanged(), debounceTime(200))
                .subscribe((search) =>
                    this.search.emit({
                        action: 'search',
                        data: search
                    })
                )
        );
    }
}
