import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// Custom validator function
export function containsUppercase(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value: string = control.value || '';
        const hasUppercase = /[A-Z]/.test(value);

        if (!hasUppercase) {
            return { noUppercase: true };
        }

        return null;
    };
}