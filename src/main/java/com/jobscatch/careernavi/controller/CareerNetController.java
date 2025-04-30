package com.jobscatch.careernavi.controller;

import com.jobscatch.careernavi.service.CareerNetService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/career")
@RequiredArgsConstructor
public class CareerNetController {

    private final CareerNetService careerNetService;

    @GetMapping("/jobs")
    public Map<String, Object> getJobs(@RequestParam(defaultValue = "1") int pageIndex) {
        return careerNetService.getJobList(pageIndex);
    }

    @GetMapping("/search")
    public Map<String, Object> searchJobs(@RequestParam String keyword) {
        return careerNetService.searchJobList(keyword);
    }
}
