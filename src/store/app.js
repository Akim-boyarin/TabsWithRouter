import {defineStore} from "pinia";

export const useAppStore = defineStore('app', {
    state() {
        return {
            routerLinks: [
                { id: 1, title: 'Форма', url: '/' },
                { id: 2, title: 'Данные', url: '/data' },
            ],
            formData: {
                name: {
                    id: 1,
                    value: "",
                    fieldKey: "name",
                    mask: '',
                    errorMessage: 'Пожалуйста, заполните поле имени',
                    placeholder: "ФИО",
                },
                birthDate: {
                    id: 2,
                    value: "",
                    fieldKey: "birthDate",
                    mask: '##.##.####',
                    errorMessage: 'Пожалуйста, заполните поле даты рождения',
                    placeholder: "Дата рождения",
                },
                tel: {
                    id: 3,
                    value: "",
                    fieldKey: "tel",
                    mask: '+7 (###) ###-##-##',
                    errorMessage: 'Пожалуйста, заполните поле телефона',
                    placeholder: "Телефон",
                },
                email: {
                    id: 4,
                    value: "",
                    fieldKey: "email",
                    mask: '',
                    errorMessage: 'Пожалуйста, заполните поле электронной почты',
                    placeholder: "e-mail",
                },
            },
            tableData: {
                headers: [
                    'ФИО',
                    'Дата рождения',
                    'Номер телефона',
                    'Электронная почта',
                ],
                body: JSON.parse(localStorage.getItem('tableData')) || [],
            }
        };
    },
    getters: {
        tableHeaders(state) {
            return state.tableData.headers;
        },
        tableBody(state) {
            return state.tableData.body;
        },
        isValidForm(state) {
            return {
                value: state.validTotalForm(),
                fields: {
                    name: state.isValidName(),
                    birthDate: state.isValidBirthDate(),
                    tel: state.isValidTel(),
                    email: state.isValidEmail(),
                }
            };
        },
    },
    actions: {
        addDataToTable() {
            if (!this.isValidForm.value) return;

            let keys = [
                'name',
                'birthDate',
                'tel',
                'email',
            ];

            let newData = {};

            keys.forEach(formKey => {
                newData[formKey] = this.formData[formKey].value;
            });

            this.tableData.body.push(newData);

            this.saveDataInStorage();
            this.clearFormData();
        },
        clearFormData() {
            let keys = [
                'name',
                'birthDate',
                'tel',
                'email',
            ];

            keys.forEach(formKey => {
                this.formData[formKey].value = "";
            });
        },
        saveDataInStorage() {
            let key = 'tableData';

            let tableBodyConverted = JSON.stringify(this.tableData.body);
            localStorage.setItem(key, tableBodyConverted);
        },
        delDataFromStorage() {
            let key = 'tableData';
            localStorage.setItem(key, '');
        },
        // validation
        validTotalForm() {
            let isValidName = this.isValidName();
            let isValidBirthDate = this.isValidBirthDate();
            let isValidTel = this.isValidTel();
            let isValidEmail = this.isValidEmail();

            return (isValidName && isValidBirthDate && isValidTel && isValidEmail);
        },
        isValidName() {
            let name = this.formData.name.value;
            return name.length > 0;
        },
        isValidBirthDate() {
            let birthDate = this.formData.birthDate.value;
            let validMembersNum = 10;
            return birthDate.length === validMembersNum;
        },
        isValidTel() {
            let tel = this.formData.tel.value;
            let validMembersNum = 18;
            return tel.length === validMembersNum;
        },
        isValidEmail() {
            let email = this.formData.email.value;
            let symbolsToNeed = ["@", "."];

            return symbolsToNeed.reduce((isValid, symbol) => isValid && email.includes(symbol), true);
        },
    },
});