(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/GlobalVariables.ts":
/*!************************************!*\
  !*** ./src/app/GlobalVariables.ts ***!
  \************************************/
/*! exports provided: VERSION, APP_NAME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_NAME", function() { return APP_NAME; });
// File for global variables
var VERSION = '0.1';
var APP_NAME = 'DBServer';


/***/ }),

/***/ "./src/app/_model/user.ts":
/*!********************************!*\
  !*** ./src/app/_model/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(u) {
        this.uname = u.name;
        this.pname = u.pname;
        this.user = u.user;
    }
    Object.defineProperty(User.prototype, "pname", {
        get: function () {
            return this._pname;
        },
        set: function (value) {
            this._pname = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "uname", {
        get: function () {
            return this._uname;
        },
        set: function (value) {
            this._uname = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "user", {
        get: function () {
            return this._user;
        },
        set: function (value) {
            this._user = value;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());



/***/ }),

/***/ "./src/app/_pipe/currency-format.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/_pipe/currency-format.pipe.ts ***!
  \***********************************************/
/*! exports provided: CurrencyFormatPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyFormatPipe", function() { return CurrencyFormatPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CurrencyFormatPipe = /** @class */ (function () {
    function CurrencyFormatPipe() {
    }
    CurrencyFormatPipe.prototype.transform = function (value, decimalLength, currencySign, chunkDelimiter, decimalDelimiter, chunkLength) {
        if (decimalLength === void 0) { decimalLength = 0; }
        if (currencySign === void 0) { currencySign = 'R$ '; }
        if (chunkDelimiter === void 0) { chunkDelimiter = '.'; }
        if (decimalDelimiter === void 0) { decimalDelimiter = ','; }
        if (chunkLength === void 0) { chunkLength = 3; }
        value = Number.parseInt(value);
        var sign = '';
        // value /= 100;
        if (value < 0) {
            sign = '- ';
            value *= -1;
        }
        var result = '\\d(?=(\\d{' + chunkLength + '})+' + (decimalLength > 0 ? '\\D' : '$') + ')';
        // tslint:disable-next-line:no-bitwise
        var num = value.toFixed(Math.max(0, ~~decimalLength));
        // tslint:disable-next-line:max-line-length
        return sign + currencySign + (decimalDelimiter ? num.replace('.', decimalDelimiter) : num).replace(new RegExp(result, 'g'), '$&' + chunkDelimiter);
    };
    CurrencyFormatPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'currencyFormat'
        })
    ], CurrencyFormatPipe);
    return CurrencyFormatPipe;
}());



/***/ }),

/***/ "./src/app/_pipe/keys.pipe.ts":
/*!************************************!*\
  !*** ./src/app/_pipe/keys.pipe.ts ***!
  \************************************/
/*! exports provided: KeysPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeysPipe", function() { return KeysPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeysPipe = /** @class */ (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        var keys = [];
        // tslint:disable-next-line:forin
        for (var key in value) {
            keys.push({ key: key, value: value[key] });
        }
        return keys;
    };
    KeysPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'keys'
        })
    ], KeysPipe);
    return KeysPipe;
}());



/***/ }),

/***/ "./src/app/_pipe/rating-format.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/_pipe/rating-format.pipe.ts ***!
  \*********************************************/
/*! exports provided: RatingFormatPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingFormatPipe", function() { return RatingFormatPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RatingFormatPipe = /** @class */ (function () {
    function RatingFormatPipe() {
    }
    RatingFormatPipe.prototype.transform = function (value) {
        var rating;
        if (value < 4) {
            rating = 'A' + value;
        }
        else if (value < 10) {
            rating = 'B' + (value - 3);
        }
        else if (value < 13) {
            rating = 'C' + (value - 9);
        }
        else {
            rating = 'D' + (value - 12);
        }
        return rating;
    };
    RatingFormatPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'ratingFormat'
        })
    ], RatingFormatPipe);
    return RatingFormatPipe;
}());



/***/ }),

/***/ "./src/app/_service/auth/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_service/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_model/user */ "./src/app/_model/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.user = null;
    }
    AuthService.prototype.login = function (user, pwd) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            console.log(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].server + '/user/auth.php');
            _this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].server + '/user/auth.php', {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'user': user,
                    'pwd': pwd,
                }),
                observe: 'response'
            }).subscribe(function (resp) {
                console.log(resp);
                console.log(resp.body);
                console.log(resp.body.data.user == undefined);
                if (resp.body.data.user == undefined)
                    reject('nothing');
                else {
                    _this.user = new _model_user__WEBPACK_IMPORTED_MODULE_3__["User"](resp.body.data);
                    console.log(user);
                    resolve(resp.body.data);
                }
            }, function (error) { return reject(error); });
        });
    };
    AuthService.prototype.cadastro = function (user, name, pwd) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].server + '/user/create.php', {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'user': user,
                    'name': name,
                    'pwd': pwd,
                }),
                observe: 'response'
            }).subscribe(function (resp) {
                resolve();
            }, function (error) { return reject(error); });
        });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/_service/business/business.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/_service/business/business.service.ts ***!
  \*******************************************************/
