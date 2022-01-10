import { FormInstance, RuleObject, StoreValue } from 'rc-field-form/lib/interface';

export type FormItemValidation = (
  rule: RuleObject,
  value: StoreValue,
  callback: ((error?: string) => void) | FormInstance
) => Promise<void | any> | void;
