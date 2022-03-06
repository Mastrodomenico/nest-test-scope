import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.REQUEST })
export class ScopeByRequestService {
  value: string = 'undefined'

  getValuePromise(): Promise<string> {
    this.value = 'req-a'
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.value);
      }, 5000)
    })
  }
  
  getValue(): string {
    return this.value;
  }

}