/*! exports provided: BusinessService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessService", function() { return BusinessService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BusinessService = /** @class */ (function () {
    function BusinessService(http) {
        this.http = http;
    }
    BusinessService.prototype.getDB = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].server + '/db/get.php', {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'token': user.user
                }),
                observe: 'response'
            }).subscribe(function (resp) {
                console.log(resp.body);
                console.log(resp.body.data);
                console.log(resp.body.data[0] == undefined);
                if (resp.body.data[0] == undefined)
                    reject('nothing');
                else {
                    var db_1 = [];
                    resp.body.data.forEach(function (element) {
                        db_1.push(element);
                    });
                    resolve(db_1);
                }
            }, function (error) { return reject(error); });
        });
    };
    BusinessService.prototype.createDB = function (user, db) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].server + '/db/create.php', {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'token': user.user,
                    'username': user.uname,
                    'database': db,
                }),
                observe: 'response'
            }).subscribe(function (resp) {
                console.log(resp);
                console.log(resp.body);
                console.log(resp.body.status == undefined);
                if (resp.body.status == undefined || resp.body.status != '201')
                    reject('nothing');
                else {
                    resolve();
                }
            }, function (error) { return reject(error); });
        });
    };
    BusinessService.prototype.delDB = function (user, db) {
        var _this = this;
        console.log(db);
        console.log(user.user);
        return new Promise(function (resolve, reject) {
            _this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].server + '/db/delete.php', {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'token': user.user,
                    'database': db,
                }),
                observe: 'response'
            }).subscribe(function (resp) {
                console.log(resp);
                console.log(resp.body);
                if (resp.body == null || resp.body.status != '201')
                    reject('nothing');
                else {
                    resolve();
                }
            }, function (error) { return reject(error); });
        });
    };
    BusinessService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BusinessService);
    return BusinessService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_service/auth/auth.service */ "./src/app/_service/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(auth) {
        this.auth = auth;
        this.title = 'app';
        this.user = null;
    }
    AppComponent.prototype.ngOnInit = function () {
        // this.auth.currentUserObservable().subscribe(
        //   (user) => {
        //     this.user = user;
        //     // console.log('AppInit>>');
        //     // console.log(user);
        //   });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _core_MaterialModule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/MaterialModule */ "./src/app/core/MaterialModule.ts");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_service/auth/auth.service */ "./src/app/_service/auth/auth.service.ts");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var app_app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _pipe_currency_format_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_pipe/currency-format.pipe */ "./src/app/_pipe/currency-format.pipe.ts");
/* harmony import */ var _pipe_rating_format_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_pipe/rating-format.pipe */ "./src/app/_pipe/rating-format.pipe.ts");
/* harmony import */ var _pipe_keys_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_pipe/keys.pipe */ "./src/app/_pipe/keys.pipe.ts");
/* harmony import */ var _service_business_business_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_service/business/business.service */ "./src/app/_service/business/business.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _pages_menu_menu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/menu/menu.component */ "./src/app/pages/menu/menu.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/cadastro/cadastro.component */ "./src/app/pages/cadastro/cadastro.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _database_database_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./database/database.component */ "./src/app/database/database.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { CoreModule } from './core/CoreModules';


// App Routes

// Pipes



// Services

// Telas

// Components - Elementos

// Paginas Padrao






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _pipe_currency_format_pipe__WEBPACK_IMPORTED_MODULE_7__["CurrencyFormatPipe"],
                _components_search_search_component__WEBPACK_IMPORTED_MODULE_12__["SearchComponent"],
                _pipe_rating_format_pipe__WEBPACK_IMPORTED_MODULE_8__["RatingFormatPipe"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                _pages_menu_menu_component__WEBPACK_IMPORTED_MODULE_13__["MenuComponent"],
                _pipe_keys_pipe__WEBPACK_IMPORTED_MODULE_9__["KeysPipe"],
                _pages_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_15__["CadastroComponent"],
                _database_database_component__WEBPACK_IMPORTED_MODULE_18__["DatabaseComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                app_app_routing__WEBPACK_IMPORTED_MODULE_6__["AppRouting"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuthModule"],
                _core_MaterialModule__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_17__["CommonModule"]
            ],
            providers: [
                _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
                _service_business_business_service__WEBPACK_IMPORTED_MODULE_10__["BusinessService"]
            ],
            entryComponents: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRouting", function() { return AppRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/cadastro/cadastro.component */ "./src/app/pages/cadastro/cadastro.component.ts");
/* harmony import */ var _database_database_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./database/database.component */ "./src/app/database/database.component.ts");




var routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    // {
    //     path: '**',
    //     component: NotFound
    // },
    {
        path: 'login',
        component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"],
    },
    {
        path: 'cadastro',
        component: _pages_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_2__["CadastroComponent"]
    },
    {
        path: 'database',
        component: _database_database_component__WEBPACK_IMPORTED_MODULE_3__["DatabaseComponent"]
    }
];
var AppRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
    useHash: false
});


/***/ }),

