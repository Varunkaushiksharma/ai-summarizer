package com.social.backend.Config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.google.genai.Client;

@Configuration
public class GeminiConfig {
    @Value("${google.genai.api-key}")
    private String apiKey;

    @Bean
    public Client geminiClient(){
        return Client.builder()
                .apiKey(apiKey)
                .build();
    }
}
