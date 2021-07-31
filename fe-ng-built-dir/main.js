(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Codes\Github\codename-parikshak\fe\src\main.ts */"zUnb");


/***/ }),

/***/ "1xiP":
/*!***************************************************************!*\
  !*** ./src/app/components/pages/landing/landing.component.ts ***!
  \***************************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");








const _c0 = function (a0) { return { visible: a0 }; };
class LandingComponent {
    constructor() {
        this.visibleCard = ''; // Possible values = 'CREATE_EXAM' 'TAKE_EXAM'
    }
    ngOnInit() {
    }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(); };
LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingComponent, selectors: [["app-landing"]], decls: 40, vars: 6, consts: [[1, "landing_page"], [1, "giant_text", "text-center"], [1, "mt-15", "text-center"], ["mat-raised-button", "", 1, "mr-5", 3, "click"], ["mat-raised-button", "", 3, "click"], [1, "action-cards-container"], [1, "action_card", "create_exam_card", 3, "ngClass"], [1, "close_ico", 3, "click"], ["mat-button", "", "routerLink", "/create-exam"], ["mat-button", "", "routerLink", "/create-org"], [1, "action_card", "take_exam_card", 3, "ngClass"], [1, "input_and_button"], ["fullWidth", "", 1, "mr-5"], ["type", "text", "matInput", "", "placeholder", "Enter exam code"], ["mat-raised-button", ""], [1, "mt-5"], ["mat-button", "", "routerLink", "/exams-gallery"]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "I am here to");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_Template_button_click_4_listener() { return ctx.visibleCard = "CREATE_EXAM"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Create an Exam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_Template_button_click_6_listener() { return ctx.visibleCard = "TAKE_EXAM"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Take an Exam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_Template_mat_icon_click_10_listener() { return ctx.visibleCard = ""; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "I want to");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Create a Single Exam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Create an Organization");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-card", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_Template_mat_icon_click_22_listener() { return ctx.visibleCard = ""; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "I have an Exam-Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Go ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "double_arrow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "OR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " I would like to");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Browse all exams");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.visibleCard === "CREATE_EXAM"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.visibleCard === "TAKE_EXAM"));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"]], styles: [".landing_page[_ngcontent-%COMP%] {\n  padding-top: 15px;\n}\n\n.giant_text[_ngcontent-%COMP%] {\n  font-size: 50px;\n  line-height: 60px;\n}\n\n.input_and_button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: baseline;\n}\n\n.action-cards-container[_ngcontent-%COMP%] {\n  width: 300px;\n  margin: 18px auto;\n  position: relative;\n}\n\n.action_card[_ngcontent-%COMP%] {\n  width: 300px;\n  text-align: left;\n  padding: 15px 25px;\n  border-top: 5px solid var(--primary-color);\n  transition: all 300ms ease-in;\n  transform: scaleY(0);\n  transform-origin: top;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.action_card[_ngcontent-%COMP%]::before {\n  content: \"\";\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  border-bottom: 10px solid var(--primary-color);\n  position: absolute;\n  top: -15px;\n}\n\n.create_exam_card[_ngcontent-%COMP%]::before {\n  left: 90px;\n}\n\n.take_exam_card[_ngcontent-%COMP%]::before {\n  right: 90px;\n}\n\n.action_card.visible[_ngcontent-%COMP%] {\n  transform: scaleY(1);\n}\n\n.action_card[_ngcontent-%COMP%]   .close_ico[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 5px;\n  top: 5px;\n  cursor: default;\n}\n\nmat-icon[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbGFuZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGlCQUFBO0FBQUo7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFDQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FBRUo7O0FBQUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUdKOztBQURBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUFJSjs7QUFGQTtFQUNJLFdBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsOENBQUE7RUFDQSxrQkFBQTtFQUVBLFVBQUE7QUFJSjs7QUFGQTtFQUNJLFVBQUE7QUFLSjs7QUFIQTtFQUNJLFdBQUE7QUFNSjs7QUFKQTtFQUNJLG9CQUFBO0FBT0o7O0FBTEE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtBQVFKOztBQU5BO0VBQ0ksMkJBQUE7QUFTSiIsImZpbGUiOiJsYW5kaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIFxyXG4ubGFuZGluZ19wYWdlIHtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG59XHJcbi5naWFudF90ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG59XHJcbi5pbnB1dF9hbmRfYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxufVxyXG4uYWN0aW9uLWNhcmRzLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBtYXJnaW46IDE4cHggYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uYWN0aW9uX2NhcmQge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmc6IDE1cHggMjVweDtcclxuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlLWluO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG59XHJcbi5hY3Rpb25fY2FyZDo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvLyByaWdodDogOTBweDtcclxuICAgIHRvcDogLTE1cHg7XHJcbn1cclxuLmNyZWF0ZV9leGFtX2NhcmQ6OmJlZm9yZSB7XHJcbiAgICBsZWZ0OiA5MHB4O1xyXG59XHJcbi50YWtlX2V4YW1fY2FyZDo6YmVmb3JlIHtcclxuICAgIHJpZ2h0OiA5MHB4O1xyXG59XHJcbi5hY3Rpb25fY2FyZC52aXNpYmxlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xyXG59XHJcbi5hY3Rpb25fY2FyZCAuY2xvc2VfaWNvIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiA1cHg7XHJcbiAgICB0b3A6IDVweDtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG5tYXQtaWNvbiB7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "3oOw":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/components/pages/create-exam/create-exam-finish-section/create-exam-finish-section.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: CreateExamFinishSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateExamFinishSectionComponent", function() { return CreateExamFinishSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CreateExamFinishSectionComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
CreateExamFinishSectionComponent.ɵfac = function CreateExamFinishSectionComponent_Factory(t) { return new (t || CreateExamFinishSectionComponent)(); };
CreateExamFinishSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateExamFinishSectionComponent, selectors: [["app-create-exam-finish-section"]], inputs: { qaFinishObj: "qaFinishObj" }, decls: 2, vars: 1, template: function CreateExamFinishSectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Duration: ", ctx.qaFinishObj.duration, "\n");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtZXhhbS1maW5pc2gtc2VjdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "40P8":
/*!***********************************************************************!*\
  !*** ./src/app/components/pages/create-exam/create-exam.component.ts ***!
  \***********************************************************************/
