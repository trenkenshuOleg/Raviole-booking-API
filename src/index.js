"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var client_1 = require("@prisma/client");
var express = require("express");
var prisma = new client_1.PrismaClient();
var server = express();
server.use(express.json());
server.post("/register", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, login, password, email, phone, clients, result;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, login = _a.login, password = _a.password, email = _a.email, phone = _a.phone;
                return [4 /*yield*/, prisma.client.findMany({
                        where: {
                            OR: [
                                {
                                    login: login
                                },
                                {
                                    email: email
                                },
                            ]
                        }
                    })];
            case 1:
                clients = _b.sent();
                console.log(clients);
                if (!(clients.length === 0)) return [3 /*break*/, 3];
                return [4 /*yield*/, prisma.client.create({
                        data: {
                            login: login,
                            password: password,
                            email: email,
                            phone: phone
                        }
                    })];
            case 2:
                result = _b.sent();
                res.json(result);
                return [3 /*break*/, 4];
            case 3:
                res.json('{"error":"login or email is already taken"}');
                _b.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); });
server.post("/cafe/new", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, city, address, phone, averageCheck, cuisineType, images, menuImg, tags, rating, workTimeStart, workTimeEnd, cafes, cus, imgs, tg, result;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, name = _a.name, city = _a.city, address = _a.address, phone = _a.phone, averageCheck = _a.averageCheck, cuisineType = _a.cuisineType, images = _a.images, menuImg = _a.menuImg, tags = _a.tags, rating = _a.rating, workTimeStart = _a.workTimeStart, workTimeEnd = _a.workTimeEnd;
                return [4 /*yield*/, prisma.cafe.findMany({
                        where: {
                            name: name
                        }
                    })];
            case 1:
                cafes = _b.sent();
                console.log(cafes);
                cus = cuisineType;
                imgs = images;
                tg = tags;
                if (!(cafes.length === 0)) return [3 /*break*/, 3];
                return [4 /*yield*/, prisma.cafe.create({
                        data: {
                            name: String(name),
                            city: String(city),
                            address: String(address),
                            phone: String(phone),
                            averageCheck: Number(averageCheck),
                            cuisineType: cus,
                            images: imgs,
                            menuImg: String(menuImg),
                            tags: tg,
                            rating: rating || undefined,
                            workTimeStart: workTimeStart || undefined,
                            workTimeEnd: workTimeEnd || undefined
                        }
                    })];
            case 2:
                result = _b.sent();
                res.json(result);
                return [3 /*break*/, 4];
            case 3:
                res.json('{"error":"login or email is already taken"}');
                _b.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); });
server.get("/cafe/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, cafe;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, prisma.cafe.findUnique({
                        where: {
                            id: Number(id)
                        }
                    })];
            case 1:
                cafe = _a.sent();
                if (cafe) {
                    res.json(cafe);
                }
                else {
                    res.json("{\"error\":\"no such cafe with id ".concat(id, "\"}"));
                }
                return [2 /*return*/];
        }
    });
}); });
server.get("/client/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, client;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, prisma.client.findUnique({
                        where: {
                            id: Number(id)
                        }
                    })];
            case 1:
                client = _a.sent();
                if (client) {
                    res.json(client);
                }
                else {
                    res.json("{\"error\":\"no such user id ".concat(id, "\"}"));
                }
                return [2 /*return*/];
        }
    });
}); });
server.get('/cafe', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, city, cuisineType, averageCheck, rating, tags, arrTags, cuisineArr, tagsFilter, cuisineFilter, checkFilter, ratingFilter, ans;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.query, city = _a.city, cuisineType = _a.cuisineType, averageCheck = _a.averageCheck, rating = _a.rating, tags = _a.tags;
                arrTags = String(tags).split('↕');
                cuisineArr = String(cuisineType).split('↕');
                tagsFilter = tags
                    ? {
                        tags: {
                            hasEvery: arrTags
                        }
                    }
                    :
                        {};
                cuisineFilter = cuisineType
                    ? {
                        cuisineType: {
                            hasEvery: cuisineArr
                        }
                    }
                    :
                        {};
                checkFilter = averageCheck
                    ? {
                        averageCheck: {
                            lte: Number(averageCheck)
                        }
                    }
                    :
                        {};
                ratingFilter = rating
                    ? {
                        rating: {
                            gte: Number(rating)
                        }
                    }
                    :
                        {};
                return [4 /*yield*/, prisma.cafe.findMany({
                        where: {
                            AND: [
                                {
                                    city: city || undefined
                                },
                                __assign({}, cuisineFilter),
                                __assign({}, checkFilter),
                                __assign({}, tagsFilter),
                                __assign({}, ratingFilter),
                            ]
                        }
                    })];
            case 1:
                ans = _b.sent();
                return [2 /*return*/];
        }
    });
}); });
server.get('/clients', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var clients;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.client.findMany({
                    where: {
                        OR: [
                            {
                                login: 'demo'
                            },
                            {
                                email: 'xxx'
                            },
                        ]
                    }
                })];
            case 1:
                clients = _a.sent();
                console.log(clients.length);
                res.json(clients);
                return [2 /*return*/];
        }
    });
}); });
var worker = server.listen(3000, function () {
    return console.log("\n\uD83D\uDE80 Server ready at: http://localhost:3000\n\u2B50\uFE0F Start doing some stuff");
});
