(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_microfrontend_module_ts-_06461"],{

/***/ 1984:
/*!*************************************************!*\
  !*** ./src/app/microfrontend-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MicroFrontEndRoutingModule": () => (/* binding */ MicroFrontEndRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_architects_module_federation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-architects/module-federation */ 2162);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 8230);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 8317);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);




const routes = [
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then(m => m.HomePageModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'angular13',
        loadChildren: () => (0,_angular_architects_module_federation__WEBPACK_IMPORTED_MODULE_2__.loadRemoteModule)({
            type: 'module',
            remoteEntry: 'https://dzurrahman.github.io/mfe-roki-test/remoteEntry.js',
            exposedModule: './HomeModule',
        }).then((m) => {
            return m.HomeModule;
        }),
    },
    {
        path: 'second',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_second_second_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./second/second.module */ 4714)).then(m => m.SecondPageModule)
    },
];
let MicroFrontEndRoutingModule = class MicroFrontEndRoutingModule {
};
MicroFrontEndRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
    })
], MicroFrontEndRoutingModule);



/***/ }),

/***/ 9594:
/*!*****************************************!*\
  !*** ./src/app/microfrontend.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MicroFrontEndModule": () => (/* binding */ MicroFrontEndModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 8230);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microfrontend_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./microfrontend-routing.module */ 1984);



let MicroFrontEndModule = class MicroFrontEndModule {
};
MicroFrontEndModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule)({
        entryComponents: [],
        imports: [
            _microfrontend_routing_module__WEBPACK_IMPORTED_MODULE_1__.MicroFrontEndRoutingModule
        ],
        providers: [],
    })
], MicroFrontEndModule);



/***/ }),

/***/ 2162:
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-architects/module-federation/node_modules/@angular-architects/module-federation-runtime/fesm2015/angular-architects-module-federation-runtime.js ***!
  \********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadRemoteEntry": () => (/* binding */ loadRemoteEntry),
/* harmony export */   "loadRemoteModule": () => (/* binding */ loadRemoteModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);


const containerMap = {};
const remoteMap = {};
let isDefaultScopeInitialized = false;
function lookupExposedModule(key, exposedModule) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
        const container = containerMap[key];
        const factory = yield container.get(exposedModule);
        const Module = factory();
        return Module;
    });
}
function initRemote(container, key) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
        // const container = window[key] as Container;
        // Do we still need to initialize the remote?
        if (remoteMap[key]) {
            return container;
        }
        // Do we still need to initialize the share scope?
        if (!isDefaultScopeInitialized) {
            yield __webpack_require__.I('default');
            isDefaultScopeInitialized = true;
        }
        yield container.init(__webpack_require__.S.default);
        remoteMap[key] = true;
        return container;
    });
}
function loadRemoteEntry(remoteEntryOrOptions, remoteName) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
        if (typeof remoteEntryOrOptions === 'string') {
            const remoteEntry = remoteEntryOrOptions;
            return yield loadRemoteScriptEntry(remoteEntry, remoteName);
        }
        else if (remoteEntryOrOptions.type === 'script') {
            const options = remoteEntryOrOptions;
            return yield loadRemoteScriptEntry(options.remoteEntry, options.remoteName);
        }
        else if (remoteEntryOrOptions.type === 'module') {
            const options = remoteEntryOrOptions;
            yield loadRemoteModuleEntry(options.remoteEntry);
        }
    });
}
function loadRemoteModuleEntry(remoteEntry) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
        if (containerMap[remoteEntry]) {
            return Promise.resolve();
        }
        return yield import(/* webpackIgnore:true */ remoteEntry).then(container => {
            initRemote(container, remoteEntry);
            containerMap[remoteEntry] = container;
        });
    });
}
function loadRemoteScriptEntry(remoteEntry, remoteName) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            // Is remoteEntry already loaded?
            if (containerMap[remoteName]) {
                resolve();
                return;
            }
            const script = document.createElement('script');
            script.src = remoteEntry;
            script.onerror = reject;
            script.onload = () => {
                const container = window[remoteName];
                initRemote(container, remoteName);
                containerMap[remoteName] = container;
                resolve();
            };
            document.body.appendChild(script);
        });
    });
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function loadRemoteModule(options) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
        let loadRemoteEntryOptions;
        let key;
        // To support legacy API (< ng 13)
        if (!options.type) {
            options.type = 'script';
        }
        if (options.type === 'script') {
            loadRemoteEntryOptions = {
                type: 'script',
                remoteEntry: options.remoteEntry,
                remoteName: options.remoteName
            };
            key = options.remoteName;
        }
        else if (options.type === 'module') {
            loadRemoteEntryOptions = {
                type: 'module',
                remoteEntry: options.remoteEntry,
            };
            key = options.remoteEntry;
        }
        if (options.remoteEntry) {
            yield loadRemoteEntry(loadRemoteEntryOptions);
        }
        return yield lookupExposedModule(key, options.exposedModule);
    });
}

/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}])
//# sourceMappingURL=src_app_microfrontend_module_ts-_06461.js.map