/*! exports provided: CreateExamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateExamComponent", function() { return CreateExamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_qa_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/qa.service */ "X/M3");
/* harmony import */ var _services_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/rest.service */ "tnAE");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _create_exam_intro_section_create_exam_intro_section_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-exam-intro-section/create-exam-intro-section.component */ "dozp");
/* harmony import */ var _create_exam_body_section_create_exam_body_section_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-exam-body-section/create-exam-body-section.component */ "PfO5");
/* harmony import */ var _create_exam_finish_section_create_exam_finish_section_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-exam-finish-section/create-exam-finish-section.component */ "3oOw");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");








class CreateExamComponent {
    constructor(_qaService, _restService) {
        this._qaService = _qaService;
        this._restService = _restService;
        this.qPaper = _qaService.getNewQPaper();
        // console.log('this.qaBlocksObj =', this.qaBlocksObj)
    }
    ngOnInit() {
    }
    saveDraft() {
        console.log(this.qPaper);
        const url = 'http://127.0.0.1:9099/api/exam';
        this._restService.post(url, this.qPaper);
    }
}
CreateExamComponent.ɵfac = function CreateExamComponent_Factory(t) { return new (t || CreateExamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_qa_service__WEBPACK_IMPORTED_MODULE_1__["QAService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"])); };
CreateExamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateExamComponent, selectors: [["app-create-exam"]], decls: 9, vars: 3, consts: [[1, "create-exam-stepper-container"], ["label", "Intro"], [3, "qaIntroObj"], ["label", "Body"], [3, "qaBlocksObj"], ["label", "Finish"], [3, "qaFinishObj"], ["mat-raised-button", "", 3, "click"]], template: function CreateExamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-horizontal-stepper", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-step", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-create-exam-intro-section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-create-exam-body-section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-step", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-create-exam-finish-section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateExamComponent_Template_button_click_7_listener() { return ctx.saveDraft(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Save Draft");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("qaIntroObj", ctx.qPaper.intro);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("qaBlocksObj", ctx.qPaper.body);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("qaFinishObj", ctx.qPaper.finish);
    } }, directives: [_angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatStep"], _create_exam_intro_section_create_exam_intro_section_component__WEBPACK_IMPORTED_MODULE_4__["CreateExamIntroSectionComponent"], _create_exam_body_section_create_exam_body_section_component__WEBPACK_IMPORTED_MODULE_5__["CreateExamBodySectionComponent"], _create_exam_finish_section_create_exam_finish_section_component__WEBPACK_IMPORTED_MODULE_6__["CreateExamFinishSectionComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]], styles: [".create-exam-stepper-container .mat-horizontal-content-container {\n  padding: 0 10px 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY3JlYXRlLWV4YW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDSSxvQkFBQTtBQUxKIiwiZmlsZSI6ImNyZWF0ZS1leGFtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLnFhYmxvY2stb3V0ZXIge1xyXG4vLyAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuLy8gfVxyXG4vLyAuYnRuLXBhbmVsIHtcclxuLy8gICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbi8vIH1cclxuLmNyZWF0ZS1leGFtLXN0ZXBwZXItY29udGFpbmVyIC5tYXQtaG9yaXpvbnRhbC1jb250ZW50LWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHggMjRweDtcclxufSJdfQ== */"], encapsulation: 2 });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "B+hG":
