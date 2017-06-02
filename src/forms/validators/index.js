/**
 * Created by DIMOS on 23.03.2017.
 */
import template from 'lodash/template';

/*
    Generic validators
 */
export const requiredValidator = warning => value => value && value.toString().trim() ? undefined : warning;
export const minLengthValidator = (warning, min) => value => value && value.trim().length < min ? template(warning)({ min }) : undefined;
export const matchValidator = (warning, match) => (value, allValues) => value && value !== allValues[match] ? warning : undefined;

export const minNumValidator = (warning, min) => value => !isNaN(value) && value > min ? undefined : warning;
export const maxNumValidator = (warning, max) => value => !isNaN(value) && value < max ? undefined : warning;
export const rangeNumValidator = (warning, min, max) => value => !isNaN(value) && value > min && value < max ? undefined : warning;