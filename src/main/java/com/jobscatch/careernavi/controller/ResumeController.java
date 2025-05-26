package com.jobscatch.careernavi.controller;

import com.jobscatch.careernavi.dto.ResumeRequest;
import com.jobscatch.careernavi.dto.ResumeResponse;
import com.jobscatch.careernavi.service.ResumeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/resume")
@RequiredArgsConstructor
public class ResumeController {

    private final ResumeService resumeService;

    @PostMapping("/edit")
    public ResponseEntity<ResumeResponse> editResume(@RequestBody ResumeRequest request) {
        ResumeResponse result = resumeService.editResume(request);
        return ResponseEntity.ok(result);
    }
}