/*!*************************************************************!*\
  !*** ./src/app/components/pages/signin/signin.component.ts ***!
  \*************************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






class SigninComponent {
    constructor() {
        this.signInObj = { email: '', pswd: '' };
        this.signUpObj = { email: '', pswd: '', rpswd: '', fullname: '' };
    }
    ngOnInit() {
    }
    handleSignin(ev, el) {
        ev.preventDefault();
        console.log(el);
        // console.log(this.signInObj)
    }
    handleSignup(ev, el) {
        ev.preventDefault();
        console.log(el);
    }
}
SigninComponent.ɵfac = function SigninComponent_Factory(t) { return new (t || SigninComponent)(); };
SigninComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SigninComponent, selectors: [["app-signin"]], decls: 51, vars: 0, consts: [[1, "sign-in-up-page"], [1, "half-sec", "mb-15"], [3, "ngSubmit"], ["signinForm", "ngForm"], [1, "field"], ["matInput", "", "name", "email", "ngModel", ""], [1, "input-right-icon"], ["matInput", "", "type", "password", "name", "pswd", "ngModel", ""], ["type", "submit", "mat-raised-button", "", "color", "primary", 1, "field", "mt-15"], ["signupForm", "ngForm"], ["matInput", "", "name", "fulllname", "ngModel", ""], ["matInput", "", "type", "password", "name", "rpswd", "ngModel", ""], ["mat-raised-button", "", "color", "primary", 1, "field", "mt-15"]], template: function SigninComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SigninComponent_Template_form_ngSubmit_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.handleSignin($event, _r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "form", 2, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SigninComponent_Template_form_ngSubmit_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24); return ctx.handleSignup($event, _r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Fullname");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Repeat Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]], styles: [".sign-in-up-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.sign-in-up-page[_ngcontent-%COMP%]   .half-sec[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n  padding: 10px 15px;\n  min-width: 270px;\n}\n\n.sign-in-up-page[_ngcontent-%COMP%]   .half-sec[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%] {\n  width: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2lnbmluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7QUFDSjs7QUFDQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFBQTtFQUNJLFVBQUE7QUFHSiIsImZpbGUiOiJzaWduaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lnbi1pbi11cC1wYWdlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuLnNpZ24taW4tdXAtcGFnZSAuaGFsZi1zZWMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleDogMTtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgIG1pbi13aWR0aDogMjcwcHg7XHJcbn1cclxuLnNpZ24taW4tdXAtcGFnZSAuaGFsZi1zZWMgLmZpZWxkIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "EmjT":
/*!*****************************************************************************!*\
  !*** ./src/app/components/pages/create-exam/qa-block/qa-block.component.ts ***!
  \*****************************************************************************/
/*! exports provided: QABlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QABlockComponent", function() { return QABlockComponent; });
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/constants */ "GHWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");











