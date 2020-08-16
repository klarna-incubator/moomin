"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var moomin_server_1 = require("moomin-server");
var Page1 = function () { return (moomin_server_1.React.createElement(moomin_server_1.React.Fragment, null,
    moomin_server_1.React.createElement(moomin_server_1.View, null,
        moomin_server_1.React.createElement(moomin_server_1.Text, { style: { color: "#ffb3c7" } }, "Moomin")),
    moomin_server_1.React.createElement(moomin_server_1.View, null,
        moomin_server_1.React.createElement(moomin_server_1.Text, { style: { color: "green" } }, "1234567890")))); };
var Page2 = function () {
    var Header = moomin_server_1.useKnownComponent("Header");
    var SubTitle = moomin_server_1.useKnownComponent("SubTitle");
    return (moomin_server_1.React.createElement(moomin_server_1.View, { style: { display: "flex", flex: 1, justifyContent: "center" } },
        moomin_server_1.React.createElement(Header, { color: "#ffb3c7" }, "Moomin"),
        moomin_server_1.React.createElement(SubTitle, { color: "#ffffffbb" }, "Server side rendering for React Native applications."),
        moomin_server_1.React.createElement(moomin_server_1.Text, { style: { color: "#fff", fontSize: 18 } }, "With Moomin you get to reap the benefits of SSR in your React Native Applications such as: instant client updates, improved performance and smaller app bundles.")));
};
var app = express_1.default();
app.use(cors_1.default({
    credentials: true,
    origin: true,
}));
app.get("/views/page1", function (req, res) {
    res.send(moomin_server_1.React.createElement(Page1, null));
});
app.get("/views/page2", function (req, res) {
    res.send(moomin_server_1.React.createElement(Page2, null));
});
app.listen(3000, function () {
    console.log("Example app listening at http://localhost:" + 3000);
});
