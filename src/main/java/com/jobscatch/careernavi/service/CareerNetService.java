package com.jobscatch.careernavi.service;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class CareerNetService {

    @Value("${careernet.api.key}")
    private String careerNetApiKey;

    private static final String CAREERNET_JOB_LIST_URL = "https://www.career.go.kr/cnet/front/openapi/jobs.json";

    public Map<String, Object> getJobList(int pageIndex) {
        RestTemplate restTemplate = new RestTemplate();

        String url = CAREERNET_JOB_LIST_URL + "?apiKey=" + careerNetApiKey
                + "&pageIndex=" + pageIndex;

        ResponseEntity<Map> response = restTemplate.exchange(url, HttpMethod.GET, null, Map.class);
        return response.getBody();
    }

    public Map<String, Object> searchJobList(String searchJobNm) {
        RestTemplate restTemplate = new RestTemplate();

        String url = CAREERNET_JOB_LIST_URL + "?apiKey=" + careerNetApiKey
                + "&searchJobNm=" + searchJobNm;

        ResponseEntity<Map> response = restTemplate.exchange(url, HttpMethod.GET, null, Map.class);
        return response.getBody();
    }
}
