package com.jobscatch.careernavi.service;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class OpenAiService {

    @Value("${openai.api.key}")
    private String openAiApiKey;

    private static final String OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";

    public String askChatGpt(String userMessage) {
        RestTemplate restTemplate = new RestTemplate();

        // 요청 본문 만들기
        Map<String, Object> body = new HashMap<>();
        body.put("model", "gpt-4.1-nano"); // 사용할 모델
        body.put("messages", Collections.singletonList(
                Map.of(
                        "role", "user",
                        "content", userMessage
                )
        ));

        // HTTP 헤더 만들기
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setBearerAuth(openAiApiKey);

        HttpEntity<Map<String, Object>> entity = new HttpEntity<>(body, headers);

        // POST 요청 보내기
        ResponseEntity<Map> response = restTemplate.postForEntity(
                OPENAI_API_URL,
                entity,
                Map.class
        );

        // 응답 파싱해서 답변만 추출
        if (response.getStatusCode() == HttpStatus.OK) {
            Map<String, Object> responseBody = response.getBody();
            if (responseBody != null) {
                var choices = (java.util.List<Map<String, Object>>) responseBody.get("choices");
                if (choices != null && !choices.isEmpty()) {
                    Map<String, Object> message = (Map<String, Object>) choices.get(0).get("message");
                    return (String) message.get("content");
                }
            }
        }

        return "죄송합니다. 답변을 가져올 수 없습니다.";
    }
}
