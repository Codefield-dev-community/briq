import { BriqFormElementBuilder } from '@briq/form/dynamic-form/shared/briq-form-element-builder';
import { BriqIdentifier } from '@briq/shared/classes/briq-identifier';
import { BriqFormElementType } from '@briq/form/dynamic-form/shared/briq-form-element-type';

export class BriqFileUploadBuilder extends BriqFormElementBuilder {
  public accept: string;
  public autoUpload: boolean;
  public chooseIcon: string;
  public maxFileSize: number;
  public mode: string;
  public url: string;

  constructor(id: BriqIdentifier, name: string, label?: string) {
    super(id, name, label);
    this.type = BriqFormElementType.FileUpload;
    this.accept = 'image/*';
    this.autoUpload = true;
    this.chooseIcon = 'pi pi-upload';
    this.mode = 'basic';
  }

  public setAccept(accept: string): this {
    this.accept = accept;
    return this;
  }

  public setAutoUpload(auto: boolean): this {
    this.autoUpload = auto;
    return this;
  }

  public setChooseIcon(icon: string): this {
    this.chooseIcon = icon;
    return this;
  }

  public setMaxFileSize(fileSize: number): this {
    this.maxFileSize = fileSize;
    return this;
  }

  public setMode(mode: string): this {
    this.mode = mode;
    return this;
  }

  public setUrl(url: string): this {
    this.url = url;
    return this;
  }
}