/***/ "./src/app/components/search/search.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/search/search.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* pesquisar na lista */\n\n.form {\n    width: 100%;\n}\n\n.search {\n    padding-top: 0;\n    padding-bottom: 0;\n    margin: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0JBQXdCOztBQUV4QjtJQUNJLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsYUFBYTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogcGVzcXVpc2FyIG5hIGxpc3RhICovXG5cbi5mb3JtIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnNlYXJjaCB7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgbWFyZ2luOiAxNHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/search/search.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"search\">\n  <mat-card-content>\n    <mat-form-field class=\"form\">\n      <input matInput (keyup)=\"search($event.target.value)\" placeholder=\"Pesquisar\">\n      <mat-icon matSuffix>search</mat-icon>\n    </mat-form-field>\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
        this.output = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.search = function (value) {
        this.output.emit(value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "output", void 0);
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/components/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/components/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/core/MaterialModule.ts":
/*!****************************************!*\
  !*** ./src/app/core/MaterialModule.ts ***!
  \****************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// Material



var modules = [
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"]
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: modules,
            exports: modules
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/database/database.component.css":
/*!*************************************************!*\
  !*** ./src/app/database/database.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu {\n    position: absolute;\n    top: 0;\n    right: 0;\n    left: 0;\n}\n\n.margin {\n    margin: 14px;\n}\n\n.fit-screen {\n    width: 100%;\n}\n\n.content {\n    position: relative;\n    overflow: auto;\n}\n\n.tabs {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 12;\n}\n\n.tab { \n    padding: 4px;\n    min-width: 42px;\n}\n\n.align-right {\n    position: absolute;\n    right: 14px;\n}\n\n.db-name {\n    width: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF0YWJhc2UvZGF0YWJhc2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixPQUFPO0lBQ1AsU0FBUztJQUNULFFBQVE7Q0FDWDs7QUFFRDtJQUNJLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxZQUFZO0NBQ2Y7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtDQUNsQjs7QUFFRDtJQUNJLHlCQUFpQjtJQUFqQixpQkFBaUI7SUFDakIsT0FBTztJQUNQLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtDQUNmOztBQUVEO0lBQ0ksV0FBVztDQUNkIiwiZmlsZSI6InNyYy9hcHAvZGF0YWJhc2UvZGF0YWJhc2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGxlZnQ6IDA7XG59XG5cbi5tYXJnaW4ge1xuICAgIG1hcmdpbjogMTRweDtcbn1cblxuLmZpdC1zY3JlZW4ge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG4udGFicyB7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDA7XG4gICAgei1pbmRleDogMTI7XG59XG5cbi50YWIgeyBcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgbWluLXdpZHRoOiA0MnB4O1xufVxuXG4uYWxpZ24tcmlnaHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTRweDtcbn1cblxuLmRiLW5hbWUge1xuICAgIHdpZHRoOiA4MCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/database/database.component.html":
/*!**************************************************!*\
  !*** ./src/app/database/database.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"background\">\n</div>\n\n<div class=\"menu\">\n\n  <mat-toolbar class=\"tabs mat-elevation-z8\">\n    <h1>Bem vindo, {{auth.user.pname}}</h1>\n    <button mat-icon-button (click)=\"logout()\" class=\"align-right\">\n      <mat-icon>exit_to_app</mat-icon>\n    </button>\n  </mat-toolbar>\n\n  <mat-card *ngFor=\"let database of databases\" class=\"margin\">\n      {{database}}\n      <button mat-icon-button (click)=\"delete(database)\" class=\"align-right\">\n        <mat-icon color=\"warn\">delete</mat-icon>\n      </button>\n  </mat-card>\n\n  <mat-card class=\"margin\">\n      <mat-form-field appearance=\"outline\" class=\"db-name\">\n        <input matInput #dbname placeholder=\"Nome da Base de Dados\" required>\n      </mat-form-field>\n      <button mat-icon-button color=\"primary\" (click)=\"create(dbname.value)\" class=\"align-right\">\n        <mat-icon>add</mat-icon>\n      </button>\n  </mat-card>\n\n</div>"

/***/ }),

/***/ "./src/app/database/database.component.ts":
/*!************************************************!*\
  !*** ./src/app/database/database.component.ts ***!
  \************************************************/
/*! exports provided: DatabaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseComponent", function() { return DatabaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_service/auth/auth.service */ "./src/app/_service/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_business_business_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_service/business/business.service */ "./src/app/_service/business/business.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DatabaseComponent = /** @class */ (function () {
    function DatabaseComponent(auth, db, router) {
        this.auth = auth;
        this.db = db;
        this.router = router;
        this.databases = [];
        console.log(auth.user);
        if (auth.user == null)
            this.router.navigate(['']);
        else {
            this.getDB();
        }
    }
    DatabaseComponent.prototype.getDB = function () {
        var _this = this;
        this.db.getDB(this.auth.user).then(function (res) {
            _this.databases = res;
        }).catch(function (err) {
            _this.databases = [];
            console.log(err);
        });
    };
    DatabaseComponent.prototype.ngOnInit = function () {
    };
    DatabaseComponent.prototype.delete = function (data) {
        var _this = this;
        this.db.delDB(this.auth.user, data).then(function (res) {
            _this.getDB();
        }).catch(function (err) { return console.log(err); });
    };
    DatabaseComponent.prototype.create = function (data) {
        var _this = this;
        this.db.createDB(this.auth.user, data).then(function (res) {
            _this.getDB();
        }).catch(function (err) { return console.log(err); });
    };
    DatabaseComponent.prototype.logout = function () {
        this.router.navigate(['/']);
    };
    DatabaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-database',
            template: __webpack_require__(/*! ./database.component.html */ "./src/app/database/database.component.html"),
            styles: [__webpack_require__(/*! ./database.component.css */ "./src/app/database/database.component.css")]
        }),
        __metadata("design:paramtypes", [_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _service_business_business_service__WEBPACK_IMPORTED_MODULE_3__["BusinessService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DatabaseComponent);
    return DatabaseComponent;
}());



/***/ }),

