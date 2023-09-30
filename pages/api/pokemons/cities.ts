import type { NextApiRequest, NextApiResponse } from "next";

export interface TCitiesResponse {
  count: number;
  next: string;
  previous: any;
  results: Array<{
    name: string;
    url: string;
  }>;
}

export const config = {
  api: {
    externalResolver: true,
  },
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TCitiesResponse>
) {
  try {
    if (req.method !== "GET")
      return res.status(405).end("Metodo nao suportado");

    const url = "https://pokeapi.co/api/v2/location?offset=0&limit=850";
    fetch(url)
      .then((resp) => resp.json())
      .then((data: TCitiesResponse) => {
        if (data.results.length <= 0) {
          return res.status(204).json(data);
        } else if (!data || !data.results) {
          res.status(500).end("Não foi possível realizar a chamada");
        }
        return res.status(200).json(data);
      })
      .catch((err) =>
        res.status(500).end("Não foi possível realizar a chamada")
      );
  } catch (err) {
    res.status(500).end("Não foi possível realizar a chamada");
  }
}
