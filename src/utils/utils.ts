import { errorTranslations } from './constants';

export const errorTranslate = (errorMessage: string): string => {
  const translation = errorTranslations[errorMessage];
  return translation || errorMessage;
};