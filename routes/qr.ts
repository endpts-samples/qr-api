import QRCode from "qrcode";
import type { Route } from "@endpts/types";

export default {
  method: "POST",
  path: "/qr",
  async handler(req) {
    const body = await req.text();

    if (!body) return new Response("No text provided", { status: 400 });

    return new Response(await QRCode.toString(body));
  },
} satisfies Route;
