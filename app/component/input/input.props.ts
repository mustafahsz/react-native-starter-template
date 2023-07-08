import { InputProps as InputPropsElements } from '@rneui/themed';
import { InputVariantsKey } from './input.variants';

export interface InputProps extends InputPropsElements {
  variant?: InputVariantsKey;
}
