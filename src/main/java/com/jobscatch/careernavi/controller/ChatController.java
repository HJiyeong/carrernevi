package com.jobscatch.careernavi.controller;

import com.jobscatch.careernavi.domain.ChatMessage;
import com.jobscatch.careernavi.repository.ChatMessageRepository;
import com.jobscatch.careernavi.service.OpenAiService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@RestController
@RequestMapping("/api/chat")
@RequiredArgsConstructor
public class ChatController {

    private final ChatMessageRepository chatMessageRepository;
    private final OpenAiService openAiService;  // ✅ 추가!

    // 💬 1. 채팅 메시지 저장 + AI 답변까지
    @PostMapping("/send")
    public List<ChatMessage> sendMessage(@RequestBody ChatMessage userMessage) {

        // 1. 사용자가 보낸 메시지 저장
        userMessage.setCreatedAt(getNowTime());
        chatMessageRepository.save(userMessage);

        // 2. AI에게 답변 요청
        String aiReply = openAiService.askChatGpt(userMessage.getMessage());

        // 3. AI 답변도 ChatMessage로 저장
        ChatMessage aiMessage = new ChatMessage();
        aiMessage.setRole("ai");
        aiMessage.setMessage(aiReply);
        aiMessage.setCreatedAt(getNowTime());
        chatMessageRepository.save(aiMessage);

        // 4. 저장된 전체 메시지 반환
        return chatMessageRepository.findAll();
    }

    // 💬 2. 모든 채팅 메시지 조회
    @GetMapping("/messages")
    public List<ChatMessage> getAllMessages() {
        return chatMessageRepository.findAll();
    }

    // 현재 시각 포맷팅
    private String getNowTime() {
        return LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
    }
}
