import { defineTable, column } from 'astro:db';

export const RsvpTable = defineTable({
  columns: {
    id: column.number({ primaryKey: true, autoIncrement: true }),
    name: column.text(),
    guests: column.number(),
    email: column.text(),
    phoneNumber: column.text(),
    response: column.text(), 
  }
});