function QABlockComponent_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "expand_less");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function QABlockComponent_mat_icon_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function QABlockComponent_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const qType_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", qType_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", qType_r5.text, " ");
} }
function QABlockComponent_mat_form_field_16_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("blur", function QABlockComponent_mat_form_field_16_Template_input_blur_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const optionIndex_r7 = ctx.index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.updateOptionValue($event, optionIndex_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r6 = ctx.$implicit;
    const optionIndex_r7 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r3.ALPHA[optionIndex_r7], ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", option_r6);
} }
function QABlockComponent_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QABlockComponent_button_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.addNewOption(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Add Option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { collapsed: a0 }; };
class QABlockComponent {
    constructor() {
        this.qaBlock = {};
        this.qaBlockIndex = 0;
        this.Q_TYPES = _utils_constants__WEBPACK_IMPORTED_MODULE_0__["Q_TYPES"];
        this.ALPHA = 'ABCDEFGHIJ'; // Max no. of options 10
        this.MAX_OPTION = 10;
        this.isCollapsed = false;
    }
    ngOnInit() {
    }
    addNewOption() {
        this.qaBlock.options.push('');
    }
    updateOptionValue(ev, opIndex) {
        this.qaBlock.options[opIndex] = ev.target.value;
    }
}
QABlockComponent.ɵfac = function QABlockComponent_Factory(t) { return new (t || QABlockComponent)(); };
QABlockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: QABlockComponent, selectors: [["app-qa-block"]], inputs: { qaBlock: "qaBlock", qaBlockIndex: "qaBlockIndex" }, decls: 18, vars: 11, consts: [[1, "top-tag"], [1, "id", "no-select", 3, "click"], [1, "toggler-ico"], [4, "ngIf"], [1, "qa-block", 3, "ngClass"], [1, "line-1"], [1, "mat-form-pt-0"], [3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "body"], [1, "question"], ["matInput", "", "placeholder", "Type question here...", "rows", "4", 3, "ngModel", "ngModelChange"], ["class", "option", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", 3, "click", 4, "ngIf"], [3, "value"], [1, "option"], [1, "op-index"], ["matInput", "", "placeholder", "Type option here...", 3, "value", "blur"], [1, "del-op", "input-right-icon"], ["mat-raised-button", "", 3, "click"]], template: function QABlockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QABlockComponent_Template_span_click_1_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, QABlockComponent_mat_icon_4_Template, 2, 0, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, QABlockComponent_mat_icon_5_Template, 2, 0, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function QABlockComponent_Template_mat_select_ngModelChange_9_listener($event) { return ctx.qaBlock.type = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, QABlockComponent_mat_option_10_Template, 2, 2, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Question");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function QABlockComponent_Template_textarea_ngModelChange_15_listener($event) { return ctx.qaBlock.question = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, QABlockComponent_mat_form_field_16_Template, 8, 2, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, QABlockComponent_button_17_Template, 2, 0, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" QA Block ", ctx.qaBlockIndex + 1, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c0, ctx.isCollapsed));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.qaBlock.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.Q_TYPES);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.qaBlock.question);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.qaBlock.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.qaBlock.options.length < ctx.MAX_OPTION);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"]], styles: [".top-tag[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.top-tag[_ngcontent-%COMP%]   .id[_ngcontent-%COMP%] {\n  background: var(--primary-color);\n  color: #fff;\n  padding: 5px 36px 5px 15px;\n  display: inline-flex;\n  align-items: center;\n  font-weight: 600;\n  font-size: 14px;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  position: relative;\n}\n\n.toggler-ico[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 6px;\n  top: 3px;\n  color: var(--primary-color-medium);\n  cursor: default;\n  color: #fff;\n}\n\n.toggler-ico[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n\n.qa-block[_ngcontent-%COMP%] {\n  border-top: 5px solid var(--primary-color);\n  padding-top: 0;\n  transition: all 500ms linear;\n  max-height: 500px;\n  overflow: auto;\n}\n\n.qa-block.collapsed[_ngcontent-%COMP%] {\n  overflow: hidden;\n  max-height: 7px;\n  padding-bottom: 0;\n}\n\n.line-1[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding-right: 50px;\n  position: relative;\n}\n\n.qablock-label[_ngcontent-%COMP%] {\n  align-items: center;\n  background: var(--primary-color-medium);\n  color: #fff;\n  display: flex;\n  height: 30px;\n  padding: 0 15px;\n  border-radius: 4px;\n  font-size: 14px;\n}\n\n.question[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.option[_ngcontent-%COMP%] {\n  width: calc(100% - 60px);\n  position: relative;\n  margin-left: 30px;\n}\n\n.op-index[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 7px;\n  left: -30px;\n  cursor: default;\n  font-weight: 600;\n  color: var(--primary-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHFhLWJsb2NrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjs7QUFDQTtFQUNJLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUFBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFHSjs7QUFEQTtFQUNJLGVBQUE7QUFJSjs7QUFGQTtFQUNJLDBDQUFBO0VBRUEsY0FBQTtFQUNBLDRCQUFBO0VBRUEsaUJBQUE7RUFDQSxjQUFBO0FBR0o7O0FBREE7RUFFSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUdKOztBQURBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUlKOztBQUZBO0VBQ0ksbUJBQUE7RUFDQSx1Q0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFLSjs7QUFIQTtFQUNJLFdBQUE7QUFNSjs7QUFKQTtFQUNJLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQU9KOztBQUxBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0FBUUoiLCJmaWxlIjoicWEtYmxvY2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wLXRhZyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnRvcC10YWcgLmlkIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiA1cHggMzZweCA1cHggMTVweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi50b2dnbGVyLWljbyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogNnB4O1xyXG4gICAgdG9wOiAzcHg7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1tZWRpdW0pO1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLnRvZ2dsZXItaWNvIG1hdC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG4ucWEtYmxvY2sge1xyXG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgLy8gbWFyZ2luOiAwIDE1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIHRyYW5zaXRpb246IGFsbCA1MDBtcyBsaW5lYXI7XHJcbiAgICAvLyB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XHJcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbi5xYS1ibG9jay5jb2xsYXBzZWQge1xyXG4gICAgLy8gdHJhbnNmb3JtOiBzY2FsZVkoMClcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBtYXgtaGVpZ2h0OiA3cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxufVxyXG4ubGluZS0xIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5xYWJsb2NrLWxhYmVsIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yLW1lZGl1bSk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLnF1ZXN0aW9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5vcHRpb24ge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbn1cclxuLm9wLWluZGV4IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogN3B4O1xyXG4gICAgbGVmdDogLTMwcHg7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG59Il19 */"] });


/***/ }),

