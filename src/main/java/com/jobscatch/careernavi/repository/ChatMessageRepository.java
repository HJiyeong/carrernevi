package com.jobscatch.careernavi.repository;

import com.jobscatch.careernavi.domain.ChatMessage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChatMessageRepository extends JpaRepository<ChatMessage, Long> {
    // 기본 CRUD는 JpaRepository가 다 제공해줌!
}
