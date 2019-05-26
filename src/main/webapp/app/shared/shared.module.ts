import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { StartJhipsterSharedLibsModule, StartJhipsterSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [StartJhipsterSharedLibsModule, StartJhipsterSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [StartJhipsterSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StartJhipsterSharedModule {
  static forRoot() {
    return {
      ngModule: StartJhipsterSharedModule
    };
  }
}