/***/ "GHWL":
/*!************************************!*\
  !*** ./src/app/utils/constants.ts ***!
  \************************************/
/*! exports provided: Q_TYPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q_TYPES", function() { return Q_TYPES; });
const Q_TYPES = [
    { id: 'MCQ_SA', text: 'MCQ - Single Answer' },
    { id: 'MCQ_MA', text: 'MCQ - Multiple Answers' }
];


/***/ }),

/***/ "H3jT":
/*!**************************************************************!*\
  !*** ./src/app/components/layout/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() {
        this.currentYear = (new Date()).getFullYear();
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 3, vars: 1, consts: [[1, "footer"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A9 Suman Barick | 2020 - ", ctx.currentYear, "");
    } }, styles: [".footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: var(--primary-color-dark);\n  color: #fff;\n  padding: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0oiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvci1kYXJrKTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG59Il19 */"] });


/***/ }),

/***/ "H4t1":
/*!***************************************************************************!*\
  !*** ./src/app/components/pages/exams-gallery/exams-gallery.component.ts ***!
  \***************************************************************************/
/*! exports provided: ExamsGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamsGalleryComponent", function() { return ExamsGalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ExamsGalleryComponent {
    constructor() { }
    ngOnInit() {
    }
}
ExamsGalleryComponent.ɵfac = function ExamsGalleryComponent_Factory(t) { return new (t || ExamsGalleryComponent)(); };
ExamsGalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExamsGalleryComponent, selectors: [["app-exams-gallery"]], decls: 2, vars: 0, template: function ExamsGalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "exams-gallery works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGFtcy1nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "IKHT":
/*!*******************************************!*\
  !*** ./src/app/components/pages/index.ts ***!
  \*******************************************/
/*! exports provided: LandingComponent, CreateExamComponent, CreateOrgComponent, ExamsGalleryComponent, SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing/landing.component */ "1xiP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return _landing_landing_component__WEBPACK_IMPORTED_MODULE_0__["LandingComponent"]; });

/* harmony import */ var _create_exam_create_exam_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-exam/create-exam.component */ "40P8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateExamComponent", function() { return _create_exam_create_exam_component__WEBPACK_IMPORTED_MODULE_1__["CreateExamComponent"]; });

/* harmony import */ var _create_org_create_org_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-org/create-org.component */ "JNIZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateOrgComponent", function() { return _create_org_create_org_component__WEBPACK_IMPORTED_MODULE_2__["CreateOrgComponent"]; });

/* harmony import */ var _exams_gallery_exams_gallery_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exams-gallery/exams-gallery.component */ "H4t1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExamsGalleryComponent", function() { return _exams_gallery_exams_gallery_component__WEBPACK_IMPORTED_MODULE_3__["ExamsGalleryComponent"]; });

/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signin/signin.component */ "B+hG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return _signin_signin_component__WEBPACK_IMPORTED_MODULE_4__["SigninComponent"]; });









/***/ }),

/***/ "JNIZ":
/*!*********************************************************************!*\
  !*** ./src/app/components/pages/create-org/create-org.component.ts ***!
  \*********************************************************************/
/*! exports provided: CreateOrgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateOrgComponent", function() { return CreateOrgComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CreateOrgComponent {
    constructor() { }
    ngOnInit() {
    }
}
CreateOrgComponent.ɵfac = function CreateOrgComponent_Factory(t) { return new (t || CreateOrgComponent)(); };
CreateOrgComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateOrgComponent, selectors: [["app-create-org"]], decls: 2, vars: 0, template: function CreateOrgComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "create-org works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtb3JnLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "PfO5":
/*!*************************************************************************************************************!*\
  !*** ./src/app/components/pages/create-exam/create-exam-body-section/create-exam-body-section.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: CreateExamBodySectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateExamBodySectionComponent", function() { return CreateExamBodySectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_qa_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/qa.service */ "X/M3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _qa_block_qa_block_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../qa-block/qa-block.component */ "EmjT");





function CreateExamBodySectionComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-qa-block", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const qaBlock_r1 = ctx.$implicit;
    const blockIndex_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("qaBlock", qaBlock_r1)("qaBlockIndex", blockIndex_r2);
} }
class CreateExamBodySectionComponent {
    constructor(_qaService) {
        this._qaService = _qaService;
        this.getQABlocks = () => Object.values(this.qaBlocksObj);
        this.addNewQABlock = () => {
            const newQABlockObj = this._qaService.getNewQABlock();
            this.qaBlocksObj[newQABlockObj.id] = newQABlockObj;
        };
    }
    ngOnInit() {
    }
}
CreateExamBodySectionComponent.ɵfac = function CreateExamBodySectionComponent_Factory(t) { return new (t || CreateExamBodySectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_qa_service__WEBPACK_IMPORTED_MODULE_1__["QAService"])); };
CreateExamBodySectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateExamBodySectionComponent, selectors: [["app-create-exam-body-section"]], inputs: { qaBlocksObj: "qaBlocksObj" }, decls: 7, vars: 1, consts: [["class", "qablock-outer mt-15", 4, "ngFor", "ngForOf"], [1, "btn-panel", "mt-30"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "qablock-outer", "mt-15"], [3, "qaBlock", "qaBlockIndex"]], template: function CreateExamBodySectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Create the Questions and Answers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CreateExamBodySectionComponent_div_3_Template, 2, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateExamBodySectionComponent_Template_button_click_5_listener() { return ctx.addNewQABlock(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Add New QA Block");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getQABlocks());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _qa_block_qa_block_component__WEBPACK_IMPORTED_MODULE_4__["QABlockComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtZXhhbS1ib2R5LXNlY3Rpb24uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "RAyZ":
/*!****************************************************************!*\
  !*** ./src/app/components/layout/sidenav/sidenav.component.ts ***!
  \****************************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






const _c0 = ["sidenavdrawer"];
function SidenavComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_li_7_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.toggleSidenav(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const nav_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", nav_r2.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](nav_r2.matIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", nav_r2.title, " ");
} }
const _c1 = function (a0) { return { "open": a0 }; };
class SidenavComponent {
    constructor() {
        this.isSidebarOpened = false;
        this.navs = [
            { title: 'Home', path: '/', matIcon: 'home' },
            // { title: 'Create Exam', path: '/create-exam' },
            { title: 'Exams', path: '/exams-gallery', matIcon: 'fact_check' },
            { title: 'Organizations', path: '/create-org', matIcon: 'school' },
            { title: 'My Dashboard', path: '/link-5', matIcon: 'dashboard' },
            { title: 'Sign In', path: '/sign-in', matIcon: 'people_alt' },
        ];
    }
    ngOnInit() {
        console.log('Inside ngOnInit');
        console.log(this.sidenavdrawer);
    }
    toggleSidenav() {
        this.sidenavdrawer.toggle();
        this.isSidebarOpened = !this.isSidebarOpened;
    }
}
SidenavComponent.ɵfac = function SidenavComponent_Factory(t) { return new (t || SidenavComponent)(); };
SidenavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidenavComponent, selectors: [["app-sidenav"]], viewQuery: function SidenavComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sidenavdrawer = _t.first);
    } }, decls: 11, vars: 4, consts: [["autosize", "", 1, "sidenav-container", 3, "ngClass"], ["mode", "side", 1, "sidenav"], ["sidenavdrawer", ""], ["type", "button", "mat-button", "", 1, "close-sidenav", 3, "click"], [3, "click", 4, "ngFor", "ngForOf"], ["type", "button", "mat-button", "", 1, "btn-toggle", 3, "click"], [3, "click"], [3, "routerLink"], [1, "mr-10"]], template: function SidenavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-drawer-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-drawer", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_Template_button_click_3_listener() { return ctx.toggleSidenav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SidenavComponent_li_7_Template, 5, 3, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_Template_button_click_8_listener() { return ctx.toggleSidenav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx.isSidebarOpened));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navs);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatDrawerContainer"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatDrawer"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: [".sidenav-container[_ngcontent-%COMP%] {\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  background: transparent;\n}\n\n.sidenav-container[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%] {\n  width: 200px;\n  background: orange;\n  border-right: none;\n}\n\n.sidenav-container[_ngcontent-%COMP%]   .btn-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 22px;\n  position: fixed;\n  top: 8px;\n  left: -7px;\n}\n\n.sidenav-container[_ngcontent-%COMP%]   .close-sidenav[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 22px;\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n.sidenav-container.open[_ngcontent-%COMP%]   .btn-toggle[_ngcontent-%COMP%] {\n  background: orange;\n}\n\n.sidenav-container[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 0;\n  list-style: none;\n  margin-top: 40px;\n}\n\n.sidenav-container[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  padding: 10px 20px;\n  color: #fff !important;\n  text-decoration: none;\n  font-size: 20px;\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2lkZW5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFBQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FBR0o7O0FBREE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7QUFJSjs7QUFGQTtFQUNJLGtCQUFBO0FBS0o7O0FBSEE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQU1KOztBQUpBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFPSiIsImZpbGUiOiJzaWRlbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG4uc2lkZW5hdi1jb250YWluZXIgLnNpZGVuYXYge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogb3JhbmdlO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG59XHJcbi5zaWRlbmF2LWNvbnRhaW5lciAuYnRuLXRvZ2dsZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogOHB4O1xyXG4gICAgbGVmdDogLTdweDtcclxufVxyXG4uc2lkZW5hdi1jb250YWluZXIgLmNsb3NlLXNpZGVuYXYge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxufVxyXG4uc2lkZW5hdi1jb250YWluZXIub3BlbiAuYnRuLXRvZ2dsZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBvcmFuZ2U7XHJcbn1cclxuLnNpZGVuYXYtY29udGFpbmVyIC5zaWRlbmF2IHVsIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG4uc2lkZW5hdi1jb250YWluZXIgLnNpZGVuYXYgdWwgbGkgYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufSJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/layout/header/header.component */ "gK8K");
/* harmony import */ var _components_layout_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/layout/sidenav/sidenav.component */ "RAyZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/layout/footer/footer.component */ "H3jT");





class AppComponent {
    constructor() {
        this.title = 'fe';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [[1, "main_container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sidenav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");
    } }, directives: [_components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _components_layout_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_2__["SidenavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: [".main_container[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 90px);\n  padding: 15px 10px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUNKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluX2NvbnRhaW5lciB7XHJcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gOTBweCk7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59Il19 */"] });


/***/ }),

/***/ "X/M3":
/*!****************************************!*\
  !*** ./src/app/services/qa.service.ts ***!
  \****************************************/
/*! exports provided: QAService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QAService", function() { return QAService; });
/* harmony import */ var _models_QAPaper_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/QAPaper.model */ "Xtpo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class QAService {
    constructor() { }
    getNewQPaper() {
        return new _models_QAPaper_model__WEBPACK_IMPORTED_MODULE_0__["QAPaper"]();
    }
    getNewQABlock() {
        return new _models_QAPaper_model__WEBPACK_IMPORTED_MODULE_0__["QABlock"]();
    }
}
QAService.ɵfac = function QAService_Factory(t) { return new (t || QAService)(); };
QAService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: QAService, factory: QAService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Xtpo":
/*!*****************************************!*\
  !*** ./src/app/models/QAPaper.model.ts ***!
  \*****************************************/
/*! exports provided: QAPaper, QAPaper_Intro, QAPaper_Finish, QABlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QAPaper", function() { return QAPaper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QAPaper_Intro", function() { return QAPaper_Intro; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QAPaper_Finish", function() { return QAPaper_Finish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QABlock", function() { return QABlock; });
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/constants */ "GHWL");

