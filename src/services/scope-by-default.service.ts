import { Injectable } from '@nestjs/common';

@Injectable()
export class ScopeByDefaultService {
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
