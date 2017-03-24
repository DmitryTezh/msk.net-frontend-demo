/**
 * Created by DIMOS on 23.03.2017.
 */
import capitalize from 'lodash/capitalize';

export const requiredValidator = value => value && value.trim() ? undefined : 'Must not be blank';
export const confirmValidator = value => value && value.trim() ? undefined : 'Must be confirmed';
export const minLengthValidator = min => value => value && value.trim().length < min ? `Must be at least ${min} chars` : undefined;

export const emailValidator = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined;
// eslint-disable-next-line
export const passwordValidator = value => value && !/^(?=^[!@#$%\^&*()_\-+=\[{\]};:<>|\./?a-zA-Z\d]{8,}$)(?=([!@#$%\^&*()_\-+=\[{\]};:<>|\./?a-zA-Z\d]*\W+){1,})[!@#$%\^&*()_\-+=\[{\]};:<>|\./?a-zA-Z\d]*$$/i.test(value) ? 'Weak password' : undefined;
export const matchValidator = match => (value, allValues) => value && value !== allValues[match] ? `${capitalize(match)} not matched` : undefined;