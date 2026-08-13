"use client";

import { Table } from "./Table";

const columns = [
  { key: "name", label: "Name" },
  { key: "role", label: "Role" },
  { key: "status", label: "Status" },
];

const data = [
  { name: "Ada Lovelace", role: "Engineer", status: "Active" },
  { name: "Alan Turing", role: "Researcher", status: "Active" },
  { name: "Grace Hopper", role: "Admiral", status: "Retired" },
];

export default function TableDemo() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-medium mb-2 opacity-80">Default</p>
        <Table columns={columns} data={data} />
      </div>
      <div>
        <p className="text-sm font-medium mb-2 opacity-80">Striped</p>
        <Table striped columns={columns} data={data} />
      </div>
      <div>
        <p className="text-sm font-medium mb-2 opacity-80">Bordered</p>
        <Table bordered columns={columns} data={data} />
      </div>
      <div>
        <p className="text-sm font-medium mb-2 opacity-80">Compact</p>
        <Table compact columns={columns} data={data} />
      </div>
    </div>
  );
}
