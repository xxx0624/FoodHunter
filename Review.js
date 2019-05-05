"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
//connect to the model 
var ReviewModel_1 = require("./model/ReviewModel");
// Creates and configures an ExpressJS web server.
var Review = /** @class */ (function () {
    //Run configuration methods on the Express instance.
    function Review() {
        this.Reviews = new ReviewModel_1.ReviewModel();
    }
    Review.prototype.registerRoutes = function (router) {
        this.routes(router);
    };
    // Configure API endpoints.
    Review.prototype.routes = function (router) {
        var _this = this;
        router.get('/reviews', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var reviews;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('get all reviews');
                        return [4 /*yield*/, this.Reviews.getAllReviews()];
                    case 1:
                        reviews = _a.sent();
                        console.log('get all reviews finished');
                        res.status(200).send(reviews);
                        return [2 /*return*/];
                }
            });
        }); });
        router.get('/reviews/:reviewID', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var reviewID, review;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        reviewID = req.params.reviewID;
                        return [4 /*yield*/, this.Reviews.getReviewByID(reviewID)];
                    case 1:
                        review = _a.sent();
                        console.log('in get route:', review);
                        res.status(200).send(review);
                        return [2 /*return*/];
                }
            });
        }); });
        router["delete"]('/reviews/:reviewID', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var reviewID, review;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        reviewID = req.params.reviewID;
                        return [4 /*yield*/, this.Reviews.deleteReviewByID(reviewID)];
                    case 1:
                        review = _a.sent();
                        console.log('in delete route:', review);
                        res.status(200).send(review);
                        return [2 /*return*/];
                }
            });
        }); });
        router.post('/reviews', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var review, successOrNot;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        review = ReviewModel_1.ReviewModel.constructorFromData(1, 1, 1, "review007-new", "review007Content", "2019-11-02T01:00:00");
                        return [4 /*yield*/, this.Reviews.updateReview(review)];
                    case 1:
                        successOrNot = _a.sent();
                        console.log('in update route:', successOrNot);
                        res.status(200).send(successOrNot);
                        return [2 /*return*/];
                }
            });
        }); });
        router.put('/reviews', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var review, successOrNot;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('add one review');
                        review = ReviewModel_1.ReviewModel.constructorFromData(7, 1, 1, "review-7-title", "review-7-Content", "2019-12-02T01:00:00");
                        ;
                        return [4 /*yield*/, this.Reviews.createReview(review)];
                    case 1:
                        successOrNot = _a.sent();
                        console.log('in create route:', successOrNot);
                        res.status(200).send(successOrNot);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    return Review;
}());
exports.Review = Review;