/***/ "./src/app/pages/cadastro/cadastro.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/cadastro/cadastro.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login {\n    position: fixed;\n    left: -10px;\n    right: 0;\n    top: 0;\n    bottom: -10px;\n}\n\n.align-center {\n    /* margin: 28px auto !important; */\n    text-align: center;\n}\n\n.fit-screen {\n    width: 80vw;    \n}\n\n.footer {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    /* height: 20px; */\n    /* opacity: 0; */\n}\n\n.btn-cadastro {\n    width: 100%;\n    margin: 14px;\n}\n\n@media only screen and (min-width: 960px) {\n\n    .margin {\n        margin: 56px;\n    }\n\n    .main {\n        width: 70%;\n        /* display: block; */\n        margin: 28px auto;\n    }\n}\n\n/* .btn {\n    margin: 14px !important;\n} */\n\n#login-button::after {\n    content: 'Cadastrar';\n}\n\n#login-button.erro::after {\n    content: 'Erro!'\n}\n\n/* .erro {\n    background-color: rgba(255, 104, 72, 1);\n} */\n\n.login-card {\n    /* margin: 14px; */\n    /* margin: auto auto; */\n    /* position: absolute;\n    top: 15%; */\n    /* width: 75%; */\n    width: 250px;\n    margin: 10px auto;\n}\n\n.login {\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  /* background: gray; */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FkYXN0cm8vY2FkYXN0cm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osU0FBUztJQUNULE9BQU87SUFDUCxjQUFjO0NBQ2pCOztBQUVEO0lBQ0ksbUNBQW1DO0lBQ25DLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLFlBQVk7Q0FDZjs7QUFJRDtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsUUFBUTtJQUNSLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7Q0FDaEI7O0FBR0Q7O0lBRUk7UUFDSSxhQUFhO0tBQ2hCOztJQUVEO1FBQ0ksV0FBVztRQUNYLHFCQUFxQjtRQUNyQixrQkFBa0I7S0FDckI7Q0FDSjs7QUFLRDs7SUFFSTs7QUFFSjtJQUNJLHFCQUFxQjtDQUN4Qjs7QUFFRDtJQUNJLGdCQUFnQjtDQUNuQjs7QUFFRDs7SUFFSTs7QUFFSjtJQUNJLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEI7Z0JBQ1k7SUFDWixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGtCQUFrQjtDQUNyQjs7QUFFRDtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsd0JBQXdCO0VBQ3hCLG9CQUFvQjtFQUNwQix1QkFBdUI7Q0FDeEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jYWRhc3Ryby9jYWRhc3Ryby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogLTEwcHg7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogLTEwcHg7XG59XG5cbi5hbGlnbi1jZW50ZXIge1xuICAgIC8qIG1hcmdpbjogMjhweCBhdXRvICFpbXBvcnRhbnQ7ICovXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZml0LXNjcmVlbiB7XG4gICAgd2lkdGg6IDgwdnc7ICAgIFxufVxuXG5cblxuLmZvb3RlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIC8qIGhlaWdodDogMjBweDsgKi9cbiAgICAvKiBvcGFjaXR5OiAwOyAqL1xufVxuXG4uYnRuLWNhZGFzdHJvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDE0cHg7XG59XG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCkge1xuXG4gICAgLm1hcmdpbiB7XG4gICAgICAgIG1hcmdpbjogNTZweDtcbiAgICB9XG5cbiAgICAubWFpbiB7XG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgIC8qIGRpc3BsYXk6IGJsb2NrOyAqL1xuICAgICAgICBtYXJnaW46IDI4cHggYXV0bztcbiAgICB9XG59XG5cblxuXG5cbi8qIC5idG4ge1xuICAgIG1hcmdpbjogMTRweCAhaW1wb3J0YW50O1xufSAqL1xuXG4jbG9naW4tYnV0dG9uOjphZnRlciB7XG4gICAgY29udGVudDogJ0NhZGFzdHJhcic7XG59XG5cbiNsb2dpbi1idXR0b24uZXJybzo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICdFcnJvISdcbn1cblxuLyogLmVycm8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxMDQsIDcyLCAxKTtcbn0gKi9cblxuLmxvZ2luLWNhcmQge1xuICAgIC8qIG1hcmdpbjogMTRweDsgKi9cbiAgICAvKiBtYXJnaW46IGF1dG8gYXV0bzsgKi9cbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxNSU7ICovXG4gICAgLyogd2lkdGg6IDc1JTsgKi9cbiAgICB3aWR0aDogMjUwcHg7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XG59XG5cbi5sb2dpbiB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvKiBiYWNrZ3JvdW5kOiBncmF5OyAqL1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/cadastro/cadastro.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/cadastro/cadastro.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login\">\n\n  <section class=\"mat-typography\">\n    <div class=\"header text align-center margin\">\n      <h1>Seja Bem Vindo!</h1>\n      <h3>Por favor insira suas informações abaixo.</h3> \n    </div>\n\n    <div id=\"content\" class=\"align-center\" [ngClass]=\"content\">\n      <mat-form-field appearance=\"outline\" class=\"fit-screen\">\n        <input matInput #email placeholder=\"Username\" (focus)=\"clearErro()\" required>\n      </mat-form-field>\n\n      <mat-form-field appearance=\"outline\" class=\"fit-screen\">\n        <input matInput #name placeholder=\"Nome\" (focus)=\"clearErro()\" required>\n      </mat-form-field>\n      \n      <!-- <br> -->\n      <mat-form-field appearance=\"outline\" class=\"fit-screen\">\n        <input matInput #pwd type=\"password\" placeholder=\"Senha\" (focus)=\"clearErro()\" required>\n      </mat-form-field>\n      <br>\n      \n      <button mat-raised-button id=\"login-button\"  (click)=\"cadastro(email.value,name.value,pwd.value)\" color=\"primary\" [ngClass]=\"loginStatus\" class=\"mat-elevation-z12 login-button fit-screen\"></button>\n      \n    </div>\n    \n\n    <div class=\"footer text\">\n      <button mat-button class=\"btn-cadastro\" (click)=\"goto('login')\">\n        Já tem acesso? Clique aqui para entrar!\n      </button>\n    </div>\n\n  </section>\n</div>"

/***/ }),

/***/ "./src/app/pages/cadastro/cadastro.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/cadastro/cadastro.component.ts ***!
  \******************************************************/
/*! exports provided: CadastroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroComponent", function() { return CadastroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_service/auth/auth.service */ "./src/app/_service/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CadastroComponent = /** @class */ (function () {
    function CadastroComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.config = 'cadastro';
        this.loginStatus = '';
    }
    CadastroComponent.prototype.ngOnInit = function () {
    };
    CadastroComponent.prototype.cadastro = function (usuario, nome, senha) {
        var _this = this;
        this.auth.cadastro(usuario, nome, senha)
            .then(function (res) {
            _this.router.navigate(['/']);
        }).catch(function (err) {
            console.log(err);
            _this.loginStatus = 'erro';
        });
    };
    CadastroComponent.prototype.goto = function (url) {
        this.router.navigate([url]);
    };
    CadastroComponent.prototype.clearErro = function () {
        this.loginStatus = '';
    };
    CadastroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cadastro',
            template: __webpack_require__(/*! ./cadastro.component.html */ "./src/app/pages/cadastro/cadastro.component.html"),
            styles: [__webpack_require__(/*! ./cadastro.component.css */ "./src/app/pages/cadastro/cadastro.component.css")]
        }),
        __metadata("design:paramtypes", [_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CadastroComponent);
    return CadastroComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .logo {\n    width: fit-content;\n    margin-left: auto;\n    margin-right: auto;    \n} */\n\n.align-center {\n    /* margin: 28px auto !important; */\n    text-align: center;\n}\n\n.fit-screen {\n    width: 80vw;    \n}\n\n.login {\n    position: fixed;\n    left: -10px;\n    right: 0;\n    top: 0;\n    bottom: -10px;\n}\n\n.footer {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    opacity: 0;\n}\n\n.btn-cadastro {\n    width: 100%;\n    margin: 14px;\n}\n\n/* .btn {\n    margin: 14px !important;\n} */\n\n#login-button::after {\n    content: 'Entrar';\n}\n\n#login-button.erro::after {\n    content: 'Usuário ou Senha Inválidos!'\n}\n\n/* .erro {\n    background-color: rgba(255, 104, 72, 1);\n} */\n\n.login-card {\n    /* margin: 14px; */\n    /* margin: auto auto; */\n    /* position: absolute;\n    top: 15%; */\n    /* width: 75%; */\n    width: 250px;\n    margin: 10px auto;\n}\n\n.login {\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  /* background: gray; */\n}\n\n@media only screen and (min-width: 376px) {\n\n    .fit-screen {\n        width: 300px;\n        display: block;\n        /* margin: 28px auto; */\n    }\n}\n\n/* \n@media only screen and (min-width: 960px) {\n    \n} */\n\n#content {\n    opacity: 0;\n}\n\n/* logo animation */\n\n/* html,\nbody {\n  height: 100%;\n  margin: 0;\n  background-color: black;\n} */\n\n.logo {\n    margin-bottom: -90px; \n}\n\nsvg {\n  display: block;\n  margin: 30px auto;\n  /* overflow: hidden; */\n  width: 100px;\n  height: 210px;\n}\n\n.path {\n    fill: rgba(0,0,0,0.0);\n    stroke: rgba(0,0,0,0.0);\n    transition: fill 0.5s, stroke 0.5s;\n}\n\n/* fazer animacao css */\n\n/* \n.animation{\n    stroke-dasharray:\n} */\n\n.fadein {\n  -moz-transition: fill 0.6s ease-in 0.1s;\n  -o-transition: fill 0.6s ease-in 0.1s;\n  -webkit-transition: fill 0.6s ease-in;\n  -webkit-transition-delay: 0.1s;\n  transition: fill 0.6s ease-in 0.1s;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztJQUlJOztBQUVKO0lBQ0ksbUNBQW1DO0lBQ25DLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osU0FBUztJQUNULE9BQU87SUFDUCxjQUFjO0NBQ2pCOztBQUdEO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixRQUFRO0lBQ1IsU0FBUztJQUNULFdBQVc7Q0FDZDs7QUFFRDtJQUNJLFlBQVk7SUFDWixhQUFhO0NBQ2hCOztBQUdEOztJQUVJOztBQUVKO0lBQ0ksa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksc0NBQXNDO0NBQ3pDOztBQUVEOztJQUVJOztBQUVKO0lBQ0ksbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QjtnQkFDWTtJQUNaLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isa0JBQWtCO0NBQ3JCOztBQUVEO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsb0JBQW9CO0VBQ3BCLHVCQUF1QjtDQUN4Qjs7QUFFRDs7SUFFSTtRQUNJLGFBQWE7UUFDYixlQUFlO1FBQ2Ysd0JBQXdCO0tBQzNCO0NBQ0o7O0FBRUQ7OztJQUdJOztBQUlKO0lBQ0ksV0FBVztDQUNkOztBQUlELG9CQUFvQjs7QUFDcEI7Ozs7O0lBS0k7O0FBRUo7SUFDSSxxQkFBcUI7Q0FDeEI7O0FBR0Q7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsY0FBYztDQUNmOztBQUVEO0lBQ0ksc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4QixtQ0FBbUM7Q0FDdEM7O0FBRUQsd0JBQXdCOztBQUN4Qjs7O0lBR0k7O0FBR0o7RUFDRSx3Q0FBd0M7RUFDeEMsc0NBQXNDO0VBQ3RDLHNDQUFzQztFQUN0QywrQkFBK0I7RUFDL0IsbUNBQW1DO0NBQ3BDIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5sb2dvIHtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvOyAgICBcbn0gKi9cblxuLmFsaWduLWNlbnRlciB7XG4gICAgLyogbWFyZ2luOiAyOHB4IGF1dG8gIWltcG9ydGFudDsgKi9cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5maXQtc2NyZWVuIHtcbiAgICB3aWR0aDogODB2dzsgICAgXG59XG5cbi5sb2dpbiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IC0xMHB4O1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IC0xMHB4O1xufVxuXG5cbi5mb290ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBvcGFjaXR5OiAwO1xufVxuXG4uYnRuLWNhZGFzdHJvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDE0cHg7XG59XG5cblxuLyogLmJ0biB7XG4gICAgbWFyZ2luOiAxNHB4ICFpbXBvcnRhbnQ7XG59ICovXG5cbiNsb2dpbi1idXR0b246OmFmdGVyIHtcbiAgICBjb250ZW50OiAnRW50cmFyJztcbn1cblxuI2xvZ2luLWJ1dHRvbi5lcnJvOjphZnRlciB7XG4gICAgY29udGVudDogJ1VzdcOhcmlvIG91IFNlbmhhIEludsOhbGlkb3MhJ1xufVxuXG4vKiAuZXJybyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDEwNCwgNzIsIDEpO1xufSAqL1xuXG4ubG9naW4tY2FyZCB7XG4gICAgLyogbWFyZ2luOiAxNHB4OyAqL1xuICAgIC8qIG1hcmdpbjogYXV0byBhdXRvOyAqL1xuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE1JTsgKi9cbiAgICAvKiB3aWR0aDogNzUlOyAqL1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBtYXJnaW46IDEwcHggYXV0bztcbn1cblxuLmxvZ2luIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC8qIGJhY2tncm91bmQ6IGdyYXk7ICovXG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzc2cHgpIHtcblxuICAgIC5maXQtc2NyZWVuIHtcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgLyogbWFyZ2luOiAyOHB4IGF1dG87ICovXG4gICAgfVxufVxuXG4vKiBcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIHtcbiAgICBcbn0gKi9cblxuXG5cbiNjb250ZW50IHtcbiAgICBvcGFjaXR5OiAwO1xufVxuXG5cblxuLyogbG9nbyBhbmltYXRpb24gKi9cbi8qIGh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufSAqL1xuXG4ubG9nbyB7XG4gICAgbWFyZ2luLWJvdHRvbTogLTkwcHg7IFxufVxuXG5cbnN2ZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDMwcHggYXV0bztcbiAgLyogb3ZlcmZsb3c6IGhpZGRlbjsgKi9cbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDIxMHB4O1xufVxuXG4ucGF0aCB7XG4gICAgZmlsbDogcmdiYSgwLDAsMCwwLjApO1xuICAgIHN0cm9rZTogcmdiYSgwLDAsMCwwLjApO1xuICAgIHRyYW5zaXRpb246IGZpbGwgMC41cywgc3Ryb2tlIDAuNXM7XG59XG5cbi8qIGZhemVyIGFuaW1hY2FvIGNzcyAqL1xuLyogXG4uYW5pbWF0aW9ue1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6XG59ICovXG5cblxuLmZhZGVpbiB7XG4gIC1tb3otdHJhbnNpdGlvbjogZmlsbCAwLjZzIGVhc2UtaW4gMC4xcztcbiAgLW8tdHJhbnNpdGlvbjogZmlsbCAwLjZzIGVhc2UtaW4gMC4xcztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBmaWxsIDAuNnMgZWFzZS1pbjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwLjFzO1xuICB0cmFuc2l0aW9uOiBmaWxsIDAuNnMgZWFzZS1pbiAwLjFzO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login\">\n\n  <section class=\"mat-typography\">\n    \n      <!-- svg logo -->\n      <svg class=\"logo\" enable-background='new 0 0 94.319 207' id='Laag_1' space='preserve' version='1.1' viewbox='0 0 94.319 207' x='0px' xmlns:xlink='http://www.w3.org/1999/xlink'\n      xmlns='http://www.w3.org/2000/svg' y='0px'>\n      <g>\n        <path class=\"path light\" d='M78.063,137.913c8.551,2.343,12.12,7.707,12.12,11.281c0,0,0-44.184,0-51.458s-8.467-10.726-12.949-11.958&#x000A;\t\tL16.304,68.643c-8.551-2.344-12.12-7.706-12.12-11.281c0,0,0,44.184,0,51.458c0,7.272,8.467,10.725,12.949,11.958L78.063,137.913z'\n        id='i0'></path>\n        <path class=\"path dark\" d='M4.143,109.653c0,0,0-48.917,0-58.75s8.5-14.5,13-16.167s49.999-18.833,57.083-21.583s14.25-6.083,16-9.583&#x000A;\t\tc0,8.833,0,43.666,0,53.5c0,9.375-4.416,10.334-8.166,11.834c-4.268,1.707-57.459,21.791-65.75,25.499&#x000A;\t\tC6.729,98.687,4.143,104.82,4.143,109.653z'\n        id='i1'></path>\n        <path class=\"path dark\" d='M90.226,96.902c0,0,0,48.917,0,58.751c0,9.833-8.5,14.499-13,16.166s-49.999,18.834-57.083,21.584&#x000A;\t\ts-14.25,6.083-16,9.583c0-8.833,0-43.666,0-53.5c0-9.375,4.416-10.334,8.166-11.834c4.268-1.707,57.459-21.791,65.751-25.499&#x000A;\t\tC87.639,107.869,90.226,101.735,90.226,96.902z'\n        id='i2'></path>\n      </g>\n    </svg>\n    \n    \n    <!-- <h1 class=\"logo\">{{APP_NAME}}</h1> -->\n    \n    <!-- <mat-divider></mat-divider> -->\n    \n    <div id=\"content\" class=\"align-center\" [ngClass]=\"content\">\n      \n      <mat-form-field appearance=\"outline\" class=\"fit-screen\">\n        <input matInput #email placeholder=\"Username\" (focus)=\"clearErro()\" required>\n      </mat-form-field>\n      \n      <!-- <br> -->\n      <mat-form-field appearance=\"outline\" class=\"fit-screen\">\n        <input matInput #pwd type=\"password\" placeholder=\"Senha\" (focus)=\"clearErro()\" required>\n      </mat-form-field>\n      <br>\n      \n      <button mat-raised-button id=\"login-button\"  (click)=\"login(email.value,pwd.value)\" color=\"primary\" [ngClass]=\"loginStatus\" class=\"mat-elevation-z12 login-button fit-screen\"></button>\n      \n      <br><br>\n      \n      <!-- <button mat-raised-button color=\"accent\" (click)=\"goto('signup')\" class=\"mat-elevation-z8 fit-screen\" >Cadastre-se</button>   -->\n      \n    </div>\n    \n\n    <div class=\"footer text\">\n      <button mat-button class=\"btn-cadastro\" (click)=\"goto('cadastro')\">\n        Não tem acesso ainda? Cadastre-se!\n      </button>\n    </div>\n\n  </section>\n</div>"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/anime.min.js");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(animejs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_GlobalVariables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/GlobalVariables */ "./src/app/GlobalVariables.ts");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_service/auth/auth.service */ "./src/app/_service/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]);
        this.loginStatus = '';
        this.APP_NAME = app_GlobalVariables__WEBPACK_IMPORTED_MODULE_4__["APP_NAME"];
        this.content = '';
        // TODO: keep user signed in
    }
    LoginComponent.prototype.ngOnInit = function () {
        // const thisC = this;
        // setTimeout(function() {
        //   thisC.splashScreen();
        // }, 500);
        // this.splashScreen();
    };
    // tslint:disable-next-line:use-life-cycle-interface
    LoginComponent.prototype.ngAfterViewInit = function () {
        this.splashScreen();
    };
    // getEmailErrorMessage() {
    //   return this.email.hasError('required') ? 'Esse campo não pode estar vazio' :
    //     this.email.hasError('email') ? 'O email não é válido' :
    //       '';
    // }
    LoginComponent.prototype.login = function (usuario, senha) {
        var _this = this;
        this.auth.login(usuario, senha)
            .then(function (res) {
            _this.router.navigate(['database']);
        }).catch(function (err) {
            console.log(err);
            _this.loginStatus = 'erro';
        });
    };
    LoginComponent.prototype.clearErro = function () {
        this.loginStatus = '';
    };
    LoginComponent.prototype.erroLogin = function () {
        var t = this;
        // todo mensagem de erro
        t.loginStatus = 'erro';
    };
    LoginComponent.prototype.goto = function (url) {
        this.router.navigate([url]);
    };
    LoginComponent.prototype.splashScreen = function () {
        this.play();
        animejs__WEBPACK_IMPORTED_MODULE_2__({
            targets: '.logo',
            translateY: -100,
            delay: 3000,
            duration: 3000
        });
        animejs__WEBPACK_IMPORTED_MODULE_2__({
            targets: ['#content', '.footer'],
            opacity: 1,
            delay: 3500,
            duration: 6000
        });
    };
    LoginComponent.prototype.play = function () {
        var current_frame = 0;
        var total_frames = 60;
        var path = new Array();
        var length = new Array();
        for (var i = 0; i < 3; i++) {
            path[i] = document.getElementById('i' + i);
            var l = path[i].getTotalLength();
            length[i] = l;
            path[i].style.strokeDasharray = l + ' ' + l;
            path[i].style.strokeDashoffset = l;
            // path[i].style.fill = "none";
        }
        var handle = 0;
        var draw = function () {
            var progress = current_frame / total_frames;
            if (progress > 1) {
                for (var j = 0; j < path.length; j++) {
                    path[j].setAttribute('class', 'fadein');
                }
                window.cancelAnimationFrame(handle);
            }
            else {
                current_frame++;
                for (var j = 0; j < path.length; j++) {
                    path[j].style.strokeDashoffset = Math.floor(length[j] * (1 - progress));
                    path[j].setAttribute('class', '');
                }
                handle = window.requestAnimationFrame(draw);
            }
        };
        draw();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/menu/menu.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/menu/menu.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu {\n    position: absolute;\n    top: 0;\n    right: 0;\n    left: 0;\n}\n\n.content {\n    position: relative;\n    overflow: auto;\n}\n\n.tabs {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 12;\n}\n\n.tab { \n    padding: 4px;\n    min-width: 42px;\n}\n\n::ng-deep .tab:focus {\n    outline: none;\n    background-color: inherit !important;\n\n}\n\n.align-tabs {\n    width: 100vw;    \n    display: flex;\n    justify-content: space-evenly;\n}\n\n.router {\n    /* margin-top: 64px; */\n    /* overflow: auto; */\n}\n\n/* Backup */\n\n/* .header {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n}\n\n\n.align-items {\n    text-align: center;    \n    display: flex;\n    justify-content: space-between;\n}\n\n.subheader {\n    border-top: 1px solid whitesmoke;\n    height: 40px;\n}\n\n.header .user-menu {\n    font-size: .6875rem;\n    width: 60px;\n    text-align: right;\n}\n\n.header span {\n    text-align: center;\n}\n\n.icon {\n    padding-right: 14px;\n}\n\n.sidenav-container {\n    position: absolute;\n    top: 95px;\n    bottom: 0;\n    left: 0;\n    right: 0;\n}\n\n.list-button {\n    width: 100%;\n    height: 100%;\n    text-align: left;\n}\n\n#user-info p, #user-info .progress-spinner, #user-info .info-text {\n    display: inline-block;\n}\n\n.info-text p {\n    margin-bottom: 0;\n}\n\n.progress-spinner {\n    margin-left: 7px;\n    margin-right: 7px;\n}\n\n.nivel-icon {\n    position: absolute;\n    top: 84px;\n    left: 22px;\n    font-size: 40px;\n    width: fit-content;\n    height: fit-content;\n}\n\n.footer {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n}\n\n.footer .list-button {\n    width: 100%;\n    height: 100%;\n} */\n\n/* @media only screen and (max-width: 960px) {\n    sidenav.open()\n} */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsT0FBTztJQUNQLFNBQVM7SUFDVCxRQUFRO0NBQ1g7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtDQUNsQjs7QUFFRDtJQUNJLHlCQUFpQjtJQUFqQixpQkFBaUI7SUFDakIsT0FBTztJQUNQLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxjQUFjO0lBQ2QscUNBQXFDOztDQUV4Qzs7QUFFRDtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsOEJBQThCO0NBQ2pDOztBQUdEO0lBQ0ksdUJBQXVCO0lBQ3ZCLHFCQUFxQjtDQUN4Qjs7QUFnQkQsWUFBWTs7QUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQStFSTs7QUFFSjs7SUFFSSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lbnUvbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogMDtcbn1cblxuLmNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuLnRhYnMge1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IDEyO1xufVxuXG4udGFiIHsgXG4gICAgcGFkZGluZzogNHB4O1xuICAgIG1pbi13aWR0aDogNDJweDtcbn1cblxuOjpuZy1kZWVwIC50YWI6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xuXG59XG5cbi5hbGlnbi10YWJzIHtcbiAgICB3aWR0aDogMTAwdnc7ICAgIFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cblxuLnJvdXRlciB7XG4gICAgLyogbWFyZ2luLXRvcDogNjRweDsgKi9cbiAgICAvKiBvdmVyZmxvdzogYXV0bzsgKi9cbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8qIEJhY2t1cCAqL1xuXG4vKiAuaGVhZGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG59XG5cblxuLmFsaWduLWl0ZW1zIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgIFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uc3ViaGVhZGVyIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgd2hpdGVzbW9rZTtcbiAgICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5oZWFkZXIgLnVzZXItbWVudSB7XG4gICAgZm9udC1zaXplOiAuNjg3NXJlbTtcbiAgICB3aWR0aDogNjBweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmhlYWRlciBzcGFuIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pY29uIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNHB4O1xufVxuXG4uc2lkZW5hdi1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDk1cHg7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG59XG5cbi5saXN0LWJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbiN1c2VyLWluZm8gcCwgI3VzZXItaW5mbyAucHJvZ3Jlc3Mtc3Bpbm5lciwgI3VzZXItaW5mbyAuaW5mby10ZXh0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5pbmZvLXRleHQgcCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLnByb2dyZXNzLXNwaW5uZXIge1xuICAgIG1hcmdpbi1sZWZ0OiA3cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA3cHg7XG59XG5cbi5uaXZlbC1pY29uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA4NHB4O1xuICAgIGxlZnQ6IDIycHg7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuXG4uZm9vdGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG59XG5cbi5mb290ZXIgLmxpc3QtYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59ICovXG5cbi8qIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgICBzaWRlbmF2Lm9wZW4oKVxufSAqLyJdfQ== */"

/***/ }),

/***/ "./src/app/pages/menu/menu.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/menu/menu.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"background\">\n</div>\n\n<div class=\"menu\">\n  \n    <div *ngIf=\"tabs\" class=\"tabs mat-elevation-z8\">\n      <nav mat-tab-nav-bar color=\"accent\">\n          <div class=\"align-tabs\">\n            <a mat-tab-link \n              class=\"tab\"\n              *ngFor=\"let tab of menuItems\" \n              [routerLink]=\"tab.page\" \n              #rla=\"routerLinkActive\" \n              routerLinkActive>\n              <!-- [active]=\"rla.isActive\" -->\n              \n              <mat-icon>{{tab.icon}}</mat-icon>\n              <div *ngIf=\"rla.isActive\">&nbsp;{{tab.text}}</div>\n            </a>\n          </div>\n      </nav>\n    </div>\n\n    <!-- <div *ngIf=\"!tabs\">\n      <mat-toolbar class=\"tabs mat-elevation-z8 align-tabs\">\n        <button mat-icon-button (click)=\"goback()\">\n          <mat-icon>arrow_back</mat-icon>\n        </button>\n        <h1>Hello World</h1>\n        <button mat-icon-button disabled>\n        </button>\n      </mat-toolbar>\n    </div> -->\n    \n    <div class=\"router\">\n      <router-outlet></router-outlet>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/pages/menu/menu.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/menu/menu.component.ts ***!
  \**********************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuComponent = /** @class */ (function () {
    function MenuComponent(router, dialog) {
        this.router = router;
        this.dialog = dialog;
        // private user;
        // private activePage = 'Home';
        this.tabs = true;
        // @Input() tipo;
        // private activeItem;
        this.tabSelected = 0;
        // if (!loginService.isLogged()) {
        //   this.router.navigate(['']);
        // }
    }
    MenuComponent.prototype.ngOnInit = function () {
        // if (!this.loginService.checkTipo(this.tipo)) {
        //   this.router.navigate([this.loginService.getTipo() + '/home']);
        // }
        // this.displayUserInfo();
        // this.sidenav.open();
    };
    MenuComponent.prototype.goback = function () {
        this.tabs = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenav"])
    ], MenuComponent.prototype, "sidenav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MenuComponent.prototype, "menuItems", void 0);
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/pages/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/pages/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    server: 'localhost:4000'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ilangoldman/Desktop/Maua/Redes/t4/dbserver/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map