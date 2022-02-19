import React from "react";
import xlsx from "xlsx";


let orders_base = xlsx.readFile('Заказы покупателя Январь Февраль.xlsx', {cellDates: true})
// let orders_sheet = orders_base.Sheets["TDSheet"];
// let data = XLSX.utils.sheet_to_json(orders_sheet);

