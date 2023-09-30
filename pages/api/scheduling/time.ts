import type { NextApiRequest, NextApiResponse } from "next";

export type TTimeResponse = Array<string>;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TTimeResponse>
) {
  if (req.method !== "GET") return res.status(405).end("Metodo nao suportado");

  res
    .status(200)
    .json([
      "10:00:00",
      "10:30:00",
      "11:00:00",
      "11:30:00",
      "13:00:00",
      "13:30:00",
      "14:00:00",
      "14:30:00",
      "15:00:00",
      "15:30:00",
      "16:00:00",
      "16:30:00",
      "17:00:00",
      "17:30:00",
      "18:00:00",
      "18:30:00",
    ]);
}
