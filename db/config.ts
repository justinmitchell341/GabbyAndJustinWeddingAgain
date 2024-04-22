import { defineDb, defineTable, column } from 'astro:db';

export const RsvpTable = defineTable({
  columns: {
    id: column.number({ primaryKey: true, autoIncrement: true }),
    name: column.text(),
    numberOfGuests: column.number(),
    email: column.text(),
    phoneNumber: column.text(),
    attendance: column.text(), 
  }
});