class QAPaper {
    constructor() {
        this.id = '_LOCAL_QPaper_' + Date.now() + '_' + Math.random().toString().replace('.', '');
        this.intro = new QAPaper_Intro();
        this.finish = new QAPaper_Finish();
        let newQABlock = new QABlock();
        // Give one QA Block to start with
        this.body = {
            [newQABlock.id]: newQABlock
        };
    }
}
class QAPaper_Intro {
    constructor() {
        this.name = 'New Exam Paper';
    }
}
class QAPaper_Finish {
    constructor() {
        this.duration = 1800;
    }
}
class QABlock {
    constructor() {
        this.id = 'QA_' + Date.now() + '_' + Math.random().toString().replace('.', '');
        this.type = _utils_constants__WEBPACK_IMPORTED_MODULE_0__["Q_TYPES"][0].id;
        this.question = '';
        this.options = [];
        this.ans = '';
    }
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/layout */ "lRmk");
/* harmony import */ var _components_pages__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/pages */ "IKHT");
/* harmony import */ var _components_pages_create_exam_qa_block_qa_block_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/pages/create-exam/qa-block/qa-block.component */ "EmjT");
/* harmony import */ var _components_pages_create_exam_create_exam_intro_section_create_exam_intro_section_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/pages/create-exam/create-exam-intro-section/create-exam-intro-section.component */ "dozp");
/* harmony import */ var _components_pages_create_exam_create_exam_body_section_create_exam_body_section_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/pages/create-exam/create-exam-body-section/create-exam-body-section.component */ "PfO5");
/* harmony import */ var _components_pages_create_exam_create_exam_finish_section_create_exam_finish_section_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/pages/create-exam/create-exam-finish-section/create-exam-finish-section.component */ "3oOw");
/* harmony import */ var _components_layout_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/layout/sidenav/sidenav.component */ "RAyZ");
/* harmony import */ var _components_pages_signin_signin_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/pages/signin/signin.component */ "B+hG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ "fXoL");























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__["MatStepperModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_layout__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
        _components_layout__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
        _components_pages__WEBPACK_IMPORTED_MODULE_15__["LandingComponent"],
        _components_pages__WEBPACK_IMPORTED_MODULE_15__["CreateExamComponent"],
        _components_pages__WEBPACK_IMPORTED_MODULE_15__["CreateOrgComponent"],
        _components_pages__WEBPACK_IMPORTED_MODULE_15__["ExamsGalleryComponent"],
        _components_pages_create_exam_qa_block_qa_block_component__WEBPACK_IMPORTED_MODULE_16__["QABlockComponent"],
        _components_pages_create_exam_create_exam_intro_section_create_exam_intro_section_component__WEBPACK_IMPORTED_MODULE_17__["CreateExamIntroSectionComponent"],
        _components_pages_create_exam_create_exam_body_section_create_exam_body_section_component__WEBPACK_IMPORTED_MODULE_18__["CreateExamBodySectionComponent"],
        _components_pages_create_exam_create_exam_finish_section_create_exam_finish_section_component__WEBPACK_IMPORTED_MODULE_19__["CreateExamFinishSectionComponent"],
        _components_layout_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_20__["SidenavComponent"],
        _components_pages_signin_signin_component__WEBPACK_IMPORTED_MODULE_21__["SigninComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__["MatStepperModule"]] }); })();


/***/ }),

