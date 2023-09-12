import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../core/services/auth.service";
import {Subject, takeUntil} from "rxjs";
import {containsUppercase} from "../auth.regex";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy{
    destroy$: Subject<boolean> = new Subject<boolean>();
    form: FormGroup;
    checked: boolean = false;

    createFirst: boolean = true;
    createSecond: boolean = false
    progressFirst: boolean = false;
    progressSecond: boolean = false;
    progressThird: boolean = false;
    progressFourth: boolean = false;
    progressFifth: boolean = false;

    styleBarFirst: boolean = false;
    styleBarSecond: boolean = false;
    styleBarThird: boolean = false;
    styleBarFourth: boolean = false;
    styleBarFifth: boolean = false;

    finalStep: boolean = false;

    isDropdownOpen = false;
    selectedOption: string | null = null;
    dropdownStyle: any = {};

    isPasswordVisible: boolean = false;
    isPasswordVisibleSecond: boolean = false;
    type: string = 'password';
    typeSecond: string = 'password';
    constructor(private fb: FormBuilder, private _auth: AuthService) {
    }

    showHide(number: any) {
            if (number === 1) {
                this.isPasswordVisible = !this.isPasswordVisible;
                this.isPasswordVisible ? this.type = 'text' : this.type = 'password';
            } else {
                this.isPasswordVisibleSecond = !this.isPasswordVisibleSecond;
                this.isPasswordVisibleSecond ? this.typeSecond = 'text' : this.typeSecond = 'password';
            }
    }
    createAcc() {
        this.createFirst = false;
        this.createSecond = true;
        const email = this.form.get('email')!.value;
        const password = this.form.get('password')!.value;
        const confirmPassword = this.form.get('confirmPassword')!.value;
        const name = this.form.get('name')!.value;
        localStorage.setItem('user', JSON.stringify({email: email, password: password}))
        this._auth.register('name', email, password, confirmPassword)
            .pipe(takeUntil(this.destroy$))
            .subscribe((item: any) => {

            })

    }


    toggleDropdown() {
        this.isDropdownOpen = !this.isDropdownOpen;


        if (this.isDropdownOpen) {
            this.dropdownStyle = { 'border-radius': '8px 8px 0px 0px', /* Add other styles for open state */ };
        } else {
            this.dropdownStyle = { 'border-radius': '8px', /* Add other styles for closed state */ };
        }
    }

    selectOption(option: string) {
        this.selectedOption = option;
        this.isDropdownOpen = true;

    }

    progressA(number: number) {
        if (number === 1) {
            this.createFirst = false;
            this.createSecond = true;
            this.progressFirst = false;
            this.progressSecond = false;
            this.progressThird = false;
            // for style
            this.styleBarFirst = false;
            this.styleBarSecond = false;
            this.styleBarThird = false;
            const email = this.form.get('email')!.value;
            const password = this.form.get('password')!.value;
            const confirmPassword = this.form.get('confirmPassword')!.value;
            const name = this.form.get('name')!.value;
            this._auth.register('name', email, password, confirmPassword)
                .pipe(takeUntil(this.destroy$))
                .subscribe((item: any) => {

                })

        } else if (number === 2) {
            this.createFirst = false;
            this.createSecond = false;
            this.progressFirst = false;
            this.progressSecond = true;
            this.progressThird = false;
            // for style
            this.styleBarFirst = true;
            this.styleBarSecond = true;
            this.styleBarThird = false;
        } else if (number === 3) {
            this.createFirst = false;
            this.createSecond = false;
            this.progressFirst = false;
            this.progressSecond = false;
            this.progressThird = true;
            // for style
            this.styleBarFirst = true;
            this.styleBarSecond = true;
            this.styleBarThird = true;
        } else if (number === 4) {
            this.createFirst = false;
            this.createSecond = false;
            this.progressFirst = false;
            this.progressSecond = false;
            this.progressThird = false;
            this.progressFourth = true;
            // for style
            this.styleBarFirst = true;
            this.styleBarSecond = true;
            this.styleBarThird = true;
            this.styleBarFourth = true;
        } else if (number === 5) {
            this.createFirst = false;
            this.createSecond = false;
            this.progressFirst = false;
            this.progressSecond = false;
            this.progressThird = false;
            this.progressFourth = false;
            this.progressFifth = true;
            // for style
            this.styleBarFirst = true;
            this.styleBarSecond = true;
            this.styleBarThird = true;
            this.styleBarFourth = true;
            this.styleBarFifth = true;
        } else if (number === 6) {

            this.createFirst = false;
            this.createSecond = false;
            this.progressFirst = false;
            this.progressSecond = false;
            this.progressThird = false;
            this.progressFourth = false;
            this.progressFifth = false;
            // for style
            this.styleBarFirst = false;
            this.styleBarSecond = false;
            this.styleBarThird = false;
            this.styleBarFourth = false;
            this.styleBarFifth = false;
            this.finalStep = true;
        }
    }

    ngOnInit() {
        this.initializeForm();
        if (localStorage.getItem('verify')) {
            this.createFirst = false;
            this.createSecond = false;
            this.progressFirst = true;
            this.progressSecond = false;
            this.progressThird = false;
            // for style
            this.styleBarFirst = true;
            this.styleBarSecond = false;
            this.styleBarThird = false;
        }
        setTimeout(() => {
            localStorage.removeItem('verify')
        }, 1500)
    }

    initializeForm(): void {
        this.form = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, containsUppercase(), Validators.minLength(8), Validators.maxLength(64)]],
            confirmPassword: ['', [Validators.required, containsUppercase(), Validators.minLength(8), Validators.maxLength(64)]],
            name: ['', Validators.required]
        })
    }

    returnToFirstStep() {
        this.createFirst = true;
        this.createSecond = false;
        this.styleBarFirst = false;
        this.finalStep = false;
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }


    check() {
        this.checked = !this.checked
    }
}
