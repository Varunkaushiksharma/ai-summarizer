package com.social.backend.Service;

import org.springframework.stereotype.Service;

import com.google.genai.Client;
import com.google.genai.types.GenerateContentResponse;

@Service
public class GeminiService {

    private final Client geminiClient;

    public GeminiService(Client geminiClient) {
        this.geminiClient = geminiClient;
    }

    public String askGemini(String prompt){
          GenerateContentResponse  response = 
          geminiClient.models.generateContent("gemini-2.5-flash", prompt, null);

          return response.text();
    }


}
