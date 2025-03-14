import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

type Data = {
  content: string;
  error?: string;
};

type RequestBody = {
  emailingTo: string;
  yourName: string;
  roleName: string;
  companyName: string;
  experienceIn: string;
  excitedAboutJobBecause: string;
  passionateAbout: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ content: "", error: "Method not allowed" });
  }

  try {
    const {
      emailingTo,
      yourName,
      roleName,
      companyName,
      experienceIn,
      excitedAboutJobBecause,
      passionateAbout,
    } = req.body as RequestBody;

    // Create OpenAI client with DeepSeek base URL
    const openai = new OpenAI({
      baseURL: "https://api.deepseek.com",
      apiKey: process.env.OPENAI_API_KEY, // Now using server environment variable
    });

    const promptString = `Write a cover letter to ${emailingTo} from ${yourName} for a ${roleName} job at ${companyName}. I have experience in ${experienceIn} I am excited about the job because ${excitedAboutJobBecause} I am passionate about ${passionateAbout}`;

    const systemPrompt = `You are a cover letter writing assistant. Generate professional, personalized cover letters using the provided information. Follow these guidelines:

      1. Use proper business letter format with header, date, salutation, body, closing and signature.

      2. Create a compelling opening that mentions the position and company.

      3. Highlight relevant experience and skills that match the job requirements.

      4. Include specific achievements when possible.

      5. Authentically incorporate the applicant's passion and enthusiasm.

      6. End with a confident closing that expresses interest in an interview.

      7. Keep it concise (250-350 words) and error-free.

      8. Personalize based on all provided variables (recipient, applicant name, role, company, experience, reasons for excitement, passions).

      9. Maintain a professional tone while showcasing the applicant's unique qualities.

      The letter should require no further editing and position the applicant as an excellent candidate.
    `;

    const completion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: promptString },
      ],
      model: "deepseek-chat",
    });

    return res.status(200).json({
      content: completion.choices[0].message.content || "No content generated",
    });
  } catch (error: any) {
    console.error("API Error:", error);
    return res.status(500).json({
      content: "",
      error:
        error.message || "An error occurred while generating the cover letter",
    });
  }
}
