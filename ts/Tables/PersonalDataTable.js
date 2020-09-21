"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PersonalDataTable;
(function (PersonalDataTable) {
    function Select(index) {
        return entries[index];
    }
    PersonalDataTable.Select = Select;
    function Count() {
        return entries.length;
    }
    PersonalDataTable.Count = Count;
    var entries = [
        {
            title: "Email",
            content: "sebastian.mgzz@outlook.com",
            path: "mailto: sebastian.mgzz@outlook.com",
            image_id: 5
        },
        {
            title: "LinkedIn",
            content: "sebastian-mgzz",
            path: "https://www.linkedin.com/in/sebastian-mgzz/",
            image_id: 6
        },
        {
            title: "GitHub",
            content: "sebsmgzz",
            path: "https://github.com/sebsmgzz",
            image_id: 7
        },
        {
            title: "Phone",
            content: "+52 1 826 261 5753",
            path: "https://wa.me/5218262615753",
            image_id: 8
        },
        {
            title: "Location",
            content: "Monterrey, México",
            path: "https://www.google.com/maps/d/viewer?mid=1KlI_CIACu8CJXl0UqSQ6IIEaQMM&ll=25.496325587910153%2C-100.2341235&z=10",
            image_id: 9
        },
        {
            title: "Resume",
            content: "Open my CV",
            path: "documents/CV_English.pdf",
            image_id: 10
        }
    ];
})(PersonalDataTable || (PersonalDataTable = {}));
exports.default = PersonalDataTable;
