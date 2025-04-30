package com.jobscatch.careernavi.service;

import com.jobscatch.careernavi.dto.ResumeRequest;
import com.jobscatch.careernavi.dto.ResumeResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Map;

@Service
@RequiredArgsConstructor
public class ResumeService {

    @Value("${openai.api.key}")
    private String openAiKey;

    public ResumeResponse editResume(ResumeRequest request) {

        String prompt = """
            다음 자기소개서를 더 명확하고 자연스럽고 문법에 맞게 첨삭해줘. 
            문장은 간결하게 다듬고, 지나치게 구어체는 줄이며, 전문적인 인상을 줄 수 있도록 표현을 개선해줘.

            [자기소개서 원문]
            %s
        """.formatted(request.getText());

        WebClient webClient = WebClient.builder()
                .baseUrl("https://api.openai.com/v1/chat/completions")
                .defaultHeader("Authorization", "Bearer " + openAiKey)
                .build();

        Map<String, Object> body = Map.of(
                "model", "gpt-4",
                "messages", new Object[]{
                        Map.of("role", "user", "content", prompt)
                },
                "temperature", 0.7
        );

        Map responseMap = webClient.post()
                .bodyValue(body)
                .retrieve()
                .bodyToMono(Map.class)
                .block();

        String edited = (String) ((Map) ((java.util.List) responseMap.get("choices")).get(0)).get("message").get("content");

        return new ResumeResponse(request.getText(), edited.trim(), "AI 첨삭 결과입니다.");
    }
}
