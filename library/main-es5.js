function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = " <div id=\"content\" class=\"container-fluid\">\n<app-header></app-header>\n  <router-outlet></router-outlet>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/book-dashboard/add-book/add-book.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/book-dashboard/add-book/add-book.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBookDashboardAddBookAddBookComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-md-8\">\n    <div class=\"card\">\n      <h4 class=\"card-title card-header bg-dark text-light\">\n        Ajouter un livre\n      </h4>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-8\">\n    <div class=\"card\">\n      <form [formGroup]=\"bookForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"row\">\n          <div class=\"col-md-6 form-group\">\n            <mat-form-field>\n              <input matInput formControlName=\"title\" placeholder=\"Titre\" />\n            </mat-form-field>\n\n          </div>\n          <div class=\"col-md-4 form-group\">\n            <mat-form-field>\n              <input matInput formControlName=\"author\" placeholder=\"Auteur\" />\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6 form-group\">\n            <mat-form-field>\n              <input matInput formControlName=\"year\" placeholder=\"Année\" type=\"number\" />\n            </mat-form-field>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-md-12 form-group\">\n            <label>Genre</label>\n            <mat-form-field>\n              <mat-select matInput formControlName=\"genre\" name=\"Genre\" id=\"genre\">\n                <mat-option *ngFor=\"let genre of genres\" [value]=\"genre.id\">{{\n                  genre.name\n                }}</mat-option>\n              </mat-select>\n            </mat-form-field>\n            <!-- <div class=\"form-group\" id=\"pic\">\n              <label for=\"file\" class=\"disappear\">Ajouter une photo</label>\n              <input type=\"file\" class=\"disappear\" (change)=\"upload($event)\" accept=\".png,.jpg\" />\n            </div> -->\n            <br>\n            <button mat-raised-button type=\"submit\" class=\"btn btn-danger pull-right\" [disabled]=\"bookForm.invalid\"\n              class=\" center\">\n              Ajouter le livre\n            </button>\n          </div>\n        </div>\n\n        <div class=\"clearfix\"></div>\n      </form>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/book-dashboard/add-book/dialog-overview-example-dialog.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/book-dashboard/add-book/dialog-overview-example-dialog.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBookDashboardAddBookDialogOverviewExampleDialogHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h4 mat-dialog-title>Notification</h4>\n<div mat-dialog-content>\n  <p>Etes vous sûr d'enregistrer {{data.title}} ?</p>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">Annuler</button>\n  <button mat-button (click)=\"save()\" cdkFocusInitial>Enregistrer</button>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/book-dashboard/book-dashboard.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/book-dashboard/book-dashboard.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBookDashboardBookDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-sm-12 col-md-2 card bg-dark text-light\" style=\"margin-top: 10px;\">\n    <h5 type=\"button\" class=\"card-header\" (click)=\"displayAll()\">\n      Tous les livres\n    </h5>\n    <div class=\"dropdown-divider\"></div>\n    <ul class=\"list-group\">\n      <li\n        type=\"button\"\n        class=\" list-group-item bg-dark btn-outline-danger text-light\"\n        *ngFor=\"let genre of genres\"\n        (click)=\"display(genre.id)\"\n      >\n        {{ genre.name }}\n      </li>\n    </ul>\n  </div>\n  <div class=\"col-sm-12 col-md-10\">\n    <div *ngIf=\"allBooks\" class=\"row\">\n      <div class=\"col-sm-12 col-md-12\">\n        <div class=\"card\">\n          <h4 class=\"card-header bg-dark text-light\">Livres</h4>\n          <div class=\"card-body menuB\">\n            <button\n              class=\"btn  mat-raised-button btn-success \"\n              routerLink=\"/addBook\"\n            >\n              Ajouter un livre\n            </button>\n            <button\n              class=\"btn  mat-raised-button btn-outline-danger\"\n              routerLink=\"/borrowedBook\"\n            >\n              Livres empreintés\n            </button>\n          </div>\n          <form class=\"form-check-inline card-body\" [formGroup]=\"searchForm\">\n            <input\n              class=\"form-control\"\n              formControlName=\"letter\"\n              type=\"text\"\n              placeholder=\"Rechercher un livre\"\n              aria-label=\"Rechercher\"\n            />\n            <button\n              class=\"btn btn-outline-success\"\n              type=\"submit\"\n              [disabled]=\"searchForm.invalid\"\n              (click)=\"search()\"\n            >\n              Rechercher\n            </button>\n            <button\n              class=\"btn btn-outline-danger\"\n              [disabled]=\"searchForm.invalid\"\n              (click)=\"initForm()\"\n            >\n              Effacer\n            </button>\n          </form>\n          <button class=\"btn btn-group btn-danger\" *ngIf=\"errorMessage && !searchResults\">\n            Aucun livre trouvé\n          </button>\n          <div *ngIf=\"searchResults\">\n            <table class=\"table table-striped\">\n              <thead>\n                <tr>\n                  <th scope=\"col\">#</th>\n                  <th scope=\"col\">Nom</th>\n                  <th scope=\"col\">Action</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let book of Books; let i = index\">\n                  <td>{{ i + 1 }}</td>\n                  <td>{{ book.title }}</td>\n                  <td>\n                    <button\n                      (click)=\"details(book.idBook)\"\n                      class=\"btn btn-group btn-outline-primary\"\n                    >\n                      Consulter\n                    </button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n          <div class=\"col-sm-12 col-md-12\" *ngIf=\"search\">\n            <mat-paginator\n              [length]=\"length\"\n              [pageSize]=\"pageSize\"\n              [pageSizeOptions]=\"pageSizeOptions\"\n              showFirstLastButtons\n            >\n            </mat-paginator>\n            <div class=\"example-container mat-elevation-z8\">\n              <mat-table [dataSource]=\"datasource\" matSort>\n                <!-- ID Column -->\n                <ng-container matColumnDef=\"title\">\n                  <mat-header-cell *matHeaderCellDef mat-sort-header>\n                    Titre\n                  </mat-header-cell>\n                  <mat-cell *matCellDef=\"let row\"> {{ row.title }} </mat-cell>\n                </ng-container>\n\n                <!-- Progress Column -->\n                <ng-container matColumnDef=\"author\">\n                  <mat-header-cell *matHeaderCellDef mat-sort-header>\n                    Auteur\n                  </mat-header-cell>\n                  <mat-cell *matCellDef=\"let row\"> {{ row.author }} </mat-cell>\n                </ng-container>\n\n                <!-- Name Column -->\n                <ng-container matColumnDef=\"genre\">\n                  <mat-header-cell *matHeaderCellDef mat-sort-header>\n                    Genre\n                  </mat-header-cell>\n                  <mat-cell *matCellDef=\"let row\"> {{ row.genre.name }} </mat-cell>\n                </ng-container>\n                <!-- action Column -->\n                <ng-container matColumnDef=\"Action\">\n                  <mat-header-cell *matHeaderCellDef mat-sort-header>\n                    Action\n                  </mat-header-cell>\n                  <mat-cell *matCellDef=\"let row\" class=\"d-flex justify-content-around\">\n                    <button\n                      [routerLink]=\"['/book', row.id]\"\n                      class=\"btn btn-outline-info small p-2\"\n                    >\n                      Check\n                    </button>\n                    <button\n                 (click)=\"delete(row.id)\"\n                    class=\"btn btn-danger small p-2\"\n                  >\n                    Delete\n                  </button>\n                  </mat-cell>\n                </ng-container>\n\n                <mat-header-row\n                  *matHeaderRowDef=\"displayedColumns\"\n                ></mat-header-row>\n                <mat-row *matRowDef=\"let row; columns: displayedColumns\">\n                </mat-row>\n              </mat-table>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <app-livres *ngIf=\"specificBooks\" [genreId]=\"bookGenreId\"></app-livres>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/book-dashboard/book/book.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/book-dashboard/book/book.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBookDashboardBookBookComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\r\n  <div class=\"col-sm-12 col-md-4\">\r\n    <div class=\"card card-profile\">\r\n      <div class=\"card-avatar imgWrapper\">\r\n        <img class=\"imgCarousel\" [src]=\"book?.image\" />\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <h6 class=\"card-category text-gray\">{{ book?.idCDC }} -- Status: <span *ngIf=\"book?.disponible == 1\" class=\"text-success\">Disponible</span>\r\n            <span class=\"text-danger\" *ngIf=\"book?.disponible !==1\">Non disponible</span></h6>\r\n        <h4 class=\"card-title\">{{ book?.title }}</h4>\r\n        Auteur: {{ book?.author }} <br />\r\n        Année: {{ book?.year }} <br />\r\n        Genre: {{ book?.genre.name }}<br />\r\n\r\n        <a *ngIf=\"book?.disponible\"\r\n          class=\"btn btn-danger btn-round\"\r\n          (click)=\"borrow = true\"\r\n          >Preter</a\r\n        >\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-12 col-md-8\">\r\n    <mat-toolbar>\r\n      Historique du Livre\r\n    </mat-toolbar>\r\n    <table class=\"table table-striped\">\r\n      <thead>\r\n        <tr class=\" small\">\r\n          <th scope=\"col\">#</th>\r\n          <th scope=\"col\">Empreinté par</th>\r\n          <th scope=\"col\">Date d'empeint</th>\r\n          <th scope=\"col\">Date de retour</th>\r\n          <th scope=\"col\">Preté par</th>\r\n          <th scope=\"col\">Rendu</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let pret of prets; let i = index\" class=\"small\">\r\n          <td>{{ i + 1 }}</td>\r\n          <td>{{ pret?.client.firstName }} {{ pret?.client.lastName }}</td>\r\n          <td>{{ pret?.borrowDate }}</td>\r\n          <td>{{ pret?.returnDate }}</td>\r\n          <td>{{ pret?.user.username }}</td>\r\n          <td *ngIf=\"pret?.returned === 1\" class=\" bg-success text-light\">Oui</td>\r\n          <td *ngIf=\"pret?.returned === 0\" class=\" bg-danger text-light\">Non</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <div class=\"col-sm-12\">\r\n    <app-borrow-book *ngIf=\"borrow\" [book]=\"book\" (borrowed)=\"borrow = false;\"></app-borrow-book>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/book-dashboard/borrow-book/borrow-book.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/book-dashboard/borrow-book/borrow-book.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBookDashboardBorrowBookBorrowBookComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col-md-12\">\n  <div class=\"card\">\n    <div class=\"card-header card-header-danger\">\n      <p class=\"card-category\">Enregistrer un empreint</p>\n    </div>\n    <div class=\"card-body\">\n      <form [formGroup]=\"borrowForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <form [formGroup]=\"searchForm\">\n              <input\n                class=\"form-control\"\n                formControlName=\"letter\"\n                type=\"text\"\n                placeholder=\"Rechercher un abonné\"\n                aria-label=\"Rechercher\"\n              />\n              <button\n                class=\"btn btn-outline-success\"\n                type=\"submit\"\n                [disabled]=\"searchForm.invalid\"\n                (click)=\"search()\"\n              >\n                Rechercher\n              </button>\n              <button\n                class=\"btn btn-outline-danger\"\n                [disabled]=\"searchForm.invalid\"\n                (click)=\"initsearchForm()\"\n              >\n                Effacer\n              </button>\n            </form>\n            <div *ngIf=\"searchResults\">\n              <table class=\"table table-striped\">\n                <thead>\n                  <tr>\n                    <th scope=\"col\">#</th>\n                    <th scope=\"col\">Prenom</th>\n                    <th scope=\"col\">Nom</th>\n                    <th scope=\"col\">Action</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let user of Users; let i = index\">\n                    <td>{{ i + 1 }}</td>\n                    <td>{{ user.firstName }}</td>\n                    <td>{{ user.lastName }}</td>\n                    <td>\n                      <button\n                        (click)=\"choose(user)\"\n                        class=\"btn btn-group btn-outline-primary\"\n                      >\n                        Choisir\n                      </button>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n            <div *ngIf=\"selected\">\n              <table class=\"table table-striped\">\n                <thead>\n                  <tr>\n                    <th scope=\"col\">#</th>\n                    <th scope=\"col\">Prenom</th>\n                    <th scope=\"col\">Nom</th>\n                    <th scope=\"col\">Action</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>1</td>\n                    <td>{{ choosenUser?.firstName }}</td>\n                    <td>{{ choosenUser?.lastName }}</td>\n                    <td>\n                      <button (click)=\"resetUser()\">Reset</button>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n            <button class=\"btn btn-group btn-danger\" *ngIf=\"errorMessage\">\n              Cet utilisateur n'existe pas\n            </button>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <mat-form-field class=\"form-group\">\n                <input\n                  matInput\n                  placeholder=\"Choisir la date de retour\"\n                  [matDatepicker]=\"picker\"\n                  formControlName=\"returnDate\"\n                  matInput\n                  [min]=\"minDate\"\n                  [max]=\"maxDate\"\n                  readonly\n                />\n                <mat-datepicker-toggle\n                  matSuffix\n                  [for]=\"picker\"\n                ></mat-datepicker-toggle>\n                <mat-datepicker #picker></mat-datepicker>\n              </mat-form-field>\n              <button class=\"btn btn-group btn-danger\" *ngIf=\"errorDate\">\n                Date incorrect\n              </button>\n            </div>\n\n            <button\n              mat-raised-button\n              type=\"submit\"\n              class=\"btn btn-danger pull-right\"\n              [disabled]=\"borrowForm.invalid\"\n            >\n              Confirmer l'empreint\n            </button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/book-dashboard/borrowed-book/borrowed-book.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/book-dashboard/borrowed-book/borrowed-book.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBookDashboardBorrowedBookBorrowedBookComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-sm-12 col-md-8\">\n    <div class=\"card\">\n      <h4 class=\"card-header bg-dark text-light\">Recherche de livres</h4>\n\n  <form [formGroup]=\"searchForm\" class=\" card-body form-check-inline\">\n    <input\n      class=\"form-control\"\n      formControlName=\"letter\"\n      type=\"text\"\n      placeholder=\"Rechercher un livre preté\"\n      aria-label=\"Rechercher\"\n    />\n    <button\n      class=\"btn btn-outline-success\"\n      type=\"submit\"\n      [disabled]=\"searchForm.invalid\"\n      (click)=\"search()\"\n    >\n      Rechercher\n    </button>\n    <button\n      class=\"btn btn-outline-danger\"\n      [disabled]=\"searchForm.invalid\"\n      (click)=\"initsearchForm()\"\n    >\n      Effacer\n    </button>\n  </form>\n  <button class=\"btn btn-group btn-danger\" *ngIf=\"errorMessage\">Aucun livre trouvé</button>\n</div>\n  <table class=\"table table-striped\" *ngIf=\"searchResults\">\n    <thead>\n      <tr class=\" small\">\n        <th scope=\"col\">#</th>\n        <th scope=\"col\">Titre</th>\n        <th scope=\"col\">Genre</th>\n        <th scope=\"col\">Empreinté par</th>\n        <th scope=\"col\">Date d'empeint</th>\n        <th scope=\"col\">Date de retour</th>\n        <th scope=\"col\">Preté par</th>\n        <th scope=\"col\">Rendu</th>\n        <th scope=\"col\">Action</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let pret of searchPrets; let i = index\" class=\"small\">\n\n        <td>{{ i + 1 }}</td>\n        <td>{{ pret?.book?.title }}</td>\n        <td>{{ pret?.book?.genre?.name }}</td>\n        <td>{{ pret?.client?.firstName }}</td>\n        <td>{{ pret?.borrowDate }}</td>\n        <td>{{ pret?.returnDate }}</td>\n        <td>{{ pret?.user?.username }}</td>\n        <td *ngIf=\"pret?.rendu\">Oui</td>\n        <td *ngIf=\"!pret?.rendu\">Non</td>\n        <td class=\"d-flex flex-row\">\n          <button class=\"btn btn-group  btn-success\" *ngIf=\"pret?.returned === 0\" (click)=\"rendu(pret)\">Rendu</button>\n          <button  class=\"btn btn-group  btn-danger\" *ngIf=\"pret?.returned === 0\" (click)=\"notifier()\">Notifier</button>\n          <button  class=\"btn btn-group  btn-info\" *ngIf=\"pret?.returned === 1\" (click)=\"check(pret?.book?.id)\">Check</button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n  </div>\n<div class=\"row\">\n  <div class=\"col-sm-12 col-md-8\">\n    <h4 class=\"card-header\">Tous les livres empreintés</h4>\n\n    <table class=\"table table-striped\">\n      <thead>\n        <tr class=\" small\">\n          <th scope=\"col\">#</th>\n          <th scope=\"col\">Titre</th>\n          <th scope=\"col\">Genre</th>\n          <th scope=\"col\">Empreinté par</th>\n          <th scope=\"col\">Date d'empeint</th>\n          <th scope=\"col\">Date de retour</th>\n          <th scope=\"col\">Preté par</th>\n          <th scope=\"col\">Rendu</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let pret of Prets; let i = index\" class=\"small\">\n          <td>{{ i + 1 }}</td>\n          <td>{{ pret?.book?.title }}</td>\n          <td>{{ pret?.book?.genre?.name }}</td>\n          <td>{{ pret?.client?.firstName }}</td>\n          <td>{{ pret?.borrowDate }}</td>\n          <td>{{ pret?.returnDate }}</td>\n          <td>{{ pret?.user?.username }}</td>\n          <td *ngIf=\"pret?.returned === 1\">Oui</td>\n          <td *ngIf=\"pret?.returned === 0\">Non</td>\n\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/book-dashboard/livres/livres.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/book-dashboard/livres/livres.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBookDashboardLivresLivresComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <div class=\"card\">\n      <mat-paginator\n        [length]=\"length\"\n        [pageSize]=\"pageSize\"\n        [pageSizeOptions]=\"pageSizeOptions\"\n        showFirstLastButtons\n      >\n      </mat-paginator>\n      <div class=\"example-container mat-elevation-z8 card-body\">\n        <mat-table [dataSource]=\"datasource\" matSort>\n          <!-- ID Column -->\n          <ng-container matColumnDef=\"title\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>\n              Nom\n            </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> {{ row.title }} </mat-cell>\n          </ng-container>\n\n          <!-- Progress Column -->\n          <ng-container matColumnDef=\"author\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>\n              Auteur\n            </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> {{ row.author }} </mat-cell>\n          </ng-container>\n\n          <!-- Name Column -->\n          <ng-container matColumnDef=\"year\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>\n              Année\n            </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> {{ row.year }} </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"Action\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>\n              Action\n            </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\">\n              <button\n                [routerLink]=\"['/book', row.id]\"\n                class=\"btn btn-outline-info\"\n              >\n                Consulter\n              </button>\n            </mat-cell>\n          </ng-container>\n\n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: displayedColumns\"> </mat-row>\n        </mat-table>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"dashboard\">\r\n  <div class=\"row\" *ngIf=\"isAuth\">\r\n    <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n      <div class=\"card card-stats border-success\">\r\n        <div class=\"card-body d-flex justify-content-between border-success \">\r\n          <div>\r\n            <img src=\"../../assets/img/books.png\" alt=\"\" style=\"height: 50px;width: 50px;\" />\r\n          </div>\r\n          <div class=\" text-right\">\r\n            <h6 class=\" card-subtitle text-secondary\">Nombre de livres total</h6>\r\n            <h4 class=\"card-title\">{{bookNumber}}</h4>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-footer border-success \">\r\n          <hr class=\"border-success\" />\r\n          <button class=\"btn btn-group mat-raised-button btn-success\" routerLink=\"/bookDashboard\">\r\n            Consulter\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n      <div class=\"card card-stats border-info\">\r\n        <div class=\"card-body d-flex justify-content-between border-info \">\r\n          <div>\r\n            <img src=\"../../assets/img/users.png\" alt=\"\" style=\"height: 50px;width: 50px;\" />\r\n          </div>\r\n          <div class=\" text-right\">\r\n            <h6 class=\" card-subtitle text-secondary\">Nombre d'abonnés</h6>\r\n            <h4 class=\"card-title\">{{clientNumber}}</h4>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-footer border-info \">\r\n          <hr class=\"border-success\" />\r\n          <button class=\"btn btn-group mat-raised-button btn-info\" routerLink=\"/clients\">\r\n            Consulter\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n      <div class=\"card card-stats border-success\">\r\n        <div class=\"card-body d-flex justify-content-between border-danger \">\r\n          <div>\r\n            <img src=\"../../assets/img/bookabsent.png\" alt=\"\" style=\"height: 50px;width: 50px;\" />\r\n          </div>\r\n          <div class=\" text-right\">\r\n            <h6 class=\" card-subtitle text-secondary\">Livres empreintés</h6>\r\n            <h4 class=\"card-title\">{{borrowBookNumber}}</h4>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-footer border-danger \">\r\n          <hr class=\"border-danger\" />\r\n          <button class=\"btn btn-group mat-raised-button btn-danger\" routerLink=\"/borrowedBook\">\r\n            Consulter\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n      <div class=\"card card-stats border-warning\">\r\n        <div class=\"card-body d-flex justify-content-between border-warning \">\r\n          <div>\r\n            <img src=\"../../assets/img/cdc.png\" alt=\"\" style=\"height: 50px;width: 50px;\" />\r\n          </div>\r\n        </div>\r\n        <div class=\"card-footer border-warning \">\r\n          Connecté en tant que : {{userName}}\r\n          <hr class=\"border-warning\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-12 info\">\r\n      <p>Hello, this is a little application I made to show off my Angular9 and springBoot skills.\r\n      </p>\r\n<p>It's a debut of a library application. In this little application, you can create new client, new types of books(genres) and then attribute some books to those types.\r\n  Client can borrow books and you can register a book as \"returned\" if the client give it back.</p>\r\n\r\n<p>For the front-end I used Angular, bootstrap, Angular material and a chart. This app had firebase as a backend before to execute CRUD operations, but i changed it to Spring boot.\r\n</p>\r\n<p>The back-end now, use spring-rest, spring-data-jpa, hibernate, spring-security and jwt.\r\n  But to visit, you have to authenticate first!</p>\r\n<table class=\"table col-md-3\">\r\n  <tr>\r\n    <td class=\"font-weight-bold\">username:</td>\r\n    <td>ashraf</td>\r\n  </tr>\r\n  <tr>\r\n    <td class=\"font-weight-bold\">password:</td>\r\n    <td>spring-boot</td>\r\n  </tr>\r\n</table>\r\n\r\n PS: the app is in French, I hope you don't get lost.\r\n    </div>\r\n  </div>\r\n  <!-- <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <div class=\"card \">\r\n        <div class=\"card-header \">\r\n          <h5 class=\"card-title\">Historiques</h5>\r\n          <p class=\"card-category\">Les dernieres interactions</p>\r\n        </div>\r\n        <div class=\"card-body \">\r\n          <canvas id=\"chartEmail\"></canvas>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-8\">\r\n      <div class=\"card card-chart\">\r\n        <div class=\"card-header\">\r\n          <h5 class=\"card-title\">Livres</h5>\r\n          <p class=\"card-category\">Frequence d'empreint des livres</p>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <ngx-charts-line-chart style=\"min-width: 100%; height: 100%;\" [view]=\"view\" [scheme]=\"colorScheme\"\r\n            [legend]=\"legend\" [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\" [xAxis]=\"xAxis\"\r\n            [yAxis]=\"yAxis\" [xAxisLabel]=\"xAxisLabel\" [yAxisLabel]=\"yAxisLabel\" [timeline]=\"timeline\" [results]=\"multi\"\r\n            (select)=\"onSelect($event)\" (activate)=\"onActivate($event)\" (deactivate)=\"onDeactivate($event)\">\r\n          </ngx-charts-line-chart>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/gestion/genre/genre.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gestion/genre/genre.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGestionGenreGenreComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-sm-12 col-md-8\">\n    <div class=\"card\">\n      <h4 class=\"card-header bg-dark text-light\">Genre de litteratures</h4>\n      <form class=\"form-check-inline card-body\" [formGroup]=\"genreForm\">\n        <div class=\"row\">\n          <input class=\"form-control col-sm-12 col-md-4\" formControlName=\"name\" type=\"text\"\n            placeholder=\"Nom du genre\" />\n          <textarea class=\"form-control col-sm-12 col-md-9\" formControlName=\"description\" type=\"text\"\n            placeholder=\"Description du genre\"></textarea>\n        </div>\n        <button class=\"btn btn-outline-success\" type=\"submit\" (click)=\"onSubmit()\">\n          Ajouter\n        </button>\n      </form>\n    </div>\n  </div>\n  <div class=\"col-sm-12 col-md-10\">\n    <div class=\"card\">\n      <mat-paginator [length]=\"length\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"pageSizeOptions\" showFirstLastButtons>\n      </mat-paginator>\n      <div class=\"example-container mat-elevation-z8 card-body\">\n        <mat-table [dataSource]=\"datasource\" matSort>\n          <!-- ID Column -->\n          <ng-container matColumnDef=\"name\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>\n              Nom\n            </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> {{ row.name }} </mat-cell>\n          </ng-container>\n\n          <!-- Progress Column -->\n          <ng-container matColumnDef=\"description\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>\n              Description\n            </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> {{ row.description }} </mat-cell>\n          </ng-container>\n\n          <!-- Name Column -->\n          <ng-container matColumnDef=\"Action\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>\n              Action\n            </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\">\n              <button class=\"btn btn-group btn-danger\" (click)=\"delete(row.id)\">\n                Supprimer\n              </button>\n            </mat-cell>\n          </ng-container>\n\n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: displayedColumns\"> </mat-row>\n        </mat-table>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" [routerLink]=\"['/dashboard']\">\n    <img\n      src=\"../../assets/img/logobook.png\"\n      width=\"40\"\n      height=\"30\"\n      alt=\"Site logo\"\n  /></a>\n  <button\n    class=\"navbar-toggler\"\n    type=\"button\"\n    data-toggle=\"collapse\"\n    data-target=\"#navbarContent\"\n  >\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarContent\">\n    <ul class=\"navbar-nav list-inline\">\n      <li class=\"nav-item active list-inline-item\">\n        <a class=\"nav-link text-light\" [routerLink]=\"['/dashboard']\">Acceuil</a>\n      </li>\n      <li class=\"nav-item list-inline-item\">\n        <a class=\"nav-link text-light\" [routerLink]=\"['/clients']\">Abonnés</a>\n      </li>\n      <li class=\"nav-item list-inline-item\">\n        <div class=\"dropdown\">\n          <a\n            class=\"nav-link text-light\"\n            id=\"dropdownMenu2\"\n            data-toggle=\"dropdown\"\n            aria-haspopup=\"true\"\n            aria-expanded=\"false\"\n            >Livres</a\n          >\n          <div class=\"dropdown-menu\" aria-labelledby=\"dropdown\">\n            <a class=\"dropdown-item\" routerLink=\"/bookDashboard\" >Tous les livres</a>\n            <a class=\"dropdown-item\" routerLink=\"/addBook\">Ajouter un livre</a>\n            <a class=\"dropdown-item\" routerLink=\"/borrowedBook\">Livres empreintés</a>\n            <a class=\"dropdown-item\" routerLink=\"/genre\"\n            >Genre de litteratures</a\n          >\n          </div>\n        </div>\n      </li>\n      <!-- <li class=\"nav-item list-inline-item\">\n        <div class=\"dropdown\">\n          <a\n            class=\"nav-link text-light\"\n            id=\"dropdownMenu2\"\n            data-toggle=\"dropdown\"\n            aria-haspopup=\"true\"\n            aria-expanded=\"false\"\n          >\n            Gestion</a\n          >\n          <div class=\"dropdown-menu\" aria-labelledby=\"dropdown\">\n            <a class=\"dropdown-item\" >Super Admin</a>\n            <a class=\"dropdown-item\" >Admin</a>\n            <a class=\"dropdown-item\" routerLink=\"/allCDC\">CDC</a>\n\n          </div>\n        </div>\n      </li>\n      <li class=\"nav-item list-inline-item\">\n        <div class=\"dropdown\">\n          <a\n            class=\"nav-link text-light\"\n            id=\"dropdownMenu2\"\n            data-toggle=\"dropdown\"\n            aria-haspopup=\"true\"\n            aria-expanded=\"false\"\n          >\n            Historiques</a\n          >\n          <div class=\"dropdown-menu\" aria-labelledby=\"dropdown\">\n            <a class=\"dropdown-item\" >Pret</a>\n            <a class=\"dropdown-item\" >Retour</a>\n            <a class=\"dropdown-item\" >Ajout</a>\n            <a class=\"dropdown-item\" >Suppression</a>\n          </div>\n        </div>\n      </li>\n      <li class=\"nav-item list-inline-item\">\n        <a class=\"nav-link text-light\">Statistiques</a>\n      </li> -->\n    </ul>\n    <div class=\"filler\"></div>\n    <ul class=\"navbar-nav list-inline\">\n      <!-- <li class=\"nav-item list-inline-item\">\n      <div matBadgeOverlap=\"true\" matBadgePosition=\"above after\" [matBadge]=\"matBadge\" [matBadgeHidden]=\"matBadge == 0\" routerLink=\"/notification\" matBadgeColor=\"warn\">\n        <img  src=\"../../assets/img/bell.png\"\n        style=\"height: 30px; width: 30px;\">\n      </div>\n      </li> -->\n      <li class=\"nav-item list-inline-item\">\n        <a class=\"nav-link text-light\" [routerLink]=\"['/login']\" *ngIf=\"!isAuth\">Connexion</a>\n      </li><li class=\"nav-item list-inline-item\">\n        <a class=\"nav-link text-light\" *ngIf=\"isAuth\" (click)=\"logout()\">Deconnexion</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "  <div class=\"row justify-content-center\">\r\n    <div class=\"col-12 text-center\">\r\n      <img class=\"mx-2\" src=\"../../assets/img/logobook.png\" width=\"50\" alt=\"Library logo\" />\r\n\r\n    </div>\r\n    <div class=\"col-sm-12 col-md-5 card p-5 border-info\">\r\n      <h4>Connection</h4>\r\n      <div class=\"form-group\">\r\n        <div class=\"form-group\">\r\n          <label class=\"form-check-label small font-italic font-weight-bold\">Votre email</label>\r\n          <input id=\"email\" [(ngModel)]=\"email\" type=\"text\" class=\"form-control\" placeholder=\"email\" />\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"form-check-label small font-italic font-weight-bold\">Votre mot de passe</label>\r\n          <input id=\"password\" [(ngModel)]=\"password\" type=\"password\" class=\"form-control\" placeholder=\"mot de passe\" />\r\n        </div>\r\n        <div class=\"form-group d-flex\">\r\n          <button *ngIf=\"!isLoading\" class=\"btn btn-group btn-outline-warning text-primary\" (click)=\"submit()\">\r\n            Connection\r\n          </button>\r\n          <button *ngIf=\"isLoading\" class=\"btn btn-group btn-outline-warning text-primary\" disabled>\r\n            <mat-spinner diameter=30></mat-spinner>\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <span class=\"text-danger bg-white rounded-pill text-center\">{{error}}</span>\r\n    </div>\r\n  </div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/messages/messages/messages.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/messages/messages/messages.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMessagesMessagesMessagesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <mat-toolbar>\n      <button class=\"btn btn-outline-success\">Envoyer un message</button>\n      <button class=\"btn btn-outline-primary\">Envoyer un mail</button>\n    </mat-toolbar>\n  </div>\n  <div class=\"col-md-6 col-sm-12\">\n    <form>\n      <mat-form-field class=\"form-group\">\n        <textarea\n          matInput\n          placeholder=\"Ecrivez votre mail\"\n          type=\"text\"\n          name=\"\"\n          id=\"\"\n          cols=\"30\"\n          rows=\"10\"\n        ></textarea>\n      </mat-form-field>\n\n      <mat-form-field class=\"form-group\">\n        <textarea\n          matInput\n          placeholder=\"Ecrivez votre sms\"\n          type=\"text\"\n          name=\"\"\n          id=\"\"\n          cols=\"30\"\n          rows=\"10\"\n        ></textarea>\n      </mat-form-field>\n    </form>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/messages/single-message/single-message.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/messages/single-message/single-message.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMessagesSingleMessageSingleMessageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <div class=\"d-flex sm\">\n      <button class=\"btn btn-outline-success\" (click)=\"showSms()\">\n        Envoyer un message\n      </button>\n      <button class=\"btn btn-outline-primary\" (click)=\"showMail()\">\n        Envoyer un mail\n      </button>\n    </div>\n  </div>\n  <div class=\"col-md-6 col-sm-12\">\n    <form *ngIf=\"mail\">\n      <mat-form-field class=\"form-group\">\n        <textarea\n          matInput\n          placeholder=\"Ecrivez votre mail\"\n          type=\"text\"\n          name=\"\"\n          id=\"\"\n          cols=\"5\"\n          rows=\"5\"\n        ></textarea>\n      </mat-form-field>\n      <button class=\" btn btn-primary mat-raised-button\">\n        envoyer le mail\n      </button>\n    </form>\n    <form *ngIf=\"sms\">\n      <mat-form-field class=\"form-group\">\n        <textarea\n          matInput\n          placeholder=\"Ecrivez votre sms\"\n          type=\"text\"\n          name=\"\"\n          id=\"\"\n          cols=\"5\"\n          rows=\"5\"\n        ></textarea>\n      </mat-form-field>\n      <button class=\"btn btn-success mat-raised-button\">envoyer le sms</button>\n    </form>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNotificationsNotificationsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col-sm-12 col-md-12\">\n  <mat-toolbar class=\" card-header bg-dark text-light\">\n    Notifications  </mat-toolbar>  \n  <mat-paginator\n      [length]=\"length\"\n      [pageSize]=\"pageSize\"\n      [pageSizeOptions]=\"pageSizeOptions\"\n      showFirstLastButtons\n    >\n    </mat-paginator>\n    <div class=\"example-container mat-elevation-z8\">\n      <mat-table [dataSource]=\"datasource\" matSort>\n        <!-- ID Column -->\n        <ng-container matColumnDef=\"title\">\n          <mat-header-cell class=\" bg-danger text-light\" *matHeaderCellDef mat-sort-header >\n            Titre\n          </mat-header-cell>\n          <mat-cell class=\" bg-warning\" *matCellDef=\"let row\"> {{ row?.title }} </mat-cell>\n        </ng-container>\n\n        <!-- Progress Column -->\n        <ng-container matColumnDef=\"name\">\n          <mat-header-cell class=\" bg-danger text-light\" *matHeaderCellDef mat-sort-header>\n            Nom de l'abonné\n          </mat-header-cell>\n          <mat-cell class=\" bg-warning\" *matCellDef=\"let row\"> {{ row?.userName }} </mat-cell>\n        </ng-container>\n\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"returnDate\">\n          <mat-header-cell class=\" bg-danger text-light\" *matHeaderCellDef mat-sort-header>\n            Date de retour\n          </mat-header-cell>\n          <mat-cell class=\" bg-warning\" *matCellDef=\"let row\"> {{ row?.returnDate }} </mat-cell>\n        </ng-container>\n        <!-- action Column -->\n        <ng-container matColumnDef=\"Action\">\n          <mat-header-cell class=\" bg-danger text-light\" *matHeaderCellDef mat-sort-header>\n            Consulter l'abonné\n          </mat-header-cell>\n          <mat-cell class=\" bg-warning\" *matCellDef=\"let row\">\n            <button\n              [routerLink]=\"['/client', row?.idUser]\"\n              class=\"btn btn-outline-danger\"\n            >\n              Consulter\n            </button>\n          </mat-cell>\n        </ng-container>\n\n        <mat-header-row\n          *matHeaderRowDef=\"displayedColumns\"\n        ></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns\">\n        </mat-row>\n      </mat-table>\n    </div>\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/statistic/global-stats/global-stats.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/statistic/global-stats/global-stats.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStatisticGlobalStatsGlobalStatsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-md-4 col-sm-12\">\n    <h2 class=\"card-header\" >Tous les livres</h2>\n    <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\" style=\"width: 100%;\">\n      <ng-container matColumnDef=\"Type\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Type de livre </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.Type}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"totalNumber\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Nombre total </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.totalNumber}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"absentNumber\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Livres absents </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.absentNumber}} </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n  </div>\n  <div class=\"col-md-8 col-sm-12\"></div>\n\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-12 col-md-5\">\n    <mat-card class=\" bg-secondary\">\n      <h4 class=\" card-header\" >Choisir une periode</h4>\n      <mat-card-content>\n        <mat-select (selectionChange)=\"onChange($event.value)\" >\n          <mat-option value=\"Aout\">Aout</mat-option>\n          <mat-option value=\"Juillet\">Juillet</mat-option>\n        </mat-select>\n      </mat-card-content>\n    </mat-card>\n  </div>\n  <div class=\"col-sm-12 col-md-7\" *ngIf=\"month!= null\">\n    <div>\n      <div style=\"display: block\">\n        <canvas baseChart\n                [datasets]=\"barChartData\"\n                [labels]=\"barChartLabels\"\n                [options]=\"barChartOptions\"\n                [legend]=\"barChartLegend\"\n                [chartType]=\"barChartType\">\n        </canvas>\n      </div>\n    </div>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/users/add-user/add-user.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/add-user/add-user.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUsersAddUserAddUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col-md-8\">\n  <div class=\"card\">\n    <h4 class=\"card-header text-light bg-dark\">Ajouter un abonné</h4>\n    <div class=\"card-body\">\n      <form [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <mat-form-field class=\"form-group\">\n                <input\n                  matInput\n                  formControlName=\"firstName\"\n                  placeholder=\"First Name\"\n                  type=\"text\"\n                />\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <mat-form-field class=\"form-group\">\n                <input\n                  matInput\n                  formControlName=\"lastName\"\n                  placeholder=\"Name\"\n                  type=\"text\"\n                />\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-4\">\n            <div class=\"form-group\">\n              <mat-form-field class=\"form-group\">\n                <input\n                  matInput\n                  formControlName=\"email\"\n                  placeholder=\"Addresse email\"\n                  type=\"email\"\n                />\n              </mat-form-field>\n            </div>\n          </div>\n        </div>\n\n\n        <button\n          mat-raised-button\n          type=\"submit\"\n          class=\"btn btn-danger pull-right\"\n          [disabled]=\"userForm.invalid\"\n\n        >\n          Ajouter l'abonné\n        </button>\n        <div class=\"clearfix\"></div>\n      </form>\n      <p class=\"text-danger\">{{ errorMessage }}</p>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/users/add-user/dialog-overview-example-dialog.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/add-user/dialog-overview-example-dialog.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUsersAddUserDialogOverviewExampleDialogHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h4 mat-dialog-title>Notification</h4>\n<div mat-dialog-content>\n  <p>Etes vous sûr d'enregistrer {{data.name}} ?</p>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">Annuler</button>\n  <button mat-button mat-dialog-close=\"ok\" cdkFocusInitial>Enregistrer</button>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/users/client/client.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/client/client.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUsersClientClientComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-md-12 col-lg-4\">\n    <div class=\"card card-profile\">\n      <div class=\"card-body\">\n        <mat-nav-list>\n          <mat-list-item>\n          </mat-list-item>\n          <mat-list-item class=\"card-header text-center\">\n            <h4 >{{ User?.firstName }} {{ User?.lastName }}</h4>\n          </mat-list-item>\n          <mat-list-item> Email: {{ User?.email }}  </mat-list-item>\n        </mat-nav-list>\n\n        <!-- <a\n          class=\"btn btn-danger btn-round\"\n          (click)=\"message = true\"\n          >Envoyer une notification</a\n        > -->\n      </div>\n    </div>\n    <app-single-message *ngIf=\"message\" ></app-single-message>\n  </div>\n  <div class=\"col-lg-8 col-md-12\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <mat-toolbar>\n          Livres lus\n        </mat-toolbar>\n      </div>\n      <div class=\"col-sm-12\">\n        <table class=\"table table-striped\">\n          <thead>\n            <tr class=\" small\">\n              <th scope=\"col\">#</th>\n              <th scope=\"col\">Titre</th>\n              <th scope=\"col\">Genre</th>\n              <th scope=\"col\">Auteur</th>\n              <th scope=\"col\">Date d'empeint</th>\n              <th scope=\"col\">Date de retour</th>\n              <th scope=\"col\">Rendu</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let book of myBooks; let i = index\" class=\"small\">\n              <td>{{ i + 1 }}</td>\n              <td>{{ book?.book?.title }}</td>\n              <td>{{ book?.genre?.name }}</td>\n              <td>{{ book?.book?.author }}</td>\n              <td>{{ book?.borrowDate }}</td>\n              <td>{{ book?.returnDate }}</td>\n              <td *ngIf=\"book?.returned === 1\" class=\" bg-success text-light\">Oui</td>\n              <td *ngIf=\"book?.returned === 0\" class=\" bg-danger text-light\">Non</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n\n    <!-- Angular 8 pagination -->\n  </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/users/clients/clients.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/clients/clients.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUsersClientsClientsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-sm-12 col-md-8\">\n    <div class=\"card\">\n      <h4 class=\"card-header bg-dark text-light\">Abonnés</h4>\n      <div class=\"card-body menuB\">\n        <button mat-raised-button class=\"btn btn-success btn-sm \" routerLink=\"/addUser\">\n          Ajouter un abonné\n        </button>\n      </div>\n      <form class=\"form-check-inline card-body\" [formGroup]=\"searchForm\">\n        <input\n          class=\"form-control\"\n          formControlName=\"letter\"\n          type=\"text\"\n          placeholder=\"Rechercher un abonné\"\n          aria-label=\"Rechercher\"\n        />\n        <button\n          class=\"btn btn-outline-success\"\n          type=\"submit\"\n          [disabled]=\"searchForm.invalid\"\n          (click)=\"search()\"\n        >\n          Rechercher\n        </button>\n        <button\n          class=\"btn btn-outline-danger\"\n          [disabled]=\"searchForm.invalid\"\n          (click)=\"this.initForm()\"\n        >\n          Effacer\n        </button>\n      </form>\n      <div *ngIf=\"searchResults\">\n        <table class=\"table table-striped\">\n          <thead>\n            <tr>\n              <th scope=\"col\">#</th>\n              <th scope=\"col\">Prenom</th>\n              <th scope=\"col\">Nom</th>\n              <th scope=\"col\">Action</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let user of Users; let i = index\">\n              <td>{{ i + 1 }}</td>\n              <td>{{ user.firstName }}</td>\n              <td>{{ user.lastName }}</td>\n              <td>\n                <button\n                  (click)=\"details(user.idUser)\"\n                  class=\"btn btn-group btn-outline-primary\"\n                >\n                  Consulter\n                </button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <div>\n        <button class=\"btn btn-group btn-danger\" *ngIf=\"errorMessage\">\n          Cet utilisateur n'existe pas\n        </button>\n      </div>\n    </div>\n  </div>\n  <!-- <div class=\"col-sm-12 col-md-4\">\n    <div class=\"card\">\n      <h4 class=\"card-header bg-dark text-light\">Messages</h4>\n      <div class=\"card-body menuB\">\n        <div class=\"row\">\n          <div class=\"col-sm-12\"   >\n                      <div class=\"d-flex sm\">\n                        <button class=\"btn btn-outline-success\" (click)=\"showSms()\" >Message groupé</button>\n                        <button class=\"btn btn-outline-primary\" (click)=\"showMail()\">Mail groupé</button>\n                      </div>\n          </div>\n                <div class=\"col-md-6 col-sm-12\">\n                  <form *ngIf=\"mail\">\n                    <mat-form-field class=\"form-group\">\n                      <textarea matInput placeholder=\"Ecrivez votre mail\" type=\"text\" name=\"\" id=\"\" cols=\"5\" rows=\"5\"></textarea>\n                    </mat-form-field>\n                    <button class=\" btn btn-primary mat-raised-button\">envoyer le mail</button>\n                  </form>\n                  <form *ngIf=\"sms\">\n                    <mat-form-field class=\"form-group\">\n                      <textarea matInput placeholder=\"Ecrivez votre sms\" type=\"text\" name=\"\" id=\"\" cols=\"5\" rows=\"5\"></textarea>\n                    </mat-form-field>\n                    <button class=\"btn btn-success mat-raised-button\">envoyer le sms</button>\n\n                  </form>\n                </div>\n\n              </div>\n\n      </div>\n    </div>\n  </div> -->\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-12 col-md-10\">\n    <div class=\"card\">\n      <mat-paginator\n        [length]=\"length\"\n        [pageSize]=\"pageSize\"\n        [pageSizeOptions]=\"pageSizeOptions\"\n        showFirstLastButtons\n      >\n      </mat-paginator>\n      <div class=\"example-container mat-elevation-z8 card-body\">\n        <mat-table [dataSource]=\"datasource\" matSort>\n          <!-- ID Column -->\n          <ng-container matColumnDef=\"firstName\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>\n              Prenom\n            </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> {{ row.firstName }} </mat-cell>\n          </ng-container>\n\n          <!-- Progress Column -->\n          <ng-container matColumnDef=\"lastName\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>\n              Nom\n            </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> {{ row.lastName }} </mat-cell>\n          </ng-container>\n\n          <!-- Name Column -->\n          <ng-container matColumnDef=\"email\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>\n              Email\n            </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> {{ row.email }} </mat-cell>\n          </ng-container>\n\n          <!-- Name Column -->\n          <ng-container matColumnDef=\"Action\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>\n              Action\n            </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\">\n              <button\n                (click)=\"details(row.id)\"\n                class=\"btn btn-group btn-outline-primary\"\n              >\n                Consulter\n              </button>\n            </mat-cell>\n          </ng-container>\n\n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: displayedColumns\"> </mat-row>\n        </mat-table>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/angular-material.module.ts":
  /*!********************************************!*\
    !*** ./src/app/angular-material.module.ts ***!
    \********************************************/

  /*! exports provided: AngularMaterialModule */

  /***/
  function srcAppAngularMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function () {
      return AngularMaterialModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/sidenav.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/menu.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/icon.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/button.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/list.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/divider.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/card.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/table.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/select.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/input.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/tabs.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/stepper.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/datepicker.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/badge.js");

    var AngularMaterialModule = function AngularMaterialModule() {
      _classCallCheck(this, AngularMaterialModule);
    };

    AngularMaterialModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [_angular_material_badge__WEBPACK_IMPORTED_MODULE_19__["MatBadgeModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatNativeDateModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"]]
    })], AngularMaterialModule);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: routes, components, AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "components", function () {
      return components;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./services/guards/auth-guard.service */
    "./src/app/services/guards/auth-guard.service.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./notifications/notifications.component */
    "./src/app/notifications/notifications.component.ts");
    /* harmony import */


    var _messages_messages_messages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./messages/messages/messages.component */
    "./src/app/messages/messages/messages.component.ts");
    /* harmony import */


    var _messages_single_message_single_message_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./messages/single-message/single-message.component */
    "./src/app/messages/single-message/single-message.component.ts");
    /* harmony import */


    var _book_dashboard_borrow_book_borrow_book_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./book-dashboard/borrow-book/borrow-book.component */
    "./src/app/book-dashboard/borrow-book/borrow-book.component.ts");
    /* harmony import */


    var _statistic_global_stats_global_stats_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./statistic/global-stats/global-stats.component */
    "./src/app/statistic/global-stats/global-stats.component.ts");
    /* harmony import */


    var _users_clients_clients_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./users/clients/clients.component */
    "./src/app/users/clients/clients.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _users_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./users/add-user/add-user.component */
    "./src/app/users/add-user/add-user.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _users_client_client_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./users/client/client.component */
    "./src/app/users/client/client.component.ts");
    /* harmony import */


    var _book_dashboard_borrowed_book_borrowed_book_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./book-dashboard/borrowed-book/borrowed-book.component */
    "./src/app/book-dashboard/borrowed-book/borrowed-book.component.ts");
    /* harmony import */


    var _book_dashboard_book_dashboard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./book-dashboard/book-dashboard.component */
    "./src/app/book-dashboard/book-dashboard.component.ts");
    /* harmony import */


    var _book_dashboard_book_book_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./book-dashboard/book/book.component */
    "./src/app/book-dashboard/book/book.component.ts");
    /* harmony import */


    var _book_dashboard_add_book_add_book_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./book-dashboard/add-book/add-book.component */
    "./src/app/book-dashboard/add-book/add-book.component.ts");
    /* harmony import */


    var _book_dashboard_livres_livres_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./book-dashboard/livres/livres.component */
    "./src/app/book-dashboard/livres/livres.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _services_guards_auth_guard_deconnected_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./services/guards/auth-guard-deconnected.service */
    "./src/app/services/guards/auth-guard-deconnected.service.ts");

    var routes = [{
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    }, {
      path: '*',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    }, {
      path: 'dashboard',
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
      pathMatch: 'full'
    }, {
      path: 'addUser',
      component: _users_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_10__["AddUserComponent"],
      pathMatch: 'full',
      canActivate: [_services_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]]
    }, {
      path: 'clients',
      component: _users_clients_clients_component__WEBPACK_IMPORTED_MODULE_8__["ClientsComponent"],
      pathMatch: 'full',
      canActivate: [_services_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]]
    }, {
      path: 'client/:id',
      component: _users_client_client_component__WEBPACK_IMPORTED_MODULE_13__["ClientComponent"],
      pathMatch: 'full',
      canActivate: [_services_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]]
    }, {
      path: 'singleMessage',
      component: _messages_single_message_single_message_component__WEBPACK_IMPORTED_MODULE_5__["SingleMessageComponent"],
      pathMatch: 'full',
      canActivate: [_services_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]]
    }, {
      path: 'messages',
      component: _messages_messages_messages_component__WEBPACK_IMPORTED_MODULE_4__["MessagesComponent"],
      pathMatch: 'full',
      canActivate: [_services_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]]
    }, {
      path: 'GS',
      component: _statistic_global_stats_global_stats_component__WEBPACK_IMPORTED_MODULE_7__["GlobalStatsComponent"],
      pathMatch: 'full',
      canActivate: [_services_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]]
    }, {
      path: 'type/:id',
      component: _book_dashboard_livres_livres_component__WEBPACK_IMPORTED_MODULE_18__["LivresComponent"],
      pathMatch: 'full',
      canActivate: [_services_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]]
    }, {
      path: 'addBook',
      component: _book_dashboard_add_book_add_book_component__WEBPACK_IMPORTED_MODULE_17__["AddBookComponent"],
      pathMatch: 'full',
      canActivate: [_services_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]]
    }, {
      path: 'book/:id',
      component: _book_dashboard_book_book_component__WEBPACK_IMPORTED_MODULE_16__["BookComponent"],
      pathMatch: 'full',
      canActivate: [_services_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]]
    }, {
      path: 'bookDashboard',
      component: _book_dashboard_book_dashboard_component__WEBPACK_IMPORTED_MODULE_15__["BookDashboardComponent"],
      pathMatch: 'full',
      canActivate: [_services_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]]
    }, {
      path: 'borrowedBook',
      component: _book_dashboard_borrowed_book_borrowed_book_component__WEBPACK_IMPORTED_MODULE_14__["BorrowedBookComponent"],
      pathMatch: 'full',
      canActivate: [_services_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]]
    }, {
      path: 'borrowBook/:id',
      component: _book_dashboard_borrow_book_borrow_book_component__WEBPACK_IMPORTED_MODULE_6__["BorrowBookComponent"],
      pathMatch: 'full',
      canActivate: [_services_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]]
    }, {
      path: 'notification',
      component: _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_3__["NotificationsComponent"],
      pathMatch: 'full',
      canActivate: [_services_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
      pathMatch: 'full',
      canActivate: [_services_guards_auth_guard_deconnected_service__WEBPACK_IMPORTED_MODULE_20__["AuthGuardDeconnectedService"]]
    }];
    var components = [_users_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_10__["AddUserComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"], _users_clients_clients_component__WEBPACK_IMPORTED_MODULE_8__["ClientsComponent"], _users_client_client_component__WEBPACK_IMPORTED_MODULE_13__["ClientComponent"], _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_3__["NotificationsComponent"], _statistic_global_stats_global_stats_component__WEBPACK_IMPORTED_MODULE_7__["GlobalStatsComponent"], _users_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_10__["Dialog"], _book_dashboard_borrowed_book_borrowed_book_component__WEBPACK_IMPORTED_MODULE_14__["BorrowedBookComponent"], _book_dashboard_book_dashboard_component__WEBPACK_IMPORTED_MODULE_15__["BookDashboardComponent"], _messages_single_message_single_message_component__WEBPACK_IMPORTED_MODULE_5__["SingleMessageComponent"], _book_dashboard_book_book_component__WEBPACK_IMPORTED_MODULE_16__["BookComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_19__["HeaderComponent"], _book_dashboard_borrow_book_borrow_book_component__WEBPACK_IMPORTED_MODULE_6__["BorrowBookComponent"], _messages_messages_messages_component__WEBPACK_IMPORTED_MODULE_4__["MessagesComponent"], _book_dashboard_add_book_add_book_component__WEBPACK_IMPORTED_MODULE_17__["AddBookComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _book_dashboard_livres_livres_component__WEBPACK_IMPORTED_MODULE_18__["LivresComponent"]];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_11__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".navigation {\n  width: 100%;\n  text-align: right;\n}\n\n.container {\n  background: white;\n}\n\n.brand {\n  height: 100px;\n  width: auto;\n}\n\n.navbar {\n  display: flex;\n  justify-content: space-between;\n}\n\n.logo {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.content {\n  width: 100%;\n  height: 100%;\n}\n\n.filler {\n  flex: 1 1 auto;\n}\n\n.top {\n  width: auto;\n  height: 10px;\n  background: #3499d2;\n  background: linear-gradient(90deg, #3499d2 19%, #d0f4cb 95%);\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXHByb2pldFxcYW5ndWxhciBwcm9qZWN0XFxuYXRpb25hbExpYnJhcnkvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxpQkFBQTtBQ0VGOztBREFBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUNHRjs7QUREQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQ0lGOztBREZBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0tGOztBREhBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNNRjs7QURKQTtFQUNFLGNBQUE7QUNPRjs7QURKQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw0REFBQTtFQUFzRixzQkFBQTtBQ1F4RiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZpZ2F0aW9ue1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uY29udGFpbmVye1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi5icmFuZHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IGF1dG87XG59XG4ubmF2YmFye1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ubG9nb3tcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZmlsbGVye1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLnRvcHtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogMTBweDtcbiAgYmFja2dyb3VuZDogcmdiKDUyLDE1MywyMTApO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoNTIsMTUzLDIxMCwxKSAxOSUsIHJnYmEoMjA4LDI0NCwyMDMsMSkgOTUlKTsgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59IiwiLm5hdmlnYXRpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmJyYW5kIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IGF1dG87XG59XG5cbi5uYXZiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmZpbGxlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4udG9wIHtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogMTBweDtcbiAgYmFja2dyb3VuZDogIzM0OTlkMjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMzQ5OWQyIDE5JSwgI2QwZjRjYiA5NSUpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent(router, auth) {
      _classCallCheck(this, AppComponent);

      this.router = router;
      this.auth = auth;
      this.title = 'gym'; //

      auth.Authenticated();
    };

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./services/guards/auth-guard.service */
    "./src/app/services/guards/auth-guard.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_notifications_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/notifications.service */
    "./src/app/services/notifications.service.ts");
    /* harmony import */


    var _users_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./users/add-user/add-user.component */
    "./src/app/users/add-user/add-user.component.ts");
    /* harmony import */


    var _services_books_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services/books.service */
    "./src/app/services/books.service.ts");
    /* harmony import */


    var _services_clients_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services/clients.service */
    "./src/app/services/clients.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./angular-material.module */
    "./src/app/angular-material.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _gestion_gestion_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./gestion/gestion.module */
    "./src/app/gestion/gestion.module.ts");
    /* harmony import */


    var _services_guards_auth_guard_deconnected_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./services/guards/auth-guard-deconnected.service */
    "./src/app/services/guards/auth-guard-deconnected.service.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["NgModule"])({
      entryComponents: [_users_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_4__["Dialog"]],
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"], _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["components"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"], _angular_material_module__WEBPACK_IMPORTED_MODULE_8__["AngularMaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(_app_routing_module__WEBPACK_IMPORTED_MODULE_11__["routes"]), _gestion_gestion_module__WEBPACK_IMPORTED_MODULE_16__["GestionModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"]],
      providers: [_services_clients_service__WEBPACK_IMPORTED_MODULE_6__["ClientsService"], _services_books_service__WEBPACK_IMPORTED_MODULE_5__["BooksService"], _services_notifications_service__WEBPACK_IMPORTED_MODULE_3__["NotificationsService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_guards_auth_guard_deconnected_service__WEBPACK_IMPORTED_MODULE_17__["AuthGuardDeconnectedService"], _services_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HTTP_INTERCEPTORS"],
        useClass: _services_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/book-dashboard/add-book/add-book.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/book-dashboard/add-book/add-book.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBookDashboardAddBookAddBookComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2stZGFzaGJvYXJkL2FkZC1ib29rL2FkZC1ib29rLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/book-dashboard/add-book/add-book.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/book-dashboard/add-book/add-book.component.ts ***!
    \***************************************************************/

  /*! exports provided: AddBookComponent, Dialog */

  /***/
  function srcAppBookDashboardAddBookAddBookComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddBookComponent", function () {
      return AddBookComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Dialog", function () {
      return Dialog;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_books_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../services/books.service */
    "./src/app/services/books.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/dialog.js");

    var AddBookComponent = /*#__PURE__*/function () {
      function AddBookComponent(formBuilder, router, dialog, bookS, auth) {
        var _this = this;

        _classCallCheck(this, AddBookComponent);

        this.formBuilder = formBuilder;
        this.router = router;
        this.dialog = dialog;
        this.bookS = bookS;
        this.auth = auth;
        this.picTab = []; // display

        this.picSend = []; // send to firebase

        bookS.getGenres().subscribe(function (data) {
          _this.genres = data;
        }, function (error) {
          _this.auth.checkAuthError(error);
        });
      }

      _createClass(AddBookComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initForm(); //  this.compS.getCompany(localStorage.getItem('id')).subscribe(
          //  (data) => this.user = data
          // );
        }
      }, {
        key: "initForm",
        value: function initForm() {
          this.bookForm = this.formBuilder.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            author: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            year: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            genre: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.book = {
            title: this.bookForm.get('title').value,
            author: this.bookForm.get('author').value,
            year: this.bookForm.get('year').value,
            enabled: 1,
            image: '',
            disponible: 1
          };
          this.idGenre = this.bookForm.get('genre').value;
          this.openDialog();
        } // upload(event) {
        //   this.picSend = event.target.files[0];
        //   const reader = new FileReader();
        //   const mimeType = event.target.files[0].type;
        //   if (mimeType.match(/image\/*/) == null) {
        //     this.message = 'Only images are supported.';
        //     return;
        //   }
        //   console.log(this.picSend);
        //   reader.readAsDataURL(event.target.files[0]);
        //   reader.onload = () => {
        //     this.picTab.push({ image: reader.result });
        //   };
        // }

      }, {
        key: "openDialog",
        value: function openDialog() {
          var _this2 = this;

          var dialogRef = this.dialog.open(Dialog, {
            width: '250px',
            data: this.book
          });
          dialogRef.afterClosed().subscribe(function (data) {
            if (data) {
              _this2.bookS.addBook(_this2.book, _this2.idGenre).subscribe(function () {
                _this2.router.navigate(['/bookDashboard']);
              });
            }
          });
        }
      }]);

      return AddBookComponent;
    }();

    AddBookComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
      }, {
        type: _services_books_service__WEBPACK_IMPORTED_MODULE_2__["BooksService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
      }];
    };

    AddBookComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-add-book',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./add-book.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/book-dashboard/add-book/add-book.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./add-book.component.scss */
      "./src/app/book-dashboard/add-book/add-book.component.scss"))["default"]]
    })], AddBookComponent);

    var Dialog =
    /*#__PURE__*/
    // tslint:disable-next-line:component-class-suffix
    function () {
      function Dialog(dialogRef, data) {
        _classCallCheck(this, Dialog);

        this.dialogRef = dialogRef;
        this.data = data;
      }

      _createClass(Dialog, [{
        key: "onNoClick",
        value: function onNoClick() {
          this.dialogRef.close(false);
        }
      }, {
        key: "save",
        value: function save() {
          this.dialogRef.close(true);
        }
      }]);

      return Dialog;
    }();

    Dialog.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    Dialog = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-dialog',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dialog-overview-example-dialog.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/book-dashboard/add-book/dialog-overview-example-dialog.html"))["default"]
    }) // tslint:disable-next-line:component-class-suffix
    , Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"]))], Dialog);
    /***/
  },

  /***/
  "./src/app/book-dashboard/book-dashboard.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/book-dashboard/book-dashboard.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBookDashboardBookDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2stZGFzaGJvYXJkL2Jvb2stZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/book-dashboard/book-dashboard.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/book-dashboard/book-dashboard.component.ts ***!
    \************************************************************/

  /*! exports provided: BookDashboardComponent */

  /***/
  function srcAppBookDashboardBookDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookDashboardComponent", function () {
      return BookDashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_books_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../services/books.service */
    "./src/app/services/books.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var BookDashboardComponent = /*#__PURE__*/function () {
      function BookDashboardComponent(bookS, route, formBuilder, auth) {
        var _this3 = this;

        _classCallCheck(this, BookDashboardComponent);

        this.bookS = bookS;
        this.route = route;
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.searchResults = false;
        this.displayedColumns = ['title', 'author', 'genre', 'Action'];
        this.Books = [];
        this.pageSize = 5;
        this.pageSizeOptions = [5, 10];
        this.allBooks = true;
        this.specificBooks = false;
        this.bookS.getBooks().subscribe(function (data) {
          _this3.datasource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
          _this3.length = data.length;
          _this3.datasource.sort = _this3.sort;
          _this3.datasource.paginator = _this3.paginator;
        }, function (error) {
          _this3.auth.checkAuthError(error);
        });
        this.bookS.getGenres().subscribe(function (data) {
          _this3.genres = data;
        }, function (error) {
          _this3.auth.checkAuthError(error);
        });
      }

      _createClass(BookDashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initForm();
        } // tslint:disable-next-line:use-lifecycle-interface

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {//
        }
      }, {
        key: "search",
        value: function search() {
          var _this4 = this;

          this.Books = [];
          this.searchResults = false;
          var letter = this.searchForm.get('letter').value.toLowerCase().trim();

          if (letter === '') {
            this.errorMessage = true;
          } else {
            this.bookS.getBooks().subscribe(function (data) {
              data.forEach(function (book) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          if (!book.title.toLowerCase().includes(letter.toLowerCase())) {
                            _context.next = 5;
                            break;
                          }

                          _context.next = 3;
                          return this.Books.push(book);

                        case 3:
                          this.searchResults = true;
                          this.errorMessage = false;

                        case 5:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, this);
                }));
              });
            });

            if (this.Books.length === 0) {
              this.errorMessage = true;
            }
          }
        }
      }, {
        key: "initForm",
        value: function initForm() {
          this.searchForm = this.formBuilder.group({
            letter: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]]
          });
          this.Books = [];
          this.searchResults = false;
          this.errorMessage = false;
        }
      }, {
        key: "details",
        value: function details(idBook) {
          this.route.navigate(['/book/', idBook]);
        }
      }, {
        key: "displayAll",
        value: function displayAll() {
          this.allBooks = true;
          this.specificBooks = false;
        }
      }, {
        key: "display",
        value: function display(id) {
          this.allBooks = false;
          this.specificBooks = true;
          this.bookGenreId = id;
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          var _this5 = this;

          this.bookS["delete"](id).subscribe(function () {}, function (error) {
            _this5.auth.checkAuthError(error);

            if (error.status === 500) {
              alert('This book was already borrowed, it\'s saved in the borrowed book db, you can\'t delete it');
            }
          });
        } // tslint:disable-next-line:use-lifecycle-interface

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var _this6 = this;

          //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
          //Add '${implements OnChanges}' to the class.
          this.bookS.getBooks().subscribe(function (data) {
            _this6.datasource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
            _this6.length = data.length;
            _this6.datasource.sort = _this6.sort;
            _this6.datasource.paginator = _this6.paginator;
          }, function (error) {
            _this6.auth.checkAuthError(error);
          });
        }
      }]);

      return BookDashboardComponent;
    }();

    BookDashboardComponent.ctorParameters = function () {
      return [{
        type: _services_books_service__WEBPACK_IMPORTED_MODULE_2__["BooksService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])], BookDashboardComponent.prototype, "sort", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])], BookDashboardComponent.prototype, "paginator", void 0);
    BookDashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-book-dashboard',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./book-dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/book-dashboard/book-dashboard.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./book-dashboard.component.scss */
      "./src/app/book-dashboard/book-dashboard.component.scss"))["default"]]
    })], BookDashboardComponent);
    /***/
  },

  /***/
  "./src/app/book-dashboard/book/book.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/book-dashboard/book/book.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBookDashboardBookBookComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".imgWrapper {\n  max-height: 400px;\n  max-width: 200px;\n}\n\n.imgCarousel {\n  height: 100%;\n  width: 100%;\n  margin: auto;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9vay1kYXNoYm9hcmQvYm9vay9EOlxccHJvamV0XFxhbmd1bGFyIHByb2plY3RcXG5hdGlvbmFsTGlicmFyeS9zcmNcXGFwcFxcYm9vay1kYXNoYm9hcmRcXGJvb2tcXGJvb2suY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Jvb2stZGFzaGJvYXJkL2Jvb2svYm9vay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0osWUFBQTtFQUNBLGNBQUE7QUNDQSIsImZpbGUiOiJzcmMvYXBwL2Jvb2stZGFzaGJvYXJkL2Jvb2svYm9vay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWdXcmFwcGVye1xyXG4gICAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG5cclxuICB9XHJcbiAgLmltZ0Nhcm91c2Vse1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbm1hcmdpbjogYXV0bztcclxuZGlzcGxheTogYmxvY2s7ICB9IiwiLmltZ1dyYXBwZXIge1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbn1cblxuLmltZ0Nhcm91c2VsIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/book-dashboard/book/book.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/book-dashboard/book/book.component.ts ***!
    \*******************************************************/

  /*! exports provided: BookComponent */

  /***/
  function srcAppBookDashboardBookBookComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookComponent", function () {
      return BookComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_books_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../services/books.service */
    "./src/app/services/books.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var BookComponent = /*#__PURE__*/function () {
      function BookComponent(aR, auth, bookS) {
        var _this7 = this;

        _classCallCheck(this, BookComponent);

        this.aR = aR;
        this.auth = auth;
        this.bookS = bookS;
        this.Books = [];
        this.borrow = false;
        this.aR.params.subscribe(function (params) {
          _this7.id = params.id;
          bookS.getBook(_this7.id).subscribe(function (data) {
            _this7.book = data;

            _this7.bookS.getPretBook(_this7.book.id).subscribe(function (results) {
              return _this7.prets = results;
            });
          }, function (error) {
            _this7.auth.checkAuthError(error);
          });
          bookS.getPretBook(_this7.id).subscribe(function (data) {
            _this7.prets = data;
            console.log(data);
          }, function (error) {
            _this7.auth.checkAuthError(error);
          });
        });
      }

      _createClass(BookComponent, [{
        key: "borrowBook",
        value: function borrowBook() {
          this.borrow = true;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BookComponent;
    }();

    BookComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
      }, {
        type: _services_books_service__WEBPACK_IMPORTED_MODULE_2__["BooksService"]
      }];
    };

    BookComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-book',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./book.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/book-dashboard/book/book.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./book.component.scss */
      "./src/app/book-dashboard/book/book.component.scss"))["default"]]
    })], BookComponent);
    /***/
  },

  /***/
  "./src/app/book-dashboard/borrow-book/borrow-book.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/book-dashboard/borrow-book/borrow-book.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBookDashboardBorrowBookBorrowBookComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2stZGFzaGJvYXJkL2JvcnJvdy1ib29rL2JvcnJvdy1ib29rLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/book-dashboard/borrow-book/borrow-book.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/book-dashboard/borrow-book/borrow-book.component.ts ***!
    \*********************************************************************/

  /*! exports provided: BorrowBookComponent */

  /***/
  function srcAppBookDashboardBorrowBookBorrowBookComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BorrowBookComponent", function () {
      return BorrowBookComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_services_books_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/books.service */
    "./src/app/services/books.service.ts");
    /* harmony import */


    var _services_clients_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../services/clients.service */
    "./src/app/services/clients.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var BorrowBookComponent = /*#__PURE__*/function () {
      function BorrowBookComponent(formBuilder, userS, bookS, auth) {
        _classCallCheck(this, BorrowBookComponent);

        this.formBuilder = formBuilder;
        this.userS = userS;
        this.bookS = bookS;
        this.auth = auth;
        this.borrowed = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.isLinear = true;
        this.searchResults = false;
        this.selected = false;
        this.errorMessage = false;
        this.errorDate = false;

        this.myFilter = function (d) {
          var day = (d || new Date()).getDay(); // Prevent Saturday and friday from being selected.

          return day !== 0 && day !== 5;
        };

        var currentYear = new Date().getFullYear();
        var currentMonth = new Date().getMonth();
        var currentDay = new Date().getDate();
        this.minDate = new Date(currentYear - 0, currentMonth, currentDay);
        this.maxDate = new Date(currentYear + 0, currentMonth, currentDay + 15);
      }

      _createClass(BorrowBookComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initsearchForm();
          this.borrowForm = this.formBuilder.group({
            returnDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this8 = this;

          var event = new Date(this.borrowForm.get('returnDate').value);
          var options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          };
          var date = event.toLocaleDateString('fr-FR', options);
          var Pret = {
            userId: localStorage.getItem('id'),
            bookId: this.book.id,
            clientId: this.choosenUser.id,
            borrowDate: new Date().toLocaleDateString('fr-FR', options),
            returnDate: date,
            returned: 0
          };
          this.bookS.borrowBook(Pret).subscribe(function () {
            _this8.borrowed.emit();
          }, function (error) {
            _this8.auth.checkAuthError(error);
          });
        }
      }, {
        key: "search",
        value: function search() {
          var _this9 = this;

          this.Users = [];
          this.searchResults = false;
          this.selected = false;
          var letter = this.searchForm.get('letter').value.toLowerCase().trim();

          if (letter === '') {
            this.errorMessage = true;
          } else {
            this.userS.getClients().subscribe(function (data) {
              data.forEach(function (user) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this9, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          if (!(user.firstName.toLowerCase().includes(letter) || user.lastName.toLowerCase().includes(letter))) {
                            _context2.next = 4;
                            break;
                          }

                          _context2.next = 3;
                          return this.Users.push(user);

                        case 3:
                          this.searchResults = true;

                        case 4:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2, this);
                }));
              });

              if (_this9.Users.length === 0) {
                _this9.errorMessage = true;
              }
            }, function (error) {
              _this9.auth.checkAuthError(error);
            });
          }
        }
      }, {
        key: "initsearchForm",
        value: function initsearchForm() {
          this.searchForm = this.formBuilder.group({
            letter: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
          });
          this.Users = [];
          this.selected = false;
          this.searchResults = false;
          this.errorMessage = false;
        }
      }, {
        key: "choose",
        value: function choose(choosenUser) {
          this.choosenUser = choosenUser;
          this.selected = true;
          this.searchResults = false;
        }
      }, {
        key: "resetUser",
        value: function resetUser() {
          this.choosenUser = null;
          this.selected = false;
          this.searchResults = false;
          this.initsearchForm();
        }
      }]);

      return BorrowBookComponent;
    }();

    BorrowBookComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: _services_clients_service__WEBPACK_IMPORTED_MODULE_3__["ClientsService"]
      }, {
        type: src_app_services_books_service__WEBPACK_IMPORTED_MODULE_2__["BooksService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])()], BorrowBookComponent.prototype, "book", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"])()], BorrowBookComponent.prototype, "borrowed", void 0);
    BorrowBookComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: 'app-borrow-book',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./borrow-book.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/book-dashboard/borrow-book/borrow-book.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./borrow-book.component.scss */
      "./src/app/book-dashboard/borrow-book/borrow-book.component.scss"))["default"]]
    })], BorrowBookComponent);
    /***/
  },

  /***/
  "./src/app/book-dashboard/borrowed-book/borrowed-book.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/book-dashboard/borrowed-book/borrowed-book.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBookDashboardBorrowedBookBorrowedBookComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2stZGFzaGJvYXJkL2JvcnJvd2VkLWJvb2svYm9ycm93ZWQtYm9vay5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/book-dashboard/borrowed-book/borrowed-book.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/book-dashboard/borrowed-book/borrowed-book.component.ts ***!
    \*************************************************************************/

  /*! exports provided: BorrowedBookComponent */

  /***/
  function srcAppBookDashboardBorrowedBookBorrowedBookComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BorrowedBookComponent", function () {
      return BorrowedBookComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_books_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/books.service */
    "./src/app/services/books.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var BorrowedBookComponent = /*#__PURE__*/function () {
      function BorrowedBookComponent(bookS, formbuilder, router, auth) {
        _classCallCheck(this, BorrowedBookComponent);

        this.bookS = bookS;
        this.formbuilder = formbuilder;
        this.router = router;
        this.auth = auth;
        this.errorMessage = false;
        this.getAllPrets();
      }

      _createClass(BorrowedBookComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initsearchForm();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
          // Add '${implements OnChanges}' to the class.
          this.getAllPrets();
        }
      }, {
        key: "rendu",
        value: function rendu(pret) {
          var _this10 = this;

          var options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          };
          pret.returnDate = new Date().toLocaleDateString('fr-FR', options), pret.returned = 1;
          this.bookS.rendu(pret).subscribe(function () {
            _this10.initsearchForm();
          }, function (error) {
            _this10.auth.checkAuthError(error);
          });
        }
      }, {
        key: "notifier",
        value: function notifier() {//
        }
      }, {
        key: "getAllPrets",
        value: function getAllPrets() {
          var _this11 = this;

          this.bookS.getAllPrets().subscribe(function (data) {
            _this11.Prets = data;
          }, function (error) {
            _this11.auth.checkAuthError(error);
          });
        }
      }, {
        key: "search",
        value: function search() {
          var _this12 = this;

          this.searchPrets = [];
          this.searchResults = false;
          var letter = this.searchForm.get('letter').value.trim().toLowerCase();

          if (letter === '') {
            this.errorMessage = true;
          } else {
            this.Prets.forEach(function (pret) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this12, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        if (!pret.book.title.toLowerCase().includes(letter)) {
                          _context3.next = 4;
                          break;
                        }

                        _context3.next = 3;
                        return this.searchPrets.push(pret);

                      case 3:
                        this.searchResults = true;

                      case 4:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this);
              }));
            });

            if (this.searchPrets.length === 0) {
              this.errorMessage = true;
            }
          }
        }
      }, {
        key: "initsearchForm",
        value: function initsearchForm() {
          this.searchForm = this.formbuilder.group({
            letter: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
          });
          this.searchPrets = [];
          this.searchResults = false;
          this.errorMessage = false;
        }
      }, {
        key: "check",
        value: function check(id) {
          this.router.navigate(['/book/' + id]);
        }
      }]);

      return BorrowedBookComponent;
    }();

    BorrowedBookComponent.ctorParameters = function () {
      return [{
        type: src_app_services_books_service__WEBPACK_IMPORTED_MODULE_3__["BooksService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
      }];
    };

    BorrowedBookComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: 'app-borrowed-book',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./borrowed-book.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/book-dashboard/borrowed-book/borrowed-book.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./borrowed-book.component.scss */
      "./src/app/book-dashboard/borrowed-book/borrowed-book.component.scss"))["default"]]
    })], BorrowedBookComponent);
    /***/
  },

  /***/
  "./src/app/book-dashboard/livres/livres.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/book-dashboard/livres/livres.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBookDashboardLivresLivresComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-card {\n  background-color: transparent;\n  text-align: center;\n}\n\n.imgWrapper {\n  max-height: 400px;\n  max-width: 200px;\n}\n\n.imgCarousel {\n  height: 100%;\n  width: 100%;\n  margin: auto;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9vay1kYXNoYm9hcmQvbGl2cmVzL0Q6XFxwcm9qZXRcXGFuZ3VsYXIgcHJvamVjdFxcbmF0aW9uYWxMaWJyYXJ5L3NyY1xcYXBwXFxib29rLWRhc2hib2FyZFxcbGl2cmVzXFxsaXZyZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Jvb2stZGFzaGJvYXJkL2xpdnJlcy9saXZyZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUU7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNKLFlBQUE7RUFDQSxjQUFBO0FDQ0EiLCJmaWxlIjoic3JjL2FwcC9ib29rLWRhc2hib2FyZC9saXZyZXMvbGl2cmVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgfVxyXG4gIC5pbWdXcmFwcGVye1xyXG4gICAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG5cclxuICB9XHJcbiAgLmltZ0Nhcm91c2Vse1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbm1hcmdpbjogYXV0bztcclxuZGlzcGxheTogYmxvY2s7ICB9IiwibWF0LWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW1nV3JhcHBlciB7XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xuICBtYXgtd2lkdGg6IDIwMHB4O1xufVxuXG4uaW1nQ2Fyb3VzZWwge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/book-dashboard/livres/livres.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/book-dashboard/livres/livres.component.ts ***!
    \***********************************************************/

  /*! exports provided: LivresComponent */

  /***/
  function srcAppBookDashboardLivresLivresComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LivresComponent", function () {
      return LivresComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var src_app_services_books_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/books.service */
    "./src/app/services/books.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var LivresComponent = /*#__PURE__*/function () {
      function LivresComponent(bookS, route, formBuilder) {
        _classCallCheck(this, LivresComponent);

        this.bookS = bookS;
        this.route = route;
        this.formBuilder = formBuilder;
        this.displayedColumns = ['title', 'author', 'year', 'Action'];
        this.pageSize = 5;
        this.pageSizeOptions = [5, 10];
      }

      _createClass(LivresComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          this.bookS.getBooksByGenre(this.genreId).subscribe(function (data) {
            _this13.books = data;
            _this13.datasource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](data);
            _this13.length = data.length;
            _this13.datasource.sort = _this13.sort;
            _this13.datasource.paginator = _this13.paginator;
          });
        } // tslint:disable-next-line:use-lifecycle-interface

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var _this14 = this;

          //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
          //Add '${implements OnChanges}' to the class.
          this.bookS.getBooksByGenre(this.genreId).subscribe(function (data) {
            _this14.books = data;
            _this14.datasource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](data);
            _this14.length = data.length;
            _this14.datasource.sort = _this14.sort;
            _this14.datasource.paginator = _this14.paginator;
          });
        }
      }]);

      return LivresComponent;
    }();

    LivresComponent.ctorParameters = function () {
      return [{
        type: src_app_services_books_service__WEBPACK_IMPORTED_MODULE_4__["BooksService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LivresComponent.prototype, "genreId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])], LivresComponent.prototype, "sort", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])], LivresComponent.prototype, "paginator", void 0);
    LivresComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-livres',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./livres.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/book-dashboard/livres/livres.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./livres.component.scss */
      "./src/app/book-dashboard/livres/livres.component.scss"))["default"]]
    })], LivresComponent);
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ts ***!
    \**************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var src_app_services_books_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/books.service */
    "./src/app/services/books.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_clients_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/clients.service */
    "./src/app/services/clients.service.ts");

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(elementRef, router, auth, client, book) {
        var _this15 = this;

        _classCallCheck(this, DashboardComponent);

        this.elementRef = elementRef;
        this.router = router;
        this.auth = auth;
        this.client = client;
        this.book = book;
        this.multi = [{
          name: 'Roman',
          series: [{
            name: 'JAN',
            value: 5
          }, {
            name: 'FEV',
            value: 34
          }, {
            name: 'MARS',
            value: 12
          }]
        }, {
          name: 'Bande dessinée',
          series: [{
            name: 'JAN',
            value: 16
          }, {
            name: 'FEV',
            value: 24
          }, {
            name: 'MARS',
            value: 35
          }]
        }, {
          name: 'Policier',
          series: [{
            name: 'JAN',
            value: 6
          }, {
            name: 'FEV',
            value: 18
          }, {
            name: 'MARS',
            value: 11
          }]
        }, {
          name: 'Journal',
          series: [{
            name: 'JAN',
            value: 2
          }, {
            name: 'FEV',
            value: 7
          }, {
            name: 'MARS',
            value: 3
          }]
        }];
        this.view = [700, 300]; // options

        this.legend = true;
        this.showLabels = true;
        this.animations = true;
        this.xAxis = true;
        this.yAxis = true;
        this.showYAxisLabel = true;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Mois';
        this.yAxisLabel = 'Nombres';
        this.timeline = true;
        this.clientNumber = 0;
        this.bookNumber = 0;
        this.borrowBookNumber = 0;
        this.colorScheme = {
          domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
        };
        Object.assign(this, {
          "this": this.multi
        });
        this.userName = localStorage.getItem('username');
        this.book.getBooks().subscribe(function (data) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this15, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var borrowBook;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.bookNumber = data.length;
                    _context4.next = 3;
                    return data.filter(function (book) {
                      return book.disponible === 0;
                    });

                  case 3:
                    borrowBook = _context4.sent;
                    this.borrowBookNumber = borrowBook.length;

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        });
        this.client.getClients().subscribe(function (data) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this15, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    this.clientNumber = data.length;

                  case 1:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        });
        this.auth.isAuth.subscribe(function (data) {
          _this15.isAuth = data;
        });
      }

      _createClass(DashboardComponent, [{
        key: "onSelect",
        value: function onSelect(data) {
          console.log('Item clicked', JSON.parse(JSON.stringify(data)));
        }
      }, {
        key: "onActivate",
        value: function onActivate(data) {
          console.log('Activate', JSON.parse(JSON.stringify(data)));
        }
      }, {
        key: "onDeactivate",
        value: function onDeactivate(data) {
          console.log('Deactivate', JSON.parse(JSON.stringify(data)));
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _services_clients_service__WEBPACK_IMPORTED_MODULE_5__["ClientsService"]
      }, {
        type: src_app_services_books_service__WEBPACK_IMPORTED_MODULE_1__["BooksService"]
      }];
    };

    DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: 'app-dashboard',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dashboard.component.scss */
      "./src/app/dashboard/dashboard.component.scss"))["default"]]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/gestion/genre/genre.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/gestion/genre/genre.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppGestionGenreGenreComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dlc3Rpb24vZ2VucmUvZ2VucmUuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/gestion/genre/genre.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/gestion/genre/genre.component.ts ***!
    \**************************************************/

  /*! exports provided: GenreComponent */

  /***/
  function srcAppGestionGenreGenreComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GenreComponent", function () {
      return GenreComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_books_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../services/books.service */
    "./src/app/services/books.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var GenreComponent = /*#__PURE__*/function () {
      function GenreComponent(bookS, auth, formBuilder) {
        _classCallCheck(this, GenreComponent);

        this.bookS = bookS;
        this.auth = auth;
        this.formBuilder = formBuilder;
        this.displayedColumns = ['name', 'description', 'Action'];
        this.pageSize = 5;
        this.pageSizeOptions = [5, 10];
        this.initForm();
      }

      _createClass(GenreComponent, [{
        key: "initForm",
        value: function initForm() {
          var _this16 = this;

          this.genreForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
          });
          this.datasource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](null);
          this.bookS.getGenres().subscribe(function (data) {
            _this16.datasource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
            _this16.length = data.length;
            _this16.datasource.sort = _this16.sort;
            _this16.datasource.paginator = _this16.paginator;
          }, function (error) {
            _this16.auth.checkAuthError(error);
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this17 = this;

            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    this.Genre = {
                      idGenre: '',
                      name: this.genreForm.get('name').value,
                      description: this.genreForm.get('description').value,
                      enabled: 1
                    };
                    _context6.next = 3;
                    return this.bookS.addGenre(this.Genre).subscribe(function () {
                      _this17.initForm();
                    }, function (error) {
                      _this17.auth.checkAuthError(error);
                    });

                  case 3:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var _this18 = this;

            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.bookS.deleteGenre(id).subscribe(function () {
                      _this18.initForm();
                    }, function (error) {
                      _this18.auth.checkAuthError(error);

                      if (error.status === 500) {
                        alert('You have to remove first the books from that type');
                      }
                    });

                  case 2:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "details",
        value: function details(idGenre) {//
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initForm();
        } // tslint:disable-next-line:use-lifecycle-interface

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {//
        }
      }]);

      return GenreComponent;
    }();

    GenreComponent.ctorParameters = function () {
      return [{
        type: _services_books_service__WEBPACK_IMPORTED_MODULE_2__["BooksService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])], GenreComponent.prototype, "sort", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])], GenreComponent.prototype, "paginator", void 0);
    GenreComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-genre',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./genre.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/gestion/genre/genre.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./genre.component.scss */
      "./src/app/gestion/genre/genre.component.scss"))["default"]]
    })], GenreComponent);
    /***/
  },

  /***/
  "./src/app/gestion/gestion.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/gestion/gestion.module.ts ***!
    \*******************************************/

  /*! exports provided: GestionModule */

  /***/
  function srcAppGestionGestionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GestionModule", function () {
      return GestionModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../angular-material.module */
    "./src/app/angular-material.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _gestion_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./gestion.routing.module */
    "./src/app/gestion/gestion.routing.module.ts");
    /* harmony import */


    var _genre_genre_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./genre/genre.component */
    "./src/app/gestion/genre/genre.component.ts");

    var GestionModule = function GestionModule() {
      _classCallCheck(this, GestionModule);
    };

    GestionModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_genre_genre_component__WEBPACK_IMPORTED_MODULE_9__["GenreComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_material_module__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(_gestion_routing_module__WEBPACK_IMPORTED_MODULE_8__["routesG"])]
    })], GestionModule);
    /***/
  },

  /***/
  "./src/app/gestion/gestion.routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/gestion/gestion.routing.module.ts ***!
    \***************************************************/

  /*! exports provided: routesG, components, GestionRoutingModule */

  /***/
  function srcAppGestionGestionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routesG", function () {
      return routesG;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "components", function () {
      return components;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GestionRoutingModule", function () {
      return GestionRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _genre_genre_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./genre/genre.component */
    "./src/app/gestion/genre/genre.component.ts");

    var routesG = [{
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    }, {
      path: 'dashboard',
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"],
      pathMatch: 'full'
    }, {
      path: 'genre',
      component: _genre_genre_component__WEBPACK_IMPORTED_MODULE_4__["GenreComponent"],
      pathMatch: 'full'
    }];
    var components = [];

    var GestionRoutingModule = function GestionRoutingModule() {
      _classCallCheck(this, GestionRoutingModule);
    };

    GestionRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], GestionRoutingModule);
    /***/
  },

  /***/
  "./src/app/header/header.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/header/header.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".navigation {\n  width: 100%;\n  text-align: right;\n}\n\n.container {\n  background: white;\n}\n\n.brand {\n  height: 100px;\n  width: auto;\n}\n\n.navbar-nav {\n  display: flex;\n}\n\n.logo {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.content {\n  width: 100%;\n  height: 100%;\n}\n\n.filler {\n  flex-grow: 1;\n}\n\n.top {\n  width: auto;\n  height: 10px;\n  background: #3499d2;\n  background: linear-gradient(90deg, #3499d2 19%, #d0f4cb 95%);\n  background-size: cover;\n}\n\nnav {\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0Q6XFxwcm9qZXRcXGFuZ3VsYXIgcHJvamVjdFxcbmF0aW9uYWxMaWJyYXJ5L3NyY1xcYXBwXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQ0NKOztBRENFO0VBQ0UsaUJBQUE7QUNFSjs7QURBRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FDR0o7O0FEREU7RUFDRSxhQUFBO0FDSUo7O0FERkU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDS0o7O0FESEU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ01KOztBREpFO0VBQ0YsWUFBQTtBQ09BOztBRExFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDREQUFBO0VBQXNGLHNCQUFBO0FDUzFGOztBRFBFO0VBQ0UsbUJBQUE7QUNVSiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2aWdhdGlvbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG4gIC5jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICB9XHJcbiAgLmJyYW5ke1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gIH1cclxuICAubmF2YmFyLW5hdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG4gIC5sb2dve1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5jb250ZW50IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICAuZmlsbGVye1xyXG5mbGV4LWdyb3c6IDE7ICB9XHJcbiAgXHJcbiAgLnRvcHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDUyLDE1MywyMTApO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDUyLDE1MywyMTAsMSkgMTklLCByZ2JhKDIwOCwyNDQsMjAzLDEpIDk1JSk7ICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuICBuYXZ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH0iLCIubmF2aWdhdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uYnJhbmQge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogYXV0bztcbn1cblxuLm5hdmJhci1uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5maWxsZXIge1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbi50b3Age1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjMzQ5OWQyO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMzNDk5ZDIgMTklLCAjZDBmNGNiIDk1JSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbm5hdiB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_notifications_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/notifications.service */
    "./src/app/services/notifications.service.ts");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(notifS, router, auth) {
        var _this19 = this;

        _classCallCheck(this, HeaderComponent);

        this.notifS = notifS;
        this.router = router;
        this.auth = auth;
        this.matBadge = 0;
        this.isAuth = false;
        auth.isAuth.subscribe(function (auth) {
          _this19.isAuth = auth;
        });
      }

      _createClass(HeaderComponent, [{
        key: "logout",
        value: function logout() {
          this.auth.logout();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _services_notifications_service__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
      }];
    };

    HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-header',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/header/header.component.scss"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/login/login.component.css":
  /*!*******************************************!*\
    !*** ./src/app/login/login.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(authS, router) {
        _classCallCheck(this, LoginComponent);

        this.authS = authS;
        this.router = router;
        this.isLoading = false;
      }

      _createClass(LoginComponent, [{
        key: "submit",
        value: function submit() {
          var _this20 = this;

          //
          this.isLoading = true;
          this.authS.login(this.email, this.password);
          this.authS.erroLogout().subscribe(function (data) {
            if (data === 500) {
              _this20.error = "Erreur de pseudo ou de mot de passe";
              _this20.isLoading = false;
            }
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-login',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login.component.css */
      "./src/app/login/login.component.css"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/messages/messages/messages.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/messages/messages/messages.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMessagesMessagesMessagesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2VzL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/messages/messages/messages.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/messages/messages/messages.component.ts ***!
    \*********************************************************/

  /*! exports provided: MessagesComponent */

  /***/
  function srcAppMessagesMessagesMessagesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessagesComponent", function () {
      return MessagesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MessagesComponent = /*#__PURE__*/function () {
      function MessagesComponent() {
        _classCallCheck(this, MessagesComponent);
      }

      _createClass(MessagesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MessagesComponent;
    }();

    MessagesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-messages',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./messages.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/messages/messages/messages.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./messages.component.scss */
      "./src/app/messages/messages/messages.component.scss"))["default"]]
    })], MessagesComponent);
    /***/
  },

  /***/
  "./src/app/messages/single-message/single-message.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/messages/single-message/single-message.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMessagesSingleMessageSingleMessageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2VzL3NpbmdsZS1tZXNzYWdlL3NpbmdsZS1tZXNzYWdlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/messages/single-message/single-message.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/messages/single-message/single-message.component.ts ***!
    \*********************************************************************/

  /*! exports provided: SingleMessageComponent */

  /***/
  function srcAppMessagesSingleMessageSingleMessageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SingleMessageComponent", function () {
      return SingleMessageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SingleMessageComponent = /*#__PURE__*/function () {
      function SingleMessageComponent() {
        _classCallCheck(this, SingleMessageComponent);

        this.mail = false;
        this.sms = false;
      }

      _createClass(SingleMessageComponent, [{
        key: "showSms",
        value: function showSms() {
          this.sms = true;
          this.mail = false;
        }
      }, {
        key: "showMail",
        value: function showMail() {
          this.sms = false;
          this.mail = true;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SingleMessageComponent;
    }();

    SingleMessageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-single-message',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./single-message.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/messages/single-message/single-message.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./single-message.component.scss */
      "./src/app/messages/single-message/single-message.component.scss"))["default"]]
    })], SingleMessageComponent);
    /***/
  },

  /***/
  "./src/app/notifications/notifications.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/notifications/notifications.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNotificationsNotificationsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/notifications/notifications.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/notifications/notifications.component.ts ***!
    \**********************************************************/

  /*! exports provided: NotificationsComponent */

  /***/
  function srcAppNotificationsNotificationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function () {
      return NotificationsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_notifications_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../services/notifications.service */
    "./src/app/services/notifications.service.ts");
    /* harmony import */


    var _services_books_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../services/books.service */
    "./src/app/services/books.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");

    var NotificationsComponent = /*#__PURE__*/function () {
      function NotificationsComponent(bookS, notifS) {
        var _this21 = this;

        _classCallCheck(this, NotificationsComponent);

        this.bookS = bookS;
        this.notifS = notifS;
        this.displayedColumns = ['title', 'name', 'returnDate', 'Action'];
        this.pageSize = 5;
        this.pageSizeOptions = [5, 10];
        notifS.getAllNotifs().subscribe(function (data) {
          _this21.datasource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
          _this21.length = data.length;
          _this21.datasource.sort = _this21.sort;
          _this21.datasource.paginator = _this21.paginator;
        });
      }

      _createClass(NotificationsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotificationsComponent;
    }();

    NotificationsComponent.ctorParameters = function () {
      return [{
        type: _services_books_service__WEBPACK_IMPORTED_MODULE_2__["BooksService"]
      }, {
        type: _services_notifications_service__WEBPACK_IMPORTED_MODULE_1__["NotificationsService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])], NotificationsComponent.prototype, "sort", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])], NotificationsComponent.prototype, "paginator", void 0);
    NotificationsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-notifications',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./notifications.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./notifications.component.scss */
      "./src/app/notifications/notifications.component.scss"))["default"]]
    })], NotificationsComponent);
    /***/
  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(http, router) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.router = router;
        this.isAuth = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.error = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.staff = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({});
        this.isSuperviseur = false;
        this.hasPower = false;
        this.isAgent = false;
        this.isVisiteur = false;
      }

      _createClass(AuthService, [{
        key: "setHeader",
        value: function setHeader() {
          this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json').set('X-Requested-Width', 'XMLHttpRequest').set('Authorization', 'Bearer ' + localStorage.getItem('token'));
        }
      }, {
        key: "Authenticated",
        value: function Authenticated() {
          if (localStorage.getItem('id') && localStorage.getItem('token')) {
            this.isAuth.next(true);
          } else {
            this.isAuth.next(false);
          }

          return this.isAuth.asObservable();
        } // SetStaffType(id) {
        //   switch (id) {
        //     case '5f2005ac07a53d4f38f95e08':
        //       this.isSuperviseur = true;
        //       break;
        //     case '5f3b678b01539006e48af129':
        //       this.isAgent = true;
        //       break;
        //     case '5f3b67fc01539006e48af12a':
        //       this.hasPower = true;
        //       break;
        //     case '5f3b685201539006e48af12b':
        //       this.isVisiteur = true;
        //       break;
        //   }
        // }

      }, {
        key: "canActivate",
        value: function canActivate() {
          var state = false;
          this.Authenticated().subscribe(function (data) {
            state = data;
          });

          if (state) {
            this.router.navigate(['/dashboard']);
            return false;
          }

          return true;
        }
      }, {
        key: "getStaff",
        value: function getStaff() {
          var staff = {
            username: localStorage.getItem('username'),
            id: localStorage.getItem('id')
          };
          this.staff.next(staff);
          return this.staff.asObservable();
        }
      }, {
        key: "login",
        value: function login(username, password) {
          var _this22 = this;

          var body = {
            username: username,
            password: password
          };
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/authenticate', body).subscribe(function (data) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this22, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var _this23 = this;

              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return localStorage.setItem('token', data.jwt);

                    case 2:
                      return _context9.abrupt("return", this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/user', this.headers).subscribe(function (data) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this23, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                          return regeneratorRuntime.wrap(function _callee8$(_context8) {
                            while (1) {
                              switch (_context8.prev = _context8.next) {
                                case 0:
                                  _context8.next = 2;
                                  return localStorage.setItem('id', data.id);

                                case 2:
                                  _context8.next = 4;
                                  return localStorage.setItem('username', data.username);

                                case 4:
                                  this.error.next('');
                                  this.staff.next(data);
                                  _context8.next = 8;
                                  return this.Authenticated();

                                case 8:
                                  _context8.next = 10;
                                  return this.router.navigate(['/dashboard']);

                                case 10:
                                case "end":
                                  return _context8.stop();
                              }
                            }
                          }, _callee8, this);
                        }));
                      }));

                    case 3:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }, function (error) {
            _this22.error.next(error.status);
          });
        }
      }, {
        key: "erroLogout",
        value: function erroLogout() {
          return this.error.asObservable();
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.clear();
          this.Authenticated();
          this.isAgent = false;
          this.hasPower = false;
          this.isVisiteur = false;
          this.isSuperviseur = false;
          this.router.navigate(['/login']);
        }
      }, {
        key: "checkAuthError",
        value: function checkAuthError(error) {
          if (error.status === 403 || error.status === 401) {
            this.logout();
          }
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/services/books.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/books.service.ts ***!
    \*******************************************/

  /*! exports provided: BooksService */

  /***/
  function srcAppServicesBooksServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BooksService", function () {
      return BooksService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var BooksService = /*#__PURE__*/function () {
      function BooksService(http) {
        _classCallCheck(this, BooksService);

        this.http = http;
      }

      _createClass(BooksService, [{
        key: "getGenres",
        value: function getGenres() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/genres');
        }
      }, {
        key: "deleteGenre",
        value: function deleteGenre(id) {
          return this.http["delete"](_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/genres/' + id);
        }
      }, {
        key: "addGenre",
        value: function addGenre(genre) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/genres', genre);
        }
      }, {
        key: "getBooksByGenre",
        value: function getBooksByGenre(id) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/books/genre/' + id);
        }
      }, {
        key: "getBooks",
        value: function getBooks() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/books');
        }
      }, {
        key: "getBook",
        value: function getBook(idbook) {
          // getOne Books
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/books/' + idbook);
        }
      }, {
        key: "delete",
        value: function _delete(idbook) {
          // getOne Books
          return this.http["delete"](_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/books/' + idbook);
        }
      }, {
        key: "upload",
        value: function upload(event, id) {
          var path = "".concat(id);
        }
      }, {
        key: "addBook",
        value: function addBook(book, id) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/books/' + id, book);
        }
      }, {
        key: "borrowBook",
        value: function borrowBook(pret) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/borrows/', pret);
        }
      }, {
        key: "getPretBook",
        value: function getPretBook(idBook) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/borrows/book/' + idBook);
        }
      }, {
        key: "getAllPrets",
        value: function getAllPrets() {
          //
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/borrows');
        }
      }, {
        key: "rendu",
        value: function rendu(pret) {
          return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/borrows', pret);
        }
      }]);

      return BooksService;
    }();

    BooksService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    BooksService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], BooksService);
    /***/
  },

  /***/
  "./src/app/services/clients.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/clients.service.ts ***!
    \*********************************************/

  /*! exports provided: ClientsService */

  /***/
  function srcAppServicesClientsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientsService", function () {
      return ClientsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var ClientsService = /*#__PURE__*/function () {
      function ClientsService(http) {
        _classCallCheck(this, ClientsService);

        this.http = http;
      }

      _createClass(ClientsService, [{
        key: "getClients",
        value: function getClients() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/clients');
        }
      }, {
        key: "getClient",
        value: function getClient(idUser) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/clients/' + idUser);
        } // upload(event, id) {
        //   return null;
        // }

      }, {
        key: "addClient",
        value: function addClient(client) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/clients', client);
        }
      }, {
        key: "getAllmyBooks",
        value: function getAllmyBooks(idUser) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/borrows/client/' + 6);
        }
      }]);

      return ClientsService;
    }();

    ClientsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    ClientsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], ClientsService);
    /***/
  },

  /***/
  "./src/app/services/guards/auth-guard-deconnected.service.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/services/guards/auth-guard-deconnected.service.ts ***!
    \*******************************************************************/

  /*! exports provided: AuthGuardDeconnectedService */

  /***/
  function srcAppServicesGuardsAuthGuardDeconnectedServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuardDeconnectedService", function () {
      return AuthGuardDeconnectedService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var AuthGuardDeconnectedService = /*#__PURE__*/function () {
      function AuthGuardDeconnectedService(authS, router) {
        _classCallCheck(this, AuthGuardDeconnectedService);

        this.authS = authS;
        this.router = router;
      }

      _createClass(AuthGuardDeconnectedService, [{
        key: "intercept",
        value: function intercept(request, next) {
          console.log(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + '/authenticate');

          if (request.url !== src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + '/authenticate') {
            console.log(request.url);
            request = request.clone({
              setHeaders: {
                'Content-Type': 'application/json; charset=utf-8',
                Accept: 'application/json',
                Authorization: "Bearer ".concat(localStorage.getItem('token'))
              }
            });
          }

          return next.handle(request);
        }
      }, {
        key: "canActivate",
        value: function canActivate() {
          var state = true;
          this.authS.isAuth.subscribe(function (auth) {
            if (auth) {
              state = false;
            } else {
              state = true;
            }
          });
          return state;
        }
      }]);

      return AuthGuardDeconnectedService;
    }();

    AuthGuardDeconnectedService.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuardDeconnectedService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
      providedIn: 'root'
    })], AuthGuardDeconnectedService);
    /***/
  },

  /***/
  "./src/app/services/guards/auth-guard.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/services/guards/auth-guard.service.ts ***!
    \*******************************************************/

  /*! exports provided: AuthGuardService */

  /***/
  function srcAppServicesGuardsAuthGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
      return AuthGuardService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var AuthGuardService = /*#__PURE__*/function () {
      function AuthGuardService(authS, router) {
        _classCallCheck(this, AuthGuardService);

        this.authS = authS;
        this.router = router;
      }

      _createClass(AuthGuardService, [{
        key: "intercept",
        value: function intercept(request, next) {
          if (request.url !== src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + '/authenticate') {
            request = request.clone({
              setHeaders: {
                Authorization: "Bearer ".concat(localStorage.getItem('token'))
              }
            });
          }

          return next.handle(request);
        }
      }, {
        key: "canActivate",
        value: function canActivate() {
          var _this24 = this;

          this.authS.isAuth.subscribe(function (auth) {
            if (!auth) {
              _this24.router.navigate(['/login']);

              return false;
            }
          });
          return true;
        }
      }, {
        key: "tap",
        value: function tap(arg0) {
          throw new Error('Function not implemented.');
        }
      }]);

      return AuthGuardService;
    }();

    AuthGuardService.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
      providedIn: 'root'
    })], AuthGuardService);
    /***/
  },

  /***/
  "./src/app/services/notifications.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/notifications.service.ts ***!
    \***************************************************/

  /*! exports provided: NotificationsService */

  /***/
  function srcAppServicesNotificationsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsService", function () {
      return NotificationsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NotificationsService = /*#__PURE__*/function () {
      function NotificationsService() {
        _classCallCheck(this, NotificationsService);

        this.options = {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        };
      }

      _createClass(NotificationsService, [{
        key: "getAllNotifs",
        value: function getAllNotifs() {
          // this.notifCollection = this.afs.collection('Prets'
          // , ref =>
          //   ref.where('returnDate', '<=', new Date().toLocaleDateString('fr-FR', this.options))
          //   .where('rendu', '==', false)
          //   );
          // const notifs = this.notifCollection.valueChanges();
          // return notifs;
          return null;
        }
      }]);

      return NotificationsService;
    }();

    NotificationsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], NotificationsService);
    /***/
  },

  /***/
  "./src/app/statistic/global-stats/global-stats.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/statistic/global-stats/global-stats.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStatisticGlobalStatsGlobalStatsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXRpc3RpYy9nbG9iYWwtc3RhdHMvZ2xvYmFsLXN0YXRzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/statistic/global-stats/global-stats.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/statistic/global-stats/global-stats.component.ts ***!
    \******************************************************************/

  /*! exports provided: GlobalStatsComponent */

  /***/
  function srcAppStatisticGlobalStatsGlobalStatsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlobalStatsComponent", function () {
      return GlobalStatsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var GlobalStatsComponent = /*#__PURE__*/function () {
      function GlobalStatsComponent() {
        _classCallCheck(this, GlobalStatsComponent);

        this.barChartOptions = {
          scaleShowVerticalLines: false,
          responsive: true
        };
        this.barChartLabels = [this.month];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [{
          data: [65],
          label: 'Roman'
        }, {
          data: [28],
          label: 'Conte'
        }, {
          data: [65],
          label: 'Biographie'
        }, {
          data: [28],
          label: 'Journal'
        }, {
          data: [65],
          label: 'Magasine'
        }, {
          data: [28],
          label: 'Bande dessinée'
        }];
        this.displayedColumns = ['Type', 'totalNumber', 'absentNumber'];
        this.ELEMENT_DATA = [{
          Type: 'Roman',
          totalNumber: 1.0079,
          absentNumber: 'H'
        }, {
          Type: 'Journale',
          totalNumber: 4.0026,
          absentNumber: 'He'
        }, {
          Type: 'Conte',
          totalNumber: 6.941,
          absentNumber: 'Li'
        }, {
          Type: 'Bande dessinée',
          totalNumber: 9.0122,
          absentNumber: 'Be'
        }, {
          Type: 'Biographie',
          totalNumber: 10.811,
          absentNumber: 'B'
        }, {
          Type: 'Magasine',
          totalNumber: 12.0107,
          absentNumber: 'C'
        }];
        this.dataSource = this.ELEMENT_DATA; // nescessaire
        //
      }

      _createClass(GlobalStatsComponent, [{
        key: "onChange",
        value: function onChange(value) {
          this.barChartLabels = [value];
          this.month = value;
        }
      }]);

      return GlobalStatsComponent;
    }();

    GlobalStatsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-global-stats',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./global-stats.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/statistic/global-stats/global-stats.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./global-stats.component.scss */
      "./src/app/statistic/global-stats/global-stats.component.scss"))["default"]]
    })], GlobalStatsComponent);
    /***/
  },

  /***/
  "./src/app/users/add-user/add-user.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/users/add-user/add-user.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUsersAddUserAddUserComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2FkZC11c2VyL2FkZC11c2VyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/users/add-user/add-user.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/users/add-user/add-user.component.ts ***!
    \******************************************************/

  /*! exports provided: AddUserComponent, Dialog */

  /***/
  function srcAppUsersAddUserAddUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddUserComponent", function () {
      return AddUserComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Dialog", function () {
      return Dialog;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_clients_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../services/clients.service */
    "./src/app/services/clients.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/dialog.js");

    var AddUserComponent = /*#__PURE__*/function () {
      function AddUserComponent(formBuilder, router, dialog, userS, auth) {
        _classCallCheck(this, AddUserComponent);

        this.formBuilder = formBuilder;
        this.router = router;
        this.dialog = dialog;
        this.userS = userS;
        this.auth = auth;
        this.picTab = []; // display

        this.picSend = []; // send to firebase
      }

      _createClass(AddUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initForm();
        }
      }, {
        key: "initForm",
        value: function initForm() {
          this.userForm = this.formBuilder.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.user = {
            firstName: this.userForm.get('firstName').value,
            lastName: this.userForm.get('lastName').value,
            enabled: 1,
            email: this.userForm.get('email').value
          };
          this.openDialog();
        } // upload(event) {
        //   this.picSend = event.target.files[0];
        //   const reader = new FileReader();
        //   const mimeType = event.target.files[0].type;
        //   if (mimeType.match(/image\/*/) == null) {
        //     this.message = 'Only images are supported.';
        //     return;
        //   }
        //   console.log(this.picSend);
        //   reader.readAsDataURL(event.target.files[0]);
        //   reader.onload = () => {
        //     this.picTab.push({ image: reader.result });
        //   };
        // }

      }, {
        key: "openDialog",
        value: function openDialog() {
          var _this25 = this;

          var dialogRef = this.dialog.open(Dialog, {
            width: '250px',
            data: this.user
          });
          dialogRef.afterClosed().subscribe(function (data) {
            if (data === 'ok') {
              _this25.userS.addClient(_this25.user).subscribe(function () {
                _this25.router.navigate(['/clients']);
              }, function (error) {
                _this25.auth.checkAuthError(error);
              });
            }
          });
        }
      }]);

      return AddUserComponent;
    }();

    AddUserComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
      }, {
        type: _services_clients_service__WEBPACK_IMPORTED_MODULE_2__["ClientsService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
      }];
    };

    AddUserComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-add-user',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./add-user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/users/add-user/add-user.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./add-user.component.scss */
      "./src/app/users/add-user/add-user.component.scss"))["default"]]
    })], AddUserComponent);

    var Dialog =
    /*#__PURE__*/
    // tslint:disable-next-line:component-class-suffix
    function () {
      function Dialog(dialogRef, data) {
        _classCallCheck(this, Dialog);

        this.dialogRef = dialogRef;
        this.data = data;
      }

      _createClass(Dialog, [{
        key: "onNoClick",
        value: function onNoClick() {
          this.dialogRef.close();
        }
      }]);

      return Dialog;
    }();

    Dialog.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    Dialog = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-dialog',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dialog-overview-example-dialog.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/users/add-user/dialog-overview-example-dialog.html"))["default"]
    }) // tslint:disable-next-line:component-class-suffix
    , Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"]))], Dialog);
    /***/
  },

  /***/
  "./src/app/users/client/client.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/users/client/client.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUsersClientClientComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".img {\n  width: 50%;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvY2xpZW50L0Q6XFxwcm9qZXRcXGFuZ3VsYXIgcHJvamVjdFxcbmF0aW9uYWxMaWJyYXJ5L3NyY1xcYXBwXFx1c2Vyc1xcY2xpZW50XFxjbGllbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXJzL2NsaWVudC9jbGllbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvdXNlcnMvY2xpZW50L2NsaWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWd7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgXHJcbn1cclxuIiwiLmltZyB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogYXV0bztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/users/client/client.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/users/client/client.component.ts ***!
    \**************************************************/

  /*! exports provided: ClientComponent */

  /***/
  function srcAppUsersClientClientComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientComponent", function () {
      return ClientComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_services_books_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/books.service */
    "./src/app/services/books.service.ts");
    /* harmony import */


    var _services_clients_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../services/clients.service */
    "./src/app/services/clients.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ClientComponent = /*#__PURE__*/function () {
      function ClientComponent(aR, auth, userS, bookS) {
        var _this26 = this;

        _classCallCheck(this, ClientComponent);

        this.aR = aR;
        this.auth = auth;
        this.userS = userS;
        this.bookS = bookS;
        this.message = false;
        this.aR.params.subscribe(function (params) {
          _this26.id = params.id;
          userS.getClient(_this26.id).subscribe(function (data) {
            _this26.User = data;
          }, function (error) {
            _this26.auth.checkAuthError(error);
          });
        });
        this.myBooks = [];
        userS.getAllmyBooks(this.id).subscribe(function (data) {
          _this26.myBooks = data;
        }, function (error) {
          _this26.auth.checkAuthError(error);
        });
        this.chargeStatistic();
      }

      _createClass(ClientComponent, [{
        key: "chargeStatistic",
        value: function chargeStatistic() {}
      }]);

      return ClientComponent;
    }();

    ClientComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
      }, {
        type: _services_clients_service__WEBPACK_IMPORTED_MODULE_3__["ClientsService"]
      }, {
        type: src_app_services_books_service__WEBPACK_IMPORTED_MODULE_2__["BooksService"]
      }];
    };

    ClientComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: 'app-client',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./client.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/users/client/client.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./client.component.scss */
      "./src/app/users/client/client.component.scss"))["default"]]
    })], ClientComponent);
    /***/
  },

  /***/
  "./src/app/users/clients/clients.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/users/clients/clients.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUsersClientsClientsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2NsaWVudHMvY2xpZW50cy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/users/clients/clients.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/users/clients/clients.component.ts ***!
    \****************************************************/

  /*! exports provided: ClientsComponent */

  /***/
  function srcAppUsersClientsClientsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientsComponent", function () {
      return ClientsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_clients_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../services/clients.service */
    "./src/app/services/clients.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var ClientsComponent = /*#__PURE__*/function () {
      function ClientsComponent(userS, route, formBuilder, auth) {
        var _this27 = this;

        _classCallCheck(this, ClientsComponent);

        this.userS = userS;
        this.route = route;
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.sms = true;
        this.mail = false;
        this.searchResults = false;
        this.displayedColumns = ['firstName', 'lastName', 'email', 'Action'];
        this.errorMessage = false;
        this.Users = [];
        this.pageSize = 5;
        this.pageSizeOptions = [5, 10];
        this.userS.getClients().subscribe(function (data) {
          _this27.retrievedUsers = data;
          _this27.datasource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](data);
          _this27.length = data.length;
          _this27.datasource.sort = _this27.sort;
          _this27.datasource.paginator = _this27.paginator;
        }, function (error) {
          _this27.auth.checkAuthError(error);
        });
      }

      _createClass(ClientsComponent, [{
        key: "showSms",
        value: function showSms() {
          this.sms = true;
          this.mail = false;
        }
      }, {
        key: "showMail",
        value: function showMail() {
          this.sms = false;
          this.mail = true;
        }
      }, {
        key: "details",
        value: function details(idUser) {
          this.route.navigate(['/client/', idUser]);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initForm();
        } // tslint:disable-next-line:use-lifecycle-interface

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {//
        }
      }, {
        key: "search",
        value: function search() {
          var _this28 = this;

          this.Users = [];
          this.searchResults = false;
          var letter = this.searchForm.get('letter').value.toLowerCase().trim();

          if (letter === '') {
            this.errorMessage = true;
          } else {
            this.retrievedUsers.forEach(function (user) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this28, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
                return regeneratorRuntime.wrap(function _callee10$(_context10) {
                  while (1) {
                    switch (_context10.prev = _context10.next) {
                      case 0:
                        if (user.firstName.toLowerCase().includes(letter) || user.lastName.toLowerCase().includes(letter)) {
                          this.Users.push(user);
                          this.searchResults = true;
                        }

                      case 1:
                      case "end":
                        return _context10.stop();
                    }
                  }
                }, _callee10, this);
              }));
            });

            if (this.Users.length === 0) {
              this.errorMessage = true;
            }
          }
        }
      }, {
        key: "initForm",
        value: function initForm() {
          this.searchForm = this.formBuilder.group({
            letter: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]]
          });
          this.Users = [];
          this.searchResults = false;
          this.errorMessage = false;
        }
      }]);

      return ClientsComponent;
    }();

    ClientsComponent.ctorParameters = function () {
      return [{
        type: _services_clients_service__WEBPACK_IMPORTED_MODULE_2__["ClientsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"])], ClientsComponent.prototype, "sort", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])], ClientsComponent.prototype, "paginator", void 0);
    ClientsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-clients',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./clients.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/users/clients/clients.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./clients.component.scss */
      "./src/app/users/clients/clients.component.scss"))["default"]]
    })], ClientsComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      apiUrl: 'http://localhost:8080'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\projet\angular project\nationalLibrary\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map