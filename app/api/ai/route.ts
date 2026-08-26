import { NextResponse } from "next/server";

type AIRequest = {
  message?: string;
  context?: {
    crop?: string;
    variety?: string;
    growthStage?: string;
    fieldSize?: string;
    recentFertilizer?: string;
    irrigation?: string;
    latestScan?: {
      nitrogen?: number | string;
      phosphorus?: number | string;
      potassium?: number | string;
      overall?: string;
    };
  };
};

const MODEL = "gemini-3.7-flash";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function askGemini(
  apiKey: string,
  systemInstruction: string,
  userMessage: string
) {
  return fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": apiKey,
      },
      body: JSON.stringify({
        system_instruction: {
          parts: [
            {
              text: systemInstruction,
            },
          ],
        },
        contents: [
          {
            role: "user",
            parts: [
              {
                text: userMessage,
              },
            ],
          },
        ],
        generationConfig: {
          temperature: 0.3,
          maxOutputTokens: 500,
        },
      }),
    }
  );
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as AIRequest;

    const message = body.message?.trim();

    if (!message) {
      return NextResponse.json(
        {
          error: "Please enter a question.",
        },
        {
          status: 400,
        }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            "GEMINI_API_KEY is missing. Check your .env.local file.",
        },
        {
          status: 500,
        }
      );
    }

    const context = body.context ?? {};

    const systemInstruction = `
You are Grape AI, a simple farmer-friendly assistant for grape cultivation.

Answer questions about:
- grape plant health
- nitrogen, phosphorus and potassium
- yellowing leaves
- petiole sampling
- fertilizer management
- irrigation and fertigation
- grape growth stages
- GrapeNPK scan results

Use simple language.

Give the direct answer first, then a short explanation, then practical next steps.

Important:
- Prototype sensor readings are estimates, not laboratory-certified results.
- Do not guarantee exact fertilizer quantities.
- Do not tell a farmer to blindly apply fertilizer.
- Consider crop stage and farm context.
- If important information is missing, say what should be checked.
- Keep responses short enough to read comfortably on a phone.

Current crop: ${context.crop || "Grape"}
Variety: ${context.variety || "Not provided"}
Growth stage: ${context.growthStage || "Not provided"}
Field size: ${context.fieldSize || "Not provided"}
Recent fertilizer: ${context.recentFertilizer || "Not provided"}
Irrigation: ${context.irrigation || "Not provided"}

Latest scan:
Nitrogen: ${context.latestScan?.nitrogen ?? "Not available"}
Phosphorus: ${context.latestScan?.phosphorus ?? "Not available"}
Potassium: ${context.latestScan?.potassium ?? "Not available"}
Overall status: ${context.latestScan?.overall ?? "Not available"}
`;

    // First attempt
    let response = await askGemini(
      apiKey,
      systemInstruction,
      message
    );

    // One short retry only for temporary server overload/rate limiting.
    if (
      !response.ok &&
      (response.status === 429 ||
        response.status === 500 ||
        response.status === 502 ||
        response.status === 503 ||
        response.status === 504)
    ) {
      await sleep(700);

      response = await askGemini(
        apiKey,
        systemInstruction,
        message
      );
    }

    if (!response.ok) {
      const errorText = await response.text();

      console.error(
        "Gemini API error:",
        response.status,
        errorText
      );

      return NextResponse.json(
        {
          error:
            "Grape AI is temporarily busy. Please try again.",
        },
        {
          status: 503,
        }
      );
    }

    const data = await response.json();

    const answer =
      data?.candidates?.[0]?.content?.parts
        ?.map((part: { text?: string }) => part.text || "")
        .join("")
        .trim();

    if (!answer) {
      return NextResponse.json(
        {
          error:
            "Grape AI did not return an answer. Please try again.",
        },
        {
          status: 503,
        }
      );
    }

    return NextResponse.json({
      answer,
    });
  } catch (error) {
    console.error("Grape AI server error:", error);

    return NextResponse.json(
      {
        error:
          "Grape AI could not respond right now. Please try again.",
      },
      {
        status: 500,
      }
    );
  }
}