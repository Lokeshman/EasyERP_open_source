define([
    'text!fixtures/index.html',
    'collections/Leads/filterCollection',
    'views/main/MainView',
    'views/Leads/TopBarView',
    'views/Leads/CreateView',
    'views/Leads/EditView',
    'views/Leads/form/FormView',
    'views/Leads/list/ListView',
    'jQuery',
    'chai',
    'chai-jquery',
    'sinon-chai',
    'custom'
], function (fixtures, LeadsCollection, MainView, TopBarView, CreateView, EditView, FormView, ListView, $, chai, chaiJquery, sinonChai, Custom) {
    'use strict';
    var expect;
    var modules = [
        {
            "_id"        : 19,
            "attachments": [],
            "link"       : false,
            "mname"      : "Sales",
            "parrent"    : null,
            "sequence"   : 1,
            "visible"    : true,
            "ancestors"  : [],
            "href"       : "Sales"
        }, {
            "_id"        : 36,
            "attachments": [],
            "link"       : false,
            "mname"      : "Project",
            "parrent"    : null,
            "sequence"   : 2,
            "visible"    : true,
            "ancestors"  : [],
            "href"       : "Project"
        }, {
            "_id"        : 9,
            "attachments": [],
            "link"       : false,
            "mname"      : "HR",
            "parrent"    : null,
            "sequence"   : 3,
            "visible"    : true,
            "ancestors"  : [],
            "href"       : "HR"
        }, {
            "_id"        : 49,
            "attachments": [],
            "htref"      : "persons",
            "link"       : true,
            "mname"      : "Persons",
            "parrent"    : 19,
            "sequence"   : 7,
            "visible"    : true,
            "ancestors"  : [],
            "href"       : "Persons"
        }, {
            "_id"        : 50,
            "attachments": [],
            "htref"      : "persons",
            "link"       : true,
            "mname"      : "Companies",
            "parrent"    : 19,
            "sequence"   : 8,
            "visible"    : true,
            "ancestors"  : [],
            "href"       : "Companies"
        }, {
            "_id"        : 24,
            "attachments": [],
            "link"       : true,
            "mname"      : "Leads",
            "parrent"    : 19,
            "sequence"   : 9,
            "visible"    : true,
            "ancestors"  : [],
            "href"       : "Leads"
        }, {
            "_id"        : 25,
            "attachments": [],
            "link"       : true,
            "mname"      : "Opportunities",
            "parrent"    : 19,
            "sequence"   : 10,
            "visible"    : true,
            "ancestors"  : [],
            "href"       : "Opportunities"
        }, {
            "_id"        : 39,
            "attachments": [],
            "link"       : true,
            "mname"      : "Projects",
            "parrent"    : 36,
            "sequence"   : 23,
            "visible"    : true,
            "ancestors"  : [],
            "href"       : "Projects"
        }, {
            "_id"        : 40,
            "attachments": [],
            "link"       : true,
            "mname"      : "Tasks",
            "parrent"    : 36,
            "sequence"   : 24,
            "visible"    : true,
            "ancestors"  : [],
            "href"       : "Tasks"
        }, {
            "_id"        : 29,
            "attachments": [],
            "link"       : true,
            "mname"      : "Dashboard",
            "parrent"    : 19,
            "sequence"   : 29,
            "visible"    : true,
            "ancestors"  : [],
            "href"       : "Dashboard"
        }, {
            "_id"        : 42,
            "attachments": [],
            "link"       : true,
            "mname"      : "Employees",
            "parrent"    : 9,
            "sequence"   : 29,
            "visible"    : true,
            "ancestors"  : [],
            "href"       : "Employees"
        }, {
            "_id"        : 43,
            "attachments": [],
            "link"       : true,
            "mname"      : "Applications",
            "parrent"    : 9,
            "sequence"   : 30,
            "visible"    : true,
            "ancestors"  : [],
            "href"       : "Applications"
        }, {
            "_id"        : 14,
            "attachments": [],
            "link"       : true,
            "mname"      : "Job Positions",
            "parrent"    : 9,
            "sequence"   : 32,
            "visible"    : true,
            "ancestors"  : [],
            "href"       : "JobPositions"
        }, {
            "_id"        : 15,
            "attachments": [],
            "link"       : true,
            "mname"      : "Groups",
            "parrent"    : 1,
            "sequence"   : 33,
            "visible"    : true,
            "ancestors"  : [],
            "href"       : "Departments"
        }, {
            "_id"        : 7,
            "__v"        : 0,
            "attachments": [],
            "link"       : true,
            "mname"      : "Users",
            "parrent"    : 1,
            "sequence"   : 42,
            "visible"    : true,
            "ancestors"  : [],
            "href"       : "Users"
        }, {
            "_id"        : 44,
            "attachments": [],
            "link"       : true,
            "mname"      : "Workflows",
            "parrent"    : 1,
            "sequence"   : 44,
            "visible"    : true,
            "ancestors"  : [],
            "href"       : "Workflows"
        }, {
            "_id"        : 51,
            "attachments": [],
            "link"       : true,
            "mname"      : "Profiles",
            "parrent"    : 1,
            "sequence"   : 51,
            "visible"    : true,
            "ancestors"  : [],
            "href"       : "Profiles"
        }, {
            "_id"        : 52,
            "attachments": [],
            "link"       : true,
            "mname"      : "Birthdays",
            "parrent"    : 9,
            "sequence"   : 52,
            "visible"    : true,
            "ancestors"  : [],
            "href"       : "Birthdays"
        }, {
            "_id"        : 53,
            "attachments": [],
            "link"       : true,
            "mname"      : "Dashboard",
            "parrent"    : 36,
            "sequence"   : 53,
            "visible"    : true,
            "ancestors"  : [],
            "href"       : "projectDashboard"
        }, {
            "_id"      : 54,
            "mname"    : "Purchases",
            "sequence" : 54,
            "parrent"  : null,
            "link"     : false,
            "visible"  : true,
            "ancestors": [],
            "href"     : "Purchases"
        }, {
            "_id"      : 80,
            "mname"    : "Jobs Dashboard",
            "sequence" : 54,
            "parrent"  : 36,
            "link"     : true,
            "visible"  : true,
            "ancestors": [],
            "href"     : "jobsDashboard"
        }, {
            "_id"      : 55,
            "mname"    : "Quotation",
            "sequence" : 55,
            "parrent"  : 54,
            "link"     : true,
            "visible"  : true,
            "ancestors": [],
            "href"     : "Quotation"
        }, {
            "_id"      : 57,
            "mname"    : "Order",
            "sequence" : 56,
            "parrent"  : 54,
            "link"     : true,
            "visible"  : true,
            "ancestors": [],
            "href"     : "Order"
        }, {
            "_id"      : 56,
            "mname"    : "Invoice",
            "sequence" : 57,
            "parrent"  : 54,
            "link"     : true,
            "visible"  : true,
            "ancestors": [],
            "href"     : "Invoice"
        }, {
            "_id"      : 58,
            "mname"    : "Product",
            "sequence" : 58,
            "parrent"  : 54,
            "link"     : true,
            "visible"  : true,
            "ancestors": [],
            "href"     : "Product"
        }, {
            "_id"      : 59,
            "mname"    : "Accounting",
            "sequence" : 59,
            "parrent"  : null,
            "link"     : false,
            "visible"  : true,
            "ancestors": [],
            "href"     : "Accounting"
        }, {
            "_id"      : 60,
            "mname"    : "Supplier Payments",
            "sequence" : 60,
            "parrent"  : 59,
            "link"     : true,
            "visible"  : true,
            "ancestors": [],
            "href"     : "supplierPayments"
        }, {
            "_id"      : 61,
            "mname"    : "Customer Payments",
            "sequence" : 61,
            "parrent"  : 59,
            "link"     : true,
            "visible"  : true,
            "ancestors": [],
            "href"     : "customerPayments"
        }, {
            "_id"      : 62,
            "mname"    : "Quotation",
            "sequence" : 62,
            "parrent"  : 19,
            "link"     : true,
            "visible"  : true,
            "ancestors": [],
            "href"     : "salesQuotation"
        }, {
            "_id"      : 63,
            "mname"    : "Order",
            "sequence" : 63,
            "parrent"  : 19,
            "link"     : true,
            "visible"  : true,
            "ancestors": [],
            "href"     : "salesOrder"
        }, {
            "_id"      : 64,
            "mname"    : "Invoice",
            "sequence" : 64,
            "parrent"  : 19,
            "link"     : true,
            "visible"  : true,
            "ancestors": [],
            "href"     : "salesInvoice"
        }, {
            "_id"      : 68,
            "mname"    : "MonthHours",
            "sequence" : 68,
            "parrent"  : 78,
            "link"     : true,
            "visible"  : true,
            "ancestors": [],
            "href"     : "monthHours"
        }, {
            "_id"      : 69,
            "mname"    : "Holidays",
            "sequence" : 69,
            "parrent"  : 78,
            "link"     : true,
            "visible"  : true,
            "ancestors": [],
            "href"     : "Holiday"
        }, {
            "_id"      : 77,
            "mname"    : "Capacity",
            "sequence" : 69,
            "parrent"  : 9,
            "link"     : true,
            "visible"  : true,
            "ancestors": [],
            "href"     : "Capacity"
        }, {
            "_id"      : 88,
            "mname"    : "Salary Report",
            "sequence" : 69,
            "parrent"  : 59,
            "link"     : true,
            "visible"  : true,
            "ancestors": [],
            "href"     : "salaryReport"
        }, {
            "_id"      : 70,
            "mname"    : "Vacation",
            "sequence" : 70,
            "parrent"  : 9,
            "link"     : true,
            "visible"  : true,
            "ancestors": [],
            "href"     : "Vacation"
        }, {
            "_id"      : 71,
            "mname"    : "Attendance",
            "sequence" : 71,
            "parrent"  : 9,
            "link"     : true,
            "visible"  : true,
            "ancestors": [],
            "href"     : "Attendance"
        }, {
            "_id"      : 76,
            "mname"    : "Efficiency",
            "sequence" : 72,
            "parrent"  : 78,
            "link"     : true,
            "visible"  : true,
            "ancestors": [],
            "href"     : "Efficiency"
        }, {
            "_id"      : 72,
            "mname"    : "BonusType",
            "sequence" : 73,
            "parrent"  : 78,
            "link"     : true,
            "visible"  : true,
            "ancestors": [],
            "href"     : "bonusType"
        }, {
            "_id"      : 74,
            "mname"    : "HrDashboard",
            "sequence" : 74,
            "parrent"  : 9,
            "link"     : true,
            "visible"  : true,
            "ancestors": [],
            "href"     : "HrDashboard"
        }, {
            "_id"      : 66,
            "mname"    : "Payroll Expenses",
            "sequence" : 77,
            "parrent"  : 78,
            "link"     : true,
            "visible"  : true,
            "ancestors": [],
            "href"     : "PayrollExpenses"
        }, {
            "_id"      : 78,
            "mname"    : "Payroll",
            "sequence" : 78,
            "parrent"  : null,
            "link"     : false,
            "visible"  : true,
            "ancestors": [],
            "href"     : "Payroll"
        }, {
            "_id"      : 79,
            "mname"    : "Payroll Payments",
            "sequence" : 79,
            "parrent"  : 78,
            "link"     : true,
            "visible"  : true,
            "ancestors": [],
            "href"     : "PayrollPayments"
        }, {
            "_id"      : 82,
            "mname"    : "Invoice Aging",
            "sequence" : 82,
            "parrent"  : 59,
            "link"     : true,
            "visible"  : true,
            "ancestors": [],
            "href"     : "invoiceAging"
        }, {
            "_id"      : 83,
            "mname"    : "ChartOfAccount",
            "sequence" : 83,
            "parrent"  : 59,
            "link"     : true,
            "visible"  : true,
            "ancestors": [],
            "href"     : "ChartOfAccount"
        }, {
            "_id"      : 85,
            "mname"    : "Journal",
            "sequence" : 85,
            "parrent"  : 59,
            "link"     : true,
            "visible"  : true,
            "ancestors": [],
            "href"     : "journal"
        }, {
            "_id"      : 86,
            "mname"    : "Journal Entry",
            "sequence" : 86,
            "parrent"  : 59,
            "link"     : true,
            "visible"  : true,
            "ancestors": [],
            "href"     : "journalEntry"
        }, {
            "_id"      : 87,
            "mname"    : "Invoice Charts",
            "sequence" : 87,
            "parrent"  : 59,
            "link"     : true,
            "visible"  : true,
            "ancestors": [],
            "href"     : "invoiceCharts"
        }, {
            "_id"        : 1,
            "__v"        : 0,
            "attachments": [],
            "link"       : false,
            "mname"      : "Settings",
            "parrent"    : null,
            "sequence"   : 1000,
            "visible"    : true,
            "ancestors"  : [],
            "href"       : "Settings"
        }, {
            "_id"      : 75,
            "mname"    : "tCard",
            "sequence" : 1000,
            "parrent"  : 36,
            "link"     : true,
            "visible"  : true,
            "ancestors": [],
            "href"     : "wTrack"
        }, {
            "_id"      : 84,
            "mname"    : "Categories",
            "sequence" : 1000,
            "parrent"  : 1,
            "link"     : true,
            "visible"  : true,
            "ancestors": [],
            "href"     : "productSettings"
        }, {
            "_id"      : 73,
            "mname"    : "DashBoardVacation",
            "sequence" : 1001,
            "parrent"  : 36,
            "link"     : true,
            "visible"  : true,
            "ancestors": [],
            "href"     : "DashBoardVacation"
        }];
    var fakeLeads = {
        data: [
            {
                _id        : "56c1c4ecc99aad5365bff221",
                source     : "linkedin",
                campaign   : "",
                editedBy   : {
                    date: "2016-03-15T13:08:03.497Z",
                    user: {
                        _id  : "56d704f1805eb08d2b93d95f",
                        login: "eugen.lendyel"
                    }
                },
                createdBy  : {
                    date: "2016-02-15T12:30:36.031Z",
                    user: {
                        _id  : "5631dc18bf9592df04c55106",
                        login: "alina.yurenko"
                    }
                },
                workflow   : {
                    _id   : "528ce79bf3f67bc40b000020",
                    name  : "Cancelled",
                    status: "Cancelled"
                },
                phones     : {
                    fax   : "",
                    phone : "",
                    mobile: ""
                },
                email      : "herculosh@yahoo.com",
                contactName: {
                    last : "",
                    first: ""
                },
                name       : "clone livejasmin"
            },
            {
                _id        : "5707584d3850536324af7972",
                source     : "",
                campaign   : "",
                editedBy   : {
                    date: "2016-04-08T07:10:50.380Z",
                    user: {
                        _id  : "563f673270bbc2b740ce89ae",
                        login: "alex.sokhanych"
                    }
                },
                createdBy  : {
                    date: "2016-04-08T07:05:49.923Z",
                    user: null
                },
                workflow   : {
                    _id   : "528ce779f3f67bc40b00001f",
                    name  : "In Progress",
                    status: "In Progress"
                },
                phones     : {
                    fax   : "",
                    phone : "",
                    mobile: ""
                },
                email      : "tatyanak1@mail.ru",
                contactName: {
                    last : "",
                    first: "Tatyana"
                },
                name       : "Tatyana"
            },
            {
                _id        : "570379d4ec814f7c039b8077",
                source     : "",
                campaign   : "",
                editedBy   : {
                    date: "2016-04-06T09:05:11.540Z",
                    user: {
                        _id  : "563f673270bbc2b740ce89ae",
                        login: "alex.sokhanych"
                    }
                },
                createdBy  : {
                    date: "2016-04-05T08:39:48.972Z",
                    user: null
                },
                workflow   : {
                    _id   : "528ce79bf3f67bc40b000020",
                    name  : "Cancelled",
                    status: "Cancelled"
                },
                phones     : {
                    fax   : "",
                    phone : "",
                    mobile: ""
                },
                email      : "jessica.robbins20@hotmail.com",
                contactName: {
                    last : "",
                    first: "Jessica Robbins"
                },
                name       : "Jessica Robbins"
            }]
    };
    var fakeUsersForDD = {
        data: [
            {
                _id  : "560c099da5d4a2e20ba5068b",
                login: "AlexSvatuk"
            },
            {
                _id  : "55ba28c8d79a3a3439000016",
                login: "AndrianaLemko"
            },
            {
                _id  : "55ba2ef1d79a3a343900001c",
                login: "AnnaLobas"
            },
            {
                _id  : "55c1e1276708490b0b000035",
                login: "ArturMyhalko"
            },
            {
                _id  : "55b9fbcdd79a3a3439000007",
                login: "Igor Stan"
            },
            {
                _id  : "55b8cb7d0ce4affc2a0015cb",
                login: "Irina.Grab"
            },
            {
                _id  : "55c1e1aa6708490b0b000037",
                login: "OksanaKordas"
            },
            {
                _id  : "55cb7302fea413b50b000007",
                login: "OlegOstroverkh"
            },
            {
                _id  : "55bb1d7ecb76ca630b000005",
                login: "Stas.Volskiy"
            },
            {
                _id  : "560d0c46963ba3087363de94",
                login: "Vitaliy.Shuba"
            },
            {
                _id  : "52203e707d4dba8813000003",
                login: "admin"
            },
            {
                _id  : "563f673270bbc2b740ce89ae",
                login: "alex.sokhanych"
            },
            {
                _id  : "569f5d8c62d172544baf0d52",
                login: "alona.yelahina"
            },
            {
                _id  : "56bda2e0dfd8a81466e2f4e2",
                login: "andriy.hanchak"
            },
            {
                _id  : "563b58c2ab9698be7c9df6b6",
                login: "gabriella.shterr"
            },
            {
                _id  : "56b2e83b39df50996ae2f07e",
                login: "katerina.pasichnyuk"
            },
            {
                _id  : "56239dcce9576d1728a9ed1c",
                login: "kristian.rimar"
            },
            {
                _id  : "55b9dd7a7a3632120b000006",
                login: "larysa.popp"
            },
            {
                _id  : "56239e0ce9576d1728a9ed1d",
                login: "liliya.shustur"
            },
            {
                _id  : "56239f14e9576d1728a9ed23",
                login: "michael"
            },
            {
                _id  : "561e37f7d6c741e8235f42cb",
                login: "natalia.yartysh"
            },
            {
                _id  : "569e1e8eea21e2ac7d729e2b",
                login: "office.manager"
            },
            {
                _id  : "567181ae8453e8b464b70c19",
                login: "oles.pavliuk"
            },
            {
                _id  : "55b9dd237a3632120b000005",
                login: "roland.katona"
            },
            {
                _id  : "56a72af2aa157ca50f21fb20",
                login: "roman.kubichka"
            },
            {
                _id  : "56a72cafaa157ca50f21fb22",
                login: "stanislav.romanyuk"
            },
            {
                _id  : "55ba00e9d79a3a343900000c",
                login: "vasiliy.almashi"
            },
            {
                _id  : "56239efae9576d1728a9ed22",
                login: "vladyslav."
            },
            {
                _id  : "55bf144765cda0810b000005",
                login: "yana.gusti"
            },
            {
                _id  : "560255d1638625cf32000005",
                login: "yevgenia.bezyk"
            }
        ]
    };
    var fakeWorkflowsForDD = {
        data: [
            {
                _id  : "528ce74ef3f67bc40b00001e",
                name : "Draft",
                wName: "lead"
            },
            {
                _id  : "52b4265cc033b7e25ac4f91c",
                name : "Open",
                wName: "lead"
            },
            {
                _id  : "528ce779f3f67bc40b00001f",
                name : "In Progress",
                wName: "lead"
            },
            {
                _id  : "52b426b7c033b7e25ac4f91d",
                name : "Closed",
                wName: "lead"
            },
            {
                _id  : "528ce79bf3f67bc40b000020",
                name : "Cancelled",
                wName: "lead"
            }
        ]
    };
    var fakeEmplSources = {
        data: [
            {
                _id        : "1O",
                attachments: [],
                name       : "1O"
            },
            {
                _id        : "2E",
                attachments: [],
                name       : "2E"
            },
            {
                _id        : "3F",
                attachments: [],
                name       : "3F"
            },
            {
                _id : "bing",
                name: "bing",
                __v : 0
            },
            {
                _id        : "careerbuilder.com",
                attachments: [],
                name       : "careerbuilder.com"
            },
            {
                _id        : "creativecircle.com",
                attachments: [],
                name       : "creativecircle.com"
            },
            {
                _id        : "customer",
                attachments: [],
                name       : "Customer"
            },
            {
                _id        : "ended",
                attachments: [],
                name       : "Ended"
            },
            {
                _id : "google",
                name: "google",
                __v : 0
            },
            {
                _id        : "indeed.com",
                attachments: [],
                name       : "indeed.com"
            },
            {
                _id        : "jobvite.com",
                attachments: [],
                name       : "jobvite.com"
            },
            {
                _id        : "linkedin",
                attachments: [],
                name       : "linkedIn"
            },
            {
                _id        : "map",
                attachments: [],
                name       : "Map"
            },
            {
                _id        : "partner",
                attachments: [],
                name       : "Partner"
            },
            {
                _id        : "sangfroidgame.com",
                attachments: [],
                name       : "sangfroidgame.com"
            },
            {
                _id        : "selfGenerated",
                attachments: [],
                name       : "Self Generated"
            },
            {
                _id        : "sixtostart.com",
                attachments: [],
                name       : "sixtostart.com"
            },
            {
                _id        : "website",
                attachments: [],
                name       : "Website"
            },
            {
                _id        : "zappos.com",
                attachments: [],
                name       : "zappos.com"
            }
        ]
    };
    var fakeTaskPriotity = {
        data: [
            {
                attachments: [],
                priority   : "P1"
            },
            {
                attachments: [],
                priority   : "P2"
            },
            {
                attachments: [],
                priority   : "P3"
            },
            {
                attachments: [],
                priority   : "P4"
            },
            {
                attachments: [],
                priority   : "P5"
            }
        ]
    };
    var fakeCampaigns = {
        data: [
            {
                _id : "cpc",
                __v : 0,
                name: "cpc"
            },
            {
                _id        : "email",
                attachments: [],
                name       : "Email"
            },
            {
                _id        : "newsletter",
                attachments: [],
                name       : "Newsletter"
            },
            {
                _id        : "telesales",
                attachments: [],
                name       : "Telesales"
            },
            {
                _id : "testmain",
                __v : 0,
                name: "testmain"
            },
            {
                _id        : "web",
                attachments: [],
                name       : "Web"
            }
        ]
    };
    var fakeCustomers = {
        data: [{
            _id           : "55b92ad521e4b7c40f00060e",
            ID            : 11,
            __v           : 0,
            companyInfo   : {
                size    : null,
                industry: null
            },
            editedBy      : {
                date: "2015-07-29T19:34:45.991Z",
                user: "52203e707d4dba8813000003"
            },
            createdBy     : {
                date: "2015-07-29T19:34:45.991Z",
                user: "52203e707d4dba8813000003"
            },
            history       : [],
            attachments   : [],
            notes         : [],
            groups        : {
                group: [],
                users: [],
                owner: null
            },
            whoCanRW      : "everyOne",
            social        : {
                LI: "",
                FB: ""
            },
            color         : "#4d5a75",
            relatedUser   : null,
            salesPurchases: {
                receiveMessages: 0,
                language       : "English",
                reference      : "",
                active         : true,
                implementedBy  : null,
                salesTeam      : null,
                salesPerson    : null,
                isSupplier     : false,
                isCustomer     : true
            },
            title         : "",
            internalNotes : "",
            contacts      : [],
            phones        : {
                fax   : "",
                mobile: "",
                phone : ""
            },
            skype         : "",
            jobPosition   : "",
            website       : "",
            address       : {
                country: "USA",
                zip    : "",
                state  : "",
                city   : "",
                street : ""
            },
            timezone      : "UTC",
            department    : null,
            company       : null,
            email         : "",
            imageSrc      : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAAAAACPAi4CAAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAABAAAAAQADq8/hgAAAEaElEQVRYw82X6XLbNhCA+f4PVomk5MRyHDtp63oEgDcl3vfRBQhQIEVKSvsnO+OxRBEfFnthV+n/pyi/NaCryzzL8rJu/wOgzQPXJBgjhDExnXPW/Aqgy30DI0yIwYQQ4Bhe2j0I6BIbI1jL9meC2TdkRu0jgMxCGN5H2HT8IIzjKPAdE9NngEjuAhqfv3rOpe3aIrDAFoB1qtuA3ADlMXKuz9vlLqZokt4CxPAOQXa2bPDCRVSJYB0QIDA4ibp+TVKDbuCvAeh6YpX9DWkcUGJCkAARXW9UfXeL0PmUcF4CZBA4cALv5nqQM+yD4mtATQMOGMi9RzghiKriCuBiAzsB1e8uwUUGtroZIAEsqfqHCI2JjdGZHNDSZzHYb0boQK4JOTVXNQFEoJXDPskEvrYTrJHgIwOdZEBrggXzfkbo+sY7Hp0Fx9bUYbUEAAtgV/waHAcCnOew3arbLy5lVXGSXIrKGQkrKKMLcnHsPjEGAla1PYi+/YCV37e7DRp1qUDjwREK1wjbo56hezRoPLxt9lzUg+m96Hvtz3BMcU9syQAxKBSJ/c2Nqv0Em5C/97q+BdGoEuoORN98CkAqzsAAPh690vdv2tOOEcx/dodP0zq+qjpoQQF7/Vno2UA0OgLQQbUZI6t/1+BlRgAlyywvqtNXja0HFQ7jGVwoUA0HUBNcMvRdpW8PpzDPYRAERfmNE/TDuE8Ajis4oJAiUwB2+g+am3YEEmT5kz4HgOdRygHUIPEMsFf/YvXJYoSKbPczQI4HwysSbKKBdk4dLAhJsptrUHK1lSERUDYD6E9pGLsjoXzRZgAIJVaYBCCfA57zMBoJYfV9CXDigHhRgww2Hgngh4UjnCUbJAs2CEdCkl25kbou5ABh0KkXPupA6IB8fOUF4TpFOs5Eg50eFSOBfOz0GYCWoJwDoJzwcjQBfM2rMAjD0CEsL/Qp4ISG/FHkuJ4A9toXv66KomosMMNAuAA6GxOWPwqP64sb3kTm7HX1Fbsued9BXjACZKNIphLz/FF4WIps6vqff+jaIFAONiBbTf1hDITti5RLg+cYoDOxqJFwxb0dXmT5Bn/Pn8wOh9dQnMASK4aaSGuk+G24DObCbm5XzkXs9RdASTuytUZO6Czdm2BCA2cSgNbIWedxk0AV4FVYEYFJpLK4SuA3DrsceQEQl6svXy33CKfxIrwAanqZBA8R4AAQWeUMwJ6CZ7t7BIh6utfos0uLwxqP7BECMaTUuQCoawhO+9sSUWtjs1kA9I1Fm8DoNiCl64nUCsp9Ym1SgncjoLoz7YTl9dNOtbGRYSAjWbMDNPKw3py0otNeufVYN2wvzha5g6iGzlTDebsfEdbtW9EsLOvYZs06Dmbsq4GjcoeBgThBWtRN2zZ1mYUuGZ7axfz9hZEns+mMQ+ckzIYm/gn+WQvWWRq6uoxuSNi4RWWAYGfRuCtjXx25Bh25MGaTFzaccCVX1wfPtkiCk+e6nh/ExXps/N6z80PyL8wPTYgPwzDiAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDExLTAxLTE5VDAzOjU5OjAwKzAxOjAwaFry6QAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxMC0xMi0yMVQxNDozMDo0NCswMTowMGxOe/8AAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAAElFTkSuQmCC",
            name          : {
                last : "",
                first: "Pekaboo/D.Kaufman"
            },
            isOwn         : false,
            type          : "Person",
            fullName      : "Pekaboo/D.Kaufman ",
            id            : "55b92ad521e4b7c40f00060e"
        },
            {
                _id           : "55b92ad521e4b7c40f00060f",
                ID            : 16,
                __v           : 0,
                companyInfo   : {
                    size    : null,
                    industry: null
                },
                editedBy      : {
                    date: "2015-07-29T19:34:45.991Z",
                    user: "52203e707d4dba8813000003"
                },
                createdBy     : {
                    date: "2015-07-29T19:34:45.991Z",
                    user: "52203e707d4dba8813000003"
                },
                history       : [],
                attachments   : [],
                notes         : [],
                groups        : {
                    group: [],
                    users: [],
                    owner: null
                },
                whoCanRW      : "everyOne",
                social        : {
                    LI: "",
                    FB: ""
                },
                color         : "#4d5a75",
                relatedUser   : null,
                salesPurchases: {
                    receiveMessages: 0,
                    language       : "English",
                    reference      : "",
                    active         : true,
                    implementedBy  : null,
                    salesTeam      : null,
                    salesPerson    : null,
                    isSupplier     : false,
                    isCustomer     : true
                },
                title         : "",
                internalNotes : "",
                contacts      : [],
                phones        : {
                    fax   : "",
                    mobile: "",
                    phone : ""
                },
                skype         : "",
                jobPosition   : "",
                website       : "",
                address       : {
                    country: "Singapore",
                    zip    : "",
                    state  : "",
                    city   : "",
                    street : ""
                },
                timezone      : "UTC",
                department    : null,
                company       : null,
                email         : "",
                imageSrc      : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAAAAACPAi4CAAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAABAAAAAQADq8/hgAAAEaElEQVRYw82X6XLbNhCA+f4PVomk5MRyHDtp63oEgDcl3vfRBQhQIEVKSvsnO+OxRBEfFnthV+n/pyi/NaCryzzL8rJu/wOgzQPXJBgjhDExnXPW/Aqgy30DI0yIwYQQ4Bhe2j0I6BIbI1jL9meC2TdkRu0jgMxCGN5H2HT8IIzjKPAdE9NngEjuAhqfv3rOpe3aIrDAFoB1qtuA3ADlMXKuz9vlLqZokt4CxPAOQXa2bPDCRVSJYB0QIDA4ibp+TVKDbuCvAeh6YpX9DWkcUGJCkAARXW9UfXeL0PmUcF4CZBA4cALv5nqQM+yD4mtATQMOGMi9RzghiKriCuBiAzsB1e8uwUUGtroZIAEsqfqHCI2JjdGZHNDSZzHYb0boQK4JOTVXNQFEoJXDPskEvrYTrJHgIwOdZEBrggXzfkbo+sY7Hp0Fx9bUYbUEAAtgV/waHAcCnOew3arbLy5lVXGSXIrKGQkrKKMLcnHsPjEGAla1PYi+/YCV37e7DRp1qUDjwREK1wjbo56hezRoPLxt9lzUg+m96Hvtz3BMcU9syQAxKBSJ/c2Nqv0Em5C/97q+BdGoEuoORN98CkAqzsAAPh690vdv2tOOEcx/dodP0zq+qjpoQQF7/Vno2UA0OgLQQbUZI6t/1+BlRgAlyywvqtNXja0HFQ7jGVwoUA0HUBNcMvRdpW8PpzDPYRAERfmNE/TDuE8Ajis4oJAiUwB2+g+am3YEEmT5kz4HgOdRygHUIPEMsFf/YvXJYoSKbPczQI4HwysSbKKBdk4dLAhJsptrUHK1lSERUDYD6E9pGLsjoXzRZgAIJVaYBCCfA57zMBoJYfV9CXDigHhRgww2Hgngh4UjnCUbJAs2CEdCkl25kbou5ABh0KkXPupA6IB8fOUF4TpFOs5Eg50eFSOBfOz0GYCWoJwDoJzwcjQBfM2rMAjD0CEsL/Qp4ISG/FHkuJ4A9toXv66KomosMMNAuAA6GxOWPwqP64sb3kTm7HX1Fbsued9BXjACZKNIphLz/FF4WIps6vqff+jaIFAONiBbTf1hDITti5RLg+cYoDOxqJFwxb0dXmT5Bn/Pn8wOh9dQnMASK4aaSGuk+G24DObCbm5XzkXs9RdASTuytUZO6Czdm2BCA2cSgNbIWedxk0AV4FVYEYFJpLK4SuA3DrsceQEQl6svXy33CKfxIrwAanqZBA8R4AAQWeUMwJ6CZ7t7BIh6utfos0uLwxqP7BECMaTUuQCoawhO+9sSUWtjs1kA9I1Fm8DoNiCl64nUCsp9Ym1SgncjoLoz7YTl9dNOtbGRYSAjWbMDNPKw3py0otNeufVYN2wvzha5g6iGzlTDebsfEdbtW9EsLOvYZs06Dmbsq4GjcoeBgThBWtRN2zZ1mYUuGZ7axfz9hZEns+mMQ+ckzIYm/gn+WQvWWRq6uoxuSNi4RWWAYGfRuCtjXx25Bh25MGaTFzaccCVX1wfPtkiCk+e6nh/ExXps/N6z80PyL8wPTYgPwzDiAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDExLTAxLTE5VDAzOjU5OjAwKzAxOjAwaFry6QAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxMC0xMi0yMVQxNDozMDo0NCswMTowMGxOe/8AAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAAElFTkSuQmCC",
                name          : {
                    last : "",
                    first: "Sharmila"
                },
                isOwn         : false,
                type          : "Person",
                fullName      : "Sharmila ",
                id            : "55b92ad521e4b7c40f00060f"
            },
            {
                _id           : "55b92ad521e4b7c40f000610",
                ID            : 21,
                __v           : 0,
                companyInfo   : {
                    size    : null,
                    industry: null
                },
                editedBy      : {
                    date: "2015-07-29T19:34:45.991Z",
                    user: "52203e707d4dba8813000003"
                },
                createdBy     : {
                    date: "2015-07-29T19:34:45.991Z",
                    user: "52203e707d4dba8813000003"
                },
                history       : [],
                attachments   : [],
                notes         : [],
                groups        : {
                    group: [],
                    users: [],
                    owner: null
                },
                whoCanRW      : "everyOne",
                social        : {
                    LI: "",
                    FB: ""
                },
                color         : "#4d5a75",
                relatedUser   : null,
                salesPurchases: {
                    receiveMessages: 0,
                    language       : "English",
                    reference      : "",
                    active         : true,
                    implementedBy  : null,
                    salesTeam      : null,
                    salesPerson    : null,
                    isSupplier     : false,
                    isCustomer     : true
                },
                title         : "",
                internalNotes : "",
                contacts      : [],
                phones        : {
                    fax   : "",
                    mobile: "",
                    phone : ""
                },
                skype         : "",
                jobPosition   : "",
                website       : "",
                address       : {
                    country: null,
                    zip    : "",
                    state  : "",
                    city   : "",
                    street : ""
                },
                timezone      : "UTC",
                department    : null,
                company       : null,
                email         : "",
                imageSrc      : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAAAAACPAi4CAAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAABAAAAAQADq8/hgAAAEaElEQVRYw82X6XLbNhCA+f4PVomk5MRyHDtp63oEgDcl3vfRBQhQIEVKSvsnO+OxRBEfFnthV+n/pyi/NaCryzzL8rJu/wOgzQPXJBgjhDExnXPW/Aqgy30DI0yIwYQQ4Bhe2j0I6BIbI1jL9meC2TdkRu0jgMxCGN5H2HT8IIzjKPAdE9NngEjuAhqfv3rOpe3aIrDAFoB1qtuA3ADlMXKuz9vlLqZokt4CxPAOQXa2bPDCRVSJYB0QIDA4ibp+TVKDbuCvAeh6YpX9DWkcUGJCkAARXW9UfXeL0PmUcF4CZBA4cALv5nqQM+yD4mtATQMOGMi9RzghiKriCuBiAzsB1e8uwUUGtroZIAEsqfqHCI2JjdGZHNDSZzHYb0boQK4JOTVXNQFEoJXDPskEvrYTrJHgIwOdZEBrggXzfkbo+sY7Hp0Fx9bUYbUEAAtgV/waHAcCnOew3arbLy5lVXGSXIrKGQkrKKMLcnHsPjEGAla1PYi+/YCV37e7DRp1qUDjwREK1wjbo56hezRoPLxt9lzUg+m96Hvtz3BMcU9syQAxKBSJ/c2Nqv0Em5C/97q+BdGoEuoORN98CkAqzsAAPh690vdv2tOOEcx/dodP0zq+qjpoQQF7/Vno2UA0OgLQQbUZI6t/1+BlRgAlyywvqtNXja0HFQ7jGVwoUA0HUBNcMvRdpW8PpzDPYRAERfmNE/TDuE8Ajis4oJAiUwB2+g+am3YEEmT5kz4HgOdRygHUIPEMsFf/YvXJYoSKbPczQI4HwysSbKKBdk4dLAhJsptrUHK1lSERUDYD6E9pGLsjoXzRZgAIJVaYBCCfA57zMBoJYfV9CXDigHhRgww2Hgngh4UjnCUbJAs2CEdCkl25kbou5ABh0KkXPupA6IB8fOUF4TpFOs5Eg50eFSOBfOz0GYCWoJwDoJzwcjQBfM2rMAjD0CEsL/Qp4ISG/FHkuJ4A9toXv66KomosMMNAuAA6GxOWPwqP64sb3kTm7HX1Fbsued9BXjACZKNIphLz/FF4WIps6vqff+jaIFAONiBbTf1hDITti5RLg+cYoDOxqJFwxb0dXmT5Bn/Pn8wOh9dQnMASK4aaSGuk+G24DObCbm5XzkXs9RdASTuytUZO6Czdm2BCA2cSgNbIWedxk0AV4FVYEYFJpLK4SuA3DrsceQEQl6svXy33CKfxIrwAanqZBA8R4AAQWeUMwJ6CZ7t7BIh6utfos0uLwxqP7BECMaTUuQCoawhO+9sSUWtjs1kA9I1Fm8DoNiCl64nUCsp9Ym1SgncjoLoz7YTl9dNOtbGRYSAjWbMDNPKw3py0otNeufVYN2wvzha5g6iGzlTDebsfEdbtW9EsLOvYZs06Dmbsq4GjcoeBgThBWtRN2zZ1mYUuGZ7axfz9hZEns+mMQ+ckzIYm/gn+WQvWWRq6uoxuSNi4RWWAYGfRuCtjXx25Bh25MGaTFzaccCVX1wfPtkiCk+e6nh/ExXps/N6z80PyL8wPTYgPwzDiAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDExLTAxLTE5VDAzOjU5OjAwKzAxOjAwaFry6QAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxMC0xMi0yMVQxNDozMDo0NCswMTowMGxOe/8AAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAAElFTkSuQmCC",
                name          : {
                    last : "",
                    first: "Norbert"
                },
                isOwn         : false,
                type          : "Person",
                fullName      : "Norbert ",
                id            : "55b92ad521e4b7c40f000610"
            }
        ]
    };
    var fakeRelatedUser = {
        data: [
            {
                _id     : "55b92ad221e4b7c40f00004f",
                name    : {
                    last : "Sokhanych",
                    first: "Alex"
                },
                fullName: "Alex Sokhanych",
                id      : "55b92ad221e4b7c40f00004f"
            }
        ]
    };
    var fakeCustomerId = {
        data: [
            {
            _id           : "55b92ad521e4b7c40f00060e",
            ID            : 11,
            __v           : 0,
            companyInfo   : {
                size    : null,
                industry: null
            },
            editedBy      : {
                date: "2015-07-29T19:34:45.991Z",
                user: "52203e707d4dba8813000003"
            },
            createdBy     : {
                date: "2015-07-29T19:34:45.991Z",
                user: "52203e707d4dba8813000003"
            },
            history       : [],
            attachments   : [],
            notes         : [],
            groups        : {
                group: [],
                users: [],
                owner: null
            },
            whoCanRW      : "everyOne",
            social        : {
                LI: "",
                FB: ""
            },
            color         : "#4d5a75",
            relatedUser   : null,
            salesPurchases: {
                receiveMessages: 0,
                language       : "English",
                reference      : "",
                active         : true,
                implementedBy  : null,
                salesTeam      : null,
                salesPerson    : null,
                isSupplier     : false,
                isCustomer     : true
            },
            title         : "",
            internalNotes : "",
            contacts      : [],
            phones        : {
                fax   : "",
                mobile: "",
                phone : ""
            },
            skype         : "",
            jobPosition   : "",
            website       : "",
            address       : {
                country: "USA",
                zip    : "",
                state  : "",
                city   : "",
                street : ""
            },
            timezone      : "UTC",
            department    : null,
            company       : null,
            email         : "",
            imageSrc      : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAAAAACPAi4CAAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAABAAAAAQADq8/hgAAAEaElEQVRYw82X6XLbNhCA+f4PVomk5MRyHDtp63oEgDcl3vfRBQhQIEVKSvsnO+OxRBEfFnthV+n/pyi/NaCryzzL8rJu/wOgzQPXJBgjhDExnXPW/Aqgy30DI0yIwYQQ4Bhe2j0I6BIbI1jL9meC2TdkRu0jgMxCGN5H2HT8IIzjKPAdE9NngEjuAhqfv3rOpe3aIrDAFoB1qtuA3ADlMXKuz9vlLqZokt4CxPAOQXa2bPDCRVSJYB0QIDA4ibp+TVKDbuCvAeh6YpX9DWkcUGJCkAARXW9UfXeL0PmUcF4CZBA4cALv5nqQM+yD4mtATQMOGMi9RzghiKriCuBiAzsB1e8uwUUGtroZIAEsqfqHCI2JjdGZHNDSZzHYb0boQK4JOTVXNQFEoJXDPskEvrYTrJHgIwOdZEBrggXzfkbo+sY7Hp0Fx9bUYbUEAAtgV/waHAcCnOew3arbLy5lVXGSXIrKGQkrKKMLcnHsPjEGAla1PYi+/YCV37e7DRp1qUDjwREK1wjbo56hezRoPLxt9lzUg+m96Hvtz3BMcU9syQAxKBSJ/c2Nqv0Em5C/97q+BdGoEuoORN98CkAqzsAAPh690vdv2tOOEcx/dodP0zq+qjpoQQF7/Vno2UA0OgLQQbUZI6t/1+BlRgAlyywvqtNXja0HFQ7jGVwoUA0HUBNcMvRdpW8PpzDPYRAERfmNE/TDuE8Ajis4oJAiUwB2+g+am3YEEmT5kz4HgOdRygHUIPEMsFf/YvXJYoSKbPczQI4HwysSbKKBdk4dLAhJsptrUHK1lSERUDYD6E9pGLsjoXzRZgAIJVaYBCCfA57zMBoJYfV9CXDigHhRgww2Hgngh4UjnCUbJAs2CEdCkl25kbou5ABh0KkXPupA6IB8fOUF4TpFOs5Eg50eFSOBfOz0GYCWoJwDoJzwcjQBfM2rMAjD0CEsL/Qp4ISG/FHkuJ4A9toXv66KomosMMNAuAA6GxOWPwqP64sb3kTm7HX1Fbsued9BXjACZKNIphLz/FF4WIps6vqff+jaIFAONiBbTf1hDITti5RLg+cYoDOxqJFwxb0dXmT5Bn/Pn8wOh9dQnMASK4aaSGuk+G24DObCbm5XzkXs9RdASTuytUZO6Czdm2BCA2cSgNbIWedxk0AV4FVYEYFJpLK4SuA3DrsceQEQl6svXy33CKfxIrwAanqZBA8R4AAQWeUMwJ6CZ7t7BIh6utfos0uLwxqP7BECMaTUuQCoawhO+9sSUWtjs1kA9I1Fm8DoNiCl64nUCsp9Ym1SgncjoLoz7YTl9dNOtbGRYSAjWbMDNPKw3py0otNeufVYN2wvzha5g6iGzlTDebsfEdbtW9EsLOvYZs06Dmbsq4GjcoeBgThBWtRN2zZ1mYUuGZ7axfz9hZEns+mMQ+ckzIYm/gn+WQvWWRq6uoxuSNi4RWWAYGfRuCtjXx25Bh25MGaTFzaccCVX1wfPtkiCk+e6nh/ExXps/N6z80PyL8wPTYgPwzDiAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDExLTAxLTE5VDAzOjU5OjAwKzAxOjAwaFry6QAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxMC0xMi0yMVQxNDozMDo0NCswMTowMGxOe/8AAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAAElFTkSuQmCC",
            name          : {
                last : "",
                first: "Pekaboo/D.Kaufman"
            },
            isOwn         : false,
            type          : "Person",
            fullName      : "Pekaboo/D.Kaufman ",
            id            : "55b92ad521e4b7c40f00060e"
        },
            {
                _id           : "55b92ad521e4b7c40f00060f",
                ID            : 16,
                __v           : 0,
                companyInfo   : {
                    size    : null,
                    industry: null
                },
                editedBy      : {
                    date: "2015-07-29T19:34:45.991Z",
                    user: "52203e707d4dba8813000003"
                },
                createdBy     : {
                    date: "2015-07-29T19:34:45.991Z",
                    user: "52203e707d4dba8813000003"
                },
                history       : [],
                attachments   : [],
                notes         : [],
                groups        : {
                    group: [],
                    users: [],
                    owner: null
                },
                whoCanRW      : "everyOne",
                social        : {
                    LI: "",
                    FB: ""
                },
                color         : "#4d5a75",
                relatedUser   : null,
                salesPurchases: {
                    receiveMessages: 0,
                    language       : "English",
                    reference      : "",
                    active         : true,
                    implementedBy  : null,
                    salesTeam      : null,
                    salesPerson    : null,
                    isSupplier     : false,
                    isCustomer     : true
                },
                title         : "",
                internalNotes : "",
                contacts      : [],
                phones        : {
                    fax   : "",
                    mobile: "",
                    phone : ""
                },
                skype         : "",
                jobPosition   : "",
                website       : "",
                address       : {
                    country: "Singapore",
                    zip    : "",
                    state  : "",
                    city   : "",
                    street : ""
                },
                timezone      : "UTC",
                department    : null,
                company       : null,
                email         : "",
                imageSrc      : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAAAAACPAi4CAAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAABAAAAAQADq8/hgAAAEaElEQVRYw82X6XLbNhCA+f4PVomk5MRyHDtp63oEgDcl3vfRBQhQIEVKSvsnO+OxRBEfFnthV+n/pyi/NaCryzzL8rJu/wOgzQPXJBgjhDExnXPW/Aqgy30DI0yIwYQQ4Bhe2j0I6BIbI1jL9meC2TdkRu0jgMxCGN5H2HT8IIzjKPAdE9NngEjuAhqfv3rOpe3aIrDAFoB1qtuA3ADlMXKuz9vlLqZokt4CxPAOQXa2bPDCRVSJYB0QIDA4ibp+TVKDbuCvAeh6YpX9DWkcUGJCkAARXW9UfXeL0PmUcF4CZBA4cALv5nqQM+yD4mtATQMOGMi9RzghiKriCuBiAzsB1e8uwUUGtroZIAEsqfqHCI2JjdGZHNDSZzHYb0boQK4JOTVXNQFEoJXDPskEvrYTrJHgIwOdZEBrggXzfkbo+sY7Hp0Fx9bUYbUEAAtgV/waHAcCnOew3arbLy5lVXGSXIrKGQkrKKMLcnHsPjEGAla1PYi+/YCV37e7DRp1qUDjwREK1wjbo56hezRoPLxt9lzUg+m96Hvtz3BMcU9syQAxKBSJ/c2Nqv0Em5C/97q+BdGoEuoORN98CkAqzsAAPh690vdv2tOOEcx/dodP0zq+qjpoQQF7/Vno2UA0OgLQQbUZI6t/1+BlRgAlyywvqtNXja0HFQ7jGVwoUA0HUBNcMvRdpW8PpzDPYRAERfmNE/TDuE8Ajis4oJAiUwB2+g+am3YEEmT5kz4HgOdRygHUIPEMsFf/YvXJYoSKbPczQI4HwysSbKKBdk4dLAhJsptrUHK1lSERUDYD6E9pGLsjoXzRZgAIJVaYBCCfA57zMBoJYfV9CXDigHhRgww2Hgngh4UjnCUbJAs2CEdCkl25kbou5ABh0KkXPupA6IB8fOUF4TpFOs5Eg50eFSOBfOz0GYCWoJwDoJzwcjQBfM2rMAjD0CEsL/Qp4ISG/FHkuJ4A9toXv66KomosMMNAuAA6GxOWPwqP64sb3kTm7HX1Fbsued9BXjACZKNIphLz/FF4WIps6vqff+jaIFAONiBbTf1hDITti5RLg+cYoDOxqJFwxb0dXmT5Bn/Pn8wOh9dQnMASK4aaSGuk+G24DObCbm5XzkXs9RdASTuytUZO6Czdm2BCA2cSgNbIWedxk0AV4FVYEYFJpLK4SuA3DrsceQEQl6svXy33CKfxIrwAanqZBA8R4AAQWeUMwJ6CZ7t7BIh6utfos0uLwxqP7BECMaTUuQCoawhO+9sSUWtjs1kA9I1Fm8DoNiCl64nUCsp9Ym1SgncjoLoz7YTl9dNOtbGRYSAjWbMDNPKw3py0otNeufVYN2wvzha5g6iGzlTDebsfEdbtW9EsLOvYZs06Dmbsq4GjcoeBgThBWtRN2zZ1mYUuGZ7axfz9hZEns+mMQ+ckzIYm/gn+WQvWWRq6uoxuSNi4RWWAYGfRuCtjXx25Bh25MGaTFzaccCVX1wfPtkiCk+e6nh/ExXps/N6z80PyL8wPTYgPwzDiAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDExLTAxLTE5VDAzOjU5OjAwKzAxOjAwaFry6QAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxMC0xMi0yMVQxNDozMDo0NCswMTowMGxOe/8AAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAAElFTkSuQmCC",
                name          : {
                    last : "",
                    first: "Sharmila"
                },
                isOwn         : false,
                type          : "Person",
                fullName      : "Sharmila ",
                id            : "55b92ad521e4b7c40f00060f"
            },
            {
                _id           : "55b92ad521e4b7c40f000610",
                ID            : 21,
                __v           : 0,
                companyInfo   : {
                    size    : null,
                    industry: null
                },
                editedBy      : {
                    date: "2015-07-29T19:34:45.991Z",
                    user: "52203e707d4dba8813000003"
                },
                createdBy     : {
                    date: "2015-07-29T19:34:45.991Z",
                    user: "52203e707d4dba8813000003"
                },
                history       : [],
                attachments   : [],
                notes         : [],
                groups        : {
                    group: [],
                    users: [],
                    owner: null
                },
                whoCanRW      : "everyOne",
                social        : {
                    LI: "",
                    FB: ""
                },
                color         : "#4d5a75",
                relatedUser   : null,
                salesPurchases: {
                    receiveMessages: 0,
                    language       : "English",
                    reference      : "",
                    active         : true,
                    implementedBy  : null,
                    salesTeam      : null,
                    salesPerson    : null,
                    isSupplier     : false,
                    isCustomer     : true
                },
                title         : "",
                internalNotes : "",
                contacts      : [],
                phones        : {
                    fax   : "",
                    mobile: "",
                    phone : ""
                },
                skype         : "",
                jobPosition   : "",
                website       : "",
                address       : {
                    country: null,
                    zip    : "",
                    state  : "",
                    city   : "",
                    street : ""
                },
                timezone      : "UTC",
                department    : null,
                company       : null,
                email         : "",
                imageSrc      : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAAAAACPAi4CAAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAABAAAAAQADq8/hgAAAEaElEQVRYw82X6XLbNhCA+f4PVomk5MRyHDtp63oEgDcl3vfRBQhQIEVKSvsnO+OxRBEfFnthV+n/pyi/NaCryzzL8rJu/wOgzQPXJBgjhDExnXPW/Aqgy30DI0yIwYQQ4Bhe2j0I6BIbI1jL9meC2TdkRu0jgMxCGN5H2HT8IIzjKPAdE9NngEjuAhqfv3rOpe3aIrDAFoB1qtuA3ADlMXKuz9vlLqZokt4CxPAOQXa2bPDCRVSJYB0QIDA4ibp+TVKDbuCvAeh6YpX9DWkcUGJCkAARXW9UfXeL0PmUcF4CZBA4cALv5nqQM+yD4mtATQMOGMi9RzghiKriCuBiAzsB1e8uwUUGtroZIAEsqfqHCI2JjdGZHNDSZzHYb0boQK4JOTVXNQFEoJXDPskEvrYTrJHgIwOdZEBrggXzfkbo+sY7Hp0Fx9bUYbUEAAtgV/waHAcCnOew3arbLy5lVXGSXIrKGQkrKKMLcnHsPjEGAla1PYi+/YCV37e7DRp1qUDjwREK1wjbo56hezRoPLxt9lzUg+m96Hvtz3BMcU9syQAxKBSJ/c2Nqv0Em5C/97q+BdGoEuoORN98CkAqzsAAPh690vdv2tOOEcx/dodP0zq+qjpoQQF7/Vno2UA0OgLQQbUZI6t/1+BlRgAlyywvqtNXja0HFQ7jGVwoUA0HUBNcMvRdpW8PpzDPYRAERfmNE/TDuE8Ajis4oJAiUwB2+g+am3YEEmT5kz4HgOdRygHUIPEMsFf/YvXJYoSKbPczQI4HwysSbKKBdk4dLAhJsptrUHK1lSERUDYD6E9pGLsjoXzRZgAIJVaYBCCfA57zMBoJYfV9CXDigHhRgww2Hgngh4UjnCUbJAs2CEdCkl25kbou5ABh0KkXPupA6IB8fOUF4TpFOs5Eg50eFSOBfOz0GYCWoJwDoJzwcjQBfM2rMAjD0CEsL/Qp4ISG/FHkuJ4A9toXv66KomosMMNAuAA6GxOWPwqP64sb3kTm7HX1Fbsued9BXjACZKNIphLz/FF4WIps6vqff+jaIFAONiBbTf1hDITti5RLg+cYoDOxqJFwxb0dXmT5Bn/Pn8wOh9dQnMASK4aaSGuk+G24DObCbm5XzkXs9RdASTuytUZO6Czdm2BCA2cSgNbIWedxk0AV4FVYEYFJpLK4SuA3DrsceQEQl6svXy33CKfxIrwAanqZBA8R4AAQWeUMwJ6CZ7t7BIh6utfos0uLwxqP7BECMaTUuQCoawhO+9sSUWtjs1kA9I1Fm8DoNiCl64nUCsp9Ym1SgncjoLoz7YTl9dNOtbGRYSAjWbMDNPKw3py0otNeufVYN2wvzha5g6iGzlTDebsfEdbtW9EsLOvYZs06Dmbsq4GjcoeBgThBWtRN2zZ1mYUuGZ7axfz9hZEns+mMQ+ckzIYm/gn+WQvWWRq6uoxuSNi4RWWAYGfRuCtjXx25Bh25MGaTFzaccCVX1wfPtkiCk+e6nh/ExXps/N6z80PyL8wPTYgPwzDiAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDExLTAxLTE5VDAzOjU5OjAwKzAxOjAwaFry6QAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxMC0xMi0yMVQxNDozMDo0NCswMTowMGxOe/8AAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAAElFTkSuQmCC",
                name          : {
                    last : "",
                    first: "Norbert"
                },
                isOwn         : false,
                type          : "Person",
                fullName      : "Norbert ",
                id            : "55b92ad521e4b7c40f000610"
            }
        ]
    };
    var fakeCustomerIdCompany = {
        data: [
            {
            _id           : "55b92ad521e4b7c40f00060e",
            ID            : 11,
            __v           : 0,
            companyInfo   : {
                size    : null,
                industry: null
            },
            editedBy      : {
                date: "2015-07-29T19:34:45.991Z",
                user: "52203e707d4dba8813000003"
            },
            createdBy     : {
                date: "2015-07-29T19:34:45.991Z",
                user: "52203e707d4dba8813000003"
            },
            history       : [],
            attachments   : [],
            notes         : [],
            groups        : {
                group: [],
                users: [],
                owner: null
            },
            whoCanRW      : "everyOne",
            social        : {
                LI: "",
                FB: ""
            },
            color         : "#4d5a75",
            relatedUser   : null,
            salesPurchases: {
                receiveMessages: 0,
                language       : "English",
                reference      : "",
                active         : true,
                implementedBy  : null,
                salesTeam      : null,
                salesPerson    : null,
                isSupplier     : false,
                isCustomer     : true
            },
            title         : "",
            internalNotes : "",
            contacts      : [],
            phones        : {
                fax   : "",
                mobile: "",
                phone : ""
            },
            skype         : "",
            jobPosition   : "",
            website       : "",
            address       : {
                country: "USA",
                zip    : "",
                state  : "",
                city   : "",
                street : ""
            },
            timezone      : "UTC",
            department    : null,
            company       : null,
            email         : "",
            imageSrc      : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAAAAACPAi4CAAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAABAAAAAQADq8/hgAAAEaElEQVRYw82X6XLbNhCA+f4PVomk5MRyHDtp63oEgDcl3vfRBQhQIEVKSvsnO+OxRBEfFnthV+n/pyi/NaCryzzL8rJu/wOgzQPXJBgjhDExnXPW/Aqgy30DI0yIwYQQ4Bhe2j0I6BIbI1jL9meC2TdkRu0jgMxCGN5H2HT8IIzjKPAdE9NngEjuAhqfv3rOpe3aIrDAFoB1qtuA3ADlMXKuz9vlLqZokt4CxPAOQXa2bPDCRVSJYB0QIDA4ibp+TVKDbuCvAeh6YpX9DWkcUGJCkAARXW9UfXeL0PmUcF4CZBA4cALv5nqQM+yD4mtATQMOGMi9RzghiKriCuBiAzsB1e8uwUUGtroZIAEsqfqHCI2JjdGZHNDSZzHYb0boQK4JOTVXNQFEoJXDPskEvrYTrJHgIwOdZEBrggXzfkbo+sY7Hp0Fx9bUYbUEAAtgV/waHAcCnOew3arbLy5lVXGSXIrKGQkrKKMLcnHsPjEGAla1PYi+/YCV37e7DRp1qUDjwREK1wjbo56hezRoPLxt9lzUg+m96Hvtz3BMcU9syQAxKBSJ/c2Nqv0Em5C/97q+BdGoEuoORN98CkAqzsAAPh690vdv2tOOEcx/dodP0zq+qjpoQQF7/Vno2UA0OgLQQbUZI6t/1+BlRgAlyywvqtNXja0HFQ7jGVwoUA0HUBNcMvRdpW8PpzDPYRAERfmNE/TDuE8Ajis4oJAiUwB2+g+am3YEEmT5kz4HgOdRygHUIPEMsFf/YvXJYoSKbPczQI4HwysSbKKBdk4dLAhJsptrUHK1lSERUDYD6E9pGLsjoXzRZgAIJVaYBCCfA57zMBoJYfV9CXDigHhRgww2Hgngh4UjnCUbJAs2CEdCkl25kbou5ABh0KkXPupA6IB8fOUF4TpFOs5Eg50eFSOBfOz0GYCWoJwDoJzwcjQBfM2rMAjD0CEsL/Qp4ISG/FHkuJ4A9toXv66KomosMMNAuAA6GxOWPwqP64sb3kTm7HX1Fbsued9BXjACZKNIphLz/FF4WIps6vqff+jaIFAONiBbTf1hDITti5RLg+cYoDOxqJFwxb0dXmT5Bn/Pn8wOh9dQnMASK4aaSGuk+G24DObCbm5XzkXs9RdASTuytUZO6Czdm2BCA2cSgNbIWedxk0AV4FVYEYFJpLK4SuA3DrsceQEQl6svXy33CKfxIrwAanqZBA8R4AAQWeUMwJ6CZ7t7BIh6utfos0uLwxqP7BECMaTUuQCoawhO+9sSUWtjs1kA9I1Fm8DoNiCl64nUCsp9Ym1SgncjoLoz7YTl9dNOtbGRYSAjWbMDNPKw3py0otNeufVYN2wvzha5g6iGzlTDebsfEdbtW9EsLOvYZs06Dmbsq4GjcoeBgThBWtRN2zZ1mYUuGZ7axfz9hZEns+mMQ+ckzIYm/gn+WQvWWRq6uoxuSNi4RWWAYGfRuCtjXx25Bh25MGaTFzaccCVX1wfPtkiCk+e6nh/ExXps/N6z80PyL8wPTYgPwzDiAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDExLTAxLTE5VDAzOjU5OjAwKzAxOjAwaFry6QAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxMC0xMi0yMVQxNDozMDo0NCswMTowMGxOe/8AAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAAElFTkSuQmCC",
            name          : {
                last : "",
                first: "Pekaboo/D.Kaufman"
            },
            isOwn         : false,
            type          : "Company",
            fullName      : "Pekaboo/D.Kaufman ",
            id            : "55b92ad521e4b7c40f00060e"
        },
            {
                _id           : "55b92ad521e4b7c40f00060f",
                ID            : 16,
                __v           : 0,
                companyInfo   : {
                    size    : null,
                    industry: null
                },
                editedBy      : {
                    date: "2015-07-29T19:34:45.991Z",
                    user: "52203e707d4dba8813000003"
                },
                createdBy     : {
                    date: "2015-07-29T19:34:45.991Z",
                    user: "52203e707d4dba8813000003"
                },
                history       : [],
                attachments   : [],
                notes         : [],
                groups        : {
                    group: [],
                    users: [],
                    owner: null
                },
                whoCanRW      : "everyOne",
                social        : {
                    LI: "",
                    FB: ""
                },
                color         : "#4d5a75",
                relatedUser   : null,
                salesPurchases: {
                    receiveMessages: 0,
                    language       : "English",
                    reference      : "",
                    active         : true,
                    implementedBy  : null,
                    salesTeam      : null,
                    salesPerson    : null,
                    isSupplier     : false,
                    isCustomer     : true
                },
                title         : "",
                internalNotes : "",
                contacts      : [],
                phones        : {
                    fax   : "",
                    mobile: "",
                    phone : ""
                },
                skype         : "",
                jobPosition   : "",
                website       : "",
                address       : {
                    country: "Singapore",
                    zip    : "",
                    state  : "",
                    city   : "",
                    street : ""
                },
                timezone      : "UTC",
                department    : null,
                company       : null,
                email         : "",
                imageSrc      : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAAAAACPAi4CAAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAABAAAAAQADq8/hgAAAEaElEQVRYw82X6XLbNhCA+f4PVomk5MRyHDtp63oEgDcl3vfRBQhQIEVKSvsnO+OxRBEfFnthV+n/pyi/NaCryzzL8rJu/wOgzQPXJBgjhDExnXPW/Aqgy30DI0yIwYQQ4Bhe2j0I6BIbI1jL9meC2TdkRu0jgMxCGN5H2HT8IIzjKPAdE9NngEjuAhqfv3rOpe3aIrDAFoB1qtuA3ADlMXKuz9vlLqZokt4CxPAOQXa2bPDCRVSJYB0QIDA4ibp+TVKDbuCvAeh6YpX9DWkcUGJCkAARXW9UfXeL0PmUcF4CZBA4cALv5nqQM+yD4mtATQMOGMi9RzghiKriCuBiAzsB1e8uwUUGtroZIAEsqfqHCI2JjdGZHNDSZzHYb0boQK4JOTVXNQFEoJXDPskEvrYTrJHgIwOdZEBrggXzfkbo+sY7Hp0Fx9bUYbUEAAtgV/waHAcCnOew3arbLy5lVXGSXIrKGQkrKKMLcnHsPjEGAla1PYi+/YCV37e7DRp1qUDjwREK1wjbo56hezRoPLxt9lzUg+m96Hvtz3BMcU9syQAxKBSJ/c2Nqv0Em5C/97q+BdGoEuoORN98CkAqzsAAPh690vdv2tOOEcx/dodP0zq+qjpoQQF7/Vno2UA0OgLQQbUZI6t/1+BlRgAlyywvqtNXja0HFQ7jGVwoUA0HUBNcMvRdpW8PpzDPYRAERfmNE/TDuE8Ajis4oJAiUwB2+g+am3YEEmT5kz4HgOdRygHUIPEMsFf/YvXJYoSKbPczQI4HwysSbKKBdk4dLAhJsptrUHK1lSERUDYD6E9pGLsjoXzRZgAIJVaYBCCfA57zMBoJYfV9CXDigHhRgww2Hgngh4UjnCUbJAs2CEdCkl25kbou5ABh0KkXPupA6IB8fOUF4TpFOs5Eg50eFSOBfOz0GYCWoJwDoJzwcjQBfM2rMAjD0CEsL/Qp4ISG/FHkuJ4A9toXv66KomosMMNAuAA6GxOWPwqP64sb3kTm7HX1Fbsued9BXjACZKNIphLz/FF4WIps6vqff+jaIFAONiBbTf1hDITti5RLg+cYoDOxqJFwxb0dXmT5Bn/Pn8wOh9dQnMASK4aaSGuk+G24DObCbm5XzkXs9RdASTuytUZO6Czdm2BCA2cSgNbIWedxk0AV4FVYEYFJpLK4SuA3DrsceQEQl6svXy33CKfxIrwAanqZBA8R4AAQWeUMwJ6CZ7t7BIh6utfos0uLwxqP7BECMaTUuQCoawhO+9sSUWtjs1kA9I1Fm8DoNiCl64nUCsp9Ym1SgncjoLoz7YTl9dNOtbGRYSAjWbMDNPKw3py0otNeufVYN2wvzha5g6iGzlTDebsfEdbtW9EsLOvYZs06Dmbsq4GjcoeBgThBWtRN2zZ1mYUuGZ7axfz9hZEns+mMQ+ckzIYm/gn+WQvWWRq6uoxuSNi4RWWAYGfRuCtjXx25Bh25MGaTFzaccCVX1wfPtkiCk+e6nh/ExXps/N6z80PyL8wPTYgPwzDiAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDExLTAxLTE5VDAzOjU5OjAwKzAxOjAwaFry6QAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxMC0xMi0yMVQxNDozMDo0NCswMTowMGxOe/8AAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAAElFTkSuQmCC",
                name          : {
                    last : "",
                    first: "Sharmila"
                },
                isOwn         : false,
                type          : "Company",
                fullName      : "Sharmila ",
                id            : "55b92ad521e4b7c40f00060f"
            },
            {
                _id           : "55b92ad521e4b7c40f000610",
                ID            : 21,
                __v           : 0,
                companyInfo   : {
                    size    : null,
                    industry: null
                },
                editedBy      : {
                    date: "2015-07-29T19:34:45.991Z",
                    user: "52203e707d4dba8813000003"
                },
                createdBy     : {
                    date: "2015-07-29T19:34:45.991Z",
                    user: "52203e707d4dba8813000003"
                },
                history       : [],
                attachments   : [],
                notes         : [],
                groups        : {
                    group: [],
                    users: [],
                    owner: null
                },
                whoCanRW      : "everyOne",
                social        : {
                    LI: "",
                    FB: ""
                },
                color         : "#4d5a75",
                relatedUser   : null,
                salesPurchases: {
                    receiveMessages: 0,
                    language       : "English",
                    reference      : "",
                    active         : true,
                    implementedBy  : null,
                    salesTeam      : null,
                    salesPerson    : null,
                    isSupplier     : false,
                    isCustomer     : true
                },
                title         : "",
                internalNotes : "",
                contacts      : [],
                phones        : {
                    fax   : "",
                    mobile: "",
                    phone : ""
                },
                skype         : "",
                jobPosition   : "",
                website       : "",
                address       : {
                    country: null,
                    zip    : "",
                    state  : "",
                    city   : "",
                    street : ""
                },
                timezone      : "UTC",
                department    : null,
                company       : null,
                email         : "",
                imageSrc      : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAAAAACPAi4CAAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAABAAAAAQADq8/hgAAAEaElEQVRYw82X6XLbNhCA+f4PVomk5MRyHDtp63oEgDcl3vfRBQhQIEVKSvsnO+OxRBEfFnthV+n/pyi/NaCryzzL8rJu/wOgzQPXJBgjhDExnXPW/Aqgy30DI0yIwYQQ4Bhe2j0I6BIbI1jL9meC2TdkRu0jgMxCGN5H2HT8IIzjKPAdE9NngEjuAhqfv3rOpe3aIrDAFoB1qtuA3ADlMXKuz9vlLqZokt4CxPAOQXa2bPDCRVSJYB0QIDA4ibp+TVKDbuCvAeh6YpX9DWkcUGJCkAARXW9UfXeL0PmUcF4CZBA4cALv5nqQM+yD4mtATQMOGMi9RzghiKriCuBiAzsB1e8uwUUGtroZIAEsqfqHCI2JjdGZHNDSZzHYb0boQK4JOTVXNQFEoJXDPskEvrYTrJHgIwOdZEBrggXzfkbo+sY7Hp0Fx9bUYbUEAAtgV/waHAcCnOew3arbLy5lVXGSXIrKGQkrKKMLcnHsPjEGAla1PYi+/YCV37e7DRp1qUDjwREK1wjbo56hezRoPLxt9lzUg+m96Hvtz3BMcU9syQAxKBSJ/c2Nqv0Em5C/97q+BdGoEuoORN98CkAqzsAAPh690vdv2tOOEcx/dodP0zq+qjpoQQF7/Vno2UA0OgLQQbUZI6t/1+BlRgAlyywvqtNXja0HFQ7jGVwoUA0HUBNcMvRdpW8PpzDPYRAERfmNE/TDuE8Ajis4oJAiUwB2+g+am3YEEmT5kz4HgOdRygHUIPEMsFf/YvXJYoSKbPczQI4HwysSbKKBdk4dLAhJsptrUHK1lSERUDYD6E9pGLsjoXzRZgAIJVaYBCCfA57zMBoJYfV9CXDigHhRgww2Hgngh4UjnCUbJAs2CEdCkl25kbou5ABh0KkXPupA6IB8fOUF4TpFOs5Eg50eFSOBfOz0GYCWoJwDoJzwcjQBfM2rMAjD0CEsL/Qp4ISG/FHkuJ4A9toXv66KomosMMNAuAA6GxOWPwqP64sb3kTm7HX1Fbsued9BXjACZKNIphLz/FF4WIps6vqff+jaIFAONiBbTf1hDITti5RLg+cYoDOxqJFwxb0dXmT5Bn/Pn8wOh9dQnMASK4aaSGuk+G24DObCbm5XzkXs9RdASTuytUZO6Czdm2BCA2cSgNbIWedxk0AV4FVYEYFJpLK4SuA3DrsceQEQl6svXy33CKfxIrwAanqZBA8R4AAQWeUMwJ6CZ7t7BIh6utfos0uLwxqP7BECMaTUuQCoawhO+9sSUWtjs1kA9I1Fm8DoNiCl64nUCsp9Ym1SgncjoLoz7YTl9dNOtbGRYSAjWbMDNPKw3py0otNeufVYN2wvzha5g6iGzlTDebsfEdbtW9EsLOvYZs06Dmbsq4GjcoeBgThBWtRN2zZ1mYUuGZ7axfz9hZEns+mMQ+ckzIYm/gn+WQvWWRq6uoxuSNi4RWWAYGfRuCtjXx25Bh25MGaTFzaccCVX1wfPtkiCk+e6nh/ExXps/N6z80PyL8wPTYgPwzDiAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDExLTAxLTE5VDAzOjU5OjAwKzAxOjAwaFry6QAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxMC0xMi0yMVQxNDozMDo0NCswMTowMGxOe/8AAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAAElFTkSuQmCC",
                name          : {
                    last : "",
                    first: "Norbert"
                },
                isOwn         : false,
                type          : "Person",
                fullName      : "Norbert ",
                id            : "55b92ad521e4b7c40f000610"
            }
        ]
    };
    var fakeLeadId = {
        _id             : "56c1c4ecc99aad5365bff221",
        __v             : 0,
        attachments     : [],
        notes           : [],
        convertedDate   : "2016-02-15T12:30:36.031Z",
        isConverted     : false,
        source          : "",
        campaign        : "",
        editedBy        : {
            date: "2016-02-15T12:30:38.818Z",
            user: null
        },
        createdBy       : {
            date: "2016-02-15T12:30:36.031Z",
            user: null
        },
        sequence        : 26,
        groups          : {
            group: [],
            users: [],
            owner: {
                _id  : "560c099da5d4a2e20ba5068b",
                login: "AlexSvatuk"
            }
        },
        whoCanRW        : "everyOne",
        workflow        : {
            _id         : "52b4265cc033b7e25ac4f91c",
            attachments : [],
            name        : "Open",
            sequence    : 3,
            status      : "New",
            wId         : "Leads",
            wName       : "lead",
            source      : "lead",
            targetSource: [
                "lead"
            ],
            visible     : true,
            color       : "#2C3E50"
        },
        reffered        : "",
        optout          : false,
        active          : true,
        color           : "#4d5a75",
        categories      : {
            name: "",
            id  : ""
        },
        priority        : "P3",
        expectedClosing : null,
        nextAction      : {
            date: "2016-02-15T12:30:36.031Z",
            desc: ""
        },
        internalNotes   : "Can you clone livejasmin.com with the same feature?",
        salesTeam       : null,
        salesPerson     : null,
        func            : "",
        phones          : {
            fax   : "",
            phone : "",
            mobile: ""
        },
        email           : "herculosh@yahoo.com",
        contactName     : {
            last : "",
            first: ""
        },
        address         : {
            country: "",
            zip    : "",
            state  : "",
            city   : "",
            street : ""
        },
        customer        : null,
        company         : null,
        tempCompanyField: "",
        creationDate    : "2016-02-15T12:30:36.030Z",
        expectedRevenue : {
            currency: "",
            progress: 0,
            value   : 0
        },
        name            : "clone livejasmin",
        isOpportunitie  : false
    };
    var fakeWorkflows = {
        data: [
            {
                _id         : "528ce74ef3f67bc40b00001e",
                __v         : 0,
                attachments : [],
                name        : "Draft",
                sequence    : 2,
                status      : "New",
                wId         : "Leads",
                wName       : "lead",
                source      : "lead",
                targetSource: [
                    "lead"
                ],
                visible     : true,
                color       : "#2C3E50"
            },
            {
                _id         : "528ce779f3f67bc40b00001f",
                __v         : 0,
                attachments : [],
                name        : "In Progress",
                sequence    : 1,
                status      : "In Progress",
                wId         : "Leads",
                wName       : "lead",
                source      : "lead",
                targetSource: [
                    "lead"
                ],
                visible     : true,
                color       : "#2C3E50"
            },
            {
                _id         : "528ce79bf3f67bc40b000020",
                __v         : 0,
                attachments : [],
                name        : "Cancelled",
                sequence    : 0,
                status      : "Cancelled",
                wId         : "Leads",
                wName       : "lead",
                source      : "lead",
                targetSource: [
                    "lead"
                ],
                visible     : true,
                color       : "#2C3E50"
            }
        ]
    };
    var view;
    var topBarView;
    var leadsCollection;
    var listView;

    chai.use(chaiJquery);
    chai.use(sinonChai);
    expect = chai.expect;

    describe('LeadsView', function () {
        var $fixture;
        var $elFixture;

        after(function () {
            topBarView.remove();
            listView.remove();
            view.remove();
        });

        describe('#initialize()', function () {
            var server;

            before(function () {
                $fixture = $(fixtures);
                $fixture.appendTo(document.body);
                $elFixture = $fixture.find('#wrapper');

                server = sinon.fakeServer.create();
            });

            after(function () {
                server.restore();
            });

            it('Should create main view', function () {
                var $expectedSubMenuEl;
                var $expectedMenuEl;

                server.respondWith('GET', '/getModules', [200, {'Content-Type': 'application/json'}, JSON.stringify(modules)]);

                view = new MainView({el: $elFixture, contentType: 'Leads'});

                $expectedMenuEl = view.$el.find('#mainmenu-holder');
                $expectedSubMenuEl = view.$el.find('#submenu-holder');

                server.respond();

                expect($expectedMenuEl).to.exist;
                expect($expectedSubMenuEl).to.exist;
            });

            it('Should render menu and subMenu', function () {
                var $expectedMenuEl;
                var $needAEl;

                $needAEl = view.$el.find('a[data-module-id="24"]')[0];

                $expectedMenuEl = view.$el.find('a[data-module-id="24"]').closest('li');

                $needAEl.click();

                expect($expectedMenuEl).to.have.class('selected');
                expect(window.location.hash).to.be.equals('#easyErp/Leads');
            });
        });

        describe('TopBarView', function () {
            var server;

            before(function () {
                server = sinon.fakeServer.create();
            });

            after(function () {
                server.restore();
            });

            it('Try to fetch collection with 401 error', function () {
                var leadsUrl = new RegExp('\/leads\/list', 'i');

                server.respondWith('GET', leadsUrl, [401, {'Content-Type': 'application/json'}, JSON.stringify(fakeLeads)]);
                leadsCollection = new LeadsCollection({
                    viewType: 'list'
                });
                server.respond();
            });

            it('Try to create topBar view', function () {
                var $createBtnHolderEl;
                var $addLeadsBtnEl;
                var leadsUrl = new RegExp('\/leads\/list', 'i');

                server.respondWith('GET', leadsUrl, [200, {'Content-Type': 'application/json'}, JSON.stringify(fakeLeads)]);
                leadsCollection = new LeadsCollection({
                    viewType: 'list'
                });
                server.respond();

                topBarView = new TopBarView({
                    collection: leadsCollection,
                    actionType: 'Content'
                });

                $createBtnHolderEl = topBarView.$el.find('#createBtnHolder');
                $addLeadsBtnEl = $createBtnHolderEl.find('a[href="#home/action-Leads/Create"]');

                expect($createBtnHolderEl).to.exist;
                expect($addLeadsBtnEl).to.exist;
                expect($addLeadsBtnEl).to.have.id('top-bar-createBtn');

            });
        });

        describe('Leads list view', function () {
            var server;
            var windowConfirmStub;
            var mainSpy;
            var clock;
            var alertStub;

            before(function () {
                server = sinon.fakeServer.create();
                windowConfirmStub = sinon.stub(window, 'confirm');
                mainSpy = sinon.spy(App, 'render');
                clock = sinon.useFakeTimers();
                alertStub = sinon.stub(window, 'alert');
                alertStub.returns(true);
            });

            after(function () {
                server.restore();
                windowConfirmStub.restore();
                mainSpy.restore();
                clock.restore();
                alertStub.restore();
            });

            it('Try to create lead list view', function () {
                var $contentHolderEl;
                var $listContainerEl;
                var workFlowUrl = new RegExp('/Workflows', 'i');
                server.respondWith('GET', workFlowUrl, [200, {'Content-Type': 'application/json'}, JSON.stringify(fakeWorkflows)]);

                listView = new ListView({
                    collection   : leadsCollection,
                    startTime    : new Date(),
                    newCollection: true,
                    page         : 1
                });

                server.respond();

                $contentHolderEl = view.$el.find('#content-holder');
                $listContainerEl = $contentHolderEl.find('table');

                expect($contentHolderEl).to.exist;
                expect($listContainerEl).to.exist;
                expect($listContainerEl).to.have.class('list');

                topBarView.bind('copyEvent', listView.copy, listView);
                topBarView.bind('generateEvent', listView.generate, listView);
                topBarView.bind('createEvent', listView.createItem, listView);
                topBarView.bind('editEvent', listView.editItem, listView);
                topBarView.bind('saveEvent', listView.saveItem, listView);
                topBarView.bind('deleteEvent', listView.deleteItems, listView);
                topBarView.bind('generateInvoice', listView.generateInvoice, listView);
                topBarView.bind('copyRow', listView.copyRow, listView);
                topBarView.bind('exportToCsv', listView.exportToCsv, listView);
                topBarView.bind('exportToXlsx', listView.exportToXlsx, listView);
                topBarView.bind('importEvent', listView.importFiles, listView);
                topBarView.bind('pay', listView.newPayment, listView);
                topBarView.bind('changeDateRange', listView.changeDateRange, listView);

                leadsCollection.bind('showmore', listView.showMoreContent, listView);
            });

            it('Try to change leads stage', function () {
                var $selectedItem;
                var $needTr = listView.$el.find('#listTable > tr[data-id="5707584d3850536324af7972"]');
                var $stageBtn = $needTr.find('td#5707584d3850536324af7972 > a');
                var leadsUrl = new RegExp('\/leads\/', 'i');

                $stageBtn.click();
                expect(listView.$el.find('.newSelectList')).to.exist;
                $stageBtn.click();
                expect(listView.$el.find('.newSelectList')).to.not.exist;

                $stageBtn.click();
                $selectedItem = $needTr.find('.newSelectList > li#528ce74ef3f67bc40b00001e');

                server.respondWith('PATCH', leadsUrl, [200, {'Content-Type': 'application/json'}, JSON.stringify({success: 'Updated success'})]);
                $selectedItem.click();
                server.respond();

                expect(window.location.hash).to.be.equals('#easyErp/Leads/list/p=1/c=100');
            });

            it('Try to delete leads', function () {
                var $needCheckBox = listView.$el.find('input[value="56c1c4ecc99aad5365bff221"]');
                var $deleteBtnEl;

                windowConfirmStub.returns(true);

                server.respondWith('DELETE', '/leads/56c1c4ecc99aad5365bff221', [200, {'Content-Type': 'application/json'}, JSON.stringify({success: 'Opportunities removed'})]);

                $needCheckBox.click();
                $deleteBtnEl = topBarView.$el.find('#top-bar-deleteBtn')[0];

                $deleteBtnEl.click();
                server.respond();

                expect(windowConfirmStub.called).to.be.true;

            });

            it('Try to create leads', function () {
                var $dialogContainer = $('#dialogContainer');
                var $createBtn = topBarView.$el.find('#top-bar-createBtn');

                expect($dialogContainer).to.be.empty;

                server.respondWith('GET', '/users/forDd', [200, {'Content-Type': 'application/json'}, JSON.stringify(fakeUsersForDD)]);
                server.respondWith('GET', /\/workflows\/getWorkflowsForDd/, [200, {'Content-Type': 'application/json'}, JSON.stringify(fakeWorkflowsForDD)]);
                server.respondWith('GET', '/employees/sources', [200, {'Content-Type': 'application/json'}, JSON.stringify(fakeEmplSources)]);
                server.respondWith('GET', '/tasks/priority', [200, {'Content-Type': 'application/json'}, JSON.stringify(fakeTaskPriotity)]);
                server.respondWith('GET', '/Campaigns', [200, {'Content-Type': 'application/json'}, JSON.stringify(fakeCampaigns)]);
                server.respondWith('GET', '/customers/', [200, {'Content-Type': 'application/json'}, JSON.stringify(fakeCustomers)]);
                server.respondWith('GET', '/employees/getForDdByRelatedUser', [200, {'Content-Type': 'application/json'}, JSON.stringify(fakeRelatedUser)]);
                $createBtn.click();
                server.respond();

                expect($('#leadForm')).to.exist;
            });

            it('Try to save lead without need data', function () {
                var createBtn = $('.ui-dialog-buttonset button')[0];
                var spyResponse;

                $(createBtn).click();

                spyResponse = mainSpy.args[0][0];

                expect(spyResponse).to.have.property('type', 'error');

            });

            it('Try to change tab', function () {
                var $tabsBtn = $('.dialog-tabs a');
                var $firstBtn = $($tabsBtn[0]);
                var $secondBtn = $($tabsBtn[1]);

                expect($firstBtn).to.have.class('active');

                $secondBtn.click();

                expect($firstBtn).to.have.not.class('active');
                expect($secondBtn).to.have.class('active');
            });

            it('Try to save lead with error response', function () {
                var createBtn = $('.ui-dialog-buttonset button')[0];

                server.respondWith('POST', '/leads/', [403, {'Content-Type': 'application/json'}, JSON.stringify({})]);
                $(createBtn).click();
                server.respond();
            });

            it('Try to save lead with need data with customer company', function (done) {
                var createBtn = $('.ui-dialog-buttonset button')[0];
                var $selectBtn = $('.current-selected')[0];
                var $customerSel;
                var $form = $('#leadForm');
                var $tabsBtn = $('.dialog-tabs a');
                var $firstBtn = $($tabsBtn[0]);
                var customerUrl = new RegExp('\/customers\/', 'i');
                var hashUrlLeads = new RegExp('#easyErp\/Leads', 'i');

                $firstBtn.click();
                $selectBtn.click();

                server.respondWith('GET', customerUrl, [200, {'Content-Type': 'application/json'}, JSON.stringify(fakeCustomerIdCompany)]);
                $customerSel = $('#customerDd .newSelectList li')[1];
                $customerSel.click();
                server.respond();

                clock.tick(200);

                server.respondWith('POST', '/leads/', [200, {'Content-Type': 'application/json'}, JSON.stringify({
                    success: "A new Opportunities create success",
                    id     : '12345'
                })]);
                $form.find('#name').val('Test');
                $form.find('#first').val('Test');
                $form.find('#last').val('Test');
                $form.find('#company').val('Test');
                $form.find('#e-mail').val('test@test.test');
                $form.find('#phone').val('+3568989856');
                $form.find('#mobile').val('+3365656583');
                $form.find('#street').val('test');
                $form.find('#city').val('test');
                $form.find('#state').val('test');
                $form.find('#zip').val('88000');
                $form.find('#country').val('test');
                $form.find('#workflowsDd').attr('data-id', '528ce74ef3f67bc40b00001e');
                $(createBtn).click();
                server.respond();

                expect(hashUrlLeads.test(window.location.hash)).to.be.true;
                expect($('#leadForm')).to.not.exist;

                done();
            });

            it('Try to create leads', function () {
                var $dialogContainer = $('#dialogContainer');
                var $createBtn = topBarView.$el.find('#top-bar-createBtn');

                expect($dialogContainer).to.be.empty;

                $createBtn.click();
                server.respond();

                expect($('#leadForm')).to.exist;
            });

            it('Try to save lead with need data with customer person', function (done) {
                var createBtn = $('.ui-dialog-buttonset button')[0];
                var $selectBtn = $('.current-selected')[0];
                var $customerSel;
                var $form = $('#leadForm');
                var $tabsBtn = $('.dialog-tabs a');
                var $firstBtn = $($tabsBtn[0]);
                var customerUrl = new RegExp('\/customers\/', 'i');
                var hashUrlLeads = new RegExp('#easyErp\/Leads', 'i');

                $firstBtn.click();

                $selectBtn.click();

                server.respondWith('GET', customerUrl, [200, {'Content-Type': 'application/json'}, JSON.stringify(fakeCustomerId)]);
                $customerSel = $('#customerDd .newSelectList li')[3];
                $customerSel.click();
                server.respond();

                clock.tick(200);

                server.respondWith('POST', '/leads/', [200, {'Content-Type': 'application/json'}, JSON.stringify({
                    success: "A new Opportunities create success",
                    id     : '12345'
                })]);

                $form.find('#name').val('Test');
                $form.find('#first').val('Test');
                $form.find('#last').val('Test');
                $form.find('#company').val('Test');
                $form.find('#e-mail').val('test@test.test');
                $form.find('#phone').val('+3568989856');
                $form.find('#mobile').val('+3365656583');
                $form.find('#street').val('test');
                $form.find('#city').val('test');
                $form.find('#state').val('test');
                $form.find('#zip').val('88000');
                $form.find('#country').val('test');
                $form.find('#workflowsDd').attr('data-id', '528ce74ef3f67bc40b00001e');

                $(createBtn).click();

                server.respond();

                expect(hashUrlLeads.test(window.location.hash)).to.be.true;
                expect($('#leadForm')).to.not.exist;

                done();
            });

            it('Try to open EditView with error', function () {
                var $needTd = listView.$el.find('tr[data-id="56c1c4ecc99aad5365bff221"] > td:nth-child(2)');
                var leadUrl = new RegExp('\/Leads\/', 'i');
                var spyResponse;

                server.respondWith('GET', leadUrl, [400, {'Content-Type': 'application/json'}, JSON.stringify({})]);
                $needTd.click();
                server.respond();

                spyResponse = mainSpy.args[2][0];
                expect(spyResponse).to.have.property('type', 'error');
            });

            it('Try to open EditDialog', function () {
                var $needTd = listView.$el.find('#listTable > tr:nth-child(1) > td:nth-child(2)');
                var leadUrl = new RegExp('\/Leads\/form', 'i');
                var sourceUrl = '/employees/sources';

                server.respondWith('GET', sourceUrl, [200, {'Content-Type': 'application/json'}, JSON.stringify(fakeEmplSources)]);
                server.respondWith('GET', leadUrl, [200, {'Content-Type': 'application/json'}, JSON.stringify(fakeLeadId)]);
                $needTd.click();
                server.respond();
                server.respond();

                expect($('#leadForm')).to.exist;
            });

            it('Try to edit with error response', function(){
                var $saveBtn = $('div.ui-dialog.ui-widget.ui-widget-content.ui-corner-all.ui-front.edit-dialog.ui-dialog-buttons.ui-draggable > div.ui-dialog-buttonpane.ui-widget-content.ui-helper-clearfix > div > button:nth-child(1)');
                var leadUrl = new RegExp('\/Leads\/', 'i');

                server.respondWith('PATCH', leadUrl, [400, {'Content-Type': 'application/json'}, JSON.stringify({})]);
                $saveBtn.click();
                server.respond();

            });

            it('Try to select source', function () {
                var $dialog = $('.ui-dialog');
                var $source = $dialog.find('#sourceDd');
                var $selectedItem;

                $source.click();
                expect($source.find('.newSelectList')).to.exist;

                $selectedItem = $source.find('.newSelectList li').first();
                $selectedItem.click();
                expect($dialog.find('#sourceDd').text().trim()).to.be.equals('1O');
            });

            it('Try to PATCH lead with correct data', function () {
                var $form = $('#leadForm');
                var $saveBtn = $('div.ui-dialog.ui-widget.ui-widget-content.ui-corner-all.ui-front.edit-dialog.ui-dialog-buttons.ui-draggable > div.ui-dialog-buttonpane.ui-widget-content.ui-helper-clearfix > div > button:nth-child(1)');
                var leadUrl = new RegExp('\/leads\/', 'i');

                server.respondWith('PATCH', leadUrl, [200, {'Content-Type': 'application/json'}, JSON.stringify({success: "A new Opportunities create success"})]);
                $form.find('#name').val('Test');
                $($saveBtn).click();
                server.respond();

                expect(window.location.hash).to.be.equals('#easyErp/Leads');
                expect($('#leadForm')).to.not.exist;
            });

            it('Try to delete item through edit form', function () {
                var $needTd = listView.$el.find('tr[data-id="56c1c4ecc99aad5365bff221"] td')[1];

                server.respondWith('GET', '/Leads/form?id=56c1c4ecc99aad5365bff221', [200, {'Content-Type': 'application/json'}, JSON.stringify(fakeLeadId)]);
                $needTd.click();
                server.respond();

                expect($('#leadForm')).to.exist;
            });

            it('Try to change tab in edit form', function () {
                var $tabsBtn = $('.dialog-tabs a');
                var $firstBtn = $($tabsBtn[0]);
                var $secondBtn = $($tabsBtn[1]);

                expect($firstBtn).to.have.class('active');

                $secondBtn.click();

                expect($firstBtn).to.have.not.class('active');
                expect($secondBtn).to.have.class('active');

            });

            it('Try to delete item with error result', function () {
                var $deleteBtn;
                var spyResponse;

                $deleteBtn = $('div.ui-dialog.ui-widget.ui-widget-content.ui-corner-all.ui-front.edit-dialog.ui-dialog-buttons.ui-draggable > div.ui-dialog-buttonpane.ui-widget-content.ui-helper-clearfix > div > button:nth-child(3)');
                server.respondWith('DELETE', '/Leads/56c1c4ecc99aad5365bff221', [400, {'Content-Type': 'application/json'}, JSON.stringify({success: 'Opportunities removed'})]);
                $deleteBtn.click();
                server.respond();
                spyResponse = mainSpy.args[2][0];

                expect(spyResponse).to.have.property('type', 'error');
            });

            it('Try to delete item with good result', function () {
                var $deleteBtn;
                var leadUrl = new RegExp('\/leads\/', 'i');

                windowConfirmStub.returns(true);

                $deleteBtn = $('div.ui-dialog.ui-widget.ui-widget-content.ui-corner-all.ui-front.edit-dialog.ui-dialog-buttons.ui-draggable > div.ui-dialog-buttonpane.ui-widget-content.ui-helper-clearfix > div > button:nth-child(3)');
                server.respondWith('DELETE', leadUrl, [200, {'Content-Type': 'application/json'}, JSON.stringify({success: 'Opportunities removed'})]);
                $deleteBtn.click();
                server.respond();

                expect(window.location.hash).to.be.equals('#easyErp/Leads');
                expect(windowConfirmStub.called).to.be.true;
            });

            it('Try to convert to opportunity', function () {
                var leadUrl = new RegExp('\/leads\/', 'i');
                var $needTd = listView.$el.find('#listTable > tr:nth-child(1) > td:nth-child(2)');
                var $convertTo;
                var $dialogForm;
                var $createBtn;

                server.respondWith('GET', leadUrl, [200, {'Content-Type': 'application/json'}, JSON.stringify(fakeLeadId)]);
                $needTd.click();
                server.respond();
                expect($('#leadForm')).to.exist;

                $dialogForm = $('#convert-dialog-form');
                $convertTo = $('#convertToOpportunity');

                $convertTo.click();
                $createBtn = $('button:nth-child(1)').last();

                server.respondWith('PATCH', leadUrl, [200, {'Content-Type': 'application/json'}, JSON.stringify({success: "A new Opportunities create success"})]);
                $createBtn.click();
                server.respond();

                expect($dialogForm).to.exist;
                expect(window.location.hash).to.be.equals('#easyErp/Opportunities');
            });
        });


    });


});