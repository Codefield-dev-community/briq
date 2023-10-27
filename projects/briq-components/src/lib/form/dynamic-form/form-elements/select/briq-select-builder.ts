import { BriqFormElementType } from '../../shared/briq-form-element-type';
import { BriqFormOption } from '../../shared/briq-form-option';
import { BriqIdentifier } from '@briq/shared/classes/briq-identifier';
import { BriqFormOptionsElementBuilder } from '../../shared/briq-form-options-element-builder';

export class BriqSelectBuilder extends BriqFormOptionsElementBuilder {
    public options: BriqFormOption[];
    public searchable?: boolean;
    public searchPlaceholder: string;
    public multiple?: boolean;
    public customDefault?: string;

    constructor(id: BriqIdentifier, name: string, label?: string) {
        super(id, name, label);
        this.type = BriqFormElementType.Select;
        this.options = [];
        this.multiple = false;
    }

    public setSearchable(searchable: boolean, searchPlaceholder?: string): this {
        this.searchable = searchable;
        searchPlaceholder ? this.searchPlaceholder = searchPlaceholder : this.searchPlaceholder = 'Zoek een item';
        return this;
    }

    public findByLabel(input: string): BriqFormOption[] {
        return this.options.filter((option: BriqFormOption) => {
            const o = option.label.toLowerCase();
            return o.includes(input.toLowerCase());
        });
    }
}
