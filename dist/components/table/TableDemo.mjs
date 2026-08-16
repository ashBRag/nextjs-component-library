"use client";
import "../../chunk-FJBZBVPE.mjs";
import { Table } from "./Table";
const columns = [
  { key: "name", label: "Name" },
  { key: "role", label: "Role" },
  { key: "status", label: "Status" }
];
const data = [
  { name: "Ada Lovelace", role: "Engineer", status: "Active" },
  { name: "Alan Turing", role: "Researcher", status: "Active" },
  { name: "Grace Hopper", role: "Admiral", status: "Retired" }
];
function TableDemo() {
  return /* @__PURE__ */ React.createElement("div", { className: "space-y-6" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-sm font-medium mb-2 opacity-80" }, "Default"), /* @__PURE__ */ React.createElement(Table, { columns, data })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-sm font-medium mb-2 opacity-80" }, "Striped"), /* @__PURE__ */ React.createElement(Table, { striped: true, columns, data })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-sm font-medium mb-2 opacity-80" }, "Bordered"), /* @__PURE__ */ React.createElement(Table, { bordered: true, columns, data })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-sm font-medium mb-2 opacity-80" }, "Compact"), /* @__PURE__ */ React.createElement(Table, { compact: true, columns, data })));
}
export {
  TableDemo as default
};
//# sourceMappingURL=TableDemo.mjs.map