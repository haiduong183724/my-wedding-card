import { JWT } from "google-auth-library";

let client: JWT | null = null;

function getClient(): JWT {
  if (client) return client;

  const email = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
  const rawKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY;
  if (!email || !rawKey) {
    throw new Error("Thiếu GOOGLE_SHEETS_CLIENT_EMAIL hoặc GOOGLE_SHEETS_PRIVATE_KEY trong biến môi trường");
  }

  client = new JWT({
    email,
    key: rawKey.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  return client;
}

export async function appendRow(sheetName: string, values: (string | number)[]) {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  if (!spreadsheetId) {
    throw new Error("Thiếu GOOGLE_SHEETS_SPREADSHEET_ID trong biến môi trường");
  }

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodeURIComponent(
    sheetName
  )}!A:Z:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;

  await getClient().request({
    url,
    method: "POST",
    data: { values: [values] },
  });
}
