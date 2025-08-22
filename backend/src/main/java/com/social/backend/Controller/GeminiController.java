package com.social.backend.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.social.backend.Service.GeminiService;

@RestController
@RequestMapping("/api/gemini")
@CrossOrigin(origins = "*")
public class GeminiController {

    @Autowired
    private GeminiService geminiService;

    @GetMapping("/ask")
    public ResponseEntity<String> askGemini(@RequestBody String promptText){
        return ResponseEntity.ok(geminiService.askGemini(promptText));
    }
    @PostMapping("/summarize")
    public ResponseEntity<String> summarizeText(@RequestBody String text) {
        if (text == null || text.trim().isEmpty()) {
            return ResponseEntity.badRequest().body("Text cannot be empty");
        }

        String prompt = "Summarize the following text in a few sentences:\n" + text;
        String summary = geminiService.askGemini(prompt);
        return ResponseEntity.ok(summary);
    }


}
