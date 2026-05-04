import { format, parse } from "date-fns";

export const parseArray = (value: string | null) =>
  value ? value.split(',') : undefined;

export const parseNumber = (value: string | null) =>
  value ? Number(value) : undefined;

export const formatDate = (epoch: number) => 
  format(new Date(epoch), "dd/MM/yyyy");

export const parseDate = (dateString: string) => 
  parse(dateString, "dd/MM/yyyy", new Date()).getTime();