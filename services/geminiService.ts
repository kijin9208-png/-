
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getDentalConsultantResponse = async (userPrompt: string) => {
  if (!API_KEY) {
    return "API Key가 설정되지 않았습니다.";
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: `당신은 대한민국 최고의 프리미엄 라미네이트 전문 치과인 '바른손치과'의 AI 상담 실장입니다. 
        사용자의 질문에 대해 우아하고, 친절하며, 전문적인 어조로 답변하세요. 
        바른손치과(Barunson Dental)의 강점:
        1. 1:1 맞춤형 디자인 (자연스러운 미소)
        2. 최소 삭제 혹은 무삭제 라미네이트 전문
        3. 최첨단 3D 구강 스캐너 및 디지털 장비 보유
        4. 대표 원장의 직접 집도와 예술적인 감각
        답변은 항상 신뢰감을 줄 수 있도록 구성하고, 마지막에는 오프라인 상담 예약을 권유하는 멘트를 포함하세요.`,
        temperature: 0.7,
      },
    });

    return response.text || "죄송합니다. 답변을 생성하는 중 오류가 발생했습니다.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "상담 서비스 이용이 원활하지 않습니다. 잠시 후 다시 시도해주세요.";
  }
};