/***/ "dozp":
/*!***************************************************************************************************************!*\
  !*** ./src/app/components/pages/create-exam/create-exam-intro-section/create-exam-intro-section.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: CreateExamIntroSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateExamIntroSectionComponent", function() { return CreateExamIntroSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CreateExamIntroSectionComponent {
    constructor() { }
    ngOnInit() {
    }
}
CreateExamIntroSectionComponent.ɵfac = function CreateExamIntroSectionComponent_Factory(t) { return new (t || CreateExamIntroSectionComponent)(); };
CreateExamIntroSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateExamIntroSectionComponent, selectors: [["app-create-exam-intro-section"]], inputs: { qaIntroObj: "qaIntroObj" }, decls: 2, vars: 1, template: function CreateExamIntroSectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Name: ", ctx.qaIntroObj.name, "\n");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtZXhhbS1pbnRyby1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "gK8K":
/*!**************************************************************!*\
  !*** ./src/app/components/layout/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");


class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 4, vars: 0, consts: [[1, "header"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "<< Exam Faculty >>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"]], styles: [".header[_ngcontent-%COMP%] {\n  background: var(--primary-color);\n  font-size: 30px;\n  color: #fff;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FBQ0oiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "lRmk":
/*!********************************************!*\
  !*** ./src/app/components/layout/index.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent, FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ "gK8K");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return _header_header_component__WEBPACK_IMPORTED_MODULE_0__["HeaderComponent"]; });

/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ "H3jT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"]; });






/***/ }),

/***/ "tnAE":
/*!******************************************!*\
  !*** ./src/app/services/rest.service.ts ***!
  \******************************************/
/*! exports provided: RestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestService", function() { return RestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class RestService {
    constructor(http) {
        this.http = http;
    }
    post(url, data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let res = yield this.http.post(url, data).toPromise();
            console.log(res);
        });
    }
}
RestService.ɵfac = function RestService_Factory(t) { return new (t || RestService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
RestService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RestService, factory: RestService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/pages */ "IKHT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', component: _components_pages__WEBPACK_IMPORTED_MODULE_1__["LandingComponent"] },
    { path: 'home', component: _components_pages__WEBPACK_IMPORTED_MODULE_1__["LandingComponent"] },
    { path: 'create-exam', component: _components_pages__WEBPACK_IMPORTED_MODULE_1__["CreateExamComponent"] },
    { path: 'create-org', component: _components_pages__WEBPACK_IMPORTED_MODULE_1__["CreateOrgComponent"] },
    { path: 'exams-gallery', component: _components_pages__WEBPACK_IMPORTED_MODULE_1__["ExamsGalleryComponent"] },
    { path: 'sign-in', component: _components_pages__WEBPACK_IMPORTED_MODULE_1__["SigninComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